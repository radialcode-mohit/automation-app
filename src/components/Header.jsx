import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import computer from "../assets/images/img/header/mainimg.png";
import MyNav from "./MyNav";

const Header = () => {
  return (
    <header className="bg_img  pb-5 ">
      <MyNav />
      <Container className="pb-5 mb-5">
        <Row className=" flex-column-reverse flex-lg-row z-1 pb-5 mb-5 ">
          <Col lg={6} className=" pt-lg-5">
            <div className="pt-5">
              <p className=" ff_inter fw_300 clr_blue fs_4xl">
                Increased Efficiency
              </p>
              <h1 className=" ff_inter fw_700 clr_blue fs_7xl">
                Through Automation
              </h1>
              <p className=" ff_inter fw_400 fs_md  clr_black ">
                We have{" "}
                <span className=" fw_700">automated invoice distribution</span>{" "}
                from as our automation initiatives.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={computer} alt="computer" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
