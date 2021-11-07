
/*
=========================================================================================
Project Name: No Ink No Pen Site Script
Project Description: Create Script for No Ink No Pen Website
Date: 11/7/2021
Programmer Name: Suki Chen and Jin Zhang
=========================================================================================
*/

/*	
Add these variables in 

var brand = document.gelForm.brand[0].value;
var color = document.gelForm.colors[0].value;
var tip = document.gelForm.tip[0].value;

*/

// jz function to get all information for gel form and submit

function doGelSubmit() {
	// In Work
	// var color = document.querySelectorAll(`input[name="colors"]:checked`);
	// console.log(color[0].value);
	
	// jz variables to retrieve contact information
	var name = document.getElementsByName('customer')[0].value;
	var address = document.getElementsByName('address')[0].value;
	var city = document.getElementsByName('city')[0].value;
	var state = document.getElementsByName('states')[0].value;
	var zip = document.getElementsByName('zip')[0].value;
	var phone = document.getElementsByName('phone')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var error = "";
	//jin's test code
	//document.getElementsByName('customer')[0].value="";
	
	//jz create a string that alerts the users of all missing inputs
	if (!name)
	{
		error = error.concat("Please enter your name.\n");
	}	
	if (!address)
	{
		error = error.concat("Please enter your address.\n");
	}
	if (!city)
	{
		error = error.concat("Please enter your city.\n");
	}
	if (!zip)
	{
		error = error.concat("Please enter your zip.\n");
	}
	if (!phone)
	{
		error = error.concat("Please enter your phone number.\n");
	}
	if (!email)
	{
		error = error.concat("Please enter your email.\n");
	}
	// sc validate that there are no errors
	if (error != "")
	{
		alert(error);
		error = "";
	}	
	// sc print out order details in a popup if there is all fields are filled
	else if (error == "")
	{
		alert("Order Details:" + "\nName: " + name + "\nAddress: " + address + "\nCity: " + city + "\nState: " + state + "\nZip: " + zip + "\nPhone: " + phone + "\nEmail: " + email)
		
	}

}
// sc function to on first click, clear steps 1, 2, 3 and on second click, clear step 4 information
function doGelClear() {

	document.getElementsByName("customer").value="";
	
	alert("Contact and Mailing Information cleared")
}

function doFountainSubmit() {
	
}

function doFountainClear() {
	
}

