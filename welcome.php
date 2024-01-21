<?php
session_start();

if (!isset($_SESSION['user_email'])) {
    header("Location: index.html"); // Redirect to login page if not logged in
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Travel Buddy</title>
</head>

<body>
    <h1>Welcome, <?php echo $_SESSION['user_email']; ?>!</h1>
    <p>This is the welcome page for your Travel Buddy application.</p>
    <!-- Add more content specific to logged-in users -->
</body>

</html>
