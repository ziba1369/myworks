import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import phoneIcon from '../../../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../../../images/email.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
const Contatus = () => {
    return (
        <React.Fragment>

            <Row>
                <Col xl={9} md={9} sm={12} xs={12} className="footercontent">
                    <h4 className="call titlesections">تماس با ما</h4>
                    <Row>
                        <Col xl={6} md={6} sm={12} xs={12}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>نام</Form.Label>
                                    <Form.Control size="sm" type="text"/>
                                    <Form.Label>شماره همراه</Form.Label>
                                    <Form.Control size="sm" type="tel" id="phone" name="phone" pattern="[0-9]{11}"/>
                                    <Form.Label>ایمیل آدرس</Form.Label>
                                    <Form.Control size="sm" type="eamil"/>
                                    <Form.Label>موضوع</Form.Label>
                                    <Form.Control size="sm" type="type"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xl={6} md={6} sm={12} xs={12}>
                            <Form>
                                <Form.Label>متن پیام</Form.Label>
                                <Form.Control as="textarea" rows="9"/>
                            </Form>
                        </Col>
                    </Row>
                    <Col xl={{span: 4, offset: 4}} md={{span: 4, offset: 4}} sm={12} xs={12}>
                        <Button className="sendmessage" type="submit" block>ارسال پیام</Button>
                    </Col>
                </Col>
                <Col xl={3} md={3} sm={12} xs={12} className="socialicon">
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <p><img src={phoneIcon} alt={"phoneIcon"}/></p>
                        <p><span>021-44442131</span></p>
                        <p><span>021-44442131</span></p>
                    </Col>

                    <Col xl={12} md={12} sm={12} xs={12}>
                        <p><img src={emailIcon} alt={"emailIcon"}/></p>
                        <p className="mail"><span>info@Hezare3.com</span></p>

                    </Col>
                    <Col xl={12} md={12} sm={12} xs={12} className="fontawe ">
                        <Link className="instagram"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link className="twitter"><FontAwesomeIcon icon={faTwitter}/></Link>
                        <Link className="facebook"><FontAwesomeIcon icon={faFacebook}/></Link>

                    </Col>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Contatus;