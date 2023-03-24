import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import xarrow from "../assets/images/img/increasingsection/4xarrow.png";
import leftimg from "../assets/images/img/increasingsection/leftimg.png";
import rightimg from "../assets/images/img/increasingsection/rightimg.png";
import dots from "../assets/images/img/increasingsection/dots.png";
const IncreasingProcess = () => {
  return (
    <section className=" py-sm-5 position-relative">
      <img src={dots} alt="dots" className="position-absolute end-0 top260" />
      <Container>
        <div className="text-center">
          <p className="ff_inter fw_700 fs_5xl clr_blue">
            Increasing process efficiency by
          </p>
          <div className="position-relative  d-inline-block">
            <span className="ff_inter fw_700 fs_8xl clr_green">4x</span>
            <img
              src={xarrow}
              alt="xarrow"
              className="position-absolute xarrow_pos"
            />
          </div>
          <div className="position-relative my-5">
            <Row className="py-5 justify-content-between">
              <Col md={5} lg={6} className="cur_poi">
                <div className="back_purple_opacity_low br_15 py-4">
                  <p className="ff_inter fw_700 fs_lg clr_purple mb-0">
                    PRE-AUTOMATION
                  </p>
                </div>
              </Col>

              <Col className="d-block d-md-none mt-4 mt-md-0">
                <div className="max_184 mx-auto">
                  <div className="bg_blur_white p-3  position-absol ute start-50 translate-mid dle-x top-0 d-inline-block">
                    <div className="yellow_border_circle d-flex align-items-center justify-content-center">
                      <span className="ff_inter fw_700 fs_5xl clr_purple mb-0">
                        V
                      </span>
                      <span className="mt-3 ff_inter fw_700 fs_5xl clr_purple mb-0">
                        S
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={5} lg={6} className="mt-4 mt-md-0 cur_poi">
                <div className="back_purple_opacity_low br_15 py-4">
                  <p className="ff_inter fw_700 fs_lg  clr_purple mb-0 ">
                    PRE-AUTOMATION
                  </p>
                </div>
              </Col>
            </Row>
            <div className="max_184 d-none d-md-block">
              <div className="bg_blur_white p-3  position-absolute start-50 translate-middle-x top-0 d-inline-block">
                <div className="yellow_border_circle d-flex align-items-center justify-content-center">
                  <span className="ff_inter fw_700 fs_5xl clr_purple mb-0">
                    V
                  </span>
                  <span className="mt-3 ff_inter fw_700 fs_5xl clr_purple mb-0">
                    S
                  </span>
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <img src={leftimg} alt="leftimg" className="mt-4 w_100" />
                <p className="ff_inter fw_700 fs_xl clr_yellow mt-5">
                  With 100% manual process
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>
              <Col lg={6}>
                <img src={rightimg} alt="rightimg" className="mt-4 w_100" />
                <p className="ff_inter fw_700 fs_xl clr_yellow mb-0 mt-5">
                  With 100% manual process
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IncreasingProcess;
