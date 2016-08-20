// Variable to store list of all inputs
var inputNodes = document.querySelectorAll("input");

// Loops through the list array and adds event handler
for(var i = 0; i < inputNodes.length; i++){
	if(inputNodes[i].name === "name"){
		inputNodes[i].addEventListener("blur", verifyName);
	} else if(inputNodes[i].name === "cardNumber"){
		inputNodes[i].addEventListener("blur", verifyCardNum);
	} else if(inputNodes[i].name === "monYr"){
		inputNodes[i].addEventListener("blur", verifyDate);
	} else if(inputNodes[i].name === "cvv"){
		inputNodes[i].addEventListener("blur", verifyCVV);
	}
}

// Function to check to verify name
function verifyName(){
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-.';
	var space = " ";
	var strSpace = str.concat(space);
	// Checks if the value length is greater than 5, if not, throws an error
	if(this.value.length < 5){
		this.setCustomValidity("Name must be at least 5 characters long (inluding a space between first name and last name).");
	}
	// Else loops through the input value
	else if(this.value.length > 5){
		for(var k = 0; k < this.value.length; k++){
			// Else checks if the name contains the characters other than str variable
			if(strSpace.indexOf(this.value[k]) < 0){
				this.setCustomValidity("Name must consists only of (A-Z), hyphens (-), dots (.) and spaces."); 
			  // Else validates the input value  
			} else {
				this.setCustomValidity("");
			}
		}
	}
	
}

// Function to verify a card number
function verifyCardNum(){
    var strNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
    var hyphen = "-"; 
    var strHyphen = strNum.concat(hyphen); 
    var arr = [];
    // Checks if the value length is greater than 19 and less than 16, if yes, throws an error
	if(this.value.length < 16 || this.value.length > 19){ 
        this.setCustomValidity("Card number must be 16 or 19 characters long.");
        console.log(this.value.length);
    } 
    // If the value length is 16
    else if(this.value.length === 16){
    	// Loops through the input value
    	for(var l = 0; l < this.value.length; l++){ 
    		// Throws an error if an input value contains any character other than strNum
    		if(strNum.indexOf(this.value[l]) < 0){
    			this.setCustomValidity("Card number must consists 16 alphanumeric characters (A-Z, 0-9).");
    		  // Else validates the input value
    		} else {
                this.setCustomValidity("");
           }
        }
    }
    // If the input value length is 19
    else if(this.value.length === 19) {
    	// Loops through the input value
    	for(var j = 0; j < this.value.length; j++){ 
    		// Throws an error if an input value contains any character other than strHyphen
    		if(strHyphen.indexOf(this.value[j]) < 0){
    			this.setCustomValidity("Card number must consists only (A-Z), (0-9) characters and hyphens (-).");
    		  // Else checks if an input value contains any character from strNum, then pushes that character into an empty array
    		} else if(strNum.indexOf(this.value[j]) > 0){ 
                arr.push(this.value[j]);
                // Throws an error if the lenght of an array is greater than 16
                if(arr.length > 16){
                	this.setCustomValidity("Card number must consists only 16 alphanumeric characters (A-Z, 0-9).");
                  // Else validates the input value
                } else {
                	this.setCustomValidity("");
                }
            } 
        }
    }
}

// Function to verify the expiration date
function verifyDate(){
	// Variable to store today's date
	var today = new Date();
	// Converts input value into a date
	var inputDate = new Date(this.value);
    // Throws an error if inputdate is less than today's date
    if(inputDate < today) {
    	this.setCustomValidity("Invalid date, expiration date must be greater than today's date.");
      // Else validates the input value
    } else{
    	this.setCustomValidity("");
    }
}

// Function to verify a cvv number
function verifyCVV(){
	var num = "0123456789";
	// Loops through the input value
	for(var i = 0; i < this.value.length; i++){
		// Throws an error if an input value contains any character other than num
		if(num.indexOf(this.value[i]) < 0){
		   this.setCustomValidity("CVV must consists only of numbers (0-9).");
		   // Throws an error if the input value lenght is greater than 3 characters
	    } else if(this.value.length > 3){
	       this.setCustomValidity("CVV must be 3 characters long.");
	      // Else validates the input value
	    } else {
		   this.setCustomValidity("");
	    }
	}
}