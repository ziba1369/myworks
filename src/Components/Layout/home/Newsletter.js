import React, { useState, useEffect } from "react";
import { Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
///////////////newsletter-function/////////////////////
const Newsletter = () => {
  const [newsdet, setNews] = useState([]);
  Cookies.set("newsdet", newsdet, { expires: 7, path: "/" });
  useEffect(() => {
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/front/get_news_list?limit=2&offset=0",
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          setNews(response.data.news);
        } else {
          ToastsStore.error(response.data.error);
        }
      });
  }, []);

  const show = newsdet.map((item, index) => {
    return (
      <div className="row contnewsletter" key={item.id}>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 newsimage">
          <Image src={item.img} alt={item.title} />
        </div>
        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 rtl titlenews">
              <h5>{item.title}</h5>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12col-xs-12 newsdate">
              {item.date}
            </div>
          </Row>
          <div className="row contentnews rtl">{item.short}</div>
          <div className="row extracontent">
            <Link to={"/blog/" + item.slug}> ادامه مطلب</Link>
          </div>
        </Col>
      </div>
    );
  });
  useEffect(() => {
    Cookies.set("newsdet", newsdet, { expires: 7, path: "/" });
  });
  return (
    <div className="row news rtl">
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
      <Col className="newletter" xl={12} md={12} sm={12} xs={12}>
        <h5 className="titlesections">خبرنامه</h5>
      </Col>

      <Col
        xl={{ span: 12, offset: 0 }}
        lg={{ span: 12, offset: 0 }}
        md={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        xs={{ span: 10, offset: 1 }}
        className="newsletter"
      >
        {show}
        <div className="row allnews ">
          <p className="titlesections ">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            <Link to="/news">
              <span className="seeall">مشاهده همه اخبار</span>
            </Link>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </p>
        </div>
      </Col>
    </div>
  );
};

export default Newsletter;
