import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Flags from './Flags';
import Logotranslate from '../../../images/Ghazaeie-logo-LimooGraphic.png'
import ButtonPrice from './ButtonPrice';

const Slide = () => {
    return (
        <React.Fragment>

            <Row className=" slideone rtl">
                <Col xl={6} md={6} sm={12} xs={12} className="centerlogo">
                    <p className="logoslide">
                        <img src={Logotranslate} alt={"Logotranslate"}/>
                    </p>
                    <p className="office">دفتر ترجمه رسمی ۴۴۹ تهران</p>
                    <p className="owner">مترجم مسئول: موسوی</p>
                </Col>
                <Col xl={6} md={6} sm={12} xs={12} className="groupflags"><Flags/></Col>
            </Row>
            <Row>
                <Col xl={12} md={12} sm={12} xs={12} className="pricebtn"><ButtonPrice/></Col>
            </Row>

        </React.Fragment>
    );
}

export default Slide;