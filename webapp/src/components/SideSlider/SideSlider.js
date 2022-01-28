import React, { useState } from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "react-bootstrap";
import { Box } from "@mui/material";
import styled from "styled-components";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";

const Ul = styled.ul`
  flex: 1;
  margin-left: 10px;
`;
const Li = styled.li`
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color: black;
`;

const SideSlider = () => {
  const [classActive, setClassActive] = useState(false);

  const clickHandlerOpen = () => {
    setClassActive(true);
    console.log(classActive);
  };

  const clickHandlerClose = () => {
    setClassActive(false);
    console.log(classActive);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <button onClick={clickHandlerOpen} className="nav-btn open-btn">
        <MenuIcon />
      </button>

      <div className={`nav nav-black ${classActive ? "visible" : " "}`}>
        <div className={`nav nav-red ${classActive ? "visible" : " "}`}>
          <div className={`nav nav-white ${classActive ? "visible" : " "}`}>
            <button onClick={clickHandlerClose} className="nav-btn close-btn ">
              <i className="fas fa-times"></i>
            </button>

            <Image
              src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
              alt="Logo"
              className="logo"
            />

            <Ul className="list">
              {userInfo && userInfo.isAdmin && (
                <>
                  <Li>
                    <h3>Admin</h3>
                  </Li>
                  <Link to="/admin/userlist">
                    <Li>See Users</Li>
                  </Link>
                  <Link to="/admin/productlist">
                    <Li>See Products</Li>
                  </Link>
                  <Link to="/admin/orderlist">
                    <Li>See Orders</Li>
                  </Link>
                </>
              )}
              <Link to="/cart">
                <AddShoppingCart color="black" />
                <span>Your Cart</span>
              </Link>
              <Li>
                <a href="#">Life at Netflix</a>
              </Li>
              <Li>
                <ul>
                  <Li>
                    <a href="#">Netflix culture memo</a>
                  </Li>
                  <Li>
                    <a href="#">Work Life balance</a>
                  </Li>
                  <Li>
                    <a href="#">Inclusion & diversity</a>
                  </Li>
                  <Li>
                    <a href="#">Blog</a>
                  </Li>
                </ul>
              </Li>
            </Ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSlider;
