// jz functions to get all info and submit
function doGelSubmit() {
	// In Work
	// var color = document.querySelectorAll(`input[name="colors"]:checked`);
	// console.log(color[0].value);
	
	var name = document.getElementsByName('customer')[0].value;
	var address = document.getElementsByName('address')[0].value;
	var city = document.getElementsByName('city')[0].value;
	var zip = document.getElementsByName('zip')[0].value;
	var phone = document.getElementsByName('phone')[0].value;
	var email = document.getElementsByName('email')[0].value;
	
	if (!name) {
		window.alert("Please enter a name");
	}
}

function doGelClear() {

}

function doFountainSubmit() {
	
}

function doFountainClear() {
	
}
