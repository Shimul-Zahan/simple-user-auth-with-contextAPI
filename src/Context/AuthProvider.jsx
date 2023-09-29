import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Components/Firebase/firebase.config';
import { Navigate } from 'react-router-dom';

export const MyContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const hendleSignUp = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handeSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    // const setProfile = () => {
    //     const currUser = auth.currentUser;
    //     console.log(currUser)
    //     // if (currUser !== null) {

    //     // }
    // }

    // ! logged user k khuje ber korbo ekhn
    useEffect(() => {
        const subScribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
            console.log('logged user',currentUser)
        })
        return () => {
            subScribe();
        }
    }, [])

    const handleLogOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    const contextProperty = {
        user,
        hendleSignUp,
        handeSignIn,
        handleLogOut,
        isLoading,
        // setProfile,
    };

    return (
        //? Tower for context API
        <MyContext.Provider value={contextProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider