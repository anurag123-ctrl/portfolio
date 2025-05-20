import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://flashcard-drab.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Personal Portfolio</h3>
              <p>
                A sleek and professional personal portfolio showcasing my projects, skills, and contact info. Built with React.js and fully responsive to provide a smooth experience on all devices.
              </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li><li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://flashcard-drab.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>FlashCard Generator</h3>
              <p>
                An interactive flashcard generator where users can create and flip cards. Ideal for quick learning, featuring a clean UI and responsive design built using React.js and CSS.
              </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://weather-app-nzs1.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p>
                A dynamic weather application that fetches real-time weather data using APIs. Users can search any city worldwide and get temperature, conditions, and icons with responsive React and CSS design.
              </p>

            </div>
            <footer> <ul className="tech-list"> <li>React js</li><li>CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://technordia.fi/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>

              </div>
            </header>
            <div className="body">
              <h3>Technordia - Finland Client </h3>
              <p>
                A corporate website for a Finnish tech service provider offering IT consulting, automation, and support. Developed with modern PHP, JS, and CSS stack for a fast, mobile-friendly experience.
              </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li><li>CSS</li><li>JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://glimmerinn.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Glimmerinn Goa - Client</h3>
              <p>
                A custom hotel website built for a Goa-based client to showcase rooms, amenities, and contact options. Developed using PHP, CSS, and JS with a visually rich and responsive layout.
              </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://sukhadyatra.com/" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>

              </div>
            </header>
            <div className="body">
              <h3>Sukhad Yatra - Delhi Client</h3>
              <p>
                A tour and travel company website Developed for a Delhi client. Features tour packages, contact details, and booking interface built using PHP, JS, and CSS with mobile responsiveness.
              </p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}