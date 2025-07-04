import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {

  const {signInUser} = use(AuthContext)

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    console.log(email, password);

    // login user 
    signInUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error);
    })
 
  }
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to the site ? Please <Link className="text-blue-500 underline" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
