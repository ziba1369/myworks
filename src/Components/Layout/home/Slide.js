import React from 'react';
import { Row, ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logotranslate from '../../../images/Ghazaeie-logo-LimooGraphic.png'
import Iran from "../../../images/iran.svg";
import France from "../../../images/france.svg";
import England from "../../../images/england.svg";
import Italy from "../../../images/italy.svg";
import Germany from "../../../images/germany.svg";
import Turkey from "../../../images/turkey.svg";
import Emirates from "../../../images/united-arab-emirates.svg";
///////////////////////////slide function///////////////////////
const Slide = () => {
    return (
        <React.Fragment>

            <Row className=" slideone rtl">
                <div className="centerlogo col-xl-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="logoslide">
                        <img src={Logotranslate} alt={"Logotranslate"} />
                    </p>
                    <p className="office">دفتر ترجمه رسمی ۴۴۹ تهران</p>
                    <p className="owner">مترجم مسئول: موسوی</p>
                </div>
                <div className="groupflags col-xl-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="container countries">

                        <div className="row justify-content-md-center">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 Iran pulse"><img src={Iran}
                                alt={Iran} /></div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 France dist pulse"><img src={France} alt={France} /></div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 England dist pulse"><img src={England}  alt={England} /></div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 Italy dist pulse"><img src={Italy} alt={Italy} /></div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 Germany dist pulse"><img src={Germany} alt={Germany} /></div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 Turkey dist pulse"><img src={Turkey} alt={Turkey} /></div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 Emirates dist pulse"><img src={Emirates} alt={Emirates} /></div>
                        </div>

                    </div>
                </div>
            </Row>
            <Row>
                <div xl={12} md={12} sm={12} xs={12} className="pricebtn col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ButtonToolbar className=" price">
                        <Link to='#'><button className="btn-light-theme" >نرخ نامه مصوب ترجمه رسمی</button></Link>
                        <Link to='/services/all'><button className="btn-color-theme">ثبت سفارش آنلاین ترجمه</button></Link>
                    </ButtonToolbar>
                </div>
            </Row>

        </React.Fragment>
    );
}

export default Slide;