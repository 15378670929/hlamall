<?php
	$servername = "localhost";
	$username = "root";
	$password = "123456";
	$dbname = "1901";
	 
	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);
	// 检测连接
	if ($conn->connect_error) {
		die("连接失败: " . $conn->connect_error);
	};
	mysqli_set_charset($conn,'utf8');
	header('Content-Type:text/html;charset=utf8');