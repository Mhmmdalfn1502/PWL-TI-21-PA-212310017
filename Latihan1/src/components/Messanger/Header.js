import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonSecondary } from "./ButtonUI";
import React from "react";

const LinkStyle = {
  color: "black",
  fontWeight: "bold",
};

const ProfileStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "#f48fb1",
  borderRadius: "100px",
};

const LogoStyle = {
  width: "50px",
  height: "50px",
};

const Header = () => {
  return (
    <div className="border border-secondary-1">
      <div className="d-flex px-5 pt-3 justify-content-between align-items-center">
        <div className="backgroundImage d-flex gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png" style={LogoStyle} alt="logo" />
          <p className="fw-bold fs-2">IBI Kesatuan</p>
        </div>

        <div className="d-flex py-3 px-5 text-center align-items-center gap-3 justify-content-center">
          <a href="home">
            <ButtonSecondary items={{}}>
              <i className="bi bi-house"></i>
            </ButtonSecondary>
          </a>
          <a className="text-decoration-none" style={LinkStyle}>
            -
          </a>
          <a href="message">
            <ButtonSecondary items={{}}>
              <i className="bi bi-chat"></i>
            </ButtonSecondary>
          </a>
        </div>
        <div className="d-flex gap-3 justify-content-end" style={{width:"250px"}}>
          <ButtonSecondary items={{}}>
            <i className="bi bi-bell"></i>
          </ButtonSecondary>
          <img src="https://i.pinimg.com/564x/ce/37/5a/ce375a340e795c18f3051edc7ef8cdce.jpg" style={ProfileStyle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
