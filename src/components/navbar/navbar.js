import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../endpoints/user";
function NavBar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Username");
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUser().then((body) => {
        console.log("res ", body);
        if (body.authmessage) {
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        setUsername(body.user.firstName + " " + body.user.lastName);
      });
    } else {
      navigate("/");
    }
  }, []);
  const clickLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.noaya.no/assets/images/common/noaya-logo-menu.png"
            alt=""
            height="30px"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className="navbar-custom text-primary">
              <b>{username}</b>
            </Nav.Link>
            <Nav.Link
              className="navbar-custom text-primary"
              onClick={clickLogout}
            >
              <b>Logout</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
