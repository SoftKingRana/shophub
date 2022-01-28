import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import CardOne from "./TestCards/CardOne";
// import CardTwo from "./TestCards/CardTwo";
import styles from "./catstyles.module.scss";
import "./catstyles.scss";


function Categories() {

   
  const input = ["risky", "risky", "risky", "safe", "safe", "safe"];
  const firstSafeIndex = input.indexOf("safe");

  const Title = (size) => <h3>Total: {size} cards</h3>;
  return (
    <div className={styles.backgroundx}>
      {/* <div className={styles.container}>
        <Carousel cardDist={25} navOnTop navTitle={Title.bind(null, 10)}>
          {Array(10)
            .fill(0)
            .map(_ => (
              <CardTwo />
            ))}
        </Carousel>
      </div> */}
   

      <div className={styles.containerx}>
        <Carousel splitIndex={firstSafeIndex}>
          {input.map((val) => (
            <CardOne risky={val === "risky"} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Categories;



