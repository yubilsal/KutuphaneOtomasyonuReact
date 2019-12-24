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
      <Navbar color="light" light expand = 'md' >
        <NavbarBrand href="/" >Admin Panel</NavbarBrand>
        <NavbarBrand href="/users" >Kitap Listesi</NavbarBrand>
        <NavbarBrand href="/kullanici-list" >Kullanıcı Listesi</NavbarBrand>
        <NavbarBrand href="/order-list" >Kiralanmış Kitaplar</NavbarBrand>
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