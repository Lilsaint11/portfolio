import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return ( 
        <div className="max-w-xl max-h-90 flex flex-col justify-between justify-self-center gap-6 p-5 shadow-md shadow-gray-700 sm:mx-20 mx-5" data-aos="flip-right" data-aos-easing="linear"
        data-aos-duration="1000">
            <h1 className="text-4xl font-mono">CONTACT ME</h1>
            <h3 className="text-lg font-semi-bold">You can contact me on any of these social media applications, especially if you have a gig for me, i am also open to junior developer roles hehe...,you can check my code repos on Github.</h3>
            <div className="flex flex-col gap-6 text-slate-800 ">
               <Link to='https://twitter.com/apostlelilsaint' className='hover:opacity-70 transition duration-300 flex gap-5'><FaTwitter />Twitter</Link> 
               <Link to='https://linkedin.com/in/stephen-obisesan-898a5524b' className='hover:opacity-70 transition duration-300 flex gap-5'><FaLinkedin />LinkedIn</Link>
               <Link to='mailto: saintobis11@gmail.com' className='hover:opacity-70 transition duration-300 flex gap-5'><FaEnvelope />Email</Link>
               <Link to='https://github.com/Lilsaint11' className='hover:opacity-70 transition duration-300 flex gap-5'><FaGithub />Github</Link>
            </div>
        </div>
     );
}
 
export default Contact;