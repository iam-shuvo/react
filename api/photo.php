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
      $pgid= $path[4];
      
      $getpgrow= mysqli_query($db_conn, "SELECT * FROM photo WHERE pgid='$pgid' ");
      while($pgrow= mysqli_fetch_array($getpgrow))
      {
       $json_array['rowPgdata']= array('id'=>$pgrow['pgid'],'pgname'=>$pgrow['pgname'], 'email'=>$pgrow['pgemail'], 'password'=>$pgrow['pgpassword'],);
      }
      echo json_encode($json_array['rowPgdata']);
      return;

    } else { 

    $allpg= mysqli_query($db_conn, "SELECT * FROM photo"); 
    if(mysqli_num_rows($allpg) > 0)
    {
      while($row= mysqli_fetch_array($allpg))
      {
       $json_array["pgdata"][]= array("id"=>$row['pgid'], "pgname"=>$row["pgname"], "email"=>$row["pgemail"],  "password"=>$row["pgpassword"]);
      }
      echo json_encode($json_array["pgdata"]);
      return;
    } else {
        echo json_encode(["result"=>"Please check the Data"]); 
        return;
    }
  }   
    break;

    case "POST":
        $pgpostdata= json_decode(file_get_contents("php://input"));
        //echo "sucess data";
        //print_r($userpostdata); die;
        $pgname= $pgpostdata->pgname;
        $pgemail= $pgpostdata->email;
        
        $pgpassword= $pgpostdata->password;
        $result= mysqli_query($db_conn, "INSERT INTO photo (pgname, pgemail, pgpassword) 
        VALUES('$pgname', '$pgemail','$pgpassword')");

        if($result)
        {
          echo json_encode(["success"=>"Photographer Added Successfully"]);
          return;
        } else {
            echo json_encode(["success"=>"Please Check the Photographer Data!"]);
            return; 
        }
        break;
    
         case "PUT":
          $pgUpdate= json_decode(file_get_contents("php://input"));

           $pgid= $pgUpdate->id;
           $pgname= $pgUpdate->pgname;
           $pgemail= $pgUpdate->email;
           
           $pgpass= $pgUpdate->password;

           $updateData= mysqli_query($db_conn, "UPDATE Photo SET pgname='$pgname', pgemail='$pgemail', , pgpassword='$pgpassword'  WHERE pgid='$pgid'  ");
           if($updateData)
           {
             echo json_encode(["success"=>"Photographer Record Update Successfully"]);
             return;
           } else {
               echo json_encode(["success"=>"Please Check the Photographer Data!"]);
               return; 
           }
         // print_r($userUpdate); die;
          break;

          case "DELETE":
            $path= explode('/', $_SERVER["REQUEST_URI"]);
            //echo "message userid------".$path[4]; die;
            $result= mysqli_query($db_conn, "DELETE FROM photo WHERE pgid= '$path[4]' ");
            if($result)
            {
              echo json_encode(["success"=>"Photographer Record Deleted Successfully"]);
              return;
            } else {
              echo json_encode(["Please Check the Photographer Data!"]);
              return;
            }

          break;         

}


?>
