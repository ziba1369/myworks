import React, {useState, useEffect} from "react";
import {Button, Carousel} from "react-bootstrap";
import customtrans from "../../../images/document.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import Media from "react-media";
import * as Cookies from "js-cookie";
import {withRouter} from "react-router-dom";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import {get_popular_productsAPI} from '../../../api/api';
////////////////populerservices function/////////////////
const Popularservices = props => {
    ////////////////custom order/////////////////
    const [Information, setinfo] = useState([
        {
            id: 4,
            img: customtrans,
            title: "ترجمه سفارشی",
            description: ["ترجمه رسمی", "مهرمترجم رسمی", "مهر دادگستری"],
            price: "۲۵۰۰",
            slug: "customorder"
        }
    ]);
    ////////////////card services in normal resolationr/////////////////
    const cardServices = Information.map((item, inex) => {
        return (
            <div
                className="popularservices col-xl-3 col-lg-3 col-md-3 col-sm-12" key={item.id}>
                <div className="servicetran">
                    <div className="imgtrans">
                        <p className="jello">
                            <img src={item.img} alt={"item.img"}/>
                        </p>

                        <p>{item.title}</p>
                    </div>
                    <div className="descriptiontrans">
                        <div className="descript">
                            {item.description.map((des, i) => (
                                <p key={des.id}>
                                    {des}

                                    {des && <FontAwesomeIcon icon={faCheckCircle}/>}
                                </p>
                            ))}
                        </div>
                        <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                        <p
                            style={{textAlign: "center", fontSize: "1rem"}}
                            className="green"
                        >
                            {item.price}
                        </p>
                    </div>
                </div>
                <div className="custom">
                    <Button
                        type="submit"
                        className="green"
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            Cookies.set("title", item.title, {expires: 7, path: "/"});
                            Cookies.set("types", item.id, {expires: 7, path: "/"});
                            if (item.id === 4) {
                                props.history.push("/customorder")
                            } else {
                                props.history.push("/order/" + item.slug);
                            }
                        }}
                    >
                        ثبت سفارش
                    </Button>
                </div>
            </div>
        );
    });
    ////////////////card services in responsive/////////////////
    const carousel = Information.map((item, inex) => {
        return (
            <Carousel.Item key={item.id}>
                <div className="servicetran">
                    <div className="imgtrans">
                        <p className="jello">
                            <img src={item.img} alt={"item.img"}/>
                        </p>

                        <p>{item.title}</p>
                    </div>
                    <div className="descriptiontrans">
                        {item.description.map((des, i) => (
                            <p key={i}>
                                {des}
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </p>
                        ))}

                        <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                        <p style={{textAlign: "center"}} className="green">
                            {item.price}
                        </p>
                    </div>
                </div>
                <div className="custom">
                    <Button
                        className="green"
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            Cookies.set("title", item.title, {expires: 7, path: "/"});
                            Cookies.set("types", item.id, {expires: 7, path: "/"});
                            if (item.id === 4) {
                                props.history.push("/customorder");
                            } else {
                                props.history.push("/order/" + item.slug);
                            }
                        }}
                    >
                        ثبت سفارش
                    </Button>
                </div>
            </Carousel.Item>
        );
    });
    ////////////////useeffect set data from server/////////////////
    useEffect(() => {
        get_popular_productsAPI(props.match.params.id, (response) => {
            if (response.data.success) {
                setinfo([...response.data.products, ...Information]);
                // console.log(response.data.products);
            } else {
                ToastsStore.error(response.data.error);
            }
        })

    }, []);

    ////////////////main return/////////////////
    return (
        <React.Fragment>
            <ToastsContainer
                position={ToastsContainerPosition.TOP_CENTER}
                store={ToastsStore}
            />
            <Media query="(min-width:769px)">
                <div className="row popularservices rtl">
                    <div className="servicestext col-xl-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="titlesections">خدمات پرمخاطب ترجمه</h5>
                    </div>
                    {cardServices}
                </div>
            </Media>
            <Media query="(max-width:768px)">
                <div className="row popularservices rtl">
                    <div className="servicestext col-xl-12 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="titlesections">خدمات پرمخاطب ترجمه</h5>
                    </div>
                    <Carousel touch interval={null}>
                        {carousel}
                    </Carousel>
                </div>
            </Media>
        </React.Fragment>
    );
};

export default withRouter(Popularservices);
