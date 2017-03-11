<?php 
 session_start();
 include("dbconfig.php");
 $name = $_POST['fname'];
 $email = $_POST['email'];
 $mobile = $_POST['mobile'];
 $password = $_POST['password'];
 $address = $_POST['address'];
 $city =    $_POST['city'];
 $gender =    $_POST['gender'];
 $id = $_GET['id'];
 $hobbie = implode(",",$_POST['hobbie']);
	
 
  $sql="Update user 
			set 
		name='$name',
		email='$email',
		password='$password',
		mobile='$mobile',
		address='$address',
		city='$city',
		hobbie='$hobbie',
		gender='$gender'
		where id='$id'";
	if(mysqli_query($conn,$sql)==true)
	{
		if($id ==$_SESSION['id'])
		 {
			 $_SESSION['name'] = $name;
		 }
		 $_SESSION['msg']="Data Updated Successfully !";
		header("Location:userlist.php");
	}else{
		header("Location:edituser.php?id=$id");
	}
?>