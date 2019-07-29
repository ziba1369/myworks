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
            name: "amozehparvaresh",
            link:"http://www.medu.ir/fa/"
        },
        {
            id: 2,
            img: azaduni,
            name: "azaduni",
            link:"https://www.iau.ac.ir/"
        },
        {
            id: 3,
            img: vezaratolom,
            name: "vezaratolom",
            link:"https://www.saorg.ir/"
        },
        {
            id: 4,
            img: sabteahval,
            name: "sabteahval",
            link:"https://www.sabteahval.ir/"
        },
        {
            id: 5,
            img: kanonmotarjem,
            name: "kanonmotarjem",
            link:"https://www.iacti.ir/"
        },
        {
            id: 6,
            img: dargahkhdamat,
            name: "dargahkhdamat",
            link:"http://www.epolice.ir/news.php"
        }
    ])
    const logosazman = Information.map((item, inex) => {
        return (

            <Col key={item.id} xl={4} lg={4} md={6} sm={{span:10,offset:1}} xs={{span:10,offset:1}}>
                <div className="relatedsite">
                    <a href={item.link} target="_blank">
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
                            <h5 className="centertext titlesections">وب سایت های مرتبط</h5>
                        </Col>
                        {logosazman}
                    </Row>
                </Container>
            </Row>
        </React.Fragment>
    );
};

export default Relatedwebsites;
