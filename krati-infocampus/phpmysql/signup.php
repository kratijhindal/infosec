<html>
	<body bgcolor="orange">
		<form method="POST" action="saveuser.php">
			<table align="center" bgcolor="skyblue" cellpadding="7">
				<caption><h3>New User</h3></caption>
				
				<tr>
					<th>Full Name</th>
					<td><input type="text" name="fname"></td>
				</tr>
				<tr>
					<th>Email Id</th>
					<td><input type="text" name="email"></td>
				</tr>
				
				<tr>
					<th>Password</th>
					<td><input type="password" name="password"></td>
				</tr>
				
				<tr>
					<th>Mobile No</th>
					<td><input type="text" name="mobile"></td>
				</tr>
				
				<tr>
					<th>City</th>
					<td>
						<?php 
							include("dbconfig.php");
						    $sql="select * from city order by cityname";
							$res = mysqli_query($conn, $sql);
						?>
						<select name="city">
							<option value="">Choose City</option>
							<?php 
								while($row = mysqli_fetch_object($res))
								{
								echo "<option value=$row->cityname>	$row->cityname </option>";	
								}
							?>
						</select>
					</td>
				</tr>
				
				
				<tr>
					<th>Address</th>
					<td>
						<textarea name="address" cols="20"></textarea>
					</td>
				</tr>
				
				<tr>
					<th>Hobbies</th>
					<td>
						<?php 
						    $sql="select * from hobbies order by hobbiename";
							$res = mysqli_query($conn, $sql);
							while($row = mysqli_fetch_object($res))
							{
echo "<input type='checkbox' name='hobbie[]' value=$row->hobbiename>".$row->hobbiename;	
echo "<br>";
							}
							?>
					</td>
				</tr>
				<tr>
					<th>Gender</th>
					<td>
						<input type="radio" name="gender" value="M">Male
						<input type="radio" name="gender" value="F">Female
					</td>
				</tr>
				
				
				<tr>
					<th colspan="2">
		<button type="submit">Register</button><hr>
		<a href="index.php">I have an account</a>
					</th>
				</tr>
			</table>
		</form>
	</body>
</html>