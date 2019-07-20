import React, { useState, useEffect } from "react";
import { Nav, Col, Tab, Row, Container, Image } from "react-bootstrap";
import $ from "jquery";
import Myorder from "./Layout/Panel/Myorder";
import userimg from "../images/user.svg";
import myorderimg from "../images/myorder.svg";
import billimg from "../images/bill.svg";
import inboximg from "../images/inbox.svg";
import changepassimg from "../images/changepass.svg";
import logout from "../images/logout.svg";
import * as Cookies from "js-cookie";
const Panelcustom = (props) => {
  useEffect(() => {
    $(".headersite").remove();
  }, []);

    const handlelogout = () => {
      
      Cookies.remove('token');
      props.history.push("/");
  };

  return (
    <div className="panel">
      <Container>
      <Row>
      <p className="distance">
      
     </p>
      </Row>
        <Tab.Container id="right-tabs-example" defaultActiveKey="first">
          
          <Row>
            <Col sm={10} className="content">
              <Tab.Content>
                <Tab.Pane eventKey="first"></Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Myorder />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            <Col sm={2} className="menubar">
              <div className="image-panel-parent">
                <div className="imagepanel">
                  <Image src={Cookies.get('customer_img')}/>
                </div>

              </div>
              <div className="userpanel">{Cookies.get("name") + " " + Cookies.get("family")}</div>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span>
                      <Image src={userimg} alt="userimg" />
                    </span>
                    اصلاح حساب کاربری
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span>
                      <Image src={myorderimg} alt="userimg" />
                    </span>
                    سفارشات من
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <span>
                      <Image src={billimg} alt="billImage" />
                    </span>
                    فاکتورهای من
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <span>
                      <Image src={inboximg} alt="inboximg" />
                    </span>
                    ترجمه های من
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fivth">
                    <span>
                      <Image src={changepassimg} alt="changepass" />
                    </span>
                    تغییر کلمه عبور
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth" className="logoutpanel" onClick={handlelogout}>
                    <span>
                      <Image src={logout} alt="logout" />
                    </span>
                    خروج
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Panelcustom;
