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
  DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" >Admin Panel</NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/users" activeClassName="selectedLink" style={style}> Kitap Listesi</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/kullanici-list" style={style} > Kullanıcı Listesi</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/order-list" style={style} > Kiralanmış Kitaplar</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const style = {
  color: 'red',
  margin: '30px',
  backgroundColor:'yellow'
}
export default Example;