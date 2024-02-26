import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "../style/portfolio.css";

function Portfolio() {
  return (
    <>
      <section className="port">
        <div className="space">
          <div className="port_content">
            <h3>Hello, It's Me</h3>
            <h1>Dipika Mandal</h1>
            <h3>
              And I'm a <span>Devloper</span>
            </h3>
            <p>
              Hello there! I'm Dipika Mandal, the driving force behind the
              creativity and expertise at To-Do-List. With a passion for saving
              time & maintainig your works, I've dedicated myself to coding from
              last 10 years. Whether it's crafting elegant code, designing
              visually appealing interfaces, or finding innovative solutions to
              complex problems, I thrive on the challenges that come with being
              a web developer. My journey in computer science has been marked by
              a commitment to continuous learning and a keen eye for detail.
              Beyond the technicalities, I believe in the power of collaboration
              and effective communication to turn ideas into reality. Join me on
              this exciting journey, and let's create something extraordinary
              together!
            </p>
            <div className="social_media">
              <i>
                <InstagramIcon />
              </i>
              <i>
                <FacebookIcon />
              </i>
              <i>
                <TwitterIcon />
              </i>
              <i>
                <LinkedInIcon />
              </i>
            </div>
            <Link to="/contact">
              <button className="btn">Contact Me</button>
            </Link>
          </div>
          <div className="port_img">
            <img src="Images/me1.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
