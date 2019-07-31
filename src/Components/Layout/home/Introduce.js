import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import Phone from '../../../images/Group1962.png';
import googleplay from '../../../images/google-play.svg';
import playstore from '../../../images/app-store.svg';

const Introduce = () => {
    return (
        <React.Fragment>
            <Row className="topdist"></Row>
            <Row className="rtl introduce">
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
                <Col className="Phone" xl={3} md={3} sm={12} xs={12} style={{textAlign: 'center'}}>
                    <img src={Phone} alt={Phone}/>
                </Col>
            </Row>
            <Row className="downloadicons">
                <Col xl={9} md={9} sm={12} xs={12}>
                    <p className="intrbuton rtl">
                        <Button variant="light"><span><img src={playstore} alt={"playstore"}/></span>دانلود از پلی استور</Button>
                        <Button variant="light"><span><img src={googleplay} alt={"googleplay"}/></span>دانلود از گوگل
                            پلی</Button>
                    </p>

                </Col>
            </Row>


        </React.Fragment>
    );
}

export default Introduce;



