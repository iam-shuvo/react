import React from 'react'

function login_edit() {
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
            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        </form>
    </div>
</div>
  )
}

export default login_edit