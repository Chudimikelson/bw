import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from './BrandLogo';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div id="advert-banner">

      </div>
      <Navbar id="yellow" light expand="md">
        <Logo/>
        <NavbarBrand href="/" id="bw-brand">BW Football</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="menu-text">news</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menu-text">results</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menu-text">tables</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menu-text">tips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menu-text">about</NavLink>
            </NavItem>
            
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;