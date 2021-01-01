/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development</h1>
        <Typed
          className="typed-text"
          strings={["HTML", "CSS", "Php", "Javascript", "ReactJs"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me!
        </a>
      </div>
    </div>
  );
};

export default Header;
