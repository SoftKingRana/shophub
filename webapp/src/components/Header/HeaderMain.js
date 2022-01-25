import React from "react";
// import { Container, Navbar } from "react-bootstrap";
import "./header.scss";

const HeaderMain = () => {
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
        <a className="bg_links social portfolio" href="/" target="_blank">
          <span className="icon" />
        </a>
        <a className="bg_links social dribbble" href="/" target="_blank">
          <span className="icon" />
        </a>
        <a className="bg_links social linkedin" href="/" target="_blank">
          <span className="icon" />
        </a>
        <a className="bg_links logo" />
      </div>
      {/* end about */}
    </>
  );
};

export default HeaderMain;
