import ProjectList from "./project-list";


    const projects = [
      {
        "title": "Getlinked landing page",
        "image": "./images/getlinked-banner.png",
        "stacks": ["Nextjs","tailwindcss","framer"],
        "webLink": "https://getlinked-lilsaint11.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/getlinked"
      },
      {
        "title": "Glovo app clone",
        "image": "./images/glovo-banner.png",
        "stacks": ["Nextjs","tailwindcss","supabase","zustand"],
        "webLink": "https://glovo-lilsaint11.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/glovo"
      },
      {
        "title": "CoinBit crypto investment",
        "image": "./images/coinbit.png",
        "stacks": ["Nextjs","tailwindcss","Firebase"],
        "webLink": "https://coinbit.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/coinbit"
      },
      {
        "title": "Connectify social media webapp",
        "image": "./images/connectify.png",
        "stacks": ["Nextjs","tailwindcss","Firebase"],
        "webLink": "https://connectify-iota.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/connectify"
      },
      {
        "title": "omnigpt landing-page ",
        "image": "./images/omnigpt-bg.png",
        "stacks": ["Reactjs","tailwindcss"],
        "webLink": "https://omnigpt-landing-page.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/omnigpt-landing-page"
      },
      {
        "title": "Oppy photography",
        "image": "./images/oppy-bg.png",
        "stacks": ["Reactjs","tailwindcss","sanity"],
        "webLink": "https://oppy-photography.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/oppy-photography"
      },
      {
        "title": "Blog website",
        "image": "./images/blogg-1.png",
        "stacks": ["Reactjs","firebase"],
        "webLink": "https://blog-site-lilsaint11.vercel.app/",
        "githubLink": "https://github.com/lilsaint11/blog-site"
      },
      {
        "title": "Signup/Signin Form",
        "image": "./images/signup-form.png",
        "stacks": ["html","css","PHP","mySQL"],
        "webLink": "",
        "githubLink": "https://github.com/lilsaint11/signup-page"
      },
      {
        "title": "Ecommerce site",
        "image":"./images/ecomm.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://luxurycollections.netlify.app",
        "githubLink": "https://github.com/lilsaint11/ecommerce-app"
      },
      {
        "title": "Landing Page",
        "image": "./images/landingpage.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://Gadgets-hub.netlify.app",
        "githubLink": "https://github.com/lilsaint11/Landing-page"
      },
      {
        "title": "Tiktaktoe Game",
        "image": "./images/tiktaktoe1.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://stevetiktaktoev2.netlify.app",
        "githubLink": "https://github.com/lilsaint11/Tik-Tak-Toe"
      },
      
    ]

{/*{
        "title": "Memory Game",
        "image": "./images/mgame.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://purple-memory-game.netlify.app",
        "githubLink": "https://github.com/lilsaint11/Memory-Game"
      },
      {
        "title": "Todo webapp",
        "image": "./images/todoapp.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://steve-todo-app.netlify.app",
        "githubLink": "https://github.com/lilsaint11/javascript-todo-app"
      }*/}

const Projects = () => {
    return ( 
        <div className="projects">
            <ProjectList projects = {projects} />
        </div>
        
        
     );
}
 
export default Projects;