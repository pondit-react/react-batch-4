import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userAction";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand className="mr-auto">Best 4 You</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Routes>
              <Route element={<SearchBox />} />
            </Routes> */}
            <Nav className="ml-auto">
                <Nav.Link>
              <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  Cart{" "}
                  <Badge variant="success">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </Badge>
              </Link>
                </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                   <Nav.Link> 
                <Link to="/login">
                    <i className="fas fa-user"></i>
                    Sign In
                </Link>
                   </Nav.Link> 
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <Link to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </Link>
                  <Link to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </Link>
                  <Link to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
