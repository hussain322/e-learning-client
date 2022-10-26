import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Create Account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { createUser, signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
