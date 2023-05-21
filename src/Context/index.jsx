import React, {createContext, useState} from 'react';

export const ShoppingCartContext = createContext()


function ShoppingCartProvider({children}) {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <ShoppingCartContext.Provider
    value={{
      counter,
      setCounter
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider