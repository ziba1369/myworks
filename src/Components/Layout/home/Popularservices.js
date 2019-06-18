import React,{useState} from 'react';
import {Col, Button, Row, Carousel} from 'react-bootstrap';
import bithSertificate from '../../../images/passport (1).svg';
import idCard from '../../../images/id-card.svg';
import score from '../../../images/exam.svg';
import customtrans from '../../../images/document.svg';
import builddoc from '../../../images/contract.svg';
import workcer from '../../../images/work-certificate.svg';
import diploma from '../../../images/diploma.svg';
import marriage from '../../../images/marriage-certificate.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import Media from 'react-media';


const Popularservices = () => {
 const [Information,setinfo]=useState( [
    {
        id: 1,
        img: bithSertificate,
        title: "ترجمه شناسنامه",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 2,
        img: idCard,
        title: "ترجمه کارت ملی",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 3,
        img: score,
        title: "ترجمه ریزنمرات",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 4,
        img: customtrans,
        title: "ترجمه سفارشی",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 5,
        img: builddoc,
        title: "سندملک",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 6,
        img: workcer,
        title: "گواهی کار",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 7,
        img: diploma,
        title: "دانشنامه",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    },
    {
        id: 8,
        img: marriage,
        title: "سندازدواج",
        description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
        price: '۲۵۰۰'
    }
]
)
    const cardServices = Information.map((item, inex) => {
        return (
        

                <Col key={item.id} xl={3} lg={3} md={3} sm={12} xs={12} className="popularservices">
                    <div className="servicetran">
                        <div className="imgtrans">

                            <p className="jello"><img src={item.img} alt={"item.img"}/></p>

                            <p>{item.title}</p>
                        </div>
                        <div className="descriptiontrans">

                            {item.description.map((des, i) => (
                                <p key={i}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


                            <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                            <p style={{textAlign: "center", fontSize: "1rem"}} className="green">{item.price}</p>
                        </div>
                    </div>
                    <div className="custom">
                        <Button type="submit" className="green"><a href="#">ثبت سفارش</a></Button>
                    </div>

                </Col>

        

        )
    })

    const carousel = Information.map((item, inex) => {
        return (
            <Carousel.Item key={item.id}>
                <div className="servicetran">
                    <div className="imgtrans">

                        <p className="jello"><img src={item.img} alt={"item.img"}/></p>

                        <p>{item.title}</p>
                    </div>
                    <div className="descriptiontrans">

                        {item.description.map((des, i) => (
                            <p key={i}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


                        <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                        <p style={{textAlign: "center"}} className="green">{item.price}</p>
                    </div>
                </div>
                <div className="custom">
                    <Button type="submit" className="green">ثبت سفارش</Button>
                </div>


            </Carousel.Item>


        )
    })
    return (
        <React.Fragment>
            <Media query="(min-width:769px)">
                <Row className="popularservices rtl">
                    <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
                        <h4 className="titlesections">خدمات پرمخاطب ترجمه</h4>

                    </Col>
                    {cardServices}
                </Row>
            </Media>
            <Media query="(max-width:768px)">
                <Row className="popularservices rtl">
                    <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
                        <h5 className="titlesections">خدمات پرمخاطب ترجمه</h5>

                    </Col>
                    <Carousel interval={null}>
                        {carousel}
                    </Carousel>
                </Row>
            </Media>
        </React.Fragment>
    );
}

export default Popularservices;