import React, {createContext, useState} from 'react';

export const Context = createContext()


function ContextProvider({children}) {
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [productCard, setProductCard] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [openCartAside, setOpenCartAside] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  
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
      addToCart
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider