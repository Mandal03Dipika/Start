import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios_client";
import "../style/login&register.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();
  const onSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payLoad)
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
            <h1>Login</h1>
            <div className="input-box">
              <input ref={emailRef} type="email" placeholder="Email" />
              <PersonIcon className="i" />
            </div>
            <div className="input-box">
              <input ref={passwordRef} type="password" placeholder="Password" />
              <RemoveRedEyeIcon className="i" />
            </div>
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" /> Remember Me
              </label>
              <Link className="a">Forgot Password?</Link>
            </div>
            <button className="btn">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?
                <Link to="/register" className="a">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
