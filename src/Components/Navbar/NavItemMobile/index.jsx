import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItemMobile({path, title, setOpen, open}) {
    const activeStyleMobile = 'mx-3, hover:underline';
  return (
    <li className={activeStyleMobile} onClick={()=>setOpen(!open)}>
                <NavLink 
                to={path}
                className={({isActive}) =>
                    isActive ? "underline": undefined
                }>
                    {title}
                </NavLink>
            </li>
  )
}

export default NavItemMobile