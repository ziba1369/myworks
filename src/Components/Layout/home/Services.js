import React,{useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import officeDoc from '../../../images/sherkati-g.svg';
import workDoc from '../../../images/shoghli.svg';
import financeDoc from '../../../images/mali-g.svg';
import educarionDoc from '../../../images/tahsili-g.svg';
import cardDoc from '../../../images/passport.46186dcf.svg';


const Services = () => {
    const [info,
        // setinfo
    ]=useState([{
        id: 1,
        title: 'مدارک شرکتی',
        img: officeDoc,
        alt: 'مدارک شرکتی',
        color: '#ffe7bd',
        boxshadow: '0px 4px 20px 1px #ffe7bd',
        name: "officedoc",
    },
        {
            id: 2,
            title: 'مدارک شغلی',
            img: workDoc,
            alt: 'مدارک شغلی',
            color: '#dac2d4',
            boxshadow: '0px 4px 20px 1px #dac2d4',
            name: "workdoc"
        },
        {
            id: 3,
            title: 'مدارک مالی',
            img: financeDoc,
            alt: 'مدارک مالی',
            color: '#c5edd7',
            boxshadow: '0px 4px 20px 1px #c5edd7',
            name: "financedoc"
        },
        {
            id: 4,
            title: 'مدارک تحصیلی',
            img: educarionDoc,
            alt: 'مدارک تحصیلی',
            color: '#ffdfe6',
            boxshadow: '0px 4px 20px 1px #ffdfe6',
            name: "educarionDoc"
        },
        {
            id: 5,
            title: 'مدارک شناسایی',
            img: cardDoc,
            alt: 'مدارک شناسایی',
            color: '#ebeeff',
            boxshadow: '0px 4px 20px 1px #ebeeff',
            name: "carddoc"
        },
    
    ]);

    const cards = info.map((item, index) => {
        return (

            <div key={item.id} className="child col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4">
                <Card className="pulse noborder" style={{backgroundColor: item.color, boxShadow: item.boxshadow}}>
                    <Card.Img variant="top" alt={item.alt} className={item.name} src={item.img}/>
                    <Card.Body>
                        <Card.Title><a href={null}>{item.title}</a></Card.Title>
                    </Card.Body>
                </Card>
            </div>


        )
    })

    return (
        <Row className="services">
            <Col className="servicestext titlesections" xl={12} md={12} sm={12} xs={12}><h4 className="titlesections">خدمات ترجمه</h4></Col>
            {cards}
        </Row>

    )
}
export default Services;
