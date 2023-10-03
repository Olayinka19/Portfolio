import React, { useState } from 'react';
import './Home.css';
import ola from './assets/ola.jpeg'
import ahead from './assets/ahead.jpeg'
import paw from './assets/paw.png'
import GIF from './assets/giphy.gif'; // Import your GIF



const projectsData = [
    {
      title: 'Ola-Pawster Capstone Project',
      image: 'https://ola-pawster.netlify.app/',
      
      description: [
        "Ola-Pawster Capstone Project serves as a prominent demonstration of my adept SQL skills in crafting a sophisticated database-driven solution that seamlessly connects pets, users, and shelter homes within an intuitive web platform.",
        "Formulated a well-structured schema that effectively organizes and preserves pivotal data concerning users, pets, and shelter homes.",
        "Led and managed small-sized projects and components of larger projects/programs through their entire lifecycle.",
      ],
    
      githubLink: 'https://github.com/Olayinka19/Pawster-capstone-project',
    },
    {
      title: 'Ahead-shopping E-commerce Website',
      image: '',
      description: [
        "Optimized PostgreSQL databases for dependable data storage, rapid retrieval, and secure handling of sensitive information.",
        "Designed captivating user interfaces with JavaScript, React, ensuring seamless adaptability across devices.",
        "Built a robust server-side foundation with Express for efficient data flow and rapid API development.",
      ],
      githubLink: 'https://github.com/Olayinka19/Ahead-Shopping',
    },
  ];



const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const startGame = () => {
    setGameStarted(true);
  };
  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projectsData.length);
  };


  return (
    <div className={`home ${gameStarted ? 'game-started' : ''}`}>
    <section className={`intro ${gameStarted ? 'hidden' : ''}`}>
    <hr class="uk-divider-icon" />
      <h1>Hello, I'm [Your Name]</h1>
      <p>{`Dedicated Software Engineer with a proven track record of successfully leading smaller size projects and components of larger projects/programs at Pursuit. Skilled in developing project plans, managing resources, schedules, and budgets to ensure the delivery of high-quality results. Proficient in analyzing vendor proposals, tracking project performance, and ensuring compliance with standards and regulations. Adept at fostering collaboration, conducting stage gate reviews, and driving project success.`}</p>
      <button className="start-button uk-button uk-button-default" onClick={startGame}>
        Start the Journey
      </button>
    </section>
   
    


    {/* <section className={`skills ${gameStarted ? 'visible' : ''}`}>
      <h2 class="uk-animation-slide-left">Skills</h2>
      <ul>
        <li>Programming Languages: JavaScript, Python (Node.js, React/React Native), TypeScript</li>
        <li>Frameworks/Libraries: Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap</li>
        <li>Databases: MySQL, PostgreSQL</li>
        <li>Project Management</li>
      </ul>
    </section> */}
    <div>
    {/* <img src={ola} width="150px" height="150px" /> */}
    </div>
    <section className={`projects ${gameStarted ? 'visible' : ''}`}>
    <br />
  
      <img className='image' src={ola} width="220px" height="220px" />
      
      
      <h1 class="uk-animation-slide-right">Hello, I'm Olayinka</h1>
      
      <p>{`A Dedicated Software Engineer with a proven track record of successfully leading smaller size projects and components of larger projects/programs at Pursuit..`}</p>
      {/* <button className="start-button" onClick={startGame}>
        Start the Journey
      </button> */}
      <section className={`skills ${gameStarted ? 'visible' : ''}`}>
      <h2 class=" uk-animation-slide-right">Skills</h2>
      {/* <ul>
        <li class=" uk-animation-slide-right">Programming Languages: JavaScript, Python (Node.js, React/React Native), TypeScript</li>
        <li class=" uk-animation-slide-right">Frameworks/Libraries: Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap</li>
        <li class=" uk-animation-slide-right">Databases: MySQL, PostgreSQL</li>
        <li class=" uk-animation-slide-right">Project Management</li>
      </ul> */}
    </section>
    <ul uk-accordion="collapsible: false">
    <li>
        <a class="uk-accordion-title" href="#">Programming Languages</a>
        <div class="uk-accordion-content">
            <p> JavaScript, Python (Node.js, React/React Native), TypeScript</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Frameworks/Libraries</a>
        <div class="uk-accordion-content">
            <p>Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Databases</a>
        <div class="uk-accordion-content">
            <p>MySQL, PostgreSQL.</p>
        </div>
    </li>
</ul>
    <section className={`playground ${gameStarted ? 'visible' : ''}`}>
      {/* <h2>Playground</h2>
      <div className="gif-container">
        <img src={GIF} alt="GIF" />
      </div> */}
    </section>
      <div className="project">
        <h3>{projectsData[currentProject].title}</h3>
        {/* {projectsData[currentProject].image} */}
        <img
    className='project-image'
    src={projectsData[currentProject].image} // Updated image link
    alt={`Project: ${projectsData[currentProject].title}`}
  />
        {projectsData[currentProject].description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        <img src={ahead.jpeg} />
        
        <a className='project' href={projectsData[currentProject].githubLink}>Github</a>
        {/* <div className="img-container">
        <img className="ahead-img" src={ahead} />
        <img className='paw' src={paw}/>
        </div> */}
      </div>
      <button className=" next-project-button uk-button uk-button-primary" onClick={nextProject}>
        Next Project
      </button>
      <button className='uk-button uk-button-primary'><a href='https://ola-pawster.netlify.app/'>Ola-pawster</a></button>
      <button className='uk-button uk-button-primary'><a href='https://ahead-store.netlify.app/'>Ahead-Shopping</a></button>
    </section>
    

    <section className={`contact ${gameStarted ? 'visible' : ''}`}>
    
    {/* <img src={ola} width="350px" height="350px" /> */}
      <h2>Contact</h2>
      <p>Let's collaborate! Reach out to me at [Olayinkafakanbi@pursuit.org]</p>
    </section>

    
    <br />
   



    
  </div>
  );
};

export default Home;
