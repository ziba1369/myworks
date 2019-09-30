import React, {useState, useEffect} from "react";
import {Image, Col, Row, Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Translator from '../images/Translators.jpg';
import {metatagAPI} from "../api/api";
import MetaTags from "react-meta-tags";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";



const AboutUs = () => {

    const [data, setData] = useState({
        text: "",
        images:[],
        team: []
    })
    const [mettag, setMetatag] = useState({
        title: "",
        metatags: []
    });
    useEffect(() => {
        metatagAPI("aboutus", response => {
            if (response.data.success) {
                setMetatag({
                    title: response.data.title,
                    metatags: response.data.metatags
                });
            }
        });

        setData({
            text: "ئیبم ناسیبکهخاس بخهسا بگسخهب شخبت سخه کسهبا خستب گحخب یبال گسحخبت بال کخثها منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت",
            images:[Translator,Translator,Translator,Translator],
            team: ["منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت","منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت","منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت"]
        });
        // aboutUsAPI(response => {
        //     if (response.data.success) {
        //         setData({
        //             text: "ئیبم ناسیبکهخاس بخهسا بگسخهب شخبت سخه کسهبا خستب گحخب یبال گسحخبت بال کخثها منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت",
        //             images:[Translator,Translator,Translator,Translator],
        //             team: ["منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت","منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت","منسی بگسخیبت کسخها بکهخا کسیخهل گسحخیل سلحخت"]
        //         });
        //     }
        // });

    }, []);
    return (
        <React.Fragment>
            <header>
                <NavBar/>
            </header>
            <MetaTags>
                <title>{mettag.title}</title>
                {mettag.metatags.map(i => {
                    if (mettag.metatags.name) {
                        return (
                            <meta name={i.name} content={i.content}/>
                        );
                    } else if (mettag.metatags.property) {
                        return (
                            <meta property={i.property} content={i.content}/>
                        );
                    }
                })}
            </MetaTags>
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
                            <Breadcrumb.Item active href={null}>درباره ما</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <div className="titlepage">درباره ما</div>
                <div className="row aboutpage">

                    <Row>
                        <p className="text-about  col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">{data.text}</p>
                    </Row>
                    <Row>
                        <p className="text-licence">مجوزها واعتبارها</p>
                        <p className="image-licence row">
                            {data.images.map(pic => {
                                return (
                                    <div className="col-xl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12">
                                        <Image src={pic} alt=""/>
                                    </div>
                                )
                            })}
                        </p>
                    </Row>
                    <div className="row" style={{width: "100%", margin: "0px", padding: "0px"}}>
                        <p className="text-licence">همکاران دارالترجمه</p>
                        <div className="coworker col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="ul-coworker">
                                {data.team.map(person => (
                                    <div className="text-coworker"><span className="circle-coworker"></span>{person}</div>
                                    ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default AboutUs;
