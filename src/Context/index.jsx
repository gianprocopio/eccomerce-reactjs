import React, {createContext, useState} from 'react';

export const Context = createContext()


function ContextProvider({children}) {
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [productCard, setProductCard] = useState({});
  
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
      setProductCard
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider