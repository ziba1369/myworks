import React, {useState} from "react";
import {Image, Col, Row} from "react-bootstrap";
import khabanameh from "../../../images/khabarnameh.jpg";
import {Link} from "react-router-dom";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Newsletter = () => {
    const [newsdet, setnews] = useState([
        {
            id: 1,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        },
        {
            id: 2,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }
    ]);
    const show = newsdet.map((item, index) => {
        return (

            <Row className="contnewsletter" key={item.id}>
                <Col className="newsimage" xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Image src={item.img} alt={item.title}/>
                </Col>
                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Row>
                        <Col
                            className="rtl titlenews"
                            xl={8}
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                        >
                            <h5>{item.title}</h5>
                        </Col>
                        <Col className="newsdate" xl={4} lg={4} md={4} sm={12} xs={12}>
                            {item.date}
                        </Col>
                    </Row>
                    <Row className="contentnews rtl">{item.content}</Row>
                    <Row className="extracontent">
                        <Link to="{null}"> ادامه مطلب</Link>
                    </Row>
                </Col>
            </Row>


        );
    });

    return (
        <Row className="news rtl">
            <Col className="newletter" xl={12} md={12} sm={12} xs={12}>
                <h4 className="titlesections">خبرنامه</h4>
            </Col>

            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="newsletter">
                {show}
                <Row className="allnews ">
                    <p className="titlesections "><FontAwesomeIcon icon={faAngleDoubleRight}/><span className="seeall">مشاهده همه اخبار</span><FontAwesomeIcon
                        icon={faAngleDoubleLeft}/></p>
                </Row>
            </Col>

        </Row>
    );
};

export default Newsletter;
