import { NavLink } from 'react-router-dom';

const Intro = () => {
    return ( 
        <div className="sm:px-20 max-[400px]:px-5 px-10 z-1">
            <h1 className=" sm:text-5xl max-[400px]:text-2xl text-4xl font-bold max-w-xl mb-10">Hi there, I'm Stephen, a Front-End developer.</h1>
            <NavLink to='/projects'><button className="text-base bg-gradient-to-r from-purple-500 to-sky-500 p-3 rounded-full text-white font-bold shadow-md shadow-sky-500/50">Click to see projects</button></NavLink>
        </div>
     );
}
 
export default Intro;