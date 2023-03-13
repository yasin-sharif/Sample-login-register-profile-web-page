<?php

// getting process and email
$process=$_POST["process"];
$email=$_POST["email"];

// global elements
require "vendor/autoload.php";
$serverApi=new \MongoDB\Driver\ServerApi(\MongoDB\Driver\ServerApi::V1);
$client = new \MongoDB\Client(
    "mongodb+srv://aysyasin29:yasinSHARIF29@cluster0.vtkdh8b.mongodb.net/test",[],["serverApi" => $serverApi]
);

$db = $client->guvi_task;
$collection=$db->user_profiles;

if($process=="load"){
    $record=$collection->find(["email"=>$email]);
    foreach ($record as $result){

        echo json_encode(array($result["name"],$result["nick_name"],$result["email"],$result["dob"],$result["phone"],$result["profession"]));
        
        /*echo json_encode(array("email" => $result["email"],
                                "name"=>$result["name"],
                                "nick"=>$result["nick_name"],
                                "dob"=>$result["dob"],
                                "phone"=>$result["phone"],
                                "profession"=>$result["profession"]));*/
                                
    }
}
else if($process=="update") {
    $condition=array("email"=>$email);
    $nick=$_POST["nick_u"];
    $dob=$_POST["dob_u"];
    $phone=$_POST["phone_u"];
    $professtion=$_POST["profession_u"];

    $newdata=array('$set'=> array("nick_name" => $nick,
                    "dob" => $dob,
                    "phone" => $phone,
                    "profession" => $professtion));
    

    $collection->updateone($condition,$newdata);
    echo "update_success";
}
else{
    echo "out of scope";
}
?>