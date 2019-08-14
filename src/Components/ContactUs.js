import React from "react";
import { Container, Image, Col, Row,Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import phoneIcon from "../images/phone-symbol-of-an-auricular-inside-a-circle.svg";
import placeholder from "../images/placeholder.svg";
import emailIcon from "../images/email.svg";
import clock from "../images/clock-circular-outline.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";
/////////function contact us 
const ContactUs = () => {
    return ( 
        <React.Fragment>
      
      <header>
        <NavBar />
      </header>
        <Container>
        <Row>
            <Col
              className="service-breadcrumb"
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Breadcrumb className="rtl">
                <Breadcrumb.Item>
                  <Link to="/">صفحه اصلی</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  تماس با ما
                </Breadcrumb.Item>
               
              </Breadcrumb>
            </Col>
          </Row>
          <div className="titlepage">تماس  با ما</div>
          <div className="row contactpage">

              <Col xl={6} lg={6} md={12} xs={12}>
                  <div className="address-translate">
                      <p>
                      <span>میدان پونک -ساختمان 130-طبقه 5ام-واحد320</span><img src={placeholder} alt={"placehilder"} />
                      </p>
                  </div>
                  <div className="phone-translate">
                      <p style={{width:"100%"}} >
                        <p style={{width:"15%",display: "inline-block"}}>
                        <img src={phoneIcon} alt={"phoneIcon"} />
                        </p>
                        <p style={{width:"85%",display: "inline-block"}}>
                        <span className="tell-translate">021-44442131</span>
                        <span className="tell-translate">021-44442131</span>
                        <span className="tell-translate">021-44442131</span>
                       </p>
                      </p>
                  </div>
                  <div className="address-translate mail-translate">
                      <p>
                      <span style={{fontFamily:"Arial"}}>info@hezareh3.com</span><img src={emailIcon} alt={"emailIcon"} />
                      </p>
                  </div>
                  <div className="work-time">
                      <p>
                      <span>ساعت کاری</span><img src={clock} alt={"clock"} />
                      </p>
                      <p className="work-days">
                          <p className="row rtl"><p className="col-6">شنبه تا چهارشنبه </p><p className="col-6 timeset"><span className="time" >08:00</span>تا<span  className="time">17:30</span></p></p>
                          <p className="row rtl"><p className="col-6">پنجشنبه </p><p className="col-6 timeset"><span  className="time" >08:00</span>تا<span  className="time">13:30</span></p></p>
                          <p className="row rtl"><p className="col-6">جمعه</p><p className="col-6" style={{color:"#ff0000"}}><span style={{paddingRight: ".5rem"}}>تعطیل</span></p></p>
                      </p>
                  </div>
                  <div className="seller-expert">
                   <Row style={{textAlign:"right",fontSize: ".9rem",width:"100%",direction:"rtl"}}>کارشناسان فروش</Row>
                   <div className="row">
                   <div className="box col-5"><div className="row rtl boxcontent"><div className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-4"><img src={whatsapp} alt={"whatsapp"} /></div><div className="col-xl-8 col-lg-8 col-md-8 col-xs-8 col-8"><p className="nameapp">Whatsapp</p><p className="phone">091200000000</p></div></div></div>
                   <div className="box col-5"><div className="row rtl boxcontent"><div className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-4"><img src={whatsapp} alt={"whatsapp"} /></div><div className="col-xl-8 col-lg-8 col-md-8 col-xs-8 col-8"><p className="nameapp">Whatsapp</p><p className="phone">091200000000</p></div></div></div>
                   </div>
                   
                   <div className="row">
                   <div className="box col-5"><div className="row rtl boxcontent"><div className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-4"><img src={telegram} alt={"telegram"} /></div><div className="col-xl-8 col-lg-8 col-md-8 col-xs-8 col-8"><p className="nameapp1">Telegram</p><p className="phone">091200000000</p></div></div></div>
                   <div className="box col-5"><div className="row rtl boxcontent"><div className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-4"><img src={telegram} alt={"telegram"} /></div><div className="col-xl-8 col-lg-8 col-md-8 col-xs-8 col-8"><p className="nameapp1">Telegram</p><p className="phone">091200000000</p></div></div></div>
                   </div>
                   
                  </div>

              </Col>
              <Col xl={6} lg={6} md={12} xs={12}>
              <iframe src="https://www.google.com/maps/d/embed?mid=1tnAtQ73e9tguz-ooEP-ULT8WZwfRytnv" width="640" height="480"></iframe>
              </Col>
          </div>
        </Container>
      <Footer />
    </React.Fragment>
     );
}
 
export default ContactUs;