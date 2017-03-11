var jsondata='[{"cityname":"Banglore","pop":"152000","dim":"15222222"},{"cityname":"pune","pop":"152000","dim":"15222222"},{"cityname":"kolcutta","pop":"152000","dim":"15222222"},{"cityname":"agra","pop":"152000","dim":"15222222"}]';
	

function showjson(){
	
	var data =JSON.parse(jsondata);
//alert(data.length);
 var output="List of Items<hr>"
  for(var i=1; i<data.length; i++){
  	output = output +"<li>" + data[i].cityname + " ("+data[i].pop +")=>Dimension("+data[i].dim +")</li>";
  	//output = output +"<li>" + ( "+data[i].cityname )+ " ("+data[i].pop +")=>Dimension("+data[i].dim +")</li>";
  //output = output +"<li>" + data[i].cityname + +data[i].pop +")=>Dimension("+data[i].dim +")</li>";
  }
  document.getElementById("msg").innerHTML=output;
}

function showjsontable(){
  var data =JSON.parse(jsondata);
  var alldata ="<table align='center' cellpadding='5'>";
   alldata = alldata + "<caption>City List</caption>";
	alldata = alldata + "<tr><th>City Name</th><th>City Name</th><th>Population</th><th>total Dimension</th></tr>";
 
   for(var i=0; i<data.length; i++){
		 alldata = alldata+"<tr>";
		 
		 alldata = alldata+"<td>" + data[i].cityname + "</td>"
		 alldata = alldata+"<td>" + data[i].pop + "</td>"
		 alldata = alldata+"<td>" + data[i].dim + "</td>"
		 
		 alldata = alldata+"</tr>";
		 
	} 
	document.getElementById("msg").innerHTML=alldata;
}

function showselect(){
	var data = JSON.parse(jsondata);
	var output="city : <select><option>Choose City</option>";
	
	for(var i=0; i<data.length; i++){
		 output = output + "<option>" +data[i].cityname+ "</option>";
	}
	 output = output + "</select>";
	 document.getElementById("msg").innerHTML=output;
}