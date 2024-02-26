import { Link } from "react-router-dom";
import "../style/home.css";

function Home() {
  return (
    <>
      <div className="banner-text">
        <h2>
          We manage <span>Time</span>
        </h2>
        <p>We are here to save your time</p>
        <Link className="btn" to="/contact">
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Home;
