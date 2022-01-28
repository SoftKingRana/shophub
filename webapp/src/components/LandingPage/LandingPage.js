import { Box } from "@mui/material";
import React, { useState } from "react";
import "./landingPageStyle.css";
import { Link} from "react-router-dom";
const LandingPage = () => {
  const [isMouseInsideLeft, setIsMouseInsideLeft] = useState(false);
  const [isMouseInsideRight, setIsMouseInsideRight] = useState(false);

  const mouseEnterLeft = () => {
    setIsMouseInsideLeft(true);
  };

  const mouseLeaveLeft = () => {
    setIsMouseInsideLeft(false);
  };

  const mouseEnterRight = () => {
    setIsMouseInsideRight(true);
  };

  const mouseLeaveRight = () => {
    setIsMouseInsideRight(false);
  };

  return (
    <>
      <Box xs={12}>
        <div
          className={`landingContent ${
            isMouseInsideLeft
              ? "hover-left"
              : isMouseInsideRight
              ? " hover-right "
              : ""
          }`}
        >
          <div
            onMouseEnter={mouseEnterLeft}
            onMouseLeave={mouseLeaveLeft}
            className="split left"
          >
            <h2 className="landingPageTitle" >Playstation 5</h2>
            <Link to="/" className="landingBtn">
              Buy Now
            </Link>
          </div>
          <div
            onMouseEnter={mouseEnterRight}
            onMouseLeave={mouseLeaveRight}
            class="split right"
          >
            <h2 className="landingPageTitle">XBox Series X</h2>
            <Link hto="/" className="landingBtn">
              Buy Now
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
};

export default LandingPage;
