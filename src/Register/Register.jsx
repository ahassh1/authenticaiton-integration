import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase.init';

const Register = () => {
    const handleRegister= e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password= e.target.password.value;
        console.log(name , photoURL, email, password);

        // create user 
        createUserWithEmailAndPassword(auth,email, password, name, photoURL)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
      <h1 className="text-3xl text-center font-bold">Register now!</h1>
      <div className="card-body">
        <form onClick={handleRegister} className="fieldset">
                <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
              <label className="label">Photo URL</label>
          <input type="text" name='photoURL' className="input" placeholder="photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>You have already have an account ? Please <Link className="text-blue-500 underline" to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;