function pagev(){
	//alert("welcome");
	var fname=document.getElementById("fname").value;
	var mobile=document.getElementById("mobile").value;
	var city=document.getElementById("city").value;
	var address=document.getElementById("address").value;
	var finalstatus=true;
	fname=fname.trim();
	mobile=mobile.trim();
	city=city.trim();
	address=address.trim();


	if (fname==""){
		document.getElementById("fname").style.borderColor="red";
		finalstatus=false;
	}else{
		document.getElementById("fname").style.borderColor="green";
	}

	if((mobile=="") || (mobile.length<10) || (isNaN(mobile))){
		document.getElementById("mobile").style.borderColor="red";
		finalstatus=false;
	}else{
		document.getElementById("mobile").style.borderColor="green";
	}

	if(city==""){
		document.getElementById("city").style.borderColor="red";
		finalstatus=false;
	}else{
		document.getElementById("city").style.borderColor="green";
	}

	if(address==""){
		document.getElementById("address").style.borderColor="red";
		finalstatus=false;
	}else{
		document.getElementById("address").style.borderColor="green";
	}
	return finalstatus;
}