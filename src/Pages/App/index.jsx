import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "../../Context"
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar/Menu";
import ShoppingCart from "../../Components/ShoppingCart";
import Notification from "../../Components/Notification";
import './App.css';

const AppRoutes = ()=>{
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/my-account",
      element: <MyAccount />
    },
    {
      path: "/my-orders",
      element: <MyOrders />
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/*",
      element: <NotFound />
    }
  ])

  return routes;
}

function App() {
  return(
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <ShoppingCart/>
        <Notification/>
      </BrowserRouter>
    </ShoppingCartProvider>
   
  )
}

export default App
