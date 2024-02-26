import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import "../style/contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="wrapper_contact">
          <form>
            <h1>Contact Me</h1>
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <PersonIcon className="i" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Last Name" />
              <PersonIcon className="i" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
              <EmailIcon className="i" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <PhoneIcon className="i" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Your Message" />
              <MessageIcon className="i" />
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
