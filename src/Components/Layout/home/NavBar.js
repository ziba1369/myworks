import React from './node_modules/react';
import {Navbar, Col, Row, Container} from './node_modules/react-bootstrap';
import Menu from '../Menu';
import Login from '../Login';

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
                                <Login/>
                            </Col>

                        </Row>
                    </Container>
                </Navbar.Collapse>

            </Navbar>
        </Row>

    );
}

export default NavBar;