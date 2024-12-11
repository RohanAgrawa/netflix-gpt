import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleUser = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
        alt="background"
        className="absolute"
      />

      <form className="bg-black text-white p-8 w-3/12 absolute my-40 mx-auto left-0 right-0 rounded-xl opacity-80">
        <h1 className="font-bold text-2xl">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-900 rounded-md"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-900 rounded-md"
        ></input>
        <input
          type="password"
          placeholder="Passoword"
          className="p-2 my-4 w-full  bg-gray-900 rounded-md"
        ></input>
        <button className="bg-red-600 p-2 my-4 w-full rounded-md">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>

        <p onClick={handleUser} className="cursor-pointer py-4">
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a registered user? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
