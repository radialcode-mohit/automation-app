import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/svg/Logo.svg";
import cross from "../assets/images/img/nav_images/cross.png";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav>
      <Container>
        <div className="d-flex justify-content-between align-items-start pt-4">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <ul
            className={
              first
                ? "d-flex flex-column mobile_ul_modifications flex-lg-row justify-content-center align-items-center hide ps-0 "
                : "d-flex flex-column mobile_ul_modifications flex-lg-row justify-content-center align-items-center show  ps-0 "
            }
          >
            <li className="">
              <a
                href="#"
                className="ff_raleway fw_500 fs_xsm clr_blue hover_underline"
              >
                Home
              </a>
            </li>
            <li className=" mt-5 mt-lg-0 ms-lg-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue hover_underline"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className=" mt-5 mt-lg-0 ms-lg-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue hover_underline"
                href="#"
              >
                Services
              </a>
            </li>
            <li className=" mt-5 mt-lg-0 ms-lg-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue hover_underline"
                href="#"
              >
                Premium
              </a>
            </li>
            <img
              src={cross}
              alt="cross"
              className="position-absolute d-lg-none crosbtn"
              onClick={() => {
                setfirst(true);
              }}
            />
          </ul>

          <div
            class="navicon_container d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span class="bar"></span>
            <span class="bar mt-2"></span>
            <span class="bar mt-2"></span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
