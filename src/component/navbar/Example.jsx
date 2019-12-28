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
        <NavbarBrand style = {style} href="/" >   <h1 className="text-center" style = {style1} >AnaSayfa</h1>   </NavbarBrand>
        <NavbarBrand style = {style3} href="/users" ><h1>Kitap Listesi</h1></NavbarBrand>
        <NavbarBrand style = {style3} href="/kullanici-list" ><h1>Kullanıcı Listesi</h1></NavbarBrand>
        <NavbarBrand style = {style3} href="/order-list" > <h1>Kiralanmış Kitaplar</h1></NavbarBrand>
      </Navbar>
    </div>
  );
}
const style1 = {
  color: 'light gray',
  backgroundColor:'light gray',
  align: 'center',
  
}

const style = {
  color: 'light gray',
  margin: '30px',
  align: 'center',
  backgroundColor:'gray',
  border : "thin solid gray"
}
const style3 = {
  color: 'white',
  margin: '10px',
  align: 'center',
  backgroundColor:'red',
  border : "thin solid gray"
}
export default Example;