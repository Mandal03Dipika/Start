import "../style1/contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Contact() {
  return (
    <>
      <div className="head">We Are Here For You</div>
      <div className="divide">
        <div className="meet">
          <h2>Meet Us</h2>
          <h4>
            <PhoneIcon />
            &nbsp;+6291478099
          </h4>
          <h4>
            <AlternateEmailIcon />
            &nbsp; mandal03dipika@gmail.com
          </h4>
        </div>
        <div className="reach">
          <h2>Contact Us</h2>
          <form className="p-4" action="">
            <div className="p-2 form-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="p-2 form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                placeholder="Message"
              />
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
