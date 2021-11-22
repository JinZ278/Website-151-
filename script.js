
/*
=========================================================================================
Project Name: No Ink No Pen Site Script
Project Description: Create Script for No Ink No Pen Website
Date: 11/21/2021
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
	// sc validate phone number using check number function - if a value is entered for phone and the checkNum function returns false, then return the string "...valid phone number."
	if (phone && !checkNumber(phone)) {
		error = error.concat("Please enter a valid phone number.\n")
	}
	// sc validate email using check number function - if a value is entered for the email and the checkEmail function returns false, then return the string "...valid email."
	if (email && !checkEmail(email)) {
		error = error.concat("Please enter a valid email.\n")
	} 
	if (!email){
		error = error.concat("Please enter your email.\n");
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
		
		order = order.concat("Tip Size: " + tip[0].value + "\n");
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
	// sc validate phone number using check number function - if a value is entered for phone and the checkNum function returns false, then return the string "...valid phone number."
	if (phone && !checkNumber(phone)) {
		error = error.concat("Please enter a valid phone number.\n")
	}
	// sc validate email using check number function - if a value is entered for the email and the checkEmail function returns false, then return the string "...valid email."
	if (email && !checkEmail(email)) {
		error = error.concat("Please enter a valid email.\n")
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

/*
// sc set up function to check if the number entered is in the correct format
function checkNumber() {
	var phone = document.getElementsByName('phone').value;
	var symString = "()-";
	var numString = "1234567890"; 
	var format1 = "ddd-ddd-dddd";
	var format2 = "dddddddddd";
	var format3 = "(ddd)ddddddd";
	var format4 = "(ddd)ddd-dddd";
	var phoneFormat = ""; 
	
	// sc check if the phone number entered contains only digits (0-9)
	if (phone.length < 9) {
		return(false);
	}
	else {
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charAt(i);
			if (numString.indexOf(c) != -1) {
				phoneFormat += "d";
			}
			else if (numString.indexOf(c) == 0) {
				phoneFormat += "(";
			}
			else if (numString.indexOf(c) == 1) {
				phoneFormat += ")";
			}
			else if (numString.indexOf(c) == 2) {
				phoneFormat += "-";
			}
			else {
				return;
			}
	
		}
	}
	
	if (phoneFormat == format1 || phoneFormat == format2 || phoneFormat == format3 || phoneFormat == format4) {
        return(true);
    }

}
*/ 

// sc set up function to check if the email is valid 
/* function checkEmail() {
	var email = document.getElementsByName('email').value;
	var numString = "1234567890"; 
	
	if(phone.value) {
		return (true);
	}
	else {
		return false;
	}
}
*/