<?php 
	session_start();
	include("dbconfig.php");

	$email = $_POST['email'];
	$password = $_POST['password'];	
	
	$sql="select * from user 
		where 
		email='$email' 
		and password='$password'";
		
	$res = mysqli_query($conn, $sql);
	
	$totaluser = mysqli_num_rows($res);
	
	if($totaluser >0)
	{
		$userdata = mysqli_fetch_object($res);
		$_SESSION['name'] = $userdata->name;
		$_SESSION['id'] = $userdata->id;
		header("Location:home.php");
	}else{
		header("Location:index.php");
	}
?>