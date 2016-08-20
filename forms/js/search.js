// Variable to store search box element
var searchBox = document.querySelector("input");
searchBox.addEventListener("blur", verifySearch);

// Function to verify search box
function verifySearch(){
	// Checks if the value entered is less than 1 character, if yes, throws an error 
	if(this.value.length < 1){
		this.setCustomValidity("This field cannot be blank. Please enter a valid search value.");
	} else {
		this.setCustomValidity("");
	}
}

 