import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItemDesktop({path, title}) {
    const activeStyle = 'hover:text-blue-600 duration-300 mx-3';
  return (
    <li className={activeStyle}>
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

export default NavItemDesktop