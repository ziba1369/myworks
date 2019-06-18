import React from 'react';
import { Container, Button, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Documenttype from './Layout/orderlayout/Documenttype';
import Tabschoice from './Layout/orderlayout/Tabschoice';
import ServicesGrop from './Layout/orderlayout/ServicesGroup'
const Order = () => {
    return (
        <Container>
            <Row>
                <Col className="service-breadcrumb" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Breadcrumb className="rtl">
                        <Breadcrumb.Item><Link to="/">صفحه اصلی</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/services">خدمات ترجمه</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/services">مدرک شناسایی</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active href={null}>
                            شناسامه
                    </Breadcrumb.Item>
                    </Breadcrumb>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="titlesections orderheader"><h5>فرآیند ثبت سفارش ترجمه</h5></Col>
                </Col>
            </Row>
            <Row className="orderbuttons rtl">

                <Col className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer">
                    <Button size="lg">
                        انتخاب مدرک
                </Button>
                </Col>

                <Col className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer">
                    <Button size="lg">
                        نوع ترجمه
                </Button>
                </Col>

                <Col className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer">
                    <Button size="lg">
                        آپلود مدارک
                </Button>
                </Col>

                <Col className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer">
                    <Button size="lg">
                        تایید سفارش
                </Button>
                </Col>
                <Col className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer last">
                    <Button size="lg">
                        پرداخت
                   </Button>

                </Col>

            </Row>
            <Row className='rtl' style={{paddingTop:'3rem'}}>
              <Col xl={3} lg={3} md={3} sm={12} xs={12}><Documenttype/></Col> 
              <Col xl={6} lg={6} md={6} sm={12} xs={12}  className="tabschoice row"><Tabschoice/></Col>
           </Row>
           <Row className='rtl' style={{paddingTop:'3rem'}}>
              <Col xl={3} lg={3} md={3} sm={12} xs={12}><Documenttype/></Col> 
              <Col xl={6} lg={6} md={6} sm={12} xs={12}><ServicesGrop/></Col> 
           </Row>
        </Container>
    );
}

export default Order;