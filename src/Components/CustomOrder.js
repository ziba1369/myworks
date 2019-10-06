import React, {useState, useEffect} from "react";
import {Container, Button, Row, Col, Breadcrumb} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import TabsChoice from "./Layout/customorderlayout/Tabschoice";
import PhotoUpload from "./Layout/customorderlayout/Photoupload";
import ConfirmOrder from "./Layout/customorderlayout/Confirmorder";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import {ToastsStore} from "react-toasts";
import * as Cookies from "js-cookie";
import axios from "axios";
import {customorderAPI} from "../api/api";


function Order(props) {

    const [step, setStep] = useState(1);
    const [stepStyles, setStepStyles] = useState({
        buttonFirst: {
            backgroundColor: "#fafafa",
            border: "2px solid #e1e1e1",
            color: "#495267"
        },
        lineFirst: {
            display: "none"
        },
        buttonSecond: {
            backgroundColor: "#fafafa",
            border: "2px solid #e1e1e1",
            color: "#495267"
        },
        lineSecond: {
            display: "none"
        },
        buttonThird: {
            backgroundColor: "#fafafa",
            border: "2px solid #e1e1e1",
            color: "#495267"
        },
        lineThird: {
            display: "none"
        },
        buttonFourth: {
            backgroundColor: "#fafafa",
            border: "2px solid #e1e1e1",
            color: "#495267"
        }
    });
    const [customOrder, setCustomorder] = useState({
        languages: [],
        title: '',
        des: '',
        confirm: 0,
        type: 0,
    });
    const [customOrderFileCount, setCustomOrderFileCount] = useState(0);
    const [customPhotoUpload, setcustomPhotoUpload] = useState();
    const [orderCode, setOrderCode] = useState("");


    //////////////////////useEffect for set step///////////////
    useEffect(() => {
        switch (step) {
            case 1:
                setStepStyles({
                    buttonFirst: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    },
                    lineFirst: {
                        display: "none"
                    },
                    buttonSecond: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    },
                    lineSecond: {
                        display: "none"
                    },
                    buttonThird: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    },
                    lineThird: {
                        display: "none"
                    },
                    buttonFourth: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    }
                });
                break;

            case 2:
                setStepStyles({
                    buttonFirst: {
                        backgroundColor: "#aad0f4",
                        borderColor: "#aad0f4",
                        color: "#495267"
                    },
                    lineFirst: {
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
                    },
                    buttonSecond: {
                        backgroundColor: "#fafafa",
                        position: "relative",
                        border: "0px solid #e1e1e1",
                        color: "#495267",
                        boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
                    },
                    lineSecond: {
                        display: "none"
                    },
                    buttonThird: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    },
                    lineThird: {
                        display: "none"
                    },
                    buttonFourth: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    }
                });
                break;
            case 3:
                setStepStyles({
                    buttonFirst: {
                        backgroundColor: "#aad0f4",
                        borderColor: "#aad0f4",
                        color: "#495267"
                    },
                    lineFirst: {
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
                    },
                    buttonSecond: {
                        backgroundColor: "#aad0f4",
                        borderColor: "#aad0f4",
                        color: "#495267"
                    },
                    lineSecond: {
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
                    },
                    buttonThird: {
                        backgroundColor: "#fafafa",
                        position: "relative",
                        border: "0px solid #e1e1e1",
                        color: "#495267",
                        boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
                    },
                    lineThird: {
                        display: "none"
                    },
                    buttonFourth: {
                        backgroundColor: "#fafafa",
                        border: "2px solid #e1e1e1",
                        color: "#495267"
                    }
                });
                break;
            default:
                break;
        }
    }, [step]);

    //////////handler go to step1////////////
    const handlerType = () => {
        if (step < 1) {
            return
        } else if (step === 3) {
            return
        }
        setStep(1);
    };

    //////////handler go to step2////////////
    const handlerUpload = () => {
        if (step < 2) {
            return
        } else if (step === 3) {
            return
        }
        setStep(2);
    };

    //////////handler go to step3////////////
    const handlerConfirm = () => {
        if (step < 3) {
            return
        } else if (step === 3) {
            return
        }
        setStep(3);
    };

    //////////////use effect get data////////////////////////
    useEffect(() => {
        axios
            .get(
                "http://hezare3vom.ratechcompany.com/api/app_get_languages",
                {
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(function (response) {
                if (response.data.success) {

                    let lang = [];
                    for (let i in response.data.languages) {
                        lang.push({
                            lang: response.data.languages[i],
                            status: 1
                        })
                    }
                    setCustomorder({
                        languages: lang,
                        title: 'نامه',
                        des: '',
                        confirm: 0,
                        type: 0,
                    });
                }
            });
    }, []);

    ////////////////////////handle submit/////////////////////////////////
    const handleSubmit = () => {
        ////////////////////////send choose languages to server /////////////////////////////////
        const orderlanguages = customOrder.languages;
        const order_lang = orderlanguages.filter(item => item.status === 0);
        const order_languages = order_lang.map(item => {
            return (
                item.lang.split(" به ")[0] +
                "|" +
                item.lang.split(" به ")[1] +
                "|" +
                0

            );
        });

        const formDataorder = new FormData();

        formDataorder.append("customer_token", Cookies.get("token"));
        formDataorder.append("order_name", customOrder.title);
        formDataorder.append("customer_description", customOrder.des);
        formDataorder.append("order_type", "custom");
        formDataorder.append("translate_type", customOrder.type === 1 ? "فوری" : "عادی");
        formDataorder.append("order_languages", order_languages);
        formDataorder.append("need_certificate", customOrder.confirm === 1 ? "رسمی" : "غیررسمی");
        formDataorder.append("order_certificates", " ");
        formDataorder.append("total_price", "0");
        formDataorder.append("order_file_count", customOrderFileCount);
        formDataorder.append("weight_added_version", "0");
        formDataorder.append("normal_price", "0");
        formDataorder.append("fast_price", "0");
        if (customPhotoUpload !== undefined) {
            customPhotoUpload.map((item, index) => {
                formDataorder.append("order_file_" + (index + 1), item);
            })
        }


        ////////////////////////send data to server /////////////////////////////////
        customorderAPI(formDataorder, (response) => {
            if (response.data.success) {
                setOrderCode(response.data.order_code);
                setStep(3);
            } else {
                ToastsStore.error(response.data.error);
            }
        })

    };

    if (Cookies.get("token") == null) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <React.Fragment>
                <header>
                    <NavBar/>
                </header>
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
                                <Breadcrumb.Item active>
                                    ترجمه سفارشی
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>


                    <Col
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className="titlesections orderheader"
                    >
                        <h5>فرآیند ثبت ترجمه سفارشی</h5>
                    </Col>
                    <Row className="orderbuttons rtl justify-content-center">


                        <Col
                            id="kindtrans"
                            className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
                        >
                            <Button style={stepStyles.buttonFirst} onClick={handlerType} size="lg">
                                نوع ترجمه
                            </Button>
                            <span style={stepStyles.lineFirst}/>
                        </Col>

                        <Col
                            id="upload"
                            className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
                        >
                            <Button style={stepStyles.buttonSecond} onClick={handlerUpload} size="lg">
                                آپلود مدارک
                            </Button>
                            <span style={stepStyles.lineSecond}/>
                        </Col>

                        <Col
                            id="confirm"
                            className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
                        >
                            <Button size="lg" style={stepStyles.buttonThird} onClick={handlerConfirm}>
                                تایید سفارش
                            </Button>
                            <span style={stepStyles.lineThird}/>
                        </Col>
                    </Row>

                    <Row
                        className="rtl"
                        style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
                        {step === 1 && <TabsChoice click={() => setStep(2)} data={customOrder}
                                                   setdata={(customOrderData) => setCustomorder(customOrderData)}/>}
                        {step === 2 && <PhotoUpload click={handleSubmit} data={customOrder}
                                                    customPhotoUpload={customPhotoUpload}
                                                    setcustomPhotoUpload={(customPhotoUpload) => {
                                                        setcustomPhotoUpload(customPhotoUpload)
                                                    }} customOrderFileCount={customOrderFileCount}
                                                    setCustomOrderFileCount={(customOrderFileCount) => {
                                                        setCustomOrderFileCount(customOrderFileCount)
                                                    }}/>}
                        {step === 3 && <ConfirmOrder code={orderCode}/>}
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default Order;
