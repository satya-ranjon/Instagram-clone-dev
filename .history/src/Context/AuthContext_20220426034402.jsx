import { async } from "@firebase/util";
import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  // signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth, currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }

  // login function
  async function login(email, passowrd) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth);
  }

  const value = {};

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
