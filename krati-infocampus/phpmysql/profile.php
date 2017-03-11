	<?php 
	 include("header.php");
	 $id = $_SESSION['id'];
	 $sql="select * from user where id='$id'";
	 $res = mysqli_query($conn,$sql);
	 $row = mysqli_fetch_object($res);
	?>
		<table align="center" cellpadding="8" bgcolor="orange">
		<caption>
			<h2>Details Of <?php echo $row->name;?></h2>
		</caption>
		<tr>
			<th>Full Name</th>
			<td><?php echo $row->name;?></td>
		</tr>
		
		<tr>
			<th>Password</th>
			<td><?php echo $row->password;?></td>
		</tr>
		
		<tr>
			<th>Email Id</th>
			<td><?php echo $row->email;?></td>
		</tr>
		
		<tr>
			<th>Mobile No</th>
			<td><?php echo $row->mobile;?></td>
		</tr>
		
		<tr>
			<th>City</th>
			<td><?php echo $row->city;?></td>
		</tr>
		
		<tr>
			<th>Full Address</th>
			<td><?php echo $row->address;?></td>
		</tr>
		
		<tr>
			<th colspan="2">
				<a href="edituser.php?id=<?php echo $row->id;?>">Edit Profile</a>
			</th>
		</tr>
			
		</table>
	<?php 
	 include("footer.php");
	?>