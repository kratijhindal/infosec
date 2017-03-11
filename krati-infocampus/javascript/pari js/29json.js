var jsondata='[{"cityname":"bangalore","pop":"152000","dim":"1522222"},{"cityname":"pune","pop":"152001","dim":"1522223"},{"cityname":"guwahati","pop":"1520056","dim":"152436456"},{"cityname":"hfvgbdvc","pop":"152346","dim":"174356"},{"cityname":"Nagaon","pop":"13245","dim":"15547654"}]';
function showjson()
{
	
	var data=JSON.parse(jsondata);
	//alert(data.length);
	var output="list of items <hr>";
	for(var i=0; i<data.length; i++)
	{
		output=output+"<li>"+data[i].cityname+"("+data[i].pop+")=>Dimension("+data[i].dim+")</li>";
	}
	document.getElementById("msg").innerHTML=output;
}

function showjsontable()
{
var data=JSON.parse(jsondata);
var alldata="<table align-'center' cellpadding='5'>";
alldata=alldata+"<caption>City List</caption>";
alldata=alldata+"<tr><th>City Name</th><th>Population</th><th>Total Dimension</th></tr>";

for(var i=0; i<data.length; i++)
{
	alldata=alldata+"<tr>";
			alldata=alldata+"<td>"+data[i].cityname+"</td>";
			alldata=alldata+"<td>"+data[i].pop+"</td>";
			alldata=alldata+"<td>"+data[i].dim+"</td>";
		
	alldata=alldata+"</tr>";
}



document.getElementById("msg").innerHTML=alldata;
}

function showjsondropdown()
{
	var data=JSON.parse(jsondata);
	var output="City:<select><option>Choose City</option>";

		for (var i=0;i<data.length;i++)
		{
			output=output+"<option>"+data[i].cityname+"</option>";

		}
		output=output+"</select>";
		document.getElementById("msg").innerHTML=output;
}
