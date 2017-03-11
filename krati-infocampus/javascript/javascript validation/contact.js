function pagevalidate(){
	var fname=document.getElementById("fname").value;
	var mobile=document.getElementById("mobile").value;
	var city=document.getElementById("city").value;
	var address=document.getElementById("address").value;
	
	fname =fname.trim();
    mobile = mobile.trim();
    city = city.trim();
	address=address.trim();
				
				
				var finalstatus=true;
				
				if(fname==""){
					document.getElementById("fname").style.borderColor="red";
					document.getElementById("ferror").innerHTML="invalid name";
					finalstatus=false;
				}
				else{
					document.getElementById("fname").style.borderColor="green";
					document.getElementById("ferror").innerHTML="";
				}
				if((mobile=="") || (mobile.length<10) || (isNaN(mobile))){
					document.getElementById("mobile").style.borderColor="red";
					document.getElementById("merror").innerHTML="invalid name";
					finalstatus=false;
				}
				else{
					document.getElementById("mobile").style.borderColor="green";
					document.getElementById("merror").innerHTML="";
				}
				if(address==""){
					document.getElementById("address").style.borderColor="red";
					document.getElementById("aerror").innerHTML="invalid name";
					finalstatus=false;
				}
				else{
					document.getElementById("address").style.borderColor="green";
					document.getElementById("aerror").innerHTML="";
				}
				
				if(city==""){
					document.getElementById("city").style.borderColor="red";
					document.getElementById("cerror").innerHTML="invalid name";
					finalstatus=false;
				}
				else{
					document.getElementById("city").style.borderColor="green";
					document.getElementById("cerror").innerHTML="";
				}
			return finalstatus;	
	
}