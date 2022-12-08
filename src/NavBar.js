import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from "./background/pngwing.png";


  
const Navbar = () => {
  return (
    <>


      <Nav>
      <img src={logo} className='logoNavBar' alt='' />
        <NavMenu>
        <NavLink to="./Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="./National" activeStyle>
          National

          </NavLink>
          <NavLink to="./About" activeStyle>
            About

          </NavLink>
          <NavLink to="/Contact" activeStyle>
            Contact Us
          </NavLink>

        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;