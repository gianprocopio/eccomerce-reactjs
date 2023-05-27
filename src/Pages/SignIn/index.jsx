import React, {useContext, useState} from 'react';
import Layout from '../../Components/Layout';
import {Context} from "../../Context"

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// Context:

  const [wrongUserName, setWrongUserName] = useState(false);
  const [wrongUserEmail, setWrongUserEmail] = useState(false);
  const [wrongUserPassword, setWrongUserPassword] = useState(false);
  const {setUserData, setAuthenticated, setUserPassword, setUserEmail, setUserName, userData} = useContext(Context);

  const saveAuthenticationLocalStorage = (value)=>{
    localStorage.setItem("Authenticated", value);
    setAuthenticated(value);
  }
  const saveUserDataLocalStorage = (data)=>{
    localStorage.setItem("userData", JSON.stringify(data));
    setUserData(data)
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPassword(userData.password);
    console.log(userData);
  }

  const signInUser = (e)=>{
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      password: password
    }
    
    if(name.length < 5){
      setWrongUserName(true)
    }else if(!email.includes('@') || !email.includes('.com')){
      setWrongUserEmail(true);
    }else if(password.length < 5){
      setWrongUserPassword(true);
    }else{
      saveUserDataLocalStorage(data)
      saveAuthenticationLocalStorage(true)
    }
  }
  
  console.log(userData);
  return (
    <Layout>
      <h2 className='font-medium text-2xl text-center fixed top-20'>Welcome to Gian's!</h2>
      <form className='flex flex-col gap-3 w-full' onSubmit={signInUser}>
            <div className='flex flex-col'>
            <label className='font-medium text-lg'>Username</label>
            <input type="text" placeholder='Username' className='border border-black rounded-lg p-2 outline-none w-80' onChange={e => setName(e.target.value)}/>
            {wrongUserName && <p className='text-sm text-red-600'>Username must have more than 5 characters</p>}
            </div>
            <div className='flex flex-col'>
            <label className='font-medium text-lg'>Email</label>
            <input type="text" placeholder='Email' className='border border-black rounded-lg p-2 outline-none' onChange={e => setEmail(e.target.value)}/>
            {wrongUserEmail && <p className='text-sm text-red-600'>Email invalid</p>}
            </div>
            <div className='flex flex-col'>
            <label className='font-medium text-lg'>Password</label>
            <input type="text" placeholder='Password' className='border border-black rounded-lg p-2 outline-none' onChange={e => setPassword(e.target.value)}/>
            {wrongUserPassword && <p className='text-sm text-red-600'>Password must have more than 5 characters</p>}
            </div>
            <button 
            className='border border-black w-full bg-black text-white p-2 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-200'
            onClick={signInUser}
            >Log In</button>
          </form>
    </Layout>
  )
}

export default SignIn