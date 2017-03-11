<?php 
  include("header.php");
  $id = $_GET['id'];
  $sql="select * from user where id='$id'";
  $res = mysqli_query($conn,$sql);
  $userdata = mysqli_fetch_object($res);
?>
	
	<form method="POST" action="updateuser.php?id=<?php echo $id; ?>">
			<table align="center" bgcolor="skyblue" cellpadding="7">
				<caption><h3>Update User Details</h3></caption>
			<tr>
			<th>Full Name</th>
			<td><input type="text" name="fname" value="<?php echo $userdata->name;?>"></td>
			</tr>
			<tr>
			<th>Email Id</th>
			<td><input type="text" name="email" value="<?php echo $userdata->email;?>"></td>
			</tr>
				
			<tr>
			<th>Password</th>
			<td><input type="password" name="password" value="<?php echo $userdata->password;?>"></td>
			</tr>
				
	<tr>
		<th>Mobile No</th>
		<td><input type="text" name="mobile" value="<?php echo $userdata->mobile;?>"></td>
	</tr>
	
	<tr>
					<th>Hobbies</th>
					<td>
						<?php 
						$harray = explode(",",$userdata->hobbie);
						
						    $sql="select * from hobbies order by hobbiename";
							$res = mysqli_query($conn, $sql);
							while($row = mysqli_fetch_object($res))
							{
								if(in_array($row->hobbiename, $harray))
								  {
								    $chk="checked";
								  }else{
									$chk="";  
								  }
								  
echo "<input type='checkbox' name='hobbie[]' value=$row->hobbiename $chk>".$row->hobbiename;	
echo "<br>";
							}
							?>
					</td>
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
								echo "<option value=$row->cityname";
								 if($row->cityname==$userdata->city)
								 {
									 echo " selected";
								 }
								echo "> $row->cityname </option>";	
								}
							?>
						</select>
					</td>
				</tr>
				<tr>
					<th>Address</th>
					<td>
	<textarea name="address" cols="20"><?php echo $userdata->address;?></textarea>
					</td>
				</tr>
				
				<tr>
					<th>Gender</th>
					<td>
					<?php 
					$male = '';
					$female='';
					if($userdata->gender =="M"){
						$male = " Checked";
					} else if($userdata->gender =="F"){
						$female = " Checked";
					}
					?>
	<input type="radio" name="gender" value="M" <?php echo $male;?>>Male
	<input type="radio" name="gender" value="F" <?php echo $female;?>>Female
					</td>
				</tr>
				
				<tr>
					<th colspan="2">
						<button type="submit">Update</button>
					</th>
				</tr>
			</table>
		</form>

<?php 
  include("footer.php");
?>