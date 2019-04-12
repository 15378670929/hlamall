<?php
	include('util.php');
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql = "insert into users (username , password) values ('$username','$password')";
	if ($conn->query($sql) === TRUE) {
		echo "新记录插入成功";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}