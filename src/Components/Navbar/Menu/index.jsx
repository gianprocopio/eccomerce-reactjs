import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {BsCart3} from "react-icons/bs"
import NavItemDesktop from '../NavItemDesktop';
import NavItemMobile from "../NavItemMobile";
import { ShoppingCartContext } from '../../../Context';

function Navbar() {
    const [open, setOpen] = useState(false);
    const context = useContext(ShoppingCartContext)

  return (
    <nav className='bg-white flex fixed z-10 w-full py-6 px-5 text-md items-center justify-between top-0'>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in opacity-0 lg:opacity-100`}>
            <li className='font-semibold text-lg pl-4'>
                <NavLink 
                to="/">
                    Gian's
                </NavLink>
            </li>

            <NavItemDesktop 
            path={"/clothes"}
            title={"Clothes"}
            />
            <NavItemDesktop 
            path={"/electronics"}
            title={"Electronics"}
            />
            <NavItemDesktop 
            path={"/furniture"}
            title={"Furniture"}
            />
            <NavItemDesktop 
            path={"/toys"}
            title={"Toys"}
            />
            <NavItemDesktop 
            path={"/others"}
            title={"Others"}
            />
        </ul>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in opacity-0 lg:opacity-100`}>
            <NavItemDesktop 
            path={"/my-orders"}
            title={"My Orders"}
            />
            <NavItemDesktop 
            path={"/my-account"}
            title={"My Account"}
            />
            <NavItemDesktop 
            path={"/sign-in"}
            title={"Sign In"}
            />
            <li className="flex items-center gap-1 pr-5 pl-4 cursor-pointer text-xl">
                <BsCart3 />
                <p>{context.counter}</p>
            </li>
        </ul>
            <span className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden' onClick={()=>setOpen(!open)}>
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
            </span>


            <ul className={`mr-2 text-white absolute bg-blue-600 w-44 h-100 py-8 px-8 top-28 transition-all duration-300 lg:hidden ${open ? "flex flex-col justify-center items-left right-0 gap-2":"right-[-1500px]"}`}>
            <li className='font-semibold text-lg m-auto' onClick={()=>setOpen(!open)}>
                <NavLink 
                to="/">
                    Gian's
                </NavLink>
            </li>

            <NavItemMobile
            path={"/clothes"}
            title={"Clothes"}
            setOpen={setOpen}
            open={open}
            />
            <NavItemMobile
            path={"/electronics"}
            title={"Electronics"}
            setOpen={setOpen}
            open={open}
            />
            <NavItemMobile
            path={"/furniture"}
            title={"Furniture"}
            setOpen={setOpen}
            open={open}
            />
            <NavItemMobile
            path={"/toys"}
            title={"Toys"}
            setOpen={setOpen}
            open={open}
            />
            <NavItemMobile
            path={"/others"}
            title={"Others"}
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
            <NavItemMobile
            path={"/sign-in"}
            title={"Sign In"}
            setOpen={setOpen}
            open={open}
            />
            <li className="flex items-center gap-1 pr-5 pl-4 cursor-pointer text-xl" onClick={()=>setOpen(!open)}>
                <BsCart3 />
                <p>{context.counter}</p>
            </li>
            </ul>
    </nav>
  )
}

export default Navbar