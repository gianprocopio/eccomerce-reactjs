import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';

function MyAccount() {
  const {setAuthenticated, setUserData, userPassword, userName, userEmail, setOrder} = useContext(Context);

  const saveAuthenticationLocalStorage = (value)=>{
    localStorage.setItem("Authenticated", JSON.stringify(value));
    localStorage.setItem("userData", JSON.stringify({}))
    setAuthenticated(value);
    setUserData({})
  }

  const saveItemsLocalStorage = (newItems)=>{
    localStorage.setItem("ORDERS",JSON.stringify(newItems))
    setOrder(newItems)
}

const logOut = ()=>{
  saveAuthenticationLocalStorage(false);
  saveItemsLocalStorage([])
  }

  return (
    <Layout>
        <h2 className='text-center font-bold text-2xl mb-5'>My Account</h2>
      <div className='flex flex-col justify-center w-80 gap-1'>
        <p className='font-light'>Username: <span className='font-medium'>{userName}</span></p>
        <p className='font-light'>Email: <span className='font-medium'>{userEmail}</span></p>
        <p className='font-light mb-3'>Password: <span className='font-medium'>{userPassword}</span></p>
        <Link to={"/"}>
        <button className='bg-black text-white rounded-lg p-2 w-full border border-black hover:bg-white hover:text-black animation-all duration-200' onClick={logOut}>Log Out</button>
        </Link>
      </div>
    </Layout>
    )
}

export default MyAccount