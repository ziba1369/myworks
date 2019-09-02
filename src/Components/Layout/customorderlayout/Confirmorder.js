import React from 'react';
import envelop from '../../../images/contract.svg';
import {Col, Button, Image} from 'react-bootstrap';

function ConfirmOrder(props){


    return (
        <Col xl={12} lg={12} md={12} sm={12} xs={12}
             style={{borderRadius: '1rem', height: "100%", textAlign: "center"}}>
            <div className="confirmorder ">
                <p><Image src={envelop}/></p>
                <p>لطفا منتظر نتیجه بررسی صحت فایلها باشید</p>
                <p>کدرهگیری سفارش <span style={{color: '#1976d2'}}>{props.code}</span></p>
                <p style={{fontSize: '.6rem', color: '#707069'}}>جهت پیگیری روند سفارش به بخش سفارش ها مراجعه کنید</p>
            </div>
            <Button style={{width: '14rem',color:'#fff'}} id="add1" onClick={()=> props.history.push('/profile/second')} >
                سفارشات
            </Button>
        </Col>
    );
}

export default ConfirmOrder;