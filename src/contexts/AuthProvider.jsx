import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) =>{
    const userInfo = {
            email: 'polashhabib@gmail.com'

}


    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;