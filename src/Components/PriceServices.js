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
import NavBar from "./Layout/NavBar";
import { Link } from "react-router-dom";
import Paginatior from "react-hooks-paginator";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import Footer from "./Layout/Footer";
/////////////price srvices function/////////////////
const PriceServices = props => {
  ///////////////set initial variable/////////////////////
  const pageLimit = 15;
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [styleone, setStyleone] = useState({
    color: "#454f63 ",
    backgroundColor: "#aad0f4",
    borderColor: "#aad0f4"
  });
  ////////////initial for buttons//////////////
  const [styletwo, setStyletwo] = useState({
    color: "#454f63",
    backgroundColor: "#5766b5",
    borderColor: "#5766b5"
  });
  const [stylethree, setStylethree] = useState({
    color: "#454f63",
    backgroundColor: "#ffdfe6",
    borderColor: "#ffdfe6"
  });
  const [stylefour, setStylefour] = useState({
    color: "#454f63",
    backgroundColor: "#c5edd7",
    borderColor: "#c5edd7"
  });
  const [stylefive, setStylefive] = useState({
    color: "#454f63",
    backgroundColor: "#dac2d4",
    borderColor: "#dac2d4"
  });
  const [stylesix, setStylesix] = useState({
    color: "#454f63",
    backgroundColor: "#ffe7bd",
    borderColor: "#ffe7bd"
  });
////////////////change dolor selected button///////////////

  useEffect(() => {
    switch (props.match.params.id) {
      case "all":
        setStyleone({
          backgroundColor: "#3798f5",
          boxShadow: " 0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        setStyletwo({
          color: "#454f63",
          backgroundColor: "#ebeeff",
          borderColor: "#5766b5"
        });
        setStylethree({
          color: "#454f63",
          backgroundColor: "#ffdfe6",
          borderColor: "#ffdfe6"
        });
        setStylefour({
          color: "#454f63",
          backgroundColor: "#c5edd7",
          borderColor: "#c5edd7"
        });
        setStylefive({
          color: "#454f63",
          backgroundColor: "#dac2d4",
          borderColor: "#dac2d4"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });

        break;
      case "1":
        setStyleone({
          color: "#454f63 ",
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4"
        });
        setStyletwo({
          backgroundColor: "#5766b5",
          boxShadow: "  0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        setStylethree({
          color: "#454f63",
          backgroundColor: "#ffdfe6",
          borderColor: "#ffdfe6"
        });
        setStylefour({
          color: "#454f63",
          backgroundColor: "#c5edd7",
          borderColor: "#c5edd7"
        });
        setStylefive({
          color: "#454f63",
          backgroundColor: "#dac2d4",
          borderColor: "#dac2d4"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });
        break;
      case "3":
        setStyleone({
          color: "#454f63 ",
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4"
        });
        setStyletwo({
          color: "#454f63",
          backgroundColor: "#ebeeff",
          borderColor: "#5766b5"
        });
        setStylethree({
          backgroundColor: "#ef9a9a",
          boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        setStylefour({
          color: "#454f63",
          backgroundColor: "#c5edd7",
          borderColor: "#c5edd7"
        });
        setStylefive({
          color: "#454f63",
          backgroundColor: "#dac2d4",
          borderColor: "#dac2d4"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });
        break;

      case "4":
        setStyleone({
          color: "#454f63 ",
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4"
        });
        setStyletwo({
          color: "#454f63",
          backgroundColor: "#ebeeff",
          borderColor: "#5766b5"
        });
        setStylethree({
          color: "#454f63",
          backgroundColor: "#ffdfe6",
          borderColor: "#ffdfe6"
        });
        setStylefour({
          backgroundColor: "#0cb69f",
          boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        setStylefive({
          color: "#454f63",
          backgroundColor: "#dac2d4",
          borderColor: "#dac2d4"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });
        break;
      case "2":
        setStyleone({
          color: "#454f63 ",
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4"
        });
        setStyletwo({
          color: "#454f63",
          backgroundColor: "#ebeeff",
          borderColor: "#5766b5"
        });
        setStylethree({
          color: "#454f63",
          backgroundColor: "#ffdfe6",
          borderColor: "#ffdfe6"
        });
        setStylefour({
          color: "#454f63",
          backgroundColor: "#c5edd7",
          borderColor: "#c5edd7"
        });
        setStylefive({
          backgroundColor: "#c463ac",
          boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });
        break;
      case "5":
        setStyleone({
          color: "#454f63 ",
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4"
        });
        setStyletwo({
          color: "#454f63",
          backgroundColor: "#ebeeff",
          borderColor: "#5766b5"
        });
        setStylethree({
          color: "#454f63",
          backgroundColor: "#ffdfe6",
          borderColor: "#ffdfe6"
        });
        setStylefour({
          color: "#454f63",
          backgroundColor: "#c5edd7",
          borderColor: "#c5edd7"
        });
        setStylefive({
          color: "#454f63",
          backgroundColor: "#dac2d4",
          borderColor: "#dac2d4"
        });
        setStylesix({
          color: "#454f63",
          backgroundColor: "#ffe7bd",
          borderColor: "#ffe7bd"
        });
        setStylesix({
          backgroundColor: "#f4c36d",
          boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
          border: "0px"
        });
        break;
      default:
        break;
    }
  }, [props.match.params.id]);

  /////////////get products data from server/////////////////////
  useEffect(() => {
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/front/get_products_list?limit=" +
          pageLimit +
          "&offset=" +
          offset +
          "&category_id=" +
          props.match.params.id,
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          setData(response.data.products);
          setTotal(response.data.total);
        } else {
          ToastsStore.error(response.data.error);
        }
      });
  }, [props.match.params.id, offset]);
////////////////set offset/////////////////
  useEffect(() => {
    setOffset(0);
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
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

          <Col
            className="service-search"
            xl={{ span: 3, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
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

        <div className="row rtl">
          <Col
            className="service-box"
            xl={{ span: 3, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            sm={{ span: 8, offset: 2 }}
            xs={{ span: 10, offset: 1 }}
          >
            <Card className="gservices" style={{ textAlign: "center" }}>
              <Card.Body>
                <Card.Title className="sbox-title">گروه بندی خدمات</Card.Title>

                <Button
                  // className="paleblue"
                  block
                  style={styleone}
                  onClick={e => props.history.push("all")}
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
                  style={stylefive}
                  //className="violet"
                  onClick={e => props.history.push("/services/2")}
                  block
                >
                  مدارک شغلی
                </Button>
                <Button
                  style={stylesix}
                  //className="cream"
                  onClick={e => props.history.push("/services/5")}
                  block
                >
                  مدارک شرکتی
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="service-detail rtl"
            xl={{ span: 9, offset: 0 }}
            lg={{ span: 9, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            sm={{ span: 11, offset: 0 }}
            xs={{ span: 11, offset: 0 }}
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
                              {item.pricetrans}تومان
                            </p>
                            <p className="textprice text-gray ">
                              هزینه نسخه اضافه:
                            </p>
                            <p className="numberprice">
                              {item.extraprice}تومان
                            </p>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <p
                            className="service-price"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              if (Cookies.get("token")) {
                                Cookies.set("title", item.title, {
                                  expires: 7,
                                  path: "/"
                                });
                                Cookies.set("types", item.id, {
                                  expires: 7,
                                  path: "/"
                                });
                                props.history.push("/order/" + item.slug);
                              } else {
                                props.history.push("/login/");
                              }
                            }}
                          >
                            ثبت سفارش
                          </p>
                        </Card.Footer>
                      </Card>
                    </div>
                  );
                })}
            </Row>
            <Paginatior
              totalRecords={total}
              pageLimit={pageLimit}
              //  pageNeighbours={4}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>

          <div />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default PriceServices;
