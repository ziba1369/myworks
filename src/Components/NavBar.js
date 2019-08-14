import React, { useState, useEffect } from "react";
import {
  Navbar,
  Col,
  Row,
  Container,
  Nav,
  Button,
  NavDropdown,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import * as Cookies from "js-cookie";
import logoutImage from "../../images/logout.svg";
import profileImage from "../../images/profileee.svg";
///////////////navbar function///////////////
const NavBar = () => {
  ////////////////set initial  variable/////////////////////
  const [styleOne, setStyleOne] = useState({ display: "flex" });
  const [styleTwo, setStyleTwo] = useState({ display: "none" });
  //////////////////// useeffect show button before and after login/////////////
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setStyleOne({ display: "none" });
      setStyleTwo({ display: "flex" });
    } else {
      setStyleOne({ display: "flex" });
      setStyleTwo({ display: "none" });
    }
  }, [Cookies.get("token")]);
  //////////////// logout handler/////////////////////
  const handlelogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <Row className="rtl">
      <Navbar
        collapseOnSelect
        className="headersite nav-link"
        expand="lg"
        variant="custom"
        style={{ marginBottom: "-1px" }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                <Menu />
              </Col>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <Nav style={styleOne} className="login">
                  <Col className="colortext" xl={6} md={6} sm={12} xs={12}>
                    <Link to="/register">ثبت نام</Link>
                  </Col>
                  <Col xl={6} md={6} sm={12} xs={12}>
                    <Link to="/login">
                      <Button className="sign">ورود</Button>
                    </Link>
                  </Col>
                </Nav>
                <Nav style={styleTwo} className="loginprofile">
                  <Col className="userprofile" xl={6} md={6} sm={12} xs={12}>
                    <Nav>
                      <NavDropdown
                        title={
                          Cookies.get("name") + " " + Cookies.get("family")
                        }
                        id="nav-dropdown"
                      >
                        <NavDropdown.Item
                          eventKey="4.1"
                          className="imageprofile"
                          style={{ color: "#000" }}>
                          <Link to="/profile/editprofile">
                            <Image src={profileImage} />
                            پروفایل
                          </Link>
                        </NavDropdown.Item>

                        <span className="imagelogout" onClick={handlelogout}>
                          {" "}
                          <NavDropdown.Item eventKey="4.2">
                            <Image src={logoutImage} />
                            خروج از حساب کاربری
                          </NavDropdown.Item>
                        </span>
                      </NavDropdown>
                    </Nav>
                  </Col>
                  <Col className="user" xl={6} md={6} sm={12} xs={12}>
                    <Link to="/profile/myorders">
                      <Button className="sign">لیست سفارشات</Button>
                    </Link>
                  </Col>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};

export default NavBar;
