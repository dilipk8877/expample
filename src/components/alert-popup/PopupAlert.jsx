import React from "react";
import warn from "../../assets/warning.png";
import cross from "../../assets/cross.svg";
import "./popup.styles.scss";
const PopupAlert = ({warning, closeModal}) => {

  return (
    <>
      <div className="alert_warn">
        <div className="alert_icon">
          <img src={warn} />
        </div>
        <div className="warning_text">
          <h4>{warning.heading}</h4>
          <p>
            {warning.subHeading}
          </p>
        </div>
        <sapn className="close_search">
          <img src={cross} onClick={()=> closeModal()}/>
        </sapn>
      </div>
    </>
  );
};

export default PopupAlert;
