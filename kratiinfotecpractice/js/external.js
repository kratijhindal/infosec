function validate(){
	var fname=document.getElementById("fname").value;
	var mobile=document.getElementById("mobile").value;
	var state=document.getElementById("state").value;
	var address=document.getElementById("address").value;
	
	fname=fname.trim();
	mobile=mobile.trim();
	state=state.trim();
	address=address.trim();
    
    var finalstatus=true;
    var msg="Following fields are invalid:<br>";
	if (fname==""){
		document.getElementById("fname").style.borderColor="red";
		document.getElementById("ferror").innerHTML="invalid name";
		msg+="Name is invalid<br>";
		finalstatus=false;
	}else{
		document.getElementById("fname").style.borderColor="green";
		document.getElementById("ferror").innerHTML="";
		msg+="";
	}

	if((mobile=="") || (mobile.length<10) || (isNaN(mobile))){
		document.getElementById("mobile").style.borderColor="red";
		document.getElementById("merror").innerHTML="invalid mobile";
		msg+="Mobile is invalid<br>";
		finalstatus=false;
	}else{
         document.getElementById("mobile").style.borderColor="green";
         document.getElementById("merror").innerHTML="";
         msg+="";
	}

	if(state==""){
		document.getElementById("state").style.borderColor="red";
		document.getElementById("serror").innerHTML="invalid state";
		msg+="state is invalid<br>";
		finalstatus=false;
	}else{
		document.getElementById("state").style.borderColor="green";
		document.getElementById("serror").innerHTML="";
		msg+="";
	}

	if(address==""){
		document.getElementById("address").style.borderColor="red";
		document.getElementById("aerror").innerHTML="invalid address";
		msg+="address is invalid<br>";
		finalstatus=false;
	}else{
		document.getElementByID("address").style.borderColor="green";
		document.getElementById("aerror").innerHTML="";
		msg+="";
	}
	if(finalstatus==false){
      document.getElementById("cmsg").innerHTML=msg;
	}
	else{
		document.getElementById("cmsg").innerHTML="";
	}
	return finalstatus;
}