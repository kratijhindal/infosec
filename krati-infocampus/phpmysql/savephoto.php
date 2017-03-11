<?php 
session_start();
include("dbconfig.php");
$filename = time().$_FILES['photo']['name'];
$tempname = $_FILES['photo']['tmp_name'];
$size = $_FILES['photo']['size'];
$type = $_FILES['photo']['type'];
move_uploaded_file($tempname, 'myphoto/'.$filename);

$sql="insert into photo(photoname)
	values('$filename')";
	
	if(mysqli_query($conn, $sql)==true){
		$_SESSION['msg']="Photo Uploaded Successfully !";
		header("Location:photolist.php"); //redirect
	}else{
	   header("Location:newphoto.php");	
	}
	
?>