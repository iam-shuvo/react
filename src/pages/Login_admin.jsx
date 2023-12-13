import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Admin_tb from './admin_tb';
import { useNavigate } from 'react-router-dom';

function Login_admin() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/addside');
    }
  return (
    <div class="container">
        <div class="d-flex justify-content-center">
            <form class="border p-5 m-5 bg-" method="post">
                <h2>login form</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                </div><br/>
                <button type="submit" class="btn btn-primary" name="submit" onClick={handleClick}  >Submit</button>
            </form>
        </div>
   </div>
  )
}
export default Login_admin