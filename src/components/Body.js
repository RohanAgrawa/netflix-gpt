import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  const userEmail = window.localStorage.getItem("email");
  const dispatch = useDispatch();
  if (userEmail) {
    dispatch(addUser({ email: userEmail }));
  }
  return <RouterProvider router={appRoutes} />;
};

export default Body;
