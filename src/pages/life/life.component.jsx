import React from "react";
import Vector from "../../assets/Vector.svg";

import "./life.styles.scss";

const LifePage = () => {
  return (
    <div className="life">
      <div className="main">
        <div className="life-logo">
          <img src={Vector} alt="" />
        </div>
        <div className="life-heading">
          <h1 className="">Automating a Balanced and Integrated Life</h1>
        </div>
      </div>
    </div>
  );
};

export default LifePage;
