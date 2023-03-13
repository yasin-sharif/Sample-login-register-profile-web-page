<?php
if (isset($_POST["email"]) && $_POST["password"]) {

    // getting values from url
    $name=$_POST["name"];
    $email=$_POST["email"];
    $password=$_POST["password"];
    
    //linking to mysql
    $conn=new mysqli("localhost","root","tiger","guvi_login");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // checking whether email is already present
    $checkQuery=$conn->prepare("SELECT email FROM user_credential WHERE email=?");
    $checkQuery->bind_param("s",$email);
    $checkQuery->execute();

    $result=$checkQuery->get_result();
    $row=$result->fetch_assoc();

    if($row==NULL){
    	$stmt = $conn->prepare("INSERT INTO user_credential (email,name,password) VALUES (?,?,?)");
    	$stmt->bind_param("sss", $email,$name,$password);
    	$stmt->execute();

        // mongodb connection
        require "vendor/autoload.php";

        //require "localhost/guvi/assets/vendor/autoload.php";
        $serverApi=new \MongoDB\Driver\ServerApi(\MongoDB\Driver\ServerApi::V1);

        $client = new \MongoDB\Client(
            "mongodb+srv://aysyasin29:yasinSHARIF29@cluster0.vtkdh8b.mongodb.net/test",[],["serverApi" => $serverApi]
        );

        
        $db = $client->guvi_task;
        $collection=$db->user_profiles;
        $collection->insertone([ "email" => $email,
                                 "name" => $name, 
                                "nick_name" => "",
                                "dob" => "",
                                "phone" => "",
                                "profession" => ""]);
    	echo "signup_success";
    }
    else if($row["email"]==$email){
    	echo "exist";
    }    
}
else{
    echo "no_fields_provided";
}
?>