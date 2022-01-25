import React, { useState } from "react";
import { Badge, Button } from "@material-ui/core";
import { AddShoppingCart, AddShoppingCartRounded, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../../responsive";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Form, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../actions/userActions";
import SearchBox from "./SearchBox";

// const Container = styled.div`
//   height: 60px;
//   background-color: #ffffff47;

//   ${mobile({ height: "50px", width: "100%", backgroundColor: "#00000000" })},
// `;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  
  display: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })},
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  color:black;
  background-color: white;
`;

const Input = styled.input`
  border-radius: 5px;

  background-color: white;
  align-content: center;
  align-items: center;
  width: "600px";

  ${mobile({ width: "140px" })};
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  align-content: center;
  display: flex;
  position: relative;
  justify-content: center;
  
`;
const Logo = styled.h1`
  font-weight: 900;

  ${mobile({ fontSize: "20px", fontWeight: 600 })},
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile({ marginLeft: "10px" })},
`;

const HeaderTop = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };




  return (
    <Container className="bg-dark">
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>shopHub</Logo>
          </Link>
        </Left>

        <Center>
        <SearchBox />
        </Center>

        <Right>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login">
              <i className="fas fa-user"></i>
            </Link>
          )}

          {userInfo && userInfo.isAdmin && (
            <NavDropdown title="Admin" id="adminmenue">
              <LinkContainer to="/admin/userlist">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/admin/productlist">
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/admin/orderlist">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge color="light">
                <AddShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default HeaderTop;
