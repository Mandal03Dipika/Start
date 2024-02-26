import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Link } from "react-router-dom";
import axiosClient from "../axios_client";
import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import "../style/login&register.css";

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();
  const onSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
    };
    axiosClient
      .post("/signup", payLoad)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="contain">
        <div className="wrapper">
          <form onSubmit={onSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                ref={nameRef}
                type="text"
                placeholder="Enter your Full Name"
              />
              <PersonIcon className="i" />
            </div>
            <div className="input-box">
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your Email Address"
              />
              <EmailIcon className="i" />
            </div>
            <div className="input-box">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter you Password"
              />
              <LockIcon className="i" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Enter you Password Again" />
              <LockResetIcon className="i" />
            </div>
            <button className="btn">Sign Up</button>
            <div className="register-link">
              <p>
                Already have an account?
                <Link to="/login" className="a">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
