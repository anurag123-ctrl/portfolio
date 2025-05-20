import { Container } from "./styles";
// import anuragImage from '../../assets/anurag.jpg';
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm <strong>Anurag Kashyap</strong>, a passionate Frontend Web Developer with over 1 year of hands-on experience crafting responsive, user-friendly websites and web applications.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I specialize in <strong>React.js, HTML, CSS, JavaScript,</strong> and <strong>PHP</strong>, and I'm currently expanding my skills by learning the <strong>MERN stack</strong> to become a full-stack developer.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Throughout my journey, I’ve built numerous real-world projects that you can explore in the Projects section. These experiences have sharpened my ability to solve problems, optimize performance, and deliver polished, scalable solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor Of Engineering</h4>
            <p>SKN Sinhgad Institute of Technology & Science, Lonavala (Maharastra) | June 2020 - June 2024</p>
            <p>8.20 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>

            {/* Experience 1 */}
            <div className="job">
              <h4>Frontend Developer</h4>
              <p>Sikaria Tech Consultant Pvt Ltd | June 2024 - Present</p>
              <p>Delhi, India</p>
            </div>

            {/* Experience 2 */}
            <div className="job" style={{ marginTop: "1rem" }}>
              <h4>Frontend Developer Intern</h4>
              <p>Code Clause | Jan 2024 - May 2024</p>
              <p>Remote Internship (Company based in Pune, India)</p>
            </div>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={htmlIcon} alt="HTML" />
              <span>HTML</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={cssIcon} alt="CSS" />
              <span>CSS</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={120}>
              <img src={jsIcon} alt="JavaScript" />
              <span>JavaScript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src={reactIcon} alt="React" />
              <span>React</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={typescriptIcon} alt="Typescript" />
              <span>Typescript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <img src={boostrapIcon} alt="Bootstrap" />
              <span>Bootstrap</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src={wordpress} alt="Wordpress" />
              <span>WordPress</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={110}>
              <img src={java} alt="Java" />
              <span>Java</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <img src={python} alt="Python" />
              <span>Python</span>
            </ScrollAnimation>
          </div>
        </div>

      </div>

      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={anuragImage} alt="Anurag Kashyap" />
        </ScrollAnimation>
      </div> */}

    </Container>
  )
}
