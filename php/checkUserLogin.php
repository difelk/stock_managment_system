<?php
// $username = $_POST["username"];
// $password = $_POST["password"];
//
// $conn = mysqli_connect("hostname", "username", "password", "database");
// $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
// $result = mysqli_query($conn, $query);
//
// if (mysqli_num_rows($result) > 0) {
//   echo "Success";
// } else {
//   echo "Failure";
// }


$username = $_POST['username'];
$password = $_POST['password'];

// Connect to the database
$conn = mysqli_connect('host', 'user', 'password', 'database');

// Check if the username and password match
$result = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' AND password='$password'");
if (mysqli_num_rows($result) > 0) {
  echo $username;
} else {
  echo 'Username not found';
}

// Close the connection
mysqli_close($conn);


?>