import React, {useState, useEffect} from "react";
import {Col, Row, Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import colseIcon from "../images/close-order.svg";
import * as Cookies from "js-cookie";
import {basketAPI, cancelitemAPI} from "../api/api";
import {ToastsStore} from "react-toasts";


const Basket = props => {

    const [basket, setBasket] = useState({
        totalPrice: "",
        items: []
    });

    useEffect(() => {
        basketAPI(Cookies.get("token"), response => {

            if (response.data.success) {
                setBasket({
                    totalPrice: response.data.totalPrice,
                    items: response.data.items
                });

            } else {
                ToastsStore.error(response.data.error);
            }
        });
    }, []);

    const deleteItems = (itemCode) => {
        cancelitemAPI(Cookies.get("token"), itemCode, response => {
            console.log(response);
            if (response.data.success) {
                setBasket({
                    totalPrice: response.data.totalPrice,
                    items: response.data.items
                });
            } else {
                ToastsStore.error(response.data.error);
            }
        });
    };
    if (Cookies.get("token") === undefined) {
        props.history.push("/login/");
    }
    return (
        <React.Fragment>
            <header>
                <NavBar/>
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
                            <Breadcrumb.Item active>سبد خرید</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <div className="row basket-text">سبد خرید</div>
                <div className="row rtl">
                    <div className="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        {basket.items.map(item => {
                            return (
                                <div
                                    className="items-basket col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 "
                                    keys={item.id}
                                >
                                    <p>{item.name}</p>
                                    <p>
                                        کدسفارش:<span>{item.code}</span>
                                    </p>
                                    <p>
                                        تاریخ سفارش:<span>{item.date}</span>
                                    </p>
                                    <p>
                                        مبلغ سفارش:
                                        <span style={{color: "#0cb69f"}}>{item.price}تومان</span>
                                    </p>
                                    <p className="colseicon">
                                        <img
                                            onClick={() => {
                                                deleteItems(item.code);
                                            }}
                                            src={colseIcon}
                                            alt=""
                                        />
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <div className="buttonsell">
                            <span>مجموع هزینه ها</span>
                            <span>{basket.totalPrice} تومان</span>
                        </div>
                        <button className="buttonpay">
                            <a href={"/api/app_pay_order?customer_token=" + Cookies.get("token")}>
                                <span>پرداخت</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Basket;
