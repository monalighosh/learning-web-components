// Variable to store the alphanumeric values and symbols that are allowed for the username
var str = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
// Get username input and add event listener
var userName = document.querySelector("input[type=text]");
userName.addEventListener("blur", verifyUser);
// Get password input and add event listener
var passWord = document.querySelector("input[type=password]");
passWord.addEventListener("blur", verifyPassWord);

// Function to verify username
function verifyUser(){
	// Checks if the username string's length is greater than 3 characters
	if(userName.value.length > 3){
		// If yes, loops through the username string
		for(var i = 0; i < userName.value.length; i++){
			// Checks if each character is from str variable, if not, throws an error message
			if(str.indexOf(userName.value[i]) < 0) {
				 userName.setCustomValidity("Username must consists only of (a-z), (0-9), (_), (.) and (-).");
			} 
		}
	   // If username length is less than 3, throws an error
	} else if (userName.value.length < 3){
		userName.setCustomValidity("Username must be at least 3 characters long.");
	  // Else validates the input string
	} else {
		userName.setCustomValidity("");
	}
}

// Function to verify password
function verifyPassWord(){
	// Checks if the password string's length is greater than 6 characters or less than 16, if not, throws an error message
    if(passWord.value.length < 6 || passWord.value.length > 16){
		passWord.setCustomValidity("Password must be between 6 and 16 characters long.");
	  // Else validates the input string
	} else {
		passWord.setCustomValidity("");
	}
}