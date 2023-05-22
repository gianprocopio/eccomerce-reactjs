import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItemMobile({path, title, setOpen, open}) {
    const activeStyleMobile = 'hover:text-blue-600 duration-300';
  return (
    <li className={activeStyleMobile} onClick={()=>setOpen(!open)}>
                <NavLink 
                to={path}
                className={({isActive}) =>
                    isActive ? "text-blue-600": undefined
                }>
                    {title}
                </NavLink>
            </li>
  )
}

export default NavItemMobile