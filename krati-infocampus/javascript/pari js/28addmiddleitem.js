function testarray()
{
	var ar1=new Array('A','B','C');
	var ar2=['A','B','C'];
	for (var i=0; i<ar1.length;i++)
	{
		alert(ar1[i]);
	}
	var data= "<h4> options are as following </h4>";
	for (var i=ar1.length-1; i>=0;i--)
	{
		data=data+ar1[i]+"<br>";
	}
	document.getElementById("msg").innerHTML=data;
}

//creating a global array

var alldata=new Array("mango", "apple", "orange", "grapes");
function garray()
{
	var data="<h4> options are as following </h4>";
	for (var i=0; i<alldata.length; i++)
	{
		data=data + "<li>" + alldata[i] + "</li>";
	}
	document.getElementById("msg").innerHTML=data;
}

// arrange elemnt

function addinfst()
{
	var itemname=prompt("enter new item name");
	if(itemname=="")
	{
		alert("sorry invalid item");
		addinfst();
	}
	else
	{
		alldata.unshift(itemname);
		garray();
	}
}

function addinlast()
{
	var itemname=prompt("enter new item name");
	if(itemname=="")
	{
		alert("sorry invalid item");
		addinlast();
	}
	else
	{
		alldata.push(itemname);
		garray();
	}
}

//remove item

function removeitem()
{
	garray();
	var which= prompt ("enter 1 to delete 1st item and enter 2 to delete last item");
	if(which=="1")
	{
		alldata.shift();
	}
	else if(which=="2")
	{
		alldata.pop();
	}
	else
	{
		alert("invalid input");
	}
	garray();
}
function addinmid()
{
	garray();
	var ele=prompt("after which element do you wish to add? enter name");
	var itemname=prompt("Enter new item name");
	
	var temp=new Array();
	for (var i==0; i<alldata.length; i++)
	{
		temp.push(alldata[i]);
		if(alldata[i]==ele)
		{
			temp.push(itemname);
		}
	}
	alldata=temp;
	garray();
}