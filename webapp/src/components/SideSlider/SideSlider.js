import React, { useState } from "react";
import "./style.css";

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

  return (
    <>
      <button onClick={clickHandlerOpen} className="nav-btn open-btn">
        <i className="fas fa-bars"></i>
      </button>

      <div className={`nav nav-black ${classActive ? "visible" : " "}`}>
        <div className={`nav nav-red ${classActive ? "visible" : " "}`}>
          <div className={`nav nav-white ${classActive ? "visible" : " "}`}>
            <button onClick={clickHandlerClose} className="nav-btn close-btn ">
              <i className="fas fa-times"></i>
            </button>

            <h2>ShopHub</h2>

            <ul className="list">
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Work life balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSlider;
