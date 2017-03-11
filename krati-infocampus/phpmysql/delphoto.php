<?php
    session_start();
	$id = $_REQUEST['id'];
	$name = $_REQUEST['name'];
	
	unlink("myphoto/$name");
	
	include("dbconfig.php");
	$sql="delete from photo where photoid='$id'";
	mysqli_query($conn,$sql);
	$_SESSION['msg']="photo deleted Successfully !";
	header("Location:photolist.php");
?>