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
      title: 'Pursuit Connect',
      image: '',
      description: [
        "Optimized PostgreSQL databases for dependable data storage, rapid retrieval, and secure handling of sensitive information.",
        "Designed captivating user interfaces with JavaScript, React, ensuring seamless adaptability across devices.",
        "Built a robust server-side foundation with Express for efficient data flow and rapid API development.",
      ],
      githubLink: 'https://github.com/Olayinka19',
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

           <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
        <li>
            <img className='Slide' src={ahead}  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>1</h1></div> */}
        </li>
        <li>
            <img className='Slide' src={paw}  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>2</h1></div> */}
        </li>
        <li>
        <img className='Slide' src={ola} width="220px" height="220px" />
        </li>
        <li>
            <img className='Slide' src={ola} alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>4</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>5</h1></div> */}

        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/young-couple-embracing-autumn-nature-smiling-generated-by-ai_188544-54279.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>6</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-funky-clothing-enjoying-outdoors-generated-by-ai_188544-37450.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>7</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/multi-ethnic-group-young-adults-smiling-generated-by-ai_24640-81233.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>8</h1></div> */}
        </li>
        <li>
            {/* <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-embrace-fashionable-city-night-generated-by-ai_188544-38888.jpg"  alt="" /> */}
            {/* <div class="uk-position-center uk-panel"><h1>9</h1></div> */}
        </li>
        <li>
            {/* <img className='Slide' src="https://img.freepik.com/free-photo/two-women-are-standing-outside-store-one-them-is-wearing-green-jacket_1340-38174.jpg"  alt="" /> */}
            {/* <div class="uk-position-center uk-panel"><h1>10</h1></div> */}
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
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
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
      <img className='image' src={ola} width="220px" height="220px" />
      
      
      <h1 class="uk-animation-slide-right">Hello, I'm Olayinka</h1>
      
      <p>{`A Dedicated Software Engineer with a proven track record of successfully leading smaller size projects and components of larger projects/programs at Pursuit..`}</p>
      {/* <button className="start-button" onClick={startGame}>
        Start the Journey
      </button> */}
      <section className={`skills ${gameStarted ? 'visible' : ''}`}>
      <h2 class=" uk-animation-slide-right">Projects</h2>
      {/* <ul>
        <li class=" uk-animation-slide-right">Programming Languages: JavaScript, Python (Node.js, React/React Native), TypeScript</li>
        <li class=" uk-animation-slide-right">Frameworks/Libraries: Express, React/Redux, Tailwind CSS, Material UI, React-Bootstrap</li>
        <li class=" uk-animation-slide-right">Databases: MySQL, PostgreSQL</li>
        <li class=" uk-animation-slide-right">Project Management</li>
      </ul> */}
    </section>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true">

<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/black-t-shirt-is-hanging-hanger-with-word-dope-it_1340-38184.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>1</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/black-shirt-with-word-ultra-it_1340-37775.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>2</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/red-shirt-is-box-with-red-box-background_1340-38146.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>3</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/fashionable-men-winter-jacket-with-zipper-close-up-generated-by-ai_188544-43270.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>4</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>5</h1></div> */}

    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/young-couple-embracing-autumn-nature-smiling-generated-by-ai_188544-54279.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>6</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-funky-clothing-enjoying-outdoors-generated-by-ai_188544-37450.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>7</h1></div> */}
    </li>
    <li>
        <img className='Slide' src="https://img.freepik.com/free-photo/multi-ethnic-group-young-adults-smiling-generated-by-ai_24640-81233.jpg"  alt="" />
        {/* <div class="uk-position-center uk-panel"><h1>8</h1></div> */}
    </li>
    <li>
        {/* <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-embrace-fashionable-city-night-generated-by-ai_188544-38888.jpg"  alt="" /> */}
        {/* <div class="uk-position-center uk-panel"><h1>9</h1></div> */}
    </li>
    <li>
        {/* <img className='Slide' src="https://img.freepik.com/free-photo/two-women-are-standing-outside-store-one-them-is-wearing-green-jacket_1340-38174.jpg"  alt="" /> */}
        {/* <div class="uk-position-center uk-panel"><h1>10</h1></div> */}
    </li>
</ul>
<h2>Links to my Projects</h2>
<div className='blogPostCont'>
<div className='blog-pst-buttn'>
<button className='uk-button uk-button-primary'><a href='https://ola-pawster.netlify.app/'>Ola-pawster</a></button>
  
</div>
<div className='blog-pst-buttn'>
<button className='uk-button uk-button-primary'><a href='https://masonmei.wixsite.com/pursuitconnect/post/faho-blog'>Pursuit-Cnt</a></button>
  </div>
  </div>
<h2 class="uk-animation-slide-right">Skills</h2>
<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
    <ul uk-accordion="collapsible: false">
    <li>
        <a class="uk-accordion-title" href="#">Programming Languages</a>
        <div class="uk-accordion-content">
            <p> HTML, CSS, JavaScript, Python (Node.js, React/React Native), TypeScript</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Frameworks/Libraries</a>
        <div class="uk-accordion-content">
            <p>Express, React/Redux, Tailwind CSS, Material UI, UIKit, React-Bootstrap.</p>
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
        {/* <img
    className='project-image'
    src={projectsData[currentProject].image} // Updated image link
    alt={`Project: ${projectsData[currentProject].title}`}
  /> */}
        {projectsData[currentProject].description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        {/* <img src={ahead.jpeg} /> */}
        
        <a className='project' href={projectsData[currentProject].githubLink}>Github</a>
        {/* <div className="img-container">
        <img className="ahead-img" src={ahead} />
        <img className='paw' src={paw}/>
        </div> */}
      </div>
      <div className="button-tag">
      <button className=" next-project-button uk-button uk-button-primary" onClick={nextProject}>
        Next Project
      </button>
      
      </div>
    </section>
  

    <section className={`contact ${gameStarted ? 'visible' : ''}`}>
    
    {/* <img src={ola} width="350px" height="350px" /> */}
      <h2 className='uk-animation-slide-right'>Contact</h2>
      <p className='uk-animation-slide-right'>Let's collaborate! Reach out to me at </p>
      <a href="mailto:olayinkafakanbi@gmail.com">[Olayinkafakanbi@gmail.com]</a>
    </section>

    
    <br />
   



    
  </div>
  );
};

export default Home;
