import React, {useState, useEffect} from "react";
import {Container, Button, Row, Col, Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import * as Cookies from "js-cookie";
import Tabschoice from "./Layout/orderlayout/Tabschoice";
import ServicesGroup from "./Layout/orderlayout/ServicesGroup";
import Photoupload from "./Layout/orderlayout/Photoupload";
import Confirmorder from "./Layout/orderlayout/Confirmorder";

const Order = (props) => {
    const [step, setCount] = useState(1);
    const [styleone, setStyleone] = useState();
    const [styletwo, setStyletwo] = useState();
    const [stylethree, setStylethree] = useState();
    const [stylefour, setStylefour] = useState();
    const [stylefive, setStylefive] = useState();

    const [lineone, setLineone] = useState();
    const [linetwo, setLinetwo] = useState();
    const [linethree, setLinethree] = useState();
    const [linefour, setLinefour] = useState();

    const increment = () => {
        setCount(step + 1);
    };

    useEffect(() => {
        setCount(parseInt(props.match.params.step))
    },[]);

    useEffect(() => {
        switch (step) {
            case 1:
                setStyleone({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                });
                setLineone({
                    display: 'none'
                });
                setLinetwo({
                    display: 'none'
                });
                setLinethree({
                    display: 'none'
                });
                setLinefour({
                    display: 'none'
                });
                break;

            case 2:
                setStyleone({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setLineone({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinetwo({
                    display: 'none'
                });
                setLinethree({
                    display: 'none'
                });
                setLinefour({
                    display: 'none'
                });


                break;

            case 3:
                setStyleone({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setLineone({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinetwo({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinethree({
                    display: 'none'
                });
                setLinefour({
                    display: 'none'
                });
                break;

            case 4:
                setStyleone({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setLineone({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinetwo({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinethree({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinefour({
                    display: 'none'
                });
                break;

            case 5:
                setStyleone({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#aad0f4",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setLineone({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinetwo({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinethree({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                setLinefour({
                    content: "",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "50%",
                    top: "50%",
                    height: "0.5em",
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "#1976d2",
                    zIndex: "-1"
                });
                break;
            case 6:
                setStyleone({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStyletwo({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylethree({
                    backgroundColor: "#aad0f4",
                    borderColor: "#aad0f4",
                    color: "#495267"
                });
                setStylefour({
                    backgroundColor: "#aad0f4",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });
                setStylefive({
                    backgroundColor: "#fafafa",
                    border: "2px solid #e1e1e1",
                    color: "#495267"
                });

                break;

            default:
                break;
        }
    }, [step]);
    const handlerMadrak = () => {
        if (step < 1) {
            return step === 1;
        }
        setCount(1);
    };
    const handlerType = () => {
        if (step < 2) {
            return step;
        }

        setCount(2);
    };
    const handlerUpload = () => {
        if (step < 3) {
            return step;
        }
        setCount(3);
    };
    const handlerConfirm = () => {
        if (step < 4) {
            return step;
        }
        setCount(4);
    };
    const handlerPay = () => {
        if (step < 5) {
            return step;
        }
        setCount(5);
    };
    return (
        <Container>
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
                        <Breadcrumb.Item>
                            <Link to="/services">خدمات ترجمه</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/services">مدرک شناسایی</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href={null}>
                            شناسامه
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Col
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className="titlesections orderheader"
                    >
                        <h5>فرآیند ثبت سفارش ترجمه</h5>
                    </Col>
                </Col>
            </Row>
            <Row className="orderbuttons rtl">
                <Col
                    id="choosecer"
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
                >
                    <Button style={styleone} onClick={handlerMadrak} size="lg">
                        انتخاب مدرک
                    </Button>
                    <span style={lineone}/>
                </Col>

                <Col
                    id="kindtrans"
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
                >
                    <Button style={styletwo} onClick={handlerType} size="lg">
                        نوع ترجمه
                    </Button>
                    <span style={linetwo}/>
                </Col>

                <Col
                    id="upload"
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
                >
                    <Button style={stylethree} onClick={handlerUpload} size="lg">
                        آپلود مدارک
                    </Button>
                    <span style={linethree}/>
                </Col>

                <Col
                    id="confirm"
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
                >
                    <Button size="lg" style={stylefour} onClick={handlerConfirm}>
                        تایید سفارش
                    </Button>
                    <span style={linefour}/>
                </Col>
                <Col
                    id="pay"
                    className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer last"
                >
                    <Button size="lg" onClick={handlerPay}>
                        پرداخت
                    </Button>

                </Col>
            </Row>

            <Row
                className="rtl"
                style={{paddingTop: "3rem", paddingBottom: "3rem"}}
            >
                {step === 1 && <ServicesGroup onClicks={increment} count={step}/>}
                {step === 2 && <Tabschoice onClicks={increment} count={step}/>}
                {step === 3 && <Photoupload onClicks={increment} count={step}/>}
                {step === 4 && <Confirmorder onClicks={increment} count={step}/>}
            </Row>
        </Container>
    );
};

export default Order;
