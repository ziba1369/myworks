import React, {useState, useEffect} from "react";
import NavBar from './Layout/NavBar';
import {Container, Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Footer from './Layout/Footer';
import unsuccessful from "../images/paymentCallback/cancel.svg";
import successful from "../images/paymentCallback/checked.svg";


const PaymentCallback = props => {

    useEffect(()=>{
        console.log(props.location.search.split("&")[0].replace("?status=", ""))
        console.log(props.location.search.split("&")[1].replace("RefID=", ""))
    })

    return (
        <React.Fragment>
            <header>
                <NavBar/>
            </header>
            <div className="payment-callback">
                <img className="payment-callback-image" src={props.location.search.split("&")[0].replace("?status=", "") === "success" ? successful : unsuccessful} alt=""/>
                <h2 className={props.location.search.split("&")[0].replace("?status=", "") === "success" ? "payment-callback-successful" : "payment-callback-unsuccessful"}>{props.location.search.split("&")[0].replace("?status=", "") === "success" ? "پرداخت موفق" : "پرداخت ناموفق"}</h2>
                {props.location.search.split("&")[1].replace("RefID=", "").length !== 0 ? <h3 className="payment-callback-code">کد رهگیری: {props.location.search.split("&")[1].replace("RefID=", "")}</h3> : null}
            </div>
            <Footer/>
        </React.Fragment>

    );
};

export default PaymentCallback;
