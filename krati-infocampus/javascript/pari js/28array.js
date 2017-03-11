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