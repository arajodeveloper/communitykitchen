import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import logo from '../images/Gmas_kitchen_logo_dark_300.png'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img className='logo' src={logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            {!props.loggedIn &&
              <div>
                <NavLink href="/users/sign_up">Sign up</NavLink>
              </div>
            }
          </NavItem>
          <NavItem>
            {props.loggedIn &&
              // <div>
              //   <a href={sign_out_route}>Sign Out</a>
              // </div>
              <div>
                <NavLink href="/users/sign_out">Sign Out</NavLink>
              </div>
              
            }
            {!props.loggedIn &&
              <div>
                <NavLink href="/users/sign_in">Sign In</NavLink>
              </div>
            }
            
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
