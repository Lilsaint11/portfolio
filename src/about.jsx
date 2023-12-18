const About = () => {

    return ( 
        <div className="max-w-xl max-h-90 flex flex-col justify-between justify-self-center gap-8 p-5 shadow-md shadow-gray-700 sm:mx-20 mx-5" data-aos="flip-left" data-aos-easing="linear"
        data-aos-duration="1000">
            <h1 className="text-4xl font-mono">ABOUT ME</h1>
            <h3 className="text-lg font-semi-bold">I go by the name Stephen, a front-end developer currently studying Computer Science at Ajayi Crowther University,Oyo,Nigeria. I started writing codes 2019 and have learnt quite a number of technologies from then till date. I am open to junior developer roles or freelance gigs. Technlogies i have learnt  and work with are listed below :
            </h3>
            <span></span>
            <div className="flex gap-5 flex-wrap font-normal">
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">HTML5</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">CSS</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs opacity-80">Bootstrap</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs opacity-80">php</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs opacity-80">MySQL</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Javascript</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Reactjs + vite</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Tailwind css</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Firebase</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Supabase</p>
                <p className="bg-black text-white px-3 py-1 rounded-lg text-center text-xs">Typescript</p>
            </div>
        </div>
     );
}
 
export default About;