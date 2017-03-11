class User{
	constructor(){
		this.name="";
        this.email="";
        
        this.address="";
	}
	get signup(){
		document.getElementById("signupblock").style.display="block";
		document.getElementById("viewblock").style.display="none";
	}
	
	get savedata(){
		this.name=document.getElementById("fname").value;
		this.email=document.getElementById("email").value;
		this.address=document.getElementById("address").value;
		//document.getElementById("success").innerHTML="successfully saved";
		document.getElementById("done").innerHTML="succeffully saved";
		this.clearform();

	}
	get clearform(){
		document.getElementById("fname").value="";
		document.getElementById("email").value="";
		document.getElementById("address").value="";
	}
	get view(){
		document.getElementById("viewblock").style.display="block";
		document.getElementById("signupblock").style.display="none";

		document.getElementById("dfname").innerHTML=this.name;
		document.getElementById("demail").innerHTML=this.email;
		document.getElementById("daddress").innerHTML=this.address;

	}
	get edit()
	{
     document.getElementById("viewblock").style.display="none";
		document.getElementById("signupblock").style.display="block";
		document.getElementById("done").innerHTML="";
        document.getElementById("btn1").innerHTML="update details";
        document.getElementById("btn2").style.display="none";
        document.getElementById("heading").innerHTML="edit block";

        this.name=document.getElementById("fname").value;
		document.getElementById("email").value=this.email;
		document.getElementById("address").value=this.address;




	}
}
var obj = new User();