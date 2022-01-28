import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Container, Navbar } from "react-bootstrap";
import "./header.scss";
import { logout } from "../../actions/userActions";


const HeaderMain = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* <header>
        <Navbar sticky="top" collapseOnSelect expand="sm">
          <Container>
            <nav>
              <div className="menu">
                <p className="website_name">SHOPHUB</p>
                <div className="menu_links">
                  <a href className="link">
                    about
                  </a>
                  <a href className="link">
                    projects
                  </a>
                  <a href className="link">
                    contacts
                  </a>
                </div>
                <div className="menu_icon">
                  <span className="icon" />
                </div>
              </div>
            </nav>
          </Container>
        </Navbar>
      </header> */}

      {/* about */}
      <div className="about">
        {userInfo ? (
          <>
            <div className="bg_links social portfolio" onClick={logoutHandler}>
              <span className="icon" />
            </div>
            <Link
              className="bg_links social dribbble"
              to="/profile"
              alt={userInfo.name}
            >
              <span className="icon" />
            </Link>
          </>
        ) : (
          <Link className="bg_links social linkedin" to="/login" alt="login">
            <span className="icon" />
          </Link>
        )}
        <Link className="bg_links logo" />
      </div>
      {/* end about */}
    </>
  );
};

export default HeaderMain;
