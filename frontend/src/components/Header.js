import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'

function Header() {
   const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler =() =>{
     dispatch(logout())
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ZITSBY E COMMERCE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart">Cart</i>
              </Nav.Link>
              </LinkContainer>
               <LinkContainer to="/wishlist">
              <Nav.Link href="/wishlist">
                <i className="fas fa-heart">Wishlist</i>
              </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to="/profile">
                     <NavDropdown.Item>
                       Profile
                     </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                       Logout
                     </NavDropdown.Item>
                </NavDropdown>
              ):<LinkContainer to='/login'>
              <Nav.Link href="/signin">
                <i className="fas fa-user">Sign in</i>
              </Nav.Link>
              </LinkContainer>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
