import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
import React from 'react';
import { useState } from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const [image, setImage] = useState(burger);
    const [top, setTop] = useState("top-[-500px]")


    const handleClick = () =>{
        if(image === burger){
            setImage(close)
            setTop("top-20")
        }else{
            setImage(burger)
            setTop("top-[-500px]")  
        }

    }
    

    return (
        <React.Fragment>
        <nav className="navbar bg-white p-4 px-7 z-10">
            <div className='flex max-w-6xl items-center justify-between'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="items-center hidden md:flex gap-6">
                            <NavLink to="/" className="">Home</NavLink>
                            <NavLink to="/About"  className="">About</NavLink>
                            <NavLink to="/Contact"  className="">Contact</NavLink>                    
                            <NavLink to="/Blog"  className="">Blog</NavLink>                     
                            <NavLink to="/Careers" className="">Careers</NavLink>
                       
                </div>
                <div className="request bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan px-4 py-2 rounded-full font-bold text-sm hidden md:block">Request Invite</div>
                <div onClick={ handleClick} className="block md:hidden">
                    <img src={image} alt="burger" className='md:hidden'/>
                </div>
            </div>
            <div className={`fix ${top} z-10 lg:hidden`}>
                <NavLink to="/" className="">Home</NavLink>
                <NavLink to="/About" className="">About</NavLink>
                <NavLink to="/Contact" className="">Contact</NavLink>                    
                <NavLink to="/Blog" className="">Blog</NavLink>                     
                <NavLink to="/Careers" className="">Careers</NavLink>
            </div>
        </nav>
        </React.Fragment>
     );
}
// {({isActive}) => isActive ? activeLink : normalLink}
export default Navbar;