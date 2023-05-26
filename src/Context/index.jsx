import React, {createContext, useState} from 'react';

export const Context = createContext()


function ContextProvider({children}) {
  const [open, setOpen] = useState(false);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [productCard, setProductCard] = useState({});
  const [openCartAside, setOpenCartAside] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  const localStorageOrders = localStorage.getItem("ORDERS");
  let parsedOrders;
  if(localStorageOrders){
    parsedOrders = JSON.parse(localStorageOrders);
  }else{
    localStorage.setItem("ORDERS", JSON.stringify([]))
  }

  const [order, setOrder] = useState(()=>parsedOrders || []);

  const localStorageItems = localStorage.getItem("PRODUCTS");
  let parsedItems;
  if(localStorageItems){
    parsedItems = JSON.parse(localStorageItems);
  }else{
    localStorage.setItem("PRODUCTS", JSON.stringify([]))
  }


  
  const [cartProducts, setCartProducts] = useState(()=>{
    return parsedItems || []
  });
  const [counter, setCounter] = useState(cartProducts.length);
  
  return (
    <Context.Provider
    value={{
      counter,
      setCounter,
      open,
      setOpen,
      openProductDetail,
      setOpenProductDetail,
      productCard,
      setProductCard,
      setCartProducts,
      cartProducts,
      openCartAside, 
      setOpenCartAside,
      setOpenNotification,
      openNotification,
      setAddToCart,
      addToCart,
      order,
      setOrder
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider