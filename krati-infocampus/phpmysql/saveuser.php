<?php 
	include("dbconfig.php");
	$name = $_POST['fname'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$mobile = $_POST['mobile'];
	$address = $_POST['address'];
	$city = $_POST['city'];
	$gender="M";
	if(isset($_POST['gender'])){
	 $gender=$_POST['gender'];	
	}
	
	$hobbie = implode(",",$_POST['hobbie']);
	
	$sql="insert into user(name,email,password,mobile,address,city,hobbie,gender)
	values('$name','$email','$password','$mobile','$address',
	'$city','$hobbie','$gender')";
	
	if(mysqli_query($conn, $sql)==true){
		header("Location:index.php"); //redirect
	}else{
	   header("Location:signup.php");	
	}
	
?>