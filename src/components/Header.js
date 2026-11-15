import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // Implement sign-out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <img
        className="w-44 absolute top-4 left-4"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg"
        alt="Netflix background"
      />
      {user && (
        <div className="flex items-center gap-4 absolute top-4 right-4">
          <img src={user?.photoURL} alt="user icon" />
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
