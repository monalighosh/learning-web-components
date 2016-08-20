// Variable to store shipping form div
var shippingForm = document.getElementById("form-address-col-left");
var shippingFormInputs = shippingForm.querySelectorAll("input");

// Variable to store billing form div
var billingForm = document.getElementById("form-address-col-right");
var billingFormInputs = billingForm.querySelectorAll("input");

// Variable to store form checkbox element
var chkButt = document.querySelector("input[type=checkbox]");
chkButt.addEventListener("click", radioCheck);

var strLowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var strUpperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alpha = strLowerAlpha.concat(strUpperAlpha);
var num = "0123456789";
var alphaNum = strUpperAlpha.concat(num);

// Loops through the shipping and billing input list arrays and adds event handler to each input
for(var i = 0, j = 0; i < shippingFormInputs.length && j < billingFormInputs.length; i++, j++){
	if(shippingFormInputs[i].name === "firstname" || billingFormInputs[j].name === "firstname" || shippingFormInputs[i].name === "lastname" || billingFormInputs[j].name === "lastname"){
		shippingFormInputs[i].addEventListener("blur", verifyNames);
		billingFormInputs[j].addEventListener("blur", verifyNames);
	}
	else if(shippingFormInputs[i].name === "address-line-1" || billingFormInputs[j].name === "address-line-1") {
		shippingFormInputs[i].addEventListener("blur", verifyAddress);
		billingFormInputs[j].addEventListener("blur", verifyAddress);
   	} 
   	else if(shippingFormInputs[i].name === "zip-code" || billingFormInputs[j].name === "zip-code") {
   		shippingFormInputs[i].addEventListener("blur", verifyZipCode);
		billingFormInputs[j].addEventListener("blur", verifyZipCode);
   	} 
   	else if(shippingFormInputs[i].name === "city" || billingFormInputs[j].name === "city") {
   		shippingFormInputs[i].addEventListener("blur", verifyCity);
		billingFormInputs[j].addEventListener("blur", verifyCity);
   	} 
   	else if(shippingFormInputs[i].name === "country" || billingFormInputs[j].name === "country") {
   		shippingFormInputs[i].addEventListener("blur", verifyCountry);
		billingFormInputs[j].addEventListener("blur", verifyCountry);
   	}
}


// Function to verify firstname and lastname
function verifyNames(){
	// Checks if an input value is at lest 2 characters long
	if(this.value.length < 2 || this.value.length > 50){
		this.setCustomValidity("Name must be at least 2 characters long.");
	} 
	else {
	// Loops through the input value
	    for(var i = 0; i < this.value.length; i++){
		    // Checks if an input value contains any character other than alpha, if yes, throws an error message
		    if(alpha.indexOf(this.value[i]) < 0){
			    this.setCustomValidity("Name must consists only of (A-Z) and (a-z).");
		      // Else validates the input value
		    } else {
			    this.setCustomValidity("");
		    }
	    }
	}
}

// Function to verify address
function verifyAddress(){
	// Checks if an input value is at lest 5 characters long
	if(this.value.length < 5){
		this.setCustomValidity("Address must be at least 5 characters long.");
	} 
	else {
		this.setCustomValidity("");
	}
}

// Function to verify zip code
function verifyZipCode(){
	// Checks if an input value is at lest 5 characters long
	if(this.value.length < 4 || this.value.length > 12){
		this.setCustomValidity("Zip/Postal code must be at least 4 characters long.");
	} 
	else {
	// Loops through the input value
	    for(var i = 0; i < this.value.length; i++){
		    // Checks if an input value contains any character other than alpha, if yes, throws an error message
		    if(alphaNum.indexOf(this.value[i]) < 0){
			    this.setCustomValidity("Zip/Postal code must consists only of (A-Z) and (0-9).");
		      // Else validates the input value
		    } else {
			    this.setCustomValidity("");
		    }
	    }
	}
}

// Function to verify city
function verifyCity(){
	// Checks if an input value is at least 1 character and maximum 60 characters long
	if(this.value.length < 1 || this.value.length > 60){
		this.setCustomValidity("City name must be at least 1 character long.");
	} 
	else {
		this.setCustomValidity("");
	}
}

// Function to verify country
function verifyCountry(){
	// Checks if an input value is at least 3 character and maximum 60 characters long
	if(this.value.length < 3 || this.value.length > 60){
		this.setCustomValidity("Country name must be at least 3 characters long.");
	} 
	else {
	// Loops through the input value
	    for(var i = 0; i < this.value.length; i++){
		    // Checks if an input value contains any character other than alpha, if yes, throws an error message
		    if(alpha.indexOf(this.value[i]) < 0){
			    this.setCustomValidity("Country name must consists only of (A-Z) and (a-z).");
		      // Else validates the input value
		    } else {
			    this.setCustomValidity("");
		    }
	    }
	}
}


// Function to verify checkbox
function radioCheck(){
	// Checks if a checkbox is checked, if yes
   	if(chkButt.checked){
   		// Loops through the billing form input and makes it disabled
   	   for(var j = 0; j < billingFormInputs.length; j++){
   	  	   billingFormInputs[j].disabled = true;
   	   } 
    }
}