import { useRef, useState } from "react";
import Header from "./Header";
import { validateUser } from "../utility/validateUser";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { LOGIN_BG } from "../utility/constant";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [validateMessage, setValidateMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleUser = () => {
    const message = validateUser(email.current.value, password.current.value);
    setValidateMessage(message);

    if (message) {
      return;
    }

    if (isSignIn) {
      dispatch(addUser({ email: email.current.value }));
      window.localStorage.setItem("email", email.current.value);
    } else {
      dispatch(addUser({ email: email.current.value }));
    }
  };

  const toggleUser = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img src={LOGIN_BG} alt="background" className="absolute" />

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
