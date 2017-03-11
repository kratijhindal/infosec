<?php 
 include("header.php");
?>
	<form method="POST" action="savephoto.php" enctype="multipart/form-data">
			<table align="center" cellpadding="10" bgcolor="skyblue">
				<caption><h2>Upload New Photo</h2></caption>
				<tr>
					<th>New Photo</th>
					<td><input type="file" name="photo"></td>
				</tr>
				
				<tr>
					<th colspan="2">
						<button type="submit">Upload Now</button>
					</th>
				</tr>
			</table>
		</form>
<?php 
 include("footer.php");
?>