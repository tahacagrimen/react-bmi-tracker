import React, { createContext, useState, useEffect } from "react";

import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseLoginContext = createContext();

export function FirebaseLoginProvider({ children }) {
  const [userUid, setUserUid] = useState("");
  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserUid(user.uid);
        setUserName(user.displayName);
        setUserPicture(user.photoURL);
        setUserEmail(user.email);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
        setUserName(user.displayName);
        setUserPicture(user.photoURL);
        setUserEmail(user.email);
        setIsLoggedIn(true);
      } else {
        handleLogout();
      }
    }).bind(this);
  }, [userUid]);

  return (
    <FirebaseLoginContext.Provider
      value={{
        userUid,
        userName,
        userPicture,
        userEmail,
        isLoggedIn,
        handleLogin,
        handleLogout,
        setUserUid,
        setUserName,
        setUserPicture,
        setUserEmail,
        setIsLoggedIn,
      }}
    >
      {children}
    </FirebaseLoginContext.Provider>
  );
}

export default FirebaseLoginContext;
