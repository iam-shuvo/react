import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Pglist()
{ 
    const [pgData, setPgData]= useState([]);
    const [message, setMessage]= useState('');
   
    useEffect( ()=>{   
    getPgData();
    },[]);

 const getPgData= async()=>{
    const reqData= await fetch("http://localhost/react-project_crude/react-project/api/photo.php");
    const resData= await reqData.json();           
    setPgData(resData);
     } 

 const handleDelete= async(id)=>{
   const res= await axios.delete("http://localhost/react-project_crude/react-project/api/photo.php"+id);
   setMessage(res.data.success);
   getPgData();   
 }

       return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4">Photographer List</h5> 
                        <p className="text-danger">{ message} </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                 pgData.map((pgData, index)=>(
                                  <tr key={index}>
                                <td>{index+1 }</td>
                                <td>{ pgData.pgname}</td>
                                <td>{pgData.email}</td>
                                
                                <td>{pgData.password}</td>
                                <td>
                                 <Link to={"/editpg/"+pgData.id} className="btn btn-success mx-2">Edit</Link>
                                 <button className="btn btn-danger" onClick={ ()=>handleDelete(pgData.id)}>Delete</button>
                                </td>
                                </tr>
                                ))
                                }                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Pglist;