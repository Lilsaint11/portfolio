import ProjectList from "./project-list";


    const projects = [
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
        "stacks": ["Reactjs","tailwindcss"],
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
        "title": "Tiktaktoe Game",
        "image": "./images/tiktaktoe1.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://stevetiktaktoev2.netlify.app",
        "githubLink": "https://github.com/lilsaint11/Tik-Tak-Toe"
      },
      {
        "title": "Landing Page",
        "image": "./images/landingpage.png",
        "stacks": ["html","css","javascript"],
        "webLink": "https://Gadgets-hub.netlify.app",
        "githubLink": "https://github.com/lilsaint11/Landing-page"
      },
      {
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
      }
    ]



const Projects = () => {
    return ( 
        <div className="projects">
            <ProjectList projects = {projects} />
        </div>
        
        
     );
}
 
export default Projects;