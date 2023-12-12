import React from "react";
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 
import { Link, NavLink } from "react-router-dom"; 
//import { UserRole } from "./UserRole";
//import { useNavigate } from "react-router-dom";

export default function NavigationBar() { 
  const linkStyle = {
    textDecoration: "none", 
    fontSize: "20px",
    color: "blue",
    borderRight: "1px solid white", 
    padding: "15px",
    marginLeft: "100px",
  };
  //const role = UserRole(); 
 // const navigate=useNavigate() 
  // const handleSignOut = () => {
  //   if (window.confirm("Are you sure you want to SignOut")){ 
  //     localStorage.removeItem("token"); // Remove the token from local storage 
  //     navigate("/"); // Navigate to the home page or login page
  //   } 
  // };
  

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav>
        <NavLink>
        <Link to="/" style={linkStyle}> 
                {" "}
                SignUp{" "}
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/welcome" style={{ ...linkStyle, marginLeft: "100px" }}> 
                {" "}
                Home{" "}
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/games" style={linkStyle}> 
                {" "}
                Games{" "}
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/videos" style={linkStyle}> 
                {" "}
                Videos{" "}
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/logout" style={linkStyle}> 
                {" "}
                Logout{" "}
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/profile" style={linkStyle}> 
                {" "}
                Profile{" "}
              </Link>
            </NavLink>

        </Nav>
      </Container>
    </Navbar> 
  );
}