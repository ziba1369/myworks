import React from 'react';
import {Row, Col, Container, ButtonToolbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Logotranslate from '../../../images/Ghazaeie-logo-LimooGraphic.png'
import Iran from "../../../images/iran.svg";
import France from "../../../images/france.svg";
import England from "../../../images/england.svg";
import Italy from "../../../images/italy.svg";
import Germany from "../../../images/germany.svg";
import Turkey from "../../../images/turkey.svg";
import Emirates from "../../../images/united-arab-emirates.svg";

const Slide = () => {
    return (
        <React.Fragment>

            <Row className=" slideone rtl">
                <Col xl={6} md={6} sm={12} xs={12} className="centerlogo">
                    <p className="logoslide">
                        <img src={Logotranslate} alt={"Logotranslate"}/>
                    </p>
                    <p className="office">دفتر ترجمه رسمی ۴۴۹ تهران</p>
                    <p className="owner">مترجم مسئول: موسوی</p>
                </Col>
                <Col xl={6} md={6} sm={12} xs={12} className="groupflags">
                    <Container className="countries">

                        <Row className="justify-content-md-center">
                            <Col xl={5} lg={5} md={6} sm={12} xs={12} className="Iran pulse"><img src={Iran}
                                                                                                  alt={Iran}/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="France dist pulse"><img src={France}
                                                                                                       alt={France}/></Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="England dist pulse"><img src={England}
                                                                                                        alt={England}/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="Italy dist pulse"><img src={Italy}
                                                                                                      alt={Italy}/></Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="Germany dist pulse"><img src={Germany}
                                                                                                        alt={Germany}/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="Turkey dist pulse"><img src={Turkey}
                                                                                                       alt={Turkey}/></Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={6} className="Emirates dist pulse"><img src={Emirates}
                                                                                                         alt={Emirates}/></Col>
                        </Row>

                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xl={12} md={12} sm={12} xs={12} className="pricebtn">
                    <ButtonToolbar className=" price">
                        <a href="#"><button className="btn-light-theme" >نرخ نامه مصوب ترجمه رسمی</button></a>
                        <Link to='/services/all'><button className="btn-color-theme">ثبت سفارش آنلاین ترجمه</button></Link>
                    </ButtonToolbar>
                </Col>
            </Row>

        </React.Fragment>
    );
}

export default Slide;