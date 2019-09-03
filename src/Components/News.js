import React, { useState, useEffect } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Paginatior from "react-hooks-paginator";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import Footer from "./Layout/Footer";
import {newsAPI} from '../api/api';
/////////////////news function///////////////////////////
const Steptranslate = () => {
///////////////////set initial variable////////////////////////
  const pageLimit = 7;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastnews, setLastnews] = useState([]);
  const [newsdet, setNews] = useState([]);
  //////////////////get news from server from all////////////////////
  useEffect(() => {
    newsAPI(pageLimit,(response)=>{
      if (response.data.success) {
        setNews(response.data.news);
      } else {
        ToastsStore.error(response.data.error);
      }
    })
    /////////////lastnews
    newsAPI(1,(response)=>{
      if (response.data.success) {
        setLastnews(response.data.news);
      } else {
        ToastsStore.error(response.data.error);
      }
    })
 
  
  }, []);
 
  ////////////////show all news/////////////////
  const show = newsdet.map((item, index) => {
    return (
      <Row className="contnewsletter" key={item.id}>
        <Col className="newsimage" xl={4} lg={4} md={4} sm={12} xs={12}>
          <Image src={item.img} alt={item.title} />
        </Col>
        <Col
          xl={{ span: 8, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          md={{ span: 8, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          xs={{ span: 12, offset: 0 }}
        >
          <Row>
            <Col className="rtl titlenews" xl={8} lg={8} md={8} sm={12} xs={12}>
              <h5>{item.title}</h5>
            </Col>
            <Col className="newsdate" xl={4} lg={4} md={4} sm={12} xs={12}>
              {item.date}
            </Col>
          </Row>
          <Row className="contentnews rtl">{item.short}</Row>
          <Row className="extracontent">
            <Link to={"/blog/" + item.slug}> ادامه مطلب</Link>
          </Row>
        </Col>
      </Row>
    );
  });
  ///////////////show last news//////////////////////
  const showlast = lastnews.map((item, index) => {
    return (
      <Row className="contnewsletterlast" key={item.id}>
        <Col className="newsimage" xl={4} lg={4} md={4} sm={12} xs={12}>
          <Image src={item.img} alt={item.title} />
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row>
            <Col className="rtl titlenews" xl={8} lg={8} md={8} sm={12} xs={12}>
              <h5 style={{ fontSize: "1rem" }}>{item.title}</h5>
            </Col>
            <Col className="newsdate" xl={4} lg={4} md={4} sm={12} xs={12}>
              {item.date}
            </Col>
          </Row>
          <Row className="contentnews rtl" style={{ fontSize: ".85rem" }}>
            {item.short}
          </Row>
          <Row className="extracontent">
            <Link to={"/blog/" + item.slug}> ادامه مطلب</Link>
          </Row>
        </Col>
      </Row>
    );
  });
///////////////main return//////////////////////
  return (
    <React.Fragment>
        <ToastsContainer   position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} />
      <header>
        <NavBar />
      </header>
      <Container fluid>
        <Row className=" slideone rtl">
          <Col
            xl={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
            className="centerlogo"
          >
            {showlast}
          </Col>
        </Row>
        <Row className="rtl">
          <Col
            xl={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
            className="newsletter"
          >
            {show}
          </Col>
        </Row>
        <div className="rtl centerapge">
          <Paginatior
            totalRecords={newsdet.length}
            pageLimit={7}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Steptranslate;
