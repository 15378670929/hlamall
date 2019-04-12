<?php
	include('util.php');
	$username = $_POST['username'];
	$password = $_POST['pwd'];
	
	$sql = "SELECT * FROM users";
	$result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        if($username == $row['username'] && $password == $row['password']){
			echo "1";
			return;
		}else{
            echo "0";
        }
    }
    } else {
        echo "0 结果";
    }
    $conn->close();