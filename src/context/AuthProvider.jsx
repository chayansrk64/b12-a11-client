import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const user = {
        name: 'manik'
    }
    const authData = {
        user
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;