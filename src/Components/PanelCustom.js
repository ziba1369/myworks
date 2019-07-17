import React,{useState,useEffect} from 'react';
import {Nav,Col,Tab,Row,Container} from 'react-bootstrap';
import $  from 'jquery';
const Panelcustom = () => {
  useEffect(()=>{

    $('.headersite').remove();
  },[])
    return ( 
        <div className="panel">
          <Container>
        <Tab.Container id="right-tabs-example" defaultActiveKey="first">
          <Row>
            <p className="textpanel">
            لیست سفارشات
           </p>
            </Row>
  <Row>
  
    <Col sm={9} className="content">
      <Tab.Content>
        <Tab.Pane eventKey="first">
          kk
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         ll
        </Tab.Pane>
      </Tab.Content>
    </Col>
    <Col sm={3}  className="menubar">
      <p className="imagepanel"></p>
      <p>بهمن مهری</p>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">اصلاح حساب کاربری</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">سفارشات من</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">فاکتورهای من</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">ترجمه های من</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fivth">تغییر کلمه عبور</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sixth" className="logoutpanel">خروج</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
</Tab.Container>
</Container>
</div>
     );
}
 
export default Panelcustom;