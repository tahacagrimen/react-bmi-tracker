import React, { useContext } from "react";
import FirebaseLoginContext from "../contexts/FirebaseLoginContext";

function Profile() {
  const {
    userUid,
    userName,
    userPicture,
    userEmail,
    isLoggedIn,
    handleLogin,
    handleLogout,
  } = useContext(FirebaseLoginContext);

  console.log(userPicture);

  return (
    <div className="w-full h-auto border-solid border border-slate-300 rounded-xl flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center justify-center">
        <img
          className="w-12 h-12 rounded-full mr-4 border-solid border-blue-500 border-2 shadow-xl"
          src={userPicture}
          alt=""
        />
        <div className="flex flex-col items-start justify-start">
          <h1 className="">{userName}</h1>
          <h3>{userEmail}</h3>
        </div>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>
          <img
            className="sm:w-6 sm:h-6 w-4 h-4"
            src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
            alt=""
          />
        </button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Profile;
