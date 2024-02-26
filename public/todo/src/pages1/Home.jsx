import "../style1/home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Home() {
  return (
    <>
      <div className="break">
        <div className="circle">
          <h1>
            Task
            <br /> Managemnt
          </h1>
          <h3>To Do</h3>
          <div className="note">
            A "to-do" encapsulates tasks awaiting completion, serving as a
            tangible reminder of pending activities. It embodies a roadmap of
            objectives, a checklist of responsibilities, or a roster of
            commitments demanding attention. Essentially, it's a repository of
            actions beckoning fulfillment, a mosaic of endeavors awaiting
            realization. A to-do list functions as a compass, guiding one
            through the labyrinth of daily obligations, while also symbolizing
            the aspirations and endeavors that propel individuals forward on
            their journey towards productivity and accomplishment.
          </div>
          <div className="social">
            <div className="icon">
              <InstagramIcon fontSize="large" />
            </div>
            <div className="icon">
              <TwitterIcon fontSize="large" />
            </div>
            <div className="icon">
              <FacebookOutlinedIcon fontSize="large" />
            </div>
          </div>
        </div>
        <div className="todo"></div>
      </div>
    </>
  );
}
export default Home;
