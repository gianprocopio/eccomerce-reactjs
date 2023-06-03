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
      path: "/electronics",
      element: <UseCertainCategory catTitle={"Electronics"}
      cat={"electronics"} />
    },,
    {
      path: "/jewelery",
      element: <UseCertainCategory catTitle={"Jewelery"}
      cat={"jewelery"} />
    },,
    {
      path: "/menclothing",
      element: <UseCertainCategory catTitle={"Men's clothing"} 
      cat={"men's clothing"}/>
    },,
    {
      path: "/womenclothing",
      element: <UseCertainCategory catTitle={"Women's clothing"}
      cat={"women's clothing"}
      />
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
