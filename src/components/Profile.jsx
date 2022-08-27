import React, { useContext } from "react";
import FirebaseLoginContext from "../contexts/FirebaseLoginContext";

function Profile() {
  const {
    userName,
    userPicture,
    userEmail,
    isLoggedIn,
    handleLogin,
    handleLogout,
  } = useContext(FirebaseLoginContext);

  return (
    <div className="w-full h-auto bg-white border-solid border border-slate-300 rounded-xl flex items-center justify-between p-4 shadow-md">
      {isLoggedIn ? (
        <div className="flex items-center justify-center">
          <img
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-full mr-4 border-solid border-blue-500 border-2"
            src={userPicture}
            alt=""
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="font-semibold">{userName}</h1>
            <h3>{userEmail}</h3>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="font-semibold">Please log in to see your profile</h1>
        </div>
      )}
      {isLoggedIn ? (
        <button onClick={handleLogout}>
          <img
            referrerPolicy="no-referrer"
            className="sm:w-6 sm:h-6 w-4 h-4"
            src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
            alt=""
          />
        </button>
      ) : (
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      )}
    </div>
  );
}

export default Profile;
