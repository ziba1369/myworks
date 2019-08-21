import React, { useState } from "react";
import { Image, Col, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import colseIcon from "../images/close-order.svg";
import * as Cookies from "js-cookie";
/////function aboutus
const Basket = (props) => {

  const [basket, setBasket] = useState([
    {
      name: "شناسنامه",
      id: 1,
      date: "1398/05/24",
      price: 23000
    },
    {
      name: "شناسنامه",
      id:2,
      date: "1398/05/24",
      price: 23000
    },
    {
      name: "شناسنامه",
      id:3,
      date: "1398/05/24",
      price: 23000
    },
    {
      name: "شناسنامه",
      id:4,
      date: "1398/05/24",
      price: 23000
    },
    {
      name: "شناسنامه",
      id:5,
      date: "1398/05/24",
      price: 23000
    },
    {
      name: "شناسنامه",
      id:6,
      date: "1398/05/24",
      price: 23000
    }
  ]);
  const deleteItems=itemId=>{
    const items = basket.filter(item => item.id !== itemId);
    setBasket(items);
  
  }
  if(Cookies.get('token')===undefined)
  {
    props.history.push("/login/");
  }
  console.log(basket)
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <div className="container padding-about">
        <Row>
          <Col
            className="service-breadcrumb"
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Breadcrumb className="rtl">
              <Breadcrumb.Item>
                <Link to="/">صفحه اصلی</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>درباره ما</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <div className="row basket-text">سبد خرید</div>
        <div className="row rtl">
          <div className="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
            {basket.map(item => {
              return (
                <div className="items-basket col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 " keys={item.id}>
                  <p>{item.name}</p>
                  <p>
                    کدسفارش:<span>{item.id}</span>
                  </p>
                  <p>
                    تاریخ سفارش:<span>{item.date}</span>
                  </p>
                  <p>
                    مبلغ سفارش:
                    <span style={{ color: "#0cb69f" }}>{item.price}تومان</span>
                  </p>
                  <p className="colseicon" >
                    <img onClick={()=>{deleteItems(item.id)}} src={colseIcon} alt={colseIcon} />
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3" >
          <div className="buttonsell">
            <span>مجموع هزینه ها</span>
            <span>260000 تومان</span>
          </div> 
          <button className="buttonpay">
            <span>پرداخت</span>
           
          </button> 

        </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Basket;
