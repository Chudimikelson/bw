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
} from 'reactstrap';
import Logo from './BrandLogo';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;