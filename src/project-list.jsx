import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

let ProjectList = ({projects}) => {
   let headerRef = useRef(null);
   let containerRef = useRef(null);

    useLayoutEffect(() => {
        let el = headerRef.current;
        let cont = containerRef.current;
        let ctx = gsap.context(() => {
            gsap.to(el,{x:0,ease:"elastic",opacity:1, duration:1})
            gsap.to(cont,{opacity:1})
        });
        return () => ctx.revert();
    },[])
   
    return ( 
        <div className=" flex flex-col justify-center items-center gap-5 relative">
            <div  className="opacity-0 flex flex-col justify-center items-center gap-5 relative" ref={containerRef}>
            <h2 className="font-bold text-3xl font-mono translate-x-[30vh] opacity-0" ref={headerRef}>My Projects</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                {projects && projects.map(project => (
                    <div className="box w-[500px] min-w-[255px] max-lg:w-[400px]  max-[500px]:w-48 max-h-72 flex flex-col justify-between justify-self-center gap-2 p-3 shadow-md shadow-gray-700" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" key={project.id}>
                        <div className="relative">
                            <img src={ project.image } alt="img"  className='w-full h-[200px] w-[400px]'/>
                            <div className="absolute bg-[rgba(0,0,0,0.8)]  top-0 left-0 h-full w-full flex flex-col text-center justify-center items-center ipad:gap-10 md:gap-20 sm:gap-10 gap-5 opacity-0 hover:opacity-100 transition duration-300">
                                <h2 className=" font-bold font-mono text-xl text-slate-200 sm:text-3xl">{ project.title }</h2>
                                <span className=" text-sm flex gap-5  w-full bottom-5 justify-center">
                                    <a href={ project.webLink } className=" flex justify-center items-center text-black px-3 py-2 bg-white rounded-full font-semibold"><button> Website</button></a>
                                    <a href={ project.githubLink } className=" flex justify-center items-center text-white px-3 py-2 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full font-semibold"><button>Github repo</button></a>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3">
                            { project.stacks.map(projectStack => (
                                <span className="flex h-full items-center justify-center bg-black text-white px-3 py-1 rounded-lg font-normal text-center text-xs">
                                    <p>{projectStack}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
     );
}
 
export default ProjectList;