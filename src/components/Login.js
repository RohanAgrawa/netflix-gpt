import { useRef, useState } from "react";
import Header from "./Header";
import { validateUser } from "../utility/ValidateUser";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [validateMessage, setValidateMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleUser = () => {
    const message = validateUser(email.current.value, password.current.value);
    setValidateMessage(message);

    if (message) {
      return;
    }

    if (isSignIn) {
      dispatch(addUser({ email: email.current.value }));
    } else {
      dispatch(addUser({ email: email.current.value }));
    }
    navigate("/browse");
  };

  const toggleUser = () => {
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white p-8 w-3/12 absolute my-40 mx-auto left-0 right-0 rounded-xl opacity-80"
      >
        <h1 className="font-bold text-2xl">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-900 rounded-md"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-900 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Passoword"
          className="p-2 my-4 w-full  bg-gray-900 rounded-md"
        ></input>
        {validateMessage && (
          <p className="font-bold text-red-400 text-md py-3">
            {validateMessage}
          </p>
        )}
        <button
          className="bg-red-600 p-2 my-4 w-full rounded-md"
          onClick={handleUser}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>

        <p onClick={toggleUser} className="cursor-pointer py-4">
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a registered user? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
