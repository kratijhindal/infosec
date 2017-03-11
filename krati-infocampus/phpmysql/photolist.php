	 <meta http-equiv="refresh" content="5">
	 <style>
	 .pbox{ height:162px; width:150px; padding:10px; float:left; border-radius:5px; margin:5px; background:skyblue;}
	 </style>
	 <?php 
	 include("header.php");
	 $sql="select * from photo";
	 $res = mysqli_query($conn,$sql);
	?>
	   <center>
		<h2>Photo List</h2>
			<?php
			while($row = mysqli_fetch_object($res))
			{
  echo "<div class='pbox'>";
  echo "<img src='myphoto/$row->photoname' height='130' width='150'>";
  echo "<hr>";
  echo "<center>
  <a href=delphoto.php?id=".$row->photoid."&name=$row->photoname>Delete</a>
  </center>";
  echo "</div>";
			}				
			?>
		</center>
	<?php 
	 include("footer.php");
	?>