import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Admin_tb from './admin_tb';
import { useNavigate } from 'react-router-dom';
function Sign_ad() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/admin_tb');
    }
  return (
    <div>   <div class="container">
    <div class="d-flex justify-content-center">
        <form class="border p-5 m-5 bg-" method="post">
            <h2>Sign-Up form</h2>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" name="adname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Admin Name"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Contact</label>
                <input type="text" class="form-control" name="adcon" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Admin Contact"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" name="admail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" name="apass" id="exampleInputPassword1" placeholder="Password"/>
            </div><br/>
            <button type="submit" class="btn btn-primary" name="submit" onClick={handleClick}  >Submit</button>
            <br />
           <p> Already have an account ?</p> 
           <button style={{backgroundColor:"transparent"}}onClick={handleClick}>Sign-up</button>
           
        </form>
    </div>
</div></div>
  )
}

export default Sign_ad