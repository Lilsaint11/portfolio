import React, {useState} from 'react';
import { FaEnvelope, FaGithub,FaLinkedin, FaTwitter } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    const [menuClass, setMenuClass] = useState("sm:flex gap-6 text-slate-800 hidden")
    const [burgerClicked, setBurgerClicked] = useState(false)

    const dislayMenu = () => {
        setBurgerClicked((i) => !i);
        if(!burgerClicked) {
            setMenuClass("flex flex-col gap-2 absolute top-5 text-slate-800 visible transition duration-300")
        }else{
            setMenuClass("sm:flex gap-6 text-slate-800 hidden")
        }
    }

    const activeClassName='text-black font-bold ';
    return ( 
        <div className="flex justify-between sm:px-20 max-[400px]:px-5 max-[350px]:px-3 px-10 z-1 items-center">
            <NavLink to='/'><h1 className="max-[350px]:text-2xl max-[300px]:text-xl text-3xl font-bold">Stephen.</h1></NavLink>
            <div className="flex gap-5 text-slate-500"> 
                <NavLink to ="/"  className={({ isActive }) => isActive ? activeClassName : "text-slate-500 hover:scale-125 transition duration-300"}>Home</NavLink>
                <NavLink to="/projects"  className={({ isActive }) => isActive ? activeClassName :"text-slate-500 hover:scale-125 transition duration-300"}>Projects</NavLink>
            </div>
            <div className='flex flex-col gap-5 relative'>
                <div className="sm:hidden block" onClick={dislayMenu}>
                    {burgerClicked ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </div>
                <div className={menuClass}>
                <Link to='https://twitter.com/apostlelilsaint' className='hover:opacity-70 transition duration-300'><FaTwitter /></Link> 
                <Link to='https://linkedin.com/in/stephen-obisesan-898a5524b' className='hover:opacity-70 transition duration-300'><FaLinkedin /></Link>
                <Link to='mailto: saintobis11@gmail.com' className='hover:opacity-70 transition duration-300'><FaEnvelope /></Link>
                <Link to='https://github.com/Lilsaint11' className='hover:opacity-70 transition duration-300'><FaGithub /></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Header;