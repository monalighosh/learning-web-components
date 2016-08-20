// Variable to store all inputs
var inputList = document.querySelectorAll("input");
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var strAlphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


// Loops through the inputList
for(var i = 0; i < inputList.length; i++){
	if(inputList[i].name === "date"){
		inputList[i].addEventListener("blur", verifyDate);
	} else if(inputList[i].name === "timezone"){
		inputList[i].addEventListener("blur", verifyTimeZone);
	} else if(inputList[i].name === "tel"){
		inputList[i].addEventListener("blur", verifyTel);
	} else if(inputList[i].name === "email"){
		inputList[i].addEventListener("blur", verifyEmail);
	}
}

// Function to verify date
function verifyDate(){
	// Variable to store today's date
	var today = new Date(); 
	// Variable to store input date
	var inputDate = new Date(this.value); 
	// Checks if the input date is less than today's date, if yes, throws an error
    if(inputDate < today){ 
        this.setCustomValidity("Please select a valid date.");
	}
	// Checks if the input date is greater than today's date, if yes  
    else if(inputDate > today){
    	// Gets the difference in miliseconds of the two dates dates
        milisecondDiff = Math.abs(today.getTime() - inputDate.getTime());
        // Gets the total number of milliseconds in a day
        milisecondInADay = 24 * 60 * 60 * 1000;
        // Gets the number of days
        finalMilisecond = Math.floor(milisecondDiff / milisecondInADay);
        // Gets the total number of years between today and the input date
        var totalYears = Math.ceil(finalMilisecond / 365);
        // Checks if the number of years are greater than 1, if yes, throws an error 
        if(totalYears > 1){
        	this.setCustomValidity("Invalid date. You can pre-book appointment up to 1 year in advance.");
        } 
        // Else validates the input
        else { 
		    this.setCustomValidity("");
	    }
    }
}


// Function to verify timezone
function verifyTimeZone(){
	// Variable to store the list of Australia's time zones
	var timeZones = ["UTC+05:00", "UTC+06:30", "UTC+07:00", "UTC+08:00", "UTC+08:45", "UTC+09:30", "UTC+10:00", "UTC+10:30", "UTC+11:30"];
	// Checks if the input value is 9, if not, throws an error
	if(this.value.length !== 9){
		this.setCustomValidity("Time zone must be 9 characters long. E.g. UTC+05:00.");
	} else {
		// Loops through the time zone array/list
		for(var i = 0; i < timeZones.length; i++){
			// Checks if the input value matches with any array element, if yes, validates the input
			if(this.value === timeZones[i]){
				this.setCustomValidity("");
				break;
				// Else throws an error
			} else {
				this.setCustomValidity("Please enter a valid time zone. E.g. UTC+05:00.");
			}
		}
		
	} 
}

// Function to verify tel no
function verifyTel(){ 
	// Variable to store numeric values
	var num = "0123456789";
	// Loops through an input value
    for(var i = 0; i < this.value.length; i++){
    	// Checks if the input value contains the values other than numeric values, if yes, throws an error
    	if(num.indexOf(this.value[i]) < 0){
    		this.setCustomValidity("Tel number must consists of only 0-9 numbers.");
    	// Checks if the input value length is 10 characters long
    	} else if(this.value.length !== 10) {
    		 this.setCustomValidity("Mobile number must be 10 digits long!");
    	// Checks if a first digit is 0
    	} else if(this.value.charAt(0) !== "0"){
             this.setCustomValidity("Mobile number must start with 0!");
        // Else validates the input value
        } else {
    		this.setCustomValidity("");
    	}
    }
}



// Function to verify email
function verifyEmail(){
	var symbol = "@";
	// Checks if the password string's length is greater than 6 characters or less than 16, if not, throws an error message
    if(this.value.length < 7 || this.value.length > 254){
		this.setCustomValidity("Email id must be between 7 and 254 characters long.");
	}
	
	// Else checks if an input value includes the symbol @
	else if(this.value.includes("@")){
		// If yes, then splits the value into an array
		var thisArr = this.value.split("@");
		// Checks if an array's length is 2, if not, throws an error message
		if(thisArr.length !== 2){
			this.setCustomValidity("Email id must contain only one @ symbol.");
		} 
        // Else validates the second element in an array
		else {
			// Checks if the 1st and 2nd elements of a string are alphanumeric
			if(strAlphaNum.indexOf(thisArr[1][0]) < 0 || strAlphaNum.indexOf(thisArr[1][1]) < 0){
				this.setCustomValidity("Characters after @ symbol must consists only of (A-Z), (a-z) and (0-9).");
			} 
			// Else checks if a string includes at least one dot
			else if(thisArr[1].includes(".")){
				// Store the position of a dot
                var dotIndex = thisArr[1].indexOf(".");

				// Checks if the next 2 characters after a dot are alphabets
				if(str.indexOf(thisArr[1].charAt(dotIndex + 1)) < 0 || str.indexOf(thisArr[1].charAt(dotIndex + 2)) < 0 || thisArr[1].charAt(dotIndex + 1) === "" || thisArr[1].charAt(dotIndex + 2) === ""){
					 this.setCustomValidity("Characters after . (dot) must consists only of (A-Z) and (a-z).");
				}
				// Else validates the value
				else {
					this.setCustomValidity("");
				}
			}
			// Else throws an error
			else {
				this.setCustomValidity("Email id must contain at least one . (dot) after the symbol @.");
			}
		}
	} 
    
    // If input value doesn't include @ symbol, then throws an error
	else {
		this.setCustomValidity("Email id must include @ symbol.");
	}
}