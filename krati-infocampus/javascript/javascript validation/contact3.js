function pagevalidate(){
	var fname=document.getElementById("fname").value;
	var mobile=document.getElementById("mobile").value;
	var city=document.getElementById("city").value;
	var address=document.getElementById("address").value;
	
	 fname =fname.trim();
			    mobile =mobile.trim();
			  city=city.trim();
				address=address.trim();
				
				
				var finalstatus=true;
				 var msg="<h3>following fields r invalid</h3><br>";
				
				if(fname==""){
					document.getElementById("fname").style.borderColor="red";
					document.getElementById("ferror").innerHTML="invalid name";
					msg +="Name is invalid <br>";
					finalstatus=false;
				}
				else{
					document.getElementById("fname").style.borderColor="green";
					document.getElementById("ferror").innerHTML="";
						msg +="";
				}
				if((mobile=="") || (mobile.length<10) || (isNaN(mobile))){
					document.getElementById("mobile").style.borderColor="red";
					document.getElementById("merror").innerHTML="invalid name";
					msg +="mobile is invalid <br>";
					finalstatus=false;
				}
				else{
					document.getElementById("mobile").style.borderColor="green";
					document.getElementById("merror").innerHTML="";
					msg +="";
				}
				if(address==""){
					document.getElementById("address").style.borderColor="red";
					document.getElementById("aerror").innerHTML="invalid name";
					msg +="address is invalid <br>";
					finalstatus=false;
				}
				else{
					document.getElementById("address").style.borderColor="green";
					document.getElementById("aerror").innerHTML="";
					msg +="";
				}
				
				if(city==""){
					document.getElementById("city").style.borderColor="red";
					document.getElementById("cerror").innerHTML="invalid name";
					msg +="city is invalid <br>";
					finalstatus=false;
				}
				else{
					document.getElementById("city").style.borderColor="green";
					document.getElementById("cerror").innerHTML="";
					msg +="";
				}
				if(finalstatus==false){
				 document.getElementById("pageerror").innerHTML=msg;
				}
				else{
					document.getElementById("pageerror").innerHTML="";
				}
			return finalstatus;	
	
}