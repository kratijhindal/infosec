class User
{
	constructor()
	{
		//we r gona declare all global variables that can be accessed inside the classin any function.
		this.name= "Infocampus";		
	}
	
	get test()
	{
		alert (this.name);
	}
	
	get setdata()
	{
		this.name=prompt("Enter any name");
	}
}
var obj=new User();
