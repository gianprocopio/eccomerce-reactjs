import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {BsCart3} from "react-icons/bs"
import NavItemDesktop from '../NavItemDesktop';
import NavItemMobile from "../NavItemMobile";
import { Context } from '../../../Context';
import "./index.css"
import Layout from '../../Layout';
import SignIn from '../../../Pages/SignIn';

function Navbar() {
    const {open, setOpen, openCartAside, setOpenCartAside, setOpenProductDetail, authenticated} = useContext(Context)
    const context = useContext(Context)

    const Render = ()=>{
        if(authenticated){
            return (
                <nav className='bg-white flex fixed z-10 w-full py-6 px-5 text-md items-center justify-between top-0'>
                <ul className={`md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in hidden lg:flex`}>
                    <li className='font-semibold text-lg pl-4'>
                        <NavLink 
                        to="/">
                            Gian's
                        </NavLink>
                    </li>
        
                    <NavItemDesktop 
                    path={"/electronics"}
                    title={"Electronics"}
                    />
                    <NavItemDesktop 
                    path={"/jewelery"}
                    title={"Jewelery"}
                    />
                    <NavItemDesktop 
                    path={"/menclothing"}
                    title={"Men's clothing"}
                    />
                    <NavItemDesktop 
                    path={"/womenclothing"}
                    title={"Women's clothing"}
                    />
                </ul>
        
                <ul className={`md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in hidden lg:flex`}>
                    <NavItemDesktop 
                    path={"/my-orders"}
                    title={"My Orders"}
                    />
                    <NavItemDesktop 
                    path={"/my-account"}
                    title={"My Account"}
                    />
                    
                    <li className="flex items-center gap-1 pr-5 pl-4 cursor-pointer text-md" onClick={()=>{
                        setOpenCartAside(true);
                        setOpenProductDetail(false);
                        }}>
                        <BsCart3 />
                        <p className='bg-cyan-600 text-white h-6 w-6 rounded-2xl text-center'>{context.cartProducts.length}</p>
                    </li>
                </ul>
                    <span className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden' onClick={()=>{
                        setOpen(!open);
                        setOpenCartAside(false);
                        setOpenProductDetail(false);
                        }}>
                    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                    </span>
        
        
                    <ul className={`mobile-menu bg-white text-xl mr-2 fixed py-8 px-8 top-28  lg:hidden border border-black rounded-lg ${open ? "flex flex-col justify-center items-left right-0 gap-2":"right-[-1500px]"}`}>
                    <li className='font-semibold text-2xl m-auto' onClick={()=>setOpen(!open)}>
                        <NavLink 
                        to="/">
                            Gian's
                        </NavLink>
                    </li>
        
                    <NavItemMobile
                    path={"/electronics"}
                    title={"Electronics"}
                    setOpen={setOpen}
                    open={open}
                    />
                    <NavItemMobile
                    path={"/jewelery"}
                    title={"Jewelery"}
                    setOpen={setOpen}
                    open={open}
                    />
                    <NavItemMobile
                    path={"/menclothing"}
                    title={"Men's clothing"}
                    setOpen={setOpen}
                    open={open}
                    />
                    <NavItemMobile
                    path={"/womenclothing"}
                    title={"Women's clothing"}
                    setOpen={setOpen}
                    open={open}
                    />
                    <NavItemMobile
                    path={"/my-orders"}
                    title={"My Orders"}
                    setOpen={setOpen}
                    open={open}
                    />
                   <NavItemMobile
                    path={"/my-account"}
                    title={"My Account"}
                    setOpen={setOpen}
                    open={open}
                    /> 
                    <li className="flex items-center gap-1 pr-5 cursor-pointer text-xl" onClick={()=>{
                        setOpen(!open)
                        setOpenCartAside(true)}
                        }>
                        <BsCart3 />
                        
                        <p className='bg-cyan-600 text-white h-7 w-7 rounded-2xl text-center'>{context.cartProducts.length}</p>
                        
                    </li>
                    </ul>
            </nav>
            )
        }
    }


  return (
   <Render/>
  )
}

export default Navbar