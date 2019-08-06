import React, { useState, useEffect } from "react";
import {
  Nav,
  Col,
  Tab,
  Row,
  Container,
  Image,
  Navbar,
  Form,
  Button
} from "react-bootstrap";
import Myorder from "./Layout/Panel/Myorder";
import EditProfile from "./Layout/Panel/EditProfile";
import Passchange from "./Layout/Panel/Passcahnge";
import Mybill from "./Layout/Panel/Mybill";
import Mytranslate from "./Layout/Panel/Mytranslate";
import userimg from "../images/user.svg";
import myorderimg from "../images/myorder.svg";
import billimg from "../images/bill.svg";
import inboximg from "../images/inbox.svg";
import changepassimg from "../images/changepass.svg";
import logout from "../images/logout.svg";
import * as Cookies from "js-cookie";
import { slide as Menu } from 'react-burger-menu';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Media from "react-media";
import Logotranslate from '../images/Ghazaeie-logo-LimooGraphic.png';
/////////////main/////////////
const Panelcustom = props => {
const[menu,setMenu]=useState(false);
  /////////////logout///////////// 
 
    const handlelogout = () => {
      Cookies.remove("token");
      Cookies.remove("name");
      Cookies.remove("family");
      props.history.push("/");
      window.location.reload();
    };
  
    return (
      <div className="panel">
        <div className="distance">
        <div className="profilelink">
          <img src={Logotranslate} alt={"Logotranslate"} />
          
          <p>
            <Link to="/">
              دفتر ترجمه رسمی ۴۴۹ تهران
            </Link>
          </p>
          
          </div>
        </div>
  
        <Tab.Container
          id="right-tabs-example"
          defaultActiveKey={props.match.params.page}
        >
          <React.Fragment>
            <Row className="rtl">
            {/* /////////////normal-menu///////////// */}
              <Media
                query="(min-width:992px)"
                render={() => (
                  <React.Fragment>
                    <Col sm={2} className="menubar">
                      <div className="image-panel-parent">
                        <div className="imagepanel">
                          <Image src={Cookies.get("customer_img")} />
                        </div>
                      </div>
                      <div className="userpanel">
                        {Cookies.get("name") + " " + Cookies.get("family")}
                      </div>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item >
                          <Nav.Link eventKey="editprofile">
                            <span>
                              <Image src={userimg} alt="userimg" />
                            </span>
                            اصلاح حساب کاربری
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="myorders">
                            <span>
                              <Image src={myorderimg} alt="userimg" />
                            </span>
                            سفارشات من
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="mybill">
                            <span>
                              <Image src={billimg} alt="billImage" />
                            </span>
                            فاکتورهای من
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="mytranslate">
                            <span>
                              <Image src={inboximg} alt="inboximg" />
                            </span>
                            ترجمه های من
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="changepass">
                            <span>
                              <Image src={changepassimg} alt="changepass" />
                            </span>
                            تغییر کلمه عبور
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="sixth"
                            className="logoutpanel"
                            onClick={handlelogout}
                          >
                            <span>
                              <Image src={logout} alt="logout" />
                            </span>
                            خروج
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={10} className="content">
                      <Tab.Content>
                        <Tab.Pane eventKey="editprofile">
                          <EditProfile />
                        </Tab.Pane>
                        <Tab.Pane eventKey="myorders">
                          <Myorder />
                        </Tab.Pane>
                        <Tab.Pane eventKey="mybill">
                          <Mybill />
                        </Tab.Pane>
                        <Tab.Pane eventKey="mytranslate">
                          <Mytranslate />
                        </Tab.Pane>
                        <Tab.Pane eventKey="changepass">
                          <Passchange />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </React.Fragment>
                )}
              />
            </Row>
             {/* /////////////responsive-menu///////////// */}
            <Media
              query="(max-width:991px)"
              render={() => (
                <div id="outer-container">
                  
                  <Menu right 
                  customBurgerIcon={ false }
                  disableAutoFocus
                  customCrossIcon={ false }
                  isOpen={ menu } onStateChange={() => setMenu(menu) } >
                    <p className="closeprofile" onClick={()=>setMenu(false)}></p>
                    <div className="profilelink">
                    <Link to="/">
                    <img src={Logotranslate} alt={"Logotranslate"} />
                    <span>دفتر ترجمه رسمی ۴۴۹ تهران</span>
                    </Link>
                    </div>
                    
                    <Link
                      id="editprofile"
                      className="menu-item"
                      to={"/profile/editprofile"}
                      onClick={()=>setMenu(false)}
                      
                    >
                      اصلاح حساب کاربری <Image src={userimg} alt="userimg" />
                    </Link>
                    <Link
                      id="myorder"
                      className="menu-item"
                      to="/profile/myorders"
                      onClick={ ()=>setMenu(!menu)}
                    >
                      سفارشات من <Image src={myorderimg} alt="myorderimg" />
                    </Link>
                    <Link
                      id="mybill"
                      className="menu-item"
                      to={"/profile/mybill"}
                      onClick={()=>setMenu(false)}
                    
                    >
                      فاکتورهای من <Image src={billimg} alt="billimg" />
                    </Link>
                    <Link
                      id="mytrans"
                      className="menu-item"
                      to={"/profile/mytranslate"}
                      onClick={()=>setMenu(false)}
                    
                    >
                      ترجمه های من <Image src={inboximg} alt="inboximg" />
                    </Link>
                    <Link
                      id="changepass"
                      className="menu-item"
                      to={"/profile/changepass"}
                      onClick={()=>setMenu(false)}
                    >
                      تغییر کلمه عبور{" "}
                      <Image src={changepassimg} alt="changepassimg" />
                    </Link>
                    <Link
                      id="logout"
                      className="logoutpanel"
                      onClick={handlelogout}
                    >
                      خروج <Image src={logout} alt="logout" />{" "}
                    </Link>
                  </Menu>
                  <main id="page-wrap">
                    <div className="profileopen" onClick={()=>setMenu(true)}></div>
                    {props.match.params.page === "editprofile" ? (
                      <EditProfile />
                    ) : props.match.params.page === "myorders" ? (
                      <Myorder />
                    ) : props.match.params.page === "mybill" ? (
                      <Mybill />
                    ) : props.match.params.page === "mytranslate" ? (
                      <Mytranslate />
                    ) : props.match.params.page === "changepass" ? (
                      <Passchange />
                    ) : props.match.params.page === "Passchange" ? (
                      <Mytranslate />
                    ) : (
                      "undefined"
                    )}
                  </main>
                </div>
              )}
            />
          </React.Fragment>
        </Tab.Container>
      </div>
    );
  };
  
  export default Panelcustom;