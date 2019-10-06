import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import Phone from "../../../images/Group1962.png";
import googleplay from "../../../images/google-play.svg";
import playstore from "../../../images/app-store.svg";
import {withRouter} from "react-router-dom";
/////////////introduce-function/////////////////////
const Introduce = (props) => {
    return (
        <React.Fragment>
            <div className="row topdist"/>
            <div className="row rtl introduce">
                <Col xl={9} md={9} sm={12} xs={12}>
                    <div>
                        <h3 className="titlesections">چرا دفتر ترجمه رسمی ۴۴۹ تهران</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <p>رعایت نرخ نامه مصوب ترجمه رسمی</p>
                        </li>
                        <li>
                            <p>سرعت،دقت،فوریت</p>
                        </li>
                        <li>
                            <p>ترجمه رسمی به زبان های مختلف دنیا</p>
                        </li>
                        <li>
                            <p>پیگیری تاحصول نتیجه دلخواه</p>
                        </li>
                    </ul>
                </Col>
                <div className="Phone col-xl-3 col-md-3 col-sm-12 col-xs-12" style={{textAlign: "center"}}>
                    <img src={Phone} alt={Phone}/>
                </div>
            </div>
            <div className="row downloadicons">
                <Col xl={9} md={9} sm={12} xs={12}>
                    <p className="intrbuton rtl">
                        <a href="http://hezare3vom-pwa.ratechcompany.com">
                            <Button variant="light">
                          <span>
                            <img src={playstore} alt={"playstore"}/>
                          </span>
                                ورود به نسخه PWA
                            </Button>
                        </a>
                        <a href="http://hezare3vom.ratechcompany.com/android.apk">
                            <Button variant="light">
                          <span>
                            <img src={googleplay} alt={"googleplay"}/>
                          </span>
                                دانلود اپلیکیشن اندروید
                            </Button>
                        </a>
                    </p>
                </Col>
            </div>
        </React.Fragment>
    );
};

export default withRouter(Introduce);
