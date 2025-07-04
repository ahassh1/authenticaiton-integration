import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) =>{

    const [user, setUser]= useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, (currentUser) =>{
    //     if(currentUser){
    //         console.log('has current user', currentUser);
    //     }
    //     else{
    //         console.log('current user', currentUser);
    //     }
    // })
   
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside useEffect on auth state change',currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe;
        }
     })
    const userInfo = {
            // email: 'polashhabib@gmail.com'
            user,
            createUser,
            signInUser
}


    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;