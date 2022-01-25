import React from "react";
import "./loader.scss";
import { LinearProgress } from "@material-ui/core";
// import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div>
      <div>
        <LinearProgress />
      </div>
      {/* about */}
      {/* <div className="about">
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
        </div> */}
      {/* end about */}
      {/* <nav>
          <div className="menu">
            <p className="website_name">LOGO</p>
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
        </nav> */}

      <section className="wrapper ">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2" />
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loader;
