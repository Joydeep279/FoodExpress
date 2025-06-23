import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import MainBody from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
console.log("App.js Called");

const AppLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
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
        path:"/restrurant/:resId",
        element:<Menu/>
      }
    ],
  },
]);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRoute} />);
