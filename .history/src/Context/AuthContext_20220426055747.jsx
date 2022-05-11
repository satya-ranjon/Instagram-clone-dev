import { async } from "@firebase/util";
import React, { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unSubscribe;
  }, []);

  // signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth, currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }

  // sign && login google
  const db = getFirestore();
  const googleAuthProvider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {})
      .catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  // login function
  async function login(email, passowrd) {
    return signInWithEmailAndPassword(auth, email, passowrd);
  }

  // logout function
  function logout() {
    return signOut(auth);
  }
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
