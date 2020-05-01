import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import DatePicker from './DatePicker';

const NavBarComp = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  console.log("NavBarcomp props", props)

  return (
    <div>
      <Navbar color="faded" light>
  <NavbarBrand className="mr-auto">NASA Photo Of The Day</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://api.nasa.gov" target="_blank">NASA API</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.nasa.gov" target="_blank">NASA Official</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><DatePicker dateInfo={props.dateInfo} dateChange = {props.dateChange} /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComp;