import React, { useState } from "react";

import "./homepage.styles.scss";

import facebook_icon from "../../assets/Facebook F.png";
import linkedin_icon from "../../assets/LinkedIn.png";

import PopupAlert from "../../components/alert-popup/PopupAlert";
import { authErros } from "../../redux/user/user.selectors";
import { useSelector } from "react-redux";

const HomePage = () => {
  const authErr = useSelector(authErros);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="homepage">
      <div className="banner">
        {authErr && authErr.hasOwnProperty("isErr") && !modalOpen &&(
          <PopupAlert warning={authErr} closeModal={closeModal} />
        )}

        <div className="banner-overlay"></div>
        <div className="card">
          <div className="main">
            <div className="image"></div>
            <div className="content">
              <header className="intro">
                <h1>Sheridan Gray</h1>
                <h4>Husband & Father | Business & Technology</h4>
              </header>
              <p>Welcome to my little part of the web.</p>
              <p>
                Professionally, I am a Product Manager at{" "}
                <a href="https://www.meta.com" target="_blank" rel="noreferrer">
                  Meta
                </a>
                . I focus on building privacy products at scale across our apps
                and products. I also founded{" "}
                <a
                  href="https://www.capiogroup.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Capio Group
                </a>
                , an IT consulting firm in Sacramento, CA that provides
                technology and project management services to California State
                agencies.
              </p>
              <p>
                I obtained an MBA from{" "}
                <a
                  href="https://mitsloan.mit.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MIT Sloan
                </a>{" "}
                in Cambridge, MA and a a Bachelor's Degree in Business
                Administration with an emphasis on Accounting from the{" "}
                <a href="https://www.uw.ed" target="_blank" rel="noreferrer">
                  University of Washington
                </a>{" "}
                in Seattle, WA.
              </p>

              <p>I currently live in San Francisco, CA with my wife and son.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/sheridan.gray"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook_icon} alt="Facebook Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sheridangray/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin_icon} alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
