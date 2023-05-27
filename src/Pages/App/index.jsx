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
import UseCertainCategory from "../../Components/UseCertainCategory";
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
      path: "/clothes",
      element: <UseCertainCategory cat={"Clothes"} />
    },,
    {
      path: "/electronics",
      element: <UseCertainCategory cat={"Electronics"} />
    },,
    {
      path: "/furniture",
      element: <UseCertainCategory cat={"Furniture"} />
    },,
    {
      path: "/shoes",
      element: <UseCertainCategory cat={"Shoes"} />
    },,
    {
      path: "/others",
      element: <UseCertainCategory cat={"Others"} />
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
