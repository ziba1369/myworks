import React, {useState} from 'react';
import envelop from '../../../images/contract.svg';
import {Col,Row,Image } from 'react-bootstrap';
const Confirmorder = () => {
  const[code,usecode]=useState(123456789)
 
  
    return ( 
      <Col xl={6} lg={6} md={6} sm={12} xs={12}  style={{borderRadius:'1rem',height:"100%"}}>
        <div className="confirmorder ">
            <p><Image src={envelop}/></p>
           <p>لطفا منتظر نتیجه بررسی صحت فایلها باشید</p> 
           <p >کدرهگیری سفارش <span style={{color:'#1976d2'}}>{code}</span></p>
           <p >جهت پیگیری روند سفارش به بخش  سفارش ها مراجعه کنید</p>

        </div>
        </Col>
      
     );
}
 
export default Confirmorder;