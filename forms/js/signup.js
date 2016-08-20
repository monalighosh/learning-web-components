var signupForm = document.getElementById("signup"); 
var formChildNodes = document.querySelectorAll("input"); // An array to store all the form input elements
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var strAlphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Loops through the array
for(var i = 0; i < formChildNodes.length; i++){
   if(formChildNodes[i].name === "firstname" || formChildNodes[i].name === "lastname"){
   	    formChildNodes[i].addEventListener("blur", verifyNames);
   } else if(formChildNodes[i].name === "email"){
   	    formChildNodes[i].addEventListener("blur", verifyEmail);
   } else if(formChildNodes[i].name === "dob"){
   	    formChildNodes[i].addEventListener("blur", verifyDob);
   } else if(formChildNodes[i].name === "pwd"){
   	    formChildNodes[i].addEventListener("blur", verifyPwd);
   }
}

// Function to verify firstname and lastname
function verifyNames(){
	// Checks if an input value is at lest 2 characters long
	if(this.value.length < 2){
		this.setCustomValidity("Name must be at least 2 characters long.");
	} 
	else {
	// Loops through the input value
	    for(var i = 0; i < this.value.length; i++){
		    // Checks if an input value contains any character other than str, if yes, throws an error message
		    if(str.indexOf(this.value[i]) < 0){
			    this.setCustomValidity("Name must consists only of (A-Z) and (a-z).");
		      // Else validates the input value
		    } else {
			    this.setCustomValidity("");
		    }
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

// Function to verify date of birth
function verifyDob(){
	// Variable to store today's date
	var today = new Date(); 
	// Variable to store input date
	var inputDate = new Date(this.value); 
	// Checks if the input date is greater than today's date, if yes, throws an error
    if(inputDate > today){ 
        this.setCustomValidity("Please enter a valid date.");
	}
	// Checks if the input date is lower than today's date, if yes  
    else if(inputDate < today){
    	// Gets the difference in miliseconds of the two dates dates
        milisecondDiff = Math.abs(inputDate.getTime() - today.getTime());
        // Gets the total number of milliseconds in a day
        milisecondInADay = 24 * 60 * 60 * 1000;
        // Gets the number of days
        finalMilisecond = Math.floor(milisecondDiff / milisecondInADay);
        // Gets the total number years between today and the input date
        var totalYears = Math.floor(finalMilisecond / 365);
        // Checks if total years are less than 18, if yes, throws an error 
        if(totalYears < 18){
        	this.setCustomValidity("You must be at least 18 years old to be a member.")
        } 
        // Else validates the input
        else { 
		    this.setCustomValidity("");
	    }
    }
}


// Function to verify password
function verifyPwd(){
	// Checks if the password string's length is greater than 6 characters or less than 16, if not, throws an error message
    if(this.value.length < 6 || this.value.length > 16){
		this.setCustomValidity("Password must be between 6 and 16 characters long.");
	  // Else validates the input string
	} else {
		this.setCustomValidity("");
	}
}