<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "reactphpCrud");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
   case "GET": 
    $path= explode('/', $_SERVER['REQUEST_URI']);

    if(isset($path[4]) && is_numeric($path[4]))
    {
      $json_array= array();
      $userid= $path[4];
      
      $getuserrow= mysqli_query($db_conn, "SELECT * FROM user WHERE userid='$userid' ");
      while($userrow= mysqli_fetch_array($getuserrow))
      {
       $json_array['rowUserdata']= array('id'=>$userrow['userid'],'username'=>$userrow['username'], 'email'=>$userrow['useremail'], 'status'=>$userrow['status'],'password'=>$userrow['userpass'],);
      }
      echo json_encode($json_array['rowUserdata']);
      return;

    } else { 

    $alluser= mysqli_query($db_conn, "SELECT * FROM user"); 
    if(mysqli_num_rows($alluser) > 0)
    {
      while($row= mysqli_fetch_array($alluser))
      {
       $json_array["userdata"][]= array("id"=>$row['userid'], "username"=>$row["username"], "email"=>$row["useremail"], "status"=>$row["status"], "password"=>$row["userpass"]);
      }
      echo json_encode($json_array["userdata"]);
      return;
    } else {
        echo json_encode(["result"=>"Please check the Data"]); 
        return;
    }
  }   
    break;

    case "POST":
        $userpostdata= json_decode(file_get_contents("php://input"));
        //echo "sucess data";
        //print_r($userpostdata); die;
        $username= $userpostdata->username;
        $useremail= $userpostdata->email;
        $status= $userpostdata->status;
        $userpass= $userpostdata->password;
        $result= mysqli_query($db_conn, "INSERT INTO user (username, useremail, status, userpass) 
        VALUES('$username', '$useremail', '$status', $userpass)");

        if($result)
        {
          echo json_encode(["success"=>"User Added Successfully"]);
          return;
        } else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
            return; 
        }
        break;
    
         case "PUT":
          $userUpdate= json_decode(file_get_contents("php://input"));

           $userid= $userUpdate->id;
           $username= $userUpdate->username;
           $useremail= $userUpdate->email;
           $status= $userUpdate->status;
           $userpass= $userUpdate->password;

           $updateData= mysqli_query($db_conn, "UPDATE user SET username='$username', useremail='$useremail', status='$status', userpass='$userpass'  WHERE userid='$userid'  ");
           if($updateData)
           {
             echo json_encode(["success"=>"User Record Update Successfully"]);
             return;
           } else {
               echo json_encode(["success"=>"Please Check the User Data!"]);
               return; 
           }
         // print_r($userUpdate); die;
          break;

          case "DELETE":
            $path= explode('/', $_SERVER["REQUEST_URI"]);
            //echo "message userid------".$path[4]; die;
            $result= mysqli_query($db_conn, "DELETE FROM user WHERE userid= '$path[4]' ");
            if($result)
            {
              echo json_encode(["success"=>"User Record Deleted Successfully"]);
              return;
            } else {
              echo json_encode(["Please Check the User Data!"]);
              return;
            }

          break;         

}


?>
