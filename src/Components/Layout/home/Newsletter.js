import React, {useState,useEffect} from "react";
import {Image, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
  } from "react-toasts";
import * as Cookies from "js-cookie";
const Newsletter = () => {
const [newsdet, setNews] = useState([]);
Cookies.set("newsdet",newsdet, {expires: 7,path: "/"});
    useEffect(() => {
        axios
            .get(
                "http://hezare3vom.ratechcompany.com/api/front/get_news_list?limit=2&offset=0",
                {
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(function (response) {
                if (response.data.success) {
                    setNews(response.data.news);
                    //console.log(response.data.news)
                   

                } else {
                    ToastsStore.error(response.data.error);
                }
            })
            // .catch(function (error) {
            //     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
            // });
            
      },[]);
     
    
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
                    <Row className="contentnews rtl">{item.short}</Row>
                    <Row className="extracontent">
                        <Link to={'/blog/'+item.slug}> ادامه مطلب</Link>
                    </Row>
                </Col>
            </Row>


        );
    });
useEffect(()=>{
    Cookies.set("newsdet",newsdet, {expires: 7,path: "/"});
})
    return (
        <Row className="news rtl">
            <Col className="newletter" xl={12} md={12} sm={12} xs={12}>
                <h5 className="titlesections">خبرنامه</h5>
            </Col>

            <Col xl={{span:12,offset:0}} lg={{span:12,offset:0}} md={{span:10,offset:1}} sm={{span:10,offset:1}} xs={{span:10,offset:1}} className="newsletter">
                {show}
                <Row className="allnews ">
                    <p className="titlesections "><FontAwesomeIcon icon={faAngleDoubleRight}/><Link to="/news"><span className="seeall">مشاهده همه اخبار</span></Link><FontAwesomeIcon
                        icon={faAngleDoubleLeft}/></p>
                </Row>
            </Col>

        </Row>
    );
};

export default Newsletter;
