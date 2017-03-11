class User{
	
	constructor(){
		//we r going to declare global variable that can be accessed inside the class in any function...
      this.name = "INFOCAMPUS";		
	}
  get test(){
	  alert(this.name);
  }
 get setdata(){
	 
	 this.name = prompt("Enter Any Name");
 }
  
  }
  
  var obj = new User();
  
//develover.mozilla.org
  

	