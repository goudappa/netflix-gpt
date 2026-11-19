import React, { useRef, useState } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLoggedIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  const toggleSignIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg"
          alt="Netflix Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 p-8 bg-black bg-opacity-70 rounded w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-2xl font-bold text-white mb-4">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
        />
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        <button
          className="p-2 m-2 w-full bg-red-600 text-white rounded"
          type="submit"
          onClick={handleButtonClick}
        >
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-gray-400 text-sm mt-4 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isLoggedIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
