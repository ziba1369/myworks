import React, {useState} from 'react';
import {Image, Col, Row, Container} from "react-bootstrap";
import amozehparvaresh from "../../../images/amozesh-parvaresh.png";
import azaduni from "../../../images/logo-Azad-University.png";
import vezaratolom from "../../../images/vezarat-olom.png";
import kanonmotarjem from "../../../images/iacti-logo.png";
import dargahkhdamat from "../../../images/epologo.png";
import sabteahval from "../../../images/Sabt-Ahval-logo-LimooGraphic.png";


const Relatedwebsites = () => {
    const [Information, setinfo] = useState([
        {
            id: 1,
            img: amozehparvaresh,
            name: "amozehparvaresh"
        },
        {
            id: 2,
            img: azaduni,
            name: "azaduni"
        },
        {
            id: 3,
            img: vezaratolom,
            name: "vezaratolom"
        },
        {
            id: 4,
            img: sabteahval,
            name: "sabteahval"
        },
        {
            id: 5,
            img: kanonmotarjem,
            name: "kanonmotarjem"
        },
        {
            id: 6,
            img: dargahkhdamat,
            nmae: "kanonmotarjem"
        }
    ])
    const logosazman = Information.map((item, inex) => {
        return (

            <Col key={item.id} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="relatedsite">
                    <a href={null}>
                        <Image src={item.img} className={item.name} alt={item.img}/>
                    </a>
                </div>
            </Col>

        );
    });

    return (
        <React.Fragment>

            <Row className="relatedsites ">
                <Container>
                    <Row>
                        <Col className="groupsite" xl={12} md={12} sm={12} xs={12}>
                            <h4 className="centertext titlesections">وب سایت های مرتبط</h4>
                        </Col>
                        {logosazman}
                    </Row>
                </Container>
            </Row>
        </React.Fragment>
    );
};

export default Relatedwebsites;
