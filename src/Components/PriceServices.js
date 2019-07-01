import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  InputGroup,
  Row,
  Col,
  Breadcrumb
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
const PriceServices = props => {
  const [activepage, setActivePage] = useState(1);
  const [data, setData] = useState([]);
  const [styleone, setStyleone] = useState({  color:'#454f63 ',backgroundColor: '#aad0f4',borderColor: '#aad0f4'});
  const [styletwo, setStyletwo] = useState( { color: '#454f63' ,backgroundColor: '#5766b5' ,borderColor: '#5766b5'});
  const [stylethree, setStylethree] = useState({color:'#454f63' ,backgroundColor: '#ffdfe6' ,borderColor: '#ffdfe6'});
  const [stylefour, setStylefour] = useState({color: '#454f63',backgroundColor: '#c5edd7' ,borderColor: '#c5edd7'});
  const [stylefive, setStylefive] = useState({color: '#454f63' ,backgroundColor: '#dac2d4' ,borderColor: '#dac2d4'});
  const [stylesix, setStylesix] = useState({color:'#454f63',backgroundColor: '#ffe7bd',borderColor: '#ffe7bd'});
  const onPageChanged = pageNumber => {
    setActivePage({ activePage: pageNumber });
  };

  useEffect(() => {
    switch (props.match.params.id) {
     
      case 5:
        setStyleone({
         
          backgroundColor: "red",
        });
        break;
      case 1:
        setStyletwo({
            backgroundColor: "red",
        });
        break;
      case 3:
        setStylethree({
            backgroundColor: "red",
        });
        break;

      case 4:
        setStylefour({
            backgroundColor: "red",
        });
        break;
      case 2:
        setStylefive({
            backgroundColor: "red",
        });
        break;
      case 0:
        setStylesix({
          
          backgroundColor: "red",
        
        });
        break;
    
    }
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/front/get_products_list?limit=15&offset=0&category_id=" +
          props.match.params.id,
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          setData(response.data.products);
          console.log(props.match.params.id);
        } else {
          ToastsStore.error(response.data.error);
        }
      })
      .catch(function(error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
      });
  }, [props.match.params.id]);

  return (
    <Container fluid className="contentpadding">
      <Row>
        <Col
          className="service-breadcrumb"
          xl={9}
          lg={9}
          md={12}
          sm={12}
          xs={12}
        >
          <Breadcrumb className="rtl">
            <Breadcrumb.Item>
              <Link to="/">صفحه اصلی</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active href={null}>
              خدمات ترجمه
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Col className="service-search" xl={3} lg={3} md={12} sm={12} xs={12}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>

            <input
              className="form-control textholder"
              type="text"
              placeholder="نام خدمات یا نوع مدرک را جستجو کنید"
              aria-label="Search"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col
          className="service-detail rtl"
          xl={9}
          lg={9}
          md={12}
          sm={12}
          xs={12}
        >
          <Row>
            {props.match.params.id &&
              data.map(item => {
                return (
                  <div
                    id="paginationcard"
                    key={item.id}
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 rtl"
                  >
                    <Card className="detail-card">
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <p className="textprice text-gray ">هزینه ترجمه:</p>
                          <p className="numberprice ">
                            {" "}
                            تومان{item.pricetrans}
                          </p>
                          <p className="textprice text-gray ">
                            هزینه نسخه اضافه:
                          </p>
                          <p className="numberprice"> تومان{item.extraprice}</p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <p className="service-price">
                          <a href={null}>ثبت سفارش</a>
                        </p>
                      </Card.Footer>
                    </Card>
                  </div>
                );
              })}
          </Row>
          <Pagination
            activePage={activepage} // active page number
            itemsCountPerPage={2} // your limit value send to server with axios
            totalItemsCount={450} //TODO get it from server
            pageRangeDisplayed={5} // Number of pages visitor see in browser
            onChange={onPageChanged}
          />
        </Col>

        <Col className="service-box" xl={3} lg={3} md={12} sm={12} xs={12}>
          <Card className="gservices" style={{ textAlign: "center" }}>
            <Card.Body>
              <Card.Title className="sbox-title">گروه بندی خدمات</Card.Title>

              <Button
               // className="paleblue"
                block
                style={styleone}
                onClick={e => props.history.push("/services/5")}
              >
                همه موارد
              </Button>
              <Button
               // className="navyblue"
                onClick={e => props.history.push("/services/1")}
                style={styletwo}
                block
              >
                مدارک شناسایی
              </Button>
              <Button
               // className="pink"
                style={stylethree}
                onClick={e => props.history.push("/services/3")}
                block
              >
                مدارک تحصیلی
              </Button>
              <Button
                style={stylefour}
               // className="aquamarine"
                onClick={e => props.history.push("/services/4")}
                block
              >
                مدارک مالی
              </Button>
              <Button
               // style={stylefive}
                className="violet"
                onClick={e => props.history.push("/services/2")}
                block
              >
                مدارک شغلی
              </Button>
              <Button
                style={stylesix}
                //className="cream"
                onClick={e => props.history.push("/services/0")}
                block
              >
                مدارک شرکتی
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <div />
      </Row>
    </Container>
  );
};

export default PriceServices;
