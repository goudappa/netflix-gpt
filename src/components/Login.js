import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <form className="absolute z-10 p-8 bg-black bg-opacity-70 rounded w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-bold text-white mb-4">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full border border-gray-300 bg-gray-800 text-gray-300 placeholder:text-gray-500 rounded"
        />
        <button
          className="p-2 m-2 w-full bg-red-600 text-white rounded"
          type="submit"
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
