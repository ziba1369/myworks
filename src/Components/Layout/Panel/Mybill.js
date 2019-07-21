import React from 'react';
import {Nav,Col,Tab,Row,Container} from 'react-bootstrap';
const Myorder = () => {
    return ( 
      <React.Fragment>
   <div className="row namepanel">
      <p className="textpanel">
       لیست فاکتورها
     </p>
      </div>
      
      <div className="row myorder">
          
            <Col lg={1} xl={1} md={1}>ردیف</Col>
            <Col lg={2} xl={2} md={2}>عنوان سفارش</Col>
            <Col lg={2} xl={2} md={2}>شماره سفارش</Col>
            <Col lg={2} xl={2} md={2}>تاریخ ثبت</Col>
            <Col lg={2} xl={2} md={2}>وضعیت</Col>
            <Col lg={3} xl={3} md={3}>عملیات</Col>
         
            </div>
            <div className="row myorderlist">
          
            {/* <Col lg={1} xl={1} md={1}>ردیف</Col>
            <Col lg={2} xl={2} md={2}>عنوان سفارش</Col>
            <Col lg={2} xl={2} md={2}>شماره سفارش</Col>
            <Col lg={2} xl={2} md={2}>تاریخ ثبت</Col>
            <Col lg={2} xl={2} md={2}>وضعیت</Col>
            <Col lg={3} xl={3} md={3}>عملیات</Col> */}
         
            </div>
          </React.Fragment>
     );
}
 
export default Myorder;