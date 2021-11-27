
/*
=========================================================================================
Project Name: No Ink No Pen Site Script
Project Description: Create Script for No Ink No Pen Website
Date: 11/27/2021
Programmer Name: Suki Chen and Jin Zhang
=========================================================================================
*/


// jz boolean for clearing values
var clear = false;

// jz function to get all information for gel form and submit
function doGelSubmit() {

	// jz assign order information to variables
	var brand  = document.querySelectorAll(`input[name="brand"]:checked`);
	var color = document.querySelectorAll(`input[name="colors"]:checked`);
	var tip = document.querySelectorAll(`input[name="tip"]:checked`);
	
	// jz assign contact information to variables
	var name = document.getElementsByName('customer')[0].value;
	var address = document.getElementsByName('address')[0].value;
	var city = document.getElementsByName('city')[0].value;
	var state = document.getElementsByName('states')[0].value;
	var zip = document.getElementsByName('zip')[0].value;
	var phone = document.getElementsByName('phone')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var error = "";
	var order = "";
	
	
	//jz concatenate a string informing users of all missing inputs
	if (!brand[0]){
		error = error.concat("Please select a brand.\n");
	}
	if (!color[0]){
		error = error.concat("Please select at least 1 color.\n");
	}
	if (!tip[0]){
		error = error.concat("Please select a tip size.\n");
	}
	if (!name){
		error = error.concat("Please enter your name.\n");
	}	
	if (!address){
		error = error.concat("Please enter your address.\n");
	}
	if (!city){
		error = error.concat("Please enter your city.\n");
	}
	if (!zip){
		error = error.concat("Please enter your zip.\n");
	}
	if (!phone){
		error = error.concat("Please enter your phone number.\n");
	}
	if (!email){
		error = error.concat("Please enter your email.\n");
	}
	
	// sc if phone exists and it doesn't pass the checkNumber() function, an error message is added
	if (phone && !checkNumber()) {
		error = error.concat(phone + " is not valid. Please enter a valid phone number.\n");
	}
	// sc if email exists and it doesn't pass the checkEmail() function, an error message is added
	if (email && !checkEmail()) {
		error = error.concat(email + " is not valid. Please enter a valid email.\n");
	}
	
	// jz validate that there are no errors
	if (error != ""){
		alert(error);
		error = "";
	}	
	
	// sc print out order details in a popup if there is all fields are filled
	else if (error == ""){
		order = order.concat("-Order Details-\n");
		order = order.concat("Brand: " + brand[0].value + "\n");
		
		// jz for loop to add all colors
		order = order.concat("Colors: ");
		for (i=0; color[i] ; i++){
			order = order.concat(color[i].value + ", ");
		}
		order = order.concat("\n");
		
		// jz returning order summary
		order = order.concat("Tip Size: " + tip[0].value + "\n");
		order = order.concat("Name: " + name + "\n");
		order = order.concat("Address: " + address + "\n");
		order = order.concat("City: " + city + "\n");
		order = order.concat("State: " + state + "\n");
		order = order.concat("Zip: " + zip + "\n");
		order = order.concat("Phone: " + phone + "\n");
		order = order.concat("Email: " + email + "\n");
		alert(order);
		error = "";
		order = "";
	}
	
}

// jz function to check information and submit for the Fountain pen form
function doFountainSubmit() {
	
	// jz assign order information to variables
	var brand  = document.querySelectorAll(`input[name="brand"]:checked`);
	var color = document.querySelectorAll(`input[name="colors"]:checked`);
	var nib = document.querySelectorAll(`input[name="nib"]:checked`);
	
	// jz assign contact information to variables
	var name = document.getElementsByName('customer')[0].value;
	var address = document.getElementsByName('address')[0].value;
	var city = document.getElementsByName('city')[0].value;
	var state = document.getElementsByName('states')[0].value;
	var zip = document.getElementsByName('zip')[0].value;
	var phone = document.getElementsByName('phone')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var error = "";
	var order = "";
	
	
	//jz concatenate a string informing users of all missing inputs
	if (!brand[0]){
		error = error.concat("Please select a brand.\n");
	}
	if (!color[0]){
		error = error.concat("Please select at least 1 color.\n");
	}
	if (!nib[0]){
		error = error.concat("Please select a nib type.\n");
	}
	if (!name){
		error = error.concat("Please enter your name.\n");
	}	
	if (!address){
		error = error.concat("Please enter your address.\n");
	}
	if (!city){
		error = error.concat("Please enter your city.\n");
	}
	if (!zip){
		error = error.concat("Please enter your zip.\n");
	}
	if (!phone){
		error = error.concat("Please enter your phone number.\n");
	}
	if (!email){
		error = error.concat("Please enter your email.\n");
	}
	
	// sc if phone exists and it doesn't pass the checkNumber() function, an error message is added
	if (phone && !checkNumber()) {
		error = error.concat(phone + " is not valid. Please enter a valid phone number.\n");
	}
	// sc if email exists and it doesn't pass the checkEmail() function, an error message is added
	if (email && !checkEmail()) {
		error = error.concat(email + " is not valid. Please enter a valid email.\n");
	}
	
	// jz validate that there are no errors
	if (error != ""){
		alert(error);
		error = "";
	}	
	
	// sc print out order details in a popup if there is all fields are filled
	else if (error == ""){
		order = order.concat("-Order Details-\n");
		order = order.concat("Brand: " + brand[0].value + "\n");
		
		// jz for loop to add all colors
		order = order.concat("Colors: ");
		for (i=0; color[i] ; i++){
			order = order.concat(color[i].value + ", ");
		}
		order = order.concat("\n");
		
		// jz returning order summary
		order = order.concat("Nib type: " + nib[0].value + "\n");
		order = order.concat("Name: " + name + "\n");
		order = order.concat("Address: " + address + "\n");
		order = order.concat("City: " + city + "\n");
		order = order.concat("State: " + state + "\n");
		order = order.concat("Zip: " + zip + "\n");
		order = order.concat("Phone: " + phone + "\n");
		order = order.concat("Email: " + email + "\n");
		alert(order)
		error = "";
		order = "";
	}
}

// jz function to on first click, clear steps 1, 2, 3 and on second click, clear step 4 information
function doClear() {
	if (!clear){
		document.getElementById("form1").reset();
		clear = true;
	}
	else {
		document.getElementById("form1").reset();
		document.getElementById("form2").reset();
		clear = false;
	}
}

// sc function to check if the number entered is in the correct format
function checkNumber() {
	var phone = document.getElementsByName('phone')[0].value;
	var numString = "1234567890"; 
	
	// sc create variables to store the acceptable formats for a phone number
	var format1 = "ddd-ddd-dddd";
	var format2 = "dddddddddd";
	var format3 = "(ddd)ddddddd";
	var format4 = "(ddd)ddd-dddd";
	
	// sc create string named phoneFormat to store format
	var phoneFormat = ""; 
	
	// sc if the length of the phone number entered is less than 9 digits or more than 13 digits, then return error
	if (phone.length < 9 || phone.length > 13) {
		return false;
	}
	
	// sc condition for if the length of the number entered is between 9 and 13 digits, inclusive
	else {
		
		// jz for loop that makes a dummy string where any number 0-9 is represented by d
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charAt(i);
			
			// jz if character is between 0-9, then it will add a 'd' to the phoneFormat string
			if (numString.indexOf(c) != -1) {
				phoneFormat += "d";
			}
			// jz else if character is not a digit, it will add it as is 
			else {
				phoneFormat += c;
			}	
		}
		
		// sc if the phoneFormat string matches the acceptable formats for a phone number, then return true, else return false
		if (phoneFormat == format1 || phoneFormat == format2 || phoneFormat == format3 || phoneFormat == format4) {
        	return true;
    	}
    	else {
    		return false;
    	}
	}
}

// sc set up function to check if the email is valid 
function checkEmail() {
	// sc create variable email to store value of email entered on form
	var email = document.getElementsByName('email')[0].value;
	
	// sc create variable to store position of the @ symbol and period
	var positionat = email.indexOf("@");
	var positionper = email.lastIndexOf(".");
	
	// sc checks that @ symbol is not in first last position
	// sc checks that period position is after @ symbol by at least 2 spaces
	// sc checks that there is at least two letters after the period
	if (positionat<1 || positionper<positionat+2 || positionper+2>= email.length) {
		return false;
	}	
	else {
		return true;
	}
}

