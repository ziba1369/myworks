import React from 'react'
import {Col, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <Nav className="login">

            <Col className="colortext" xl={6} md={6} sm={12} xs={12}><a href="#">ثبت نام</a>
            </Col>
            <Col className="sign" xl={6} md={6} sm={12} xs={12}> <Link to='./login'>ورود</Link></Col>

        </Nav>

    );
}

export default Login;