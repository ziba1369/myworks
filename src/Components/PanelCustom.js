import React, { useState, useEffect } from "react";
import {
  Nav,
  Col,
  Tab,
  Row,
  Container,
  Image,
  Navbar,
  Form
} from "react-bootstrap";
import $ from "jquery";
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
const Panelcustom = props => {
  const handlelogout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("family");
    props.history.push("/");
    window.location.reload();
  };
  // useEffect(() => {
  //   switch (eventKey) {
  //     case 'first':
  //       firstStyle({display:'block'});
  //       secondStyle({display:'none'});

  //     case 'second':
  //       firstStyle({display:'none'});
  //       secondStyle({display:'block'});
  //   }
  // }
  // ,[eventKey])

  return (
    <div className="panel">
     
        <p className="distance" />
     
      <Tab.Container
        id="right-tabs-example"
        defaultActiveKey={props.match.params.page}
      >
        
          <React.Fragment>
          <Row className="rtl">
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
                    <Nav.Link eventKey="fifth">
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
              <Tab.Pane eventKey="first">
                <EditProfile />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Myorder />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Mybill />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Mytranslate />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Passchange />
              </Tab.Pane>
            </Tab.Content>
          </Col>
             </React.Fragment>
            )}/>
                 </Row>
              <Media
           query="(max-width:991px)"
           render={() => (
          
              <div id="outer-container">
            <Menu  right >
            <Link id="editprofile" className="menu-item" to={'/profile/first'}>اصلاح حساب کاربری <Image src={userimg} alt="userimg" /></Link>
            <Link id="myorder" className="menu-item" to={'/profile/second'}>سفارشات من <Image src={myorderimg} alt="myorderimg" /></Link>
            <Link  id="mybill" className="menu-item" to={'/profile/third'}>فاکتورهای من <Image src={billimg} alt="billimg" /></Link>
            <Link  id="mytrans" className="menu-item" to={'/profile/fourth'}>ترجمه های من <Image src={inboximg} alt="inboximg" /></Link>
            <Link  id="changepass" className="menu-item" to={'/profile/fifth'}>تغییر کلمه عبور <Image src={changepassimg} alt="changepassimg" /></Link>
            <Link  id="logout" className="logoutpanel" onClick={handlelogout}>خروج <Image src={logout} alt="logout" /> </Link>
            </Menu>
            <main id="page-wrap">
            {props.match.params.page === "first" ? 
            <EditProfile/>:props.match.params.page === "second"?
           <Mybill/>:props.match.params.page==="third"?
           <Mytranslate/>:"a" }
              
          
            </main>
         
           </div>
           
           )}/>
            </React.Fragment>
     
      </Tab.Container>
    </div>
  );
};

export default Panelcustom;
