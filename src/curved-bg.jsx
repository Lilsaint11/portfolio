import gsap from 'gsap';
import { useRef, useEffect } from 'react';


const CurvedBg = () => {
    const circleRef = useRef(null);
    useEffect(() => {
        let el = circleRef.current;
        gsap.to(el,{x:0,duration:1})
    },[])
    return ( 
        <div className="bg-gradient-to-r from-purple-500 to-sky-500 lg:h-full h-1/2 lg:w-1/3 w-1/2 absolute top-0 right-0 -z-20 rounded-half-drug shadow-md shadow-sky-500/50 translate-x-[50vw]" ref={circleRef}>
            .
        </div>
     );
}
 
export default CurvedBg;