<?php
    session_start();

    // Assuming the form has been submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $fname = $_POST['firstName'];
        $lname = $_POST['lastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $cpassword = $_POST['confirmPassword'];

        $conn = new mysqli('localhost', 'root', '', 'tripper');
        if ($conn->connect_error) {
            die('Connection failed: ' . $conn->connect_error);
        } else {
            $stmt = $conn->prepare("INSERT INTO `users` ( `first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $fname, $lname, $email, $password);
            $stmt->execute();

            // Store some user information in session
        
            $_SESSION['first_name'] = $fname;
            $_SESSION['last_name'] = $lname;
            $_SESSION['email'] = $email;
          

            $stmt->close();
            $conn->close();

            header("location: ../homePage/home.html");
            exit(); // Ensure that script stops execution after redirection
        }
    }
?>
