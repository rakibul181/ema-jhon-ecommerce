import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

    const[user, setUser] = useState({})
    const[loding, setLoding] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const userLogOut = () =>{
        setLoding(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (createUser)=>{
            setUser(createUser)
            setLoding(false)
        })
        return ()=> unSubscribe()
    },[])
    const authInfo = {user,loding, createUser, userLogin, userLogOut}
    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default UserContext;