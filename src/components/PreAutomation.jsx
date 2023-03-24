import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import box_1 from "../assets/images/img/section2/box1.png";
import box_2 from "../assets/images/img/section2/box2.png";
import box_3 from "../assets/images/img/section2/box3.png";
import box_4 from "../assets/images/img/section2/box4.png";
import dots_2 from "../assets/images/img/section2/dots.png";
import aerow_right from "../assets/images/svg/rightarrow.svg";
const PreAutomation = () => {
  return (
    <section className="position-relative">
      <img
        className="position-absolute dots_2_position w_100"
        src={dots_2}
        alt="dots_2"
      />{" "}
      <div className="sec_2_bg_img mt_2 pb-lg-5">
        <Container className="py-5 mb-lg-5">
          <h2 className=" ff_inter fw_700 fs_5xl clr_blue text-center">
            Pre-Automation{" "}
          </h2>
          <p className="text-center pt-3 ff_inter fw_400 fs_md clr_black max_698">
            <span className="fw_700"> Manually creating</span> and{" "}
            <span className="fw_700"> distributing invoices</span> -
            labor-intensive and prone to errors.
          </p>{" "}
        </Container>
      </div>
      <div>
        <Container>
          {" "}
          <Row className="pb-5">
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="position-absolute d-none d-lg-block aerow_position_1"
                src={aerow_right}
                alt="aerow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={box_1} alt="box_1" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="position-absolute d-none d-lg-block aerow_position_2"
                src={aerow_right}
                alt="aerow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={box_2} alt="box_2" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="position-absolute d-none d-lg-block aerow_position_3"
                src={aerow_right}
                alt="aerow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={box_3} alt="box_3" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <div className="boxes text-center">
                <img className="pt-5" src={box_4} alt="box_4" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="blur_box"></div>
      </div>
    </section>
  );
};

export default PreAutomation;
