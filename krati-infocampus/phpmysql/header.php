<?php 
	session_start();
	if($_SESSION['id']=="")
	{
		header("Location:index.php");
	}
?>
<html>
<head>

</head>
	<body>
		<hr color="orange">
		<table align="center" cellpadding="6">
			<tr>
				<th><a href="home.php">Home</a></th>
				<th><a href="userlist.php">User List</a></th>
				<th><a href="profile.php">My Profile</a></th>
				<th><a href="photolist.php">Photo Gallary</a></th>
				<th><a href="newphoto.php">New Photo</a></th>
				<th>Welcome 
				<?php echo $_SESSION['name']; ?>  
				<a href="logout.php">Logout</a></th>
			</tr>
		</table>
	<hr color="green">
	<?php 
	 include("dbconfig.php");
	 echo "<center>";
		if(isset($_SESSION['msg']))
		{
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		}
	 echo "</center>";
	?>