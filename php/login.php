<?php
if (isset($_POST["email"]) && $_POST["password"]) {
    // getting values from url
    $email=$_POST["email"];
    $password=$_POST["password"];

    
    //linking to mysql
    $conn=new mysqli("localhost","root","tiger","guvi_login");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // prepare and bind
    $stmt = $conn->prepare("SELECT email,password FROM user_credential WHERE email=?");
    $stmt->bind_param("s", $email);
    
    $stmt->execute();
    
    
    //checking whether password is correct
    $result1=$stmt->get_result();
    $rows=$result1->fetch_assoc();
    
    if($rows==NULL){
        echo "unsuccessfull";
    }
    else{
        
        if($password==$rows["password"]){
            echo "login_success";
        } 
        else {
            echo "unsuccessfull";
        }
    }
}
else{
    echo "no_fields_provided";
}
?>