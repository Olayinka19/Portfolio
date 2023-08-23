import React, { useState } from 'react';
import './Home.css';
import GIF from './assets/giphy.gif'; // Import your GIF



const projectsData = [
    {
      title: 'Ola-Pawster Capstone Project',
      description: [
        "Ola-Pawster Capstone Project serves as a prominent demonstration of my adept SQL skills in crafting a sophisticated database-driven solution that seamlessly connects pets, users, and shelter homes within an intuitive web platform.",
        "Formulated a well-structured schema that effectively organizes and preserves pivotal data concerning users, pets, and shelter homes.",
        "Led and managed small-sized projects and components of larger projects/programs through their entire lifecycle.",
      ],
      githubLink: 'link_to_github_1',
    },
    {
      title: 'Ahead-shopping E-commerce Website',
      description: [
        "Optimized PostgreSQL databases for dependable data storage, rapid retrieval, and secure handling of sensitive information.",
        "Designed captivating user interfaces with JavaScript, React, ensuring seamless adaptability across devices.",
        "Built a robust server-side foundation with Express for efficient data flow and rapid API development.",
      ],
      githubLink: 'link_to_github_2',
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

    <section className={`skills ${gameStarted ? 'visible' : ''}`}>
      <h2>Skills</h2>
      <ul>
        <li>Programming Languages: JavaScript, Python (Node.js, React/React Native), TypeScript</li>
        <li>Frameworks/Libraries: Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap</li>
        <li>Databases: MySQL, PostgreSQL</li>
        <li>Project Management</li>
      </ul>
    </section>

    <section className={`projects ${gameStarted ? 'visible' : ''}`}>
      <h2>Portfolio</h2>
      <h1>Hello, I'm Olayinka</h1>
      <p>{`Dedicated Software Engineer with a proven track record of successfully leading smaller size projects and components of larger projects/programs at Pursuit..`}</p>
      <button className="start-button" onClick={startGame}>
        Start the Journey
      </button>
      <section className={`skills ${gameStarted ? 'visible' : ''}`}>
      <h2>Skills</h2>
      <ul>
        <li>Programming Languages: JavaScript, Python (Node.js, React/React Native), TypeScript</li>
        <li>Frameworks/Libraries: Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap</li>
        <li>Databases: MySQL, PostgreSQL</li>
        <li>Project Management</li>
      </ul>
    </section>
      <div className="project">
        <h3>{projectsData[currentProject].title}</h3>
        {projectsData[currentProject].description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        <a href={projectsData[currentProject].githubLink}>Github</a>
      </div>
      <button className="next-project-button uk-button uk-button-default" onClick={nextProject}>
        Next Project
      </button>
    </section>

    <section className={`contact ${gameStarted ? 'visible' : ''}`}>
      <h2>Contact</h2>
      <p>Let's collaborate! Reach out to me at [your email].</p>
    </section>

    <section className={`playground ${gameStarted ? 'visible' : ''}`}>
      <h2>Playground</h2>
      <div className="gif-container">
        <img src={GIF} alt="GIF" />
      </div>
    </section>
  </div>
  );
};

export default Home;
