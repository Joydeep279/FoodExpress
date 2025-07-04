import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import MainBody from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import Shimmer from "./Components/Shimmer";
import { useContext } from "react";
import userInfo from "./utils/UserContext";
console.log("App.js Called");
const Cart = lazy(() => import("./Components/Cart"));
console.log(Cart);

const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    //API call
    setUserName("");
  },[]);
  return (
    <userInfo.Provider value={{ name: userName, setUserName }}>
      <div className="main-layout">
        <Header />
        <Outlet />
      </div>
    </userInfo.Provider>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restrurant/:resId",
        element: <Menu />,
      },
      {
        path: "/cart",

        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRoute} />);
