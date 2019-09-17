import React, {useState, useEffect} from "react";
import {Container, Button, Row, Col, Breadcrumb, Image} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import TabsChoice from "./Layout/orderlayout/TabsChoice";
import PhotoUpload from "./Layout/orderlayout/PhotoUpload";
import ConfirmOrder from "./Layout/orderlayout/ConfirmOrder";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from "react-toasts";
import * as Cookies from "js-cookie";
import {getproductAPI, metatagAPI} from '../api/api';
import MetaTags from "react-meta-tags";
import {orderAPI} from "../api/api";
//////////////order function////////////////////
const Order = props => {
    ///////////////set initial variable///////////////////
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
    const [metaTag, setMetatag] = useState({
        title: "",
        metatags: []
    });
    const [orderData, setOrderData] = useState({
        image: "",
        desc: "",
        features: "",
        languages: [],
        certificates: [],
        delivery: [],
        count: 0
    });
    const [orderFileCount, setOrderFilecount] = useState(0);
    const [photoUpload, setPhotoUpload] = useState([]);
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

    //////////////use effect get data type get id product from server////////////////////////
    useEffect(() => {
        getproductAPI(Cookies.get("types"), (response) => {
            if (response.data.success) {

                setOrderData({
                    image: response.data.product_img,
                    desc: response.data.product_description,
                    features: response.data.product_features,
                    languages: response.data.product_languages,
                    certificates: response.data.product_certificates,
                    delivery: [
                        {
                            type: "normal",
                            name: "عادی",
                            id: 1,
                            checkin: true,
                            price: response.data.product_normal_price
                        },
                        {
                            type: "fast",
                            name: "فوری",
                            id: 2,
                            checkin: false,
                            price: response.data.product_fast_price
                        }
                    ],
                    count: 0
                });
            } else {
                ToastsStore.error(response.data.error);
            }
        })
        metatagAPI(props.match.params.name, (response) => {
            if (response.data.success) {
                setMetatag({
                    title: response.data.title,
                    metatags: response.data.metatags
                });
            }
        });
        setStep(1);
    }, [props.match.params.name]);

    ////////////////////////sum all vlaue of orders/////////////////////////////////
    const sumValue = () => {
        let sumd = 0;
        let sumv = 0;
        let sum = 0;
        for (let x in orderData.languages) {
            if (orderData.languages[x].checkin) {
                sum = sum + parseInt(orderData.languages[x].price);
            }
        }
        for (let x in orderData.certificates) {
            if (orderData.certificates[x].checkin) {
                sumv = sumv + parseInt(orderData.certificates[x].price);
            }
        }
        for (let x in orderData.delivery) {
            if (orderData.delivery[x].checkin) {
                sumd = sumd + parseInt(orderData.delivery[x].price);
            }
        }

        if (orderData.count > 0) {
            return (orderData.count + 1) * (sum + sumv + sumd);
        } else {
            return sum + sumv + sumd;
        }
    };

    const handleSubmit = () => {
        ////////////////////////send choose languages to server /////////////////////////////////
        const orderlanguages = orderData.languages;
        const order_lang = orderlanguages.filter(item => item.checkin === true);
        const order_languages = order_lang.map(item => {
            return (
                item.name.split(" به ")[0] +
                "|" +
                item.name.split(" به ")[1] +
                "|" +
                item.price
            );
        });
        ////////////////////////send choose certificate to server /////////////////////////////////
        const orderValidation = orderData.certificates;
        const order_cert = orderValidation.filter(item => item.checkin === true);
        const order_certificate = order_cert.map(item => {
            return item.name + "," + item.price;
        });
        ////////////////////////send choose deliver to server /////////////////////////////////
        const translate_type = orderData.delivery;
        const deliver = translate_type.filter(item => item.checkin === true);
        const deliverytype = deliver.map(item => {
            return item.type;
        });
        const deliverypr = translate_type.filter(item => item.checkin === true);
        const deliveryprice = deliverypr.map(item => {
            return item.price;
        });

        ////////////////////////set items to send server /////////////////////////////////

        const formDataorder = new FormData();

        formDataorder.append("customer_token", Cookies.get("token"));
        formDataorder.append("order_name", Cookies.get("title"));
        formDataorder.append("customer_description", "");
        formDataorder.append("order_type", "normal");
        formDataorder.append("translate_type", deliverytype[0]);
        formDataorder.append("page_count", 0);
        formDataorder.append("copy_count", orderData.count);
        formDataorder.append("weight_added_version", 0);
        formDataorder.append("normal_price", deliveryprice[0]);
        formDataorder.append("fast_price", deliveryprice[0]);
        formDataorder.append("total_price", sumValue());
        formDataorder.append("need_certificate", 0);
        formDataorder.append("order_file_count", orderFileCount);
        if (photoUpload !== undefined) {
            photoUpload.map((item, index) => {
                formDataorder.append("order_file_" + (index + 1), photoUpload[0]);
            });
        }
        formDataorder.append("order_languages", order_languages);
        formDataorder.append("order_certificate", order_certificate);

        ////////////////////////send data to server /////////////////////////////////
        orderAPI(formDataorder, response => {
            if (response.data.success) {
                setOrderCode(response.data.order_code);
                setStep(3);
            } else {
                ToastsStore.error(response.data.error);
            }
        });
    };


    //////////handler go to step1////////////
    const handlerType = () => {
        if (step < 1) {
            return step;
        } else if (step === 3) {
            return step;
        } else if (step === 4) {
            return step
        }

        setStep(1);
    };
    //////////handler go to step2////////////
    const handlerUpload = () => {
        if (step < 2) {
            return step;
        } else if (step === 3) {
            return step;
        } else if (step === 4) {
            return step
        }
        setStep(2);
    };
    //////////handler go to step3////////////
    const handlerConfirm = () => {
        if (step < 3) {
            return step;
        } else if (step === 3) {
            return step;
        } else if (step === 4) {
            return step
        }
        setStep(3);
    };
    //////////handler go to step4////////////
    const handlerPay = () => {
        if (step < 4) {
            return step;
        }
        setStep(4);
    };

    if (Cookies.get("token") == null) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <React.Fragment>
                <header>
                    <NavBar/>
                </header>
                <MetaTags>
                    <title>{metaTag.title}</title>
                    {metaTag.metatags.map(i => {
                        if (i.name) {
                            return (
                                <meta name={i.name} content={i.content}/>
                            );
                        } else if (i.property) {
                            return (
                                <meta property={i.property} content={i.content}/>
                            );
                        }
                    })}
                </MetaTags>
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
                                    <Link to="/services/all/allServices">خدمات ترجمه</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active href={null}>
                                    {Cookies.get("title")}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <div>
                                <p className="titletype">{Cookies.get("title")}</p>
                                <p className="titlemadarek">توضیحات</p>
                                <p className="content">{orderData.desc}</p>
                            </div>
                            <div>
                                <p className="titlemadarek">مزیت</p>
                                <p className="content">{orderData.features}</p>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Image
                                className="imagemadrek"
                                src={orderData.image}
                                alt=""
                            />
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
                        <h5>فرآیند ثبت سفارش ترجمه</h5>
                    </Col>
                    <Row className="orderbuttons rtl justify-content-center">
                        <Col
                            id="kindtrans"
                            className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer">
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
                        style={{paddingTop: "3rem", paddingBottom: "3rem"}}
                    >
                        {step === 1 && <TabsChoice data={orderData} setData={(orderData) => setOrderData(orderData)}
                                                   click={() => setStep(2)}/>}
                        {step === 2 && <PhotoUpload data={orderData} setData={(orderData) => setOrderData(orderData)}
                                                    click={handleSubmit}
                                                    orderFileCount={orderFileCount}
                                                    setOrderFilecount={(orderfile) => setOrderFilecount(orderfile)}
                                                    photoUpload={photoUpload}
                                                    setPhotoUpload={(photo) => setPhotoUpload(photo)}/>}
                        {step === 3 && <ConfirmOrder code={orderCode}/>}
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default Order;
