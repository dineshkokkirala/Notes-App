<?php
//  $host="localhost";
//  $user="root";
//  $pass="";
  $link=@mysqli_connect("localhost","root","") or die("Could not connect to Server");
//echo "Connected to Server";


  @mysqli_select_db($link,"online_notes") or die("Could not connected to Database");
// echo "Connected to Database";
?>
