function getif()
{
	var n1=prompt("enter a number");
	var n2=prompt("enter 2nd number");
	if(n1>n2)
	{
		alert("higher value is:" +n1);
	}
	else{
		alert("higher value is:" +n2);
	}
	
}

function getifelseif()
{
	var n1=prompt("enter a number");
	var n2=prompt("enter 2nd numver");
	var n3=prompt("enter 3rd number");

if((n1>n2)&&(n1>n3))
{
	alert("higher" +n1);
}
else if ((n2>n3)&&(n2>n1))
{alert("higher" +n2);
}
else
{
	alert("higher" +n3);
	
}
}

function getnested()
{
var n1=prompt("enter a number");
	var n2=prompt("enter 2nd numver");	
if (n1>n2)	
{
	if(n1%2==0)
	{
		alert("even no" +n1);
	}
	else
	{
		alert("odd no" +n1);
	}
}
	else
	{
		alert("no idea" +n2);
		
	}
}

