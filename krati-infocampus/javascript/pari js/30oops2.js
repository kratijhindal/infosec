class User
{
	constructor()
	{
		//we r gona declare all global variables that can be accessed inside the classin any function.
		this.name= "";	
		this.email= "";	
		this.password= "";	
		this.address= "";			
	}
	
	get newuser()
	{
		document.getElementById("signupblock").style.display="block";
		document.getElementById("showdata").style.display="none";
	}
	get savedata()
	{
		this.name=document.getElementById("fname").value;	
		this.email=document.getElementById("id").value;	
		this.password=document.getElementById("password").value;
		this.address=document.getElementById("address").value;
		document.getElementById("success").innerHTML="saved successfully !";
		this.clearform();
	}
	get clearform()
	{
		document.getElementById("fname").value="";	
		document.getElementById("id").value="";	
		document.getElementById("password").value="";
		document.getElementById("address").value="";
	}
	get displayuser()
	{
		document.getElementById("signupblock").style.display="none";
		document.getElementById("showdata").style.display="block";
		
		document.getElementById("dfname").innerHTML=this.name;
		document.getElementById("did").innerHTML=this.email; 
		document.getElementById("dpassword").innerHTML=this.password;
		document.getElementById("daddress").innerHTML=this.address;
	}
	get edituser()
	{
		document.getElementById("success").innerHTML="";
		document.getElementById("heading").innerHTML="Edit Profile";
		document.getElementById("btn1").innerHTML="Update Details";
		document.getElementById("btn2").style.display="none";
		document.getElementById("signupblock").style.display="block";
		document.getElementById("showdata").style.display="none";
		
		document.getElementById("fname").value=this.name;
		document.getElementById("id").value=this.email; 
		document.getElementById("password").value=this.password;
		document.getElementById("address").value=this.address;
	}
}
class User2 extends User
{
	constructor()
	{
		super();
	}
	get mydetails()
	{
		this.displayuser();
	}
}

var obj=new User2();
