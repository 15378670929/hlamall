<?php
	include('util.php');
	$username = $_POST['username'];
	$password = $_POST['pwd'];
	$sql = "SELECT * FROM users where username = '$username' and password = '$password'";
	$result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
    // 输出数据
        echo "1";
    } else {
        echo "-1";
    }
    $conn->close();