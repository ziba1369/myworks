import React from 'react';
import {Navbar, Col, Row, Container, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Menu from './Menu';

const NavBar = () => {
    return (

        <Row className="rtl">
            <Navbar collapseOnSelect className="headersite nav-link" expand="lg" variant="custom">

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container fluid>
                        <Row className="col-xl-12 col-md-12 col-sm-12 col-xs-12">

                            <Col xl={8} md={8} sm={12} xs={12}>
                                <Menu/>
                            </Col>
                            <Col xl={4} md={4} sm={12} xs={12}>
                                <Nav className="login">
                                    <Col className="colortext" xl={6} md={6} sm={12} xs={12}> <Link to='/register'>ثبت نام</Link>
                                    </Col>
                                    <Col className="sign" xl={6} md={6} sm={12} xs={12}> <Link to='/login'>ورود</Link></Col>
                                </Nav>
                            </Col>

                        </Row>
                    </Container>
                </Navbar.Collapse>

            </Navbar>
        </Row>

    );
}

export default NavBar;