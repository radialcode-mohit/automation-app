import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftarrow from "../assets/images/img/duration_section/leftarrow.png";
import rightarrow from "../assets/images/img/duration_section/rightarrow.png";
import people from "../assets/images/img/duration_section/effortpeople.png";
import clock from "../assets/images/img/duration_section/clock.png";
import invoice from "../assets/images/img/duration_section/invoice_sec/invoice.png";
import invoiceleftarrow from "../assets/images/img/duration_section/invoice_sec/leftarrow.png";
import invoicerightarrow from "../assets/images/img/duration_section/invoice_sec/rightarrow.png";
const Duration = () => {
  return (
    <section className="bg_duration pb-5">
      <Container className="pb-5">
        <div className="bg_blue p-4 br_15">
          <Row className="justify-content-around">
            <Col lg={3}>
              <div className="d-flex align-items-end position-relative justify-content-center">
                <div className="position-relative">
                  <span className="ff_inter fw_700 fs_9xl clr_white">8</span>
                  <div className="small_blue_box position-absolute months_line"></div>
                </div>
                <span className="ff_inter fw_700 fs_3xl clr_white position-relative months_pos">
                  MONTHS
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-evenly h-100">
                <img src={leftarrow} alt="leftarrow" className="cur_poi" />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_white ">Duration</p>
                  <img src={clock} alt="clock" />
                </div>
                <img src={rightarrow} alt="rightarrow" className="cur_poi" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex align-items-end position-relative justify-content-center">
                <div className="position-relative">
                  <span className="ff_inter fw_700 fs_9xl clr_white">4</span>
                  <div className="small_blue_box position-absolute bottom_42"></div>
                </div>
                <span className="ff_inter fw_700 fs_3xl clr_white position-relative months_remaing_pos">
                  MONTHS
                  <br />
                  REMAINING
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="p-5 my-5 br_15 border_grey bg-white">
          <Row className="align-items-center justify-content-center ">
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_4xl clr_blue mb-0 text-center text-lg-start">
                42K
              </p>
            </Col>
            <Col lg={4} className="mt-5 mt-lg-0">
              <div className="d-flex align-items-center justify-content-evenly h-100">
                <img
                  src={invoiceleftarrow}
                  alt="invoiceleftarrow"
                  className="cur_poi"
                />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_blue mb-0 ">
                    Invoices
                  </p>
                  <img src={invoice} alt="invoice" />
                </div>
                <img
                  src={invoicerightarrow}
                  alt="invoicerightarrow"
                  className="cur_poi"
                />
              </div>
            </Col>
            <Col lg={2} className="mt-5 mt-lg-0">
              <p className="ff_inter fw_700 fs_4xl clr_yellow mb-0 text-center text-lg-start">
                21K
              </p>
            </Col>
          </Row>
        </div>
        <div className="p-5 mt-5 br_15 bg_blue">
          <Row className="align-items-center justify-content-center ">
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_6xl clr_white mb-0 text-center text-lg-start">
                95
              </p>
              <p className="ff_inter fw_700 fs_xsm clr_white mb-0 text-center text-lg-start">
                MAN DAYS
              </p>
            </Col>
            <Col lg={4} className="mt-5 mt-lg-0">
              <div className="d-flex align-items-center justify-content-evenly h-100">
                <img src={leftarrow} alt="leftarrow" className="cur_poi" />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_white  ">Effort</p>
                  <img src={people} alt="people" />
                </div>
                <img src={rightarrow} alt="rightarrow" className="cur_poi" />
              </div>
            </Col>
            <Col lg={2} className="mt-5 mt-lg-0">
              <p className="ff_inter fw_700 fs_6xl clr_white mb-0 text-center text-lg-start">
                14.25{" "}
              </p>
              <p className="ff_inter fw_700 fs_xsm clr_white mb-0 text-center text-lg-start">
                MAN DAYS{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Duration;
