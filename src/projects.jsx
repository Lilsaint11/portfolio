import ProjectList from "./project-list";


    const projects = [
      {
        "title": "Blog website",
        "image": "./images/blogg-1.png",
        "stacks": ["Reactjs","json-server"],
        "webLink": "",
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