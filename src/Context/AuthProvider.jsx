import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Components/Firebase/firebase.config';

export const MyContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const hendleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handeSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ! logged user k khuje ber korbo ekhn
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
            }
        })
    }, [])

    const contextProperty = {
        user,
        hendleSignUp,
        handeSignIn,
    };

    return (
        //? Tower for context API
        <MyContext.Provider value={contextProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider