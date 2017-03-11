<?php
    session_start();
	$id = $_REQUEST['id'];
	
	include("dbconfig.php");
	$sql="delete from user where id='$id'";
	mysqli_query($conn,$sql);
	$_SESSION['msg']="User Details deleted Successfully !";
	header("Location:userlist.php");
?>