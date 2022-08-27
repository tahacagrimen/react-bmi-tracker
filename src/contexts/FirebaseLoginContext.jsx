import React, { createContext, useState, useEffect, useContext } from "react";

import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const FirebaseLoginContext = createContext();

export function FirebaseLoginProvider({ children }) {
  const [userUid, setUserUid] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userPicture, setUserPicture] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [chartDate, setChartDate] = useState([]);
  const [chartBmi, setChartBmi] = useState([]);

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
        setUserName("");
        setUserPicture("");
        setUserEmail("");
        setUserUid("");
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
  }, []);

  useEffect(() => {
    async function getUserData() {
      const colRef = collection(db, userUid);
      const q = query(colRef, orderBy("date"));
      onSnapshot(q, (snapshot) => {
        setUserData(snapshot.docs.map((doc) => doc.data()));
        setChartBmi(snapshot.docs.map((doc) => doc.data().bmi));
        setChartDate(snapshot.docs.map((doc) => doc.data().date));
      }).bind(this);
    }
    getUserData();
  }, [userUid]);

  useEffect(() => {
    console.log(chartDate);
    console.log(chartBmi);
  }, [userData]);

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
        userData,
        setUserData,
        chartDate,
        setChartDate,
        chartBmi,
        setChartBmi,
      }}
    >
      {children}
    </FirebaseLoginContext.Provider>
  );
}

export default FirebaseLoginContext;
