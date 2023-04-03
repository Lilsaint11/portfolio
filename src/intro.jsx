import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useRef, useLayoutEffect,useEffect } from 'react';
import Typed from 'typed.js';


const Intro = () => {
    const buttonRef = useRef(null);
    useLayoutEffect(() => {
        let el = buttonRef.current;
        let ctx = gsap.context(() => {
            gsap.to(el,{opacity:1, duration:2,delay:4.5})
        });
        setTimeout(() => {
                el.classList.add('animate-pulse')
            }, 4500)
        return () => ctx.revert();
    },[])

    const el2 = useRef(null);
    useEffect(() => {
  
      const typed = new Typed(el2.current, {
        strings: ["Hi there, I'm Stephen, a Front-End developer."],
        typeSpeed:70,
        showCursor: false,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
    return ( 
        <div className="sm:px-20 max-[400px]:px-5 px-10 z-1 ">
            <h1 className="main sm:text-5xl max-[400px]:text-2xl text-4xl font-bold max-w-xl mb-10" ref={el2}></h1>
            <NavLink to='/projects'><button className=" text-base bg-gradient-to-r from-purple-500 to-sky-500 p-3 rounded-full text-white font-bold shadow-md shadow-sky-500/50 opacity-0" ref={buttonRef}>Click to see projects</button></NavLink>
        </div>
     );
}
 
export default Intro;