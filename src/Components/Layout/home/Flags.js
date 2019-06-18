import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Iran from '../../../images/iran.svg';
import France from '../../../images/france.svg';
import England from '../../../images/england.svg';
import Italy from '../../../images/italy.svg';
import Germany from '../../../images/germany.svg';
import Turkey from '../../../images/turkey.svg';
import Emirates from '../../../images/united-arab-emirates.svg';

const Flags = () => {
    return (
        <Container className="countries">

            <Row className="justify-content-md-center">
                <Col xl={5} lg={5} md={6} sm={12} xs={12} className="Iran pulse"><img src={Iran} alt={Iran}/></Col>
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
    );
}

export default Flags;
