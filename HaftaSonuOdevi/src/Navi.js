import logo from './logo.svg';
import React, { useState } from 'react'
import { DropdownItem, DropdownMenu, Dropdown, DropdownToggle, Container, Row, Col, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import './App.css';

function Navi({ cardCount, showCardLink, clearCard, cardItems }) {

  const [dropdownOpen, setDropDownOpen] = useState(false)

  const toggleDropDown = () => {
    setDropDownOpen((dropdownOpen) => !dropdownOpen);
  };
  const calculateTotal = () => {
    let total = 0;
    for (const item of cardItems) {
      total += item.price;
    }
    return total;
  };
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand>
          <img src={logo} alt="Logo" style={{ width: '150px', height: "60px" }} />
        </NavbarBrand>
        <Nav className='ml-auto' style={{ float: 'inline-end' }} navbar>
          <NavItem>
            <NavLink>
              <Link style={{ margin: '5px', textDecoration: 'none', color: "rgb(0 0 0 / 65%)" }} to='/'>Anasayfa</Link>
            </NavLink>
          </NavItem>
          <NavItem>

            <NavLink>
              <Link style={{ margin: '5px', textDecoration: 'none', color: "rgb(0 0 0 / 65%)" }} to='/addProduct'>Ürün Ekle</Link>
            </NavLink>

          </NavItem>
          <NavItem>
            <NavLink href='/sepet/'>Sepet({cardCount}) - Toplam : {calculateTotal()}₺ </NavLink>
          </NavItem>
          {showCardLink ? (
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
                <DropdownToggle nav caret>
                  Sepetim
                </DropdownToggle>
                <DropdownMenu>
                  {cardItems !== null && cardItems.map((item) => (
                    <DropdownItem key={item.id}>
                      {item.name} - {item.price}₺
                    </DropdownItem>
                  ))}
                  {cardCount > 0 && <DropdownItem divider />}
                  <DropdownItem onClick={clearCard}>Sil</DropdownItem>

                </DropdownMenu>
              </Dropdown>
            </NavItem>
          ) : null}
        </Nav>
      </Container>


    </Navbar>
  )
}

export default Navi







