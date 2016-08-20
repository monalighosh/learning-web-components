// Variable to store a radio element with an id other
var buttOther = document.getElementById("other");
// Variable to store a text input of a radio element with an id other
var buttOtherTx = document.getElementById("otherOption");
// Variable to store the submit button
var submitButt = document.getElementById("contact-submit");
submitButt.addEventListener("click", verifyRadioButt);

// Function to verify if the text input is empty
function verifyRadioButt(){
	// Checks if a radio button named other is checked, if yes
	if(other.checked){
		// Checks if the input text is empty, if yes, throws an error
       if(otherOption.value < 1){
       	   buttOtherTx.setCustomValidity("This field cannot be blank. Please enter your favourite search engine.");
       	   // Else validates the input value
       } else {
       	 buttOtherTx.setCustomValidity("");
       }
	}
}

