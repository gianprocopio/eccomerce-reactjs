import React, {createContext, useState, useEffect} from 'react';

export const Context = createContext()


function ContextProvider({children}) {
  const localStorageAuthentication = localStorage.getItem("Authenticated");
  let parsedAuthentication;
  if(localStorageAuthentication === "true"){
    parsedAuthentication = JSON.parse(true);
  }else{
    localStorage.setItem("Authenticated", JSON.stringify(false))
  }

  const localStorageUserData = localStorage.getItem("userData");
  let parsedUserData;
  if(localStorageUserData){
    parsedUserData = JSON.parse(localStorageUserData);
  }else{
    localStorage.setItem("Authenticated", JSON.stringify({}))
  }


  const [authenticated, setAuthenticated] = useState(parsedAuthentication);
  const [userData, setUserData] = useState(parsedUserData || {});
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [searchValue, setSearchValue] = useState('');


  const fetchData = async ()=>{
    try{
      const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=185");
      const data = await response.json();
      setProducts(data)
      setLoading(true)
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      fetchData()
    }, 800)
  }, [])

useEffect(()=>{
  setUserName(userData.name);
  setUserEmail(userData.email);
  setUserPassword(userData.password);
}, [userData])
  

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
      setOrder,
      products,
      setProducts,
      loading,
      setSearchValue,
      searchValue,
      authenticated,
      setAuthenticated,
      userData,
      setUserData,
      userName,
      setUserName,
      userEmail,
      setUserEmail,
      userPassword,
      setUserPassword
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider