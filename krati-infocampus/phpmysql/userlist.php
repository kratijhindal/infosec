	<?php 
	 include("header.php");
	 $id = $_SESSION['id'];
	 $sql="select * from user where id !='$id'";
	 $res = mysqli_query($conn,$sql);
	?>
		<table align="center" cellpadding="8">
		<caption><h2>User List</h2></caption>
			<tr bgcolor="orange">
				<th>Full Name</th>
				<th>Gender</th>
				<th>Email Id</th>
				<th>Mobile No</th>
				<th>Hobbies</th>
				<th>City</th>
				<th>Address</th>
				<th>Delete</th>
				<th>Edit</th>
			</tr>
			
			<?php
			while($row = mysqli_fetch_object($res))
			{
				echo "<tr bgcolor='skyblue'>";
				echo "<td>$row->name</td>";
				echo "<td>$row->gender</td>";
				echo "<td>$row->email</td>";
				echo "<td>$row->mobile</td>";
				echo "<td>$row->hobbie</td>";
				echo "<td>$row->city</td>";
				echo "<td>$row->address</td>";
			echo "<td>
					<a href='deleteuser.php?id=".$row->id."'>Delete</a>
				</td>";
			echo "<td>
					<a href=edituser.php?id=$row->id>Edit</a>
				</td>";
				echo "</tr>";			  
			}				
			?>
		</table>
	<?php 
	 include("footer.php");
	?>