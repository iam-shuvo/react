import axios from "axios";
import React, {useState }from "react";
import { useNavigate } from "react-router-dom";

function Addpg()
{   
    const navigate= useNavigate();    
    const [formvalue, setFormvalue]= useState({pgname:'', email:'',password:''});
    const [message, setMessage]= useState('');
    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

    const handleSubmit =async(e)=>{
         e.preventDefault();
         //console.log(formvalue);
         const formData= {pgname:formvalue.pgname, email:formvalue.email, password:formvalue.password}; 
         const res= await axios.post("http://localhost/react-project_crude/react-project/api/photo.php",formData);
         //let jsonres= res.data.json();        
           if(res.data.success)
           {
            setMessage(res.data.success);
            setTimeout( ()=>{               
                navigate('/pglist');
            }, 2000);
           
           }
        }   
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Add Photographer </h5> 
                        <p className="text-sucess"> { message }</p>                 
                         <form onSubmit={ handleSubmit}>
                            <div className="mb-3 row">
                            <label className="col-sm-2">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="pgname" value={formvalue.pgname} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Email</label>
                            <div className="col-sm-10">
                            <input type="text" name="email" value={formvalue.email} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Password</label>
                            <div className="col-sm-10">
                            <input type="text" name="password" value={formvalue.password} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-2"></label>
                            <div className="col-sm-10">
                           <button  name="submit" className="btn btn-success">Submit</button>
                            </div>
                            </div>

                         </form>
      
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Addpg;