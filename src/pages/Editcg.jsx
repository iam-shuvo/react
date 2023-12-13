import axios from "axios";
import React, {useState, useEffect }from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editcg()
{   
    const navigate= useNavigate();  
    const {id}=   useParams();
    const [formvalue, setFormvalue]= useState({username:'', email:'', status:'', password:''});
    const [message, setMessage]= useState('');

    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

    useEffect( ()=>{
        const userRowdata= async()=>{
         const getUserdata= await fetch("http://localhost/react-project_crude/react-project/api/user.php"+id);
         const resuserdata= await getUserdata.json();        
         setFormvalue(resuserdata);
        }
        userRowdata();
    },[]);

    const handleSubmit =async(e)=>{
         e.preventDefault();
         //console.log(formvalue);
         const formData= {id:id,username:formvalue.username, email:formvalue.email, status:formvalue.status, password:formvalue.password}; 
         const res= await axios.put("http://localhost/react-project_crude/react-project/api/user.php",formData);
         //let jsonres= res.data.json();        
           if(res.data.success)
           {
            setMessage(res.data.success);
            setTimeout( ()=>{               
                navigate('/userlist');
            }, 2000);
           
           }
        }   
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Update User </h5> 
                        <p className="text-sucess"> { message }</p>                 
                         <form onSubmit={ handleSubmit}>
                            <div className="mb-3 row">
                            <label className="col-sm-2">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="username" value={formvalue.username} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Email</label>
                            <div className="col-sm-10">
                            <input type="text" name="email" value={formvalue.email} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-2">Status</label>
                            <div className="col-sm-10">
                            <select name="status" className="form-control" value={formvalue.status} onChange={ handleInput}>
                                <option value="">--Select Status--</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                            </div>
                            
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">password</label>
                            <div className="col-sm-10">
                            <input type="text" name="password" value={formvalue.password} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-2"></label>
                            <div className="col-sm-10">
                           <button  name="submit" className="btn btn-success">Update</button>
                            </div>
                            </div>

                         </form>
      
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Editcg()
;