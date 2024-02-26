import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../style1/nav_own.css";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios_client";
import { useNavigate } from "react-router-dom";

function Navbar_Own() {
  const { user, setToken, setUser } = useStateContext();
  const navigate = useNavigate();
  const out = () => {
    axiosClient
      .post("/logout")
      .then(({ data }) => {
        setUser({});
        setToken(null);
      })
      .catch((error) => {
        console.log(error.response);
      });
    navigate("/login");
  };
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 design">
          <Container fluid>
            <Navbar.Brand className="fontDesign" to="/">
              ToDo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="design">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ToDo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="design">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="p-2">
                    <Link className="a" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="p-2">
                    <Link className="a" to="/about">
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="p-2">
                    <Link className="a" to="/contact">
                      Contact Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="p-2">
                    <Link className="a" to="/calendar">
                      Calendar
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="p-2">
                    <Link className="a" to="/task">
                      Task
                    </Link>
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Theme"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4">Dark</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Light</NavDropdown.Item>
                  </NavDropdown> */}
                  <NavDropdown
                    title={user.name}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item out={out}>Log Out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar_Own;
