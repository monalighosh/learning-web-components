// Variable to store form element
var form = document.getElementById("colour");
// Variable to store list of inputs under the form element
var inputs = form.querySelectorAll("input");

// Loops through the input list and adds event handler
for(var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener("change", updateRange);
}

// Function to update the colour values
function updateRange(){
	// Variables to stroe the values of each colour range
	var valRed = document.getElementById("red").value;
	var valGreen = document.getElementById("green").value;
	var valBlue = document.getElementById("blue").value;
	var valAlpha = document.getElementById("alpha").value;
	// Variable to store textarea (color) element
	var colorArea = document.querySelector("textarea");
	// Sets the new background colour to the textarea input
	colorArea.style.backgroundColor = "rgba(" + valRed+","+valGreen+","+valBlue+","+valAlpha+")";
}

