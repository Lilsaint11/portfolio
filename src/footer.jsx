import { NavLink } from 'react-router-dom';

const Footer = () => {
    return ( 
       <div className="bg-black flex flex-col justify-center items-center text-center py-3">
         <div className="flex w-full justify-around p-5 text-white z-1">
           <NavLink to='/about' className='hover:scale-125 transition duration-300'>About</NavLink>
           <NavLink to='/contact' className='hover:scale-125 transition duration-300'>Contact</NavLink>
           <NavLink to='/projects' className='hover:scale-125 transition duration-300'>Projects</NavLink>
         </div>
         <p className='text-white z-1 font-mono'>Portolio built with <span className='text-slate-300'>Reactjs + vite</span> and <span className='text-slate-300'>Tailwindcss</span></p>
       </div>
     );
}
 
export default Footer;