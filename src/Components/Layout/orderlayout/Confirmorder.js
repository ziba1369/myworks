import React, {useState} from 'react';
import envelop from '../../../images/contract.svg';
import { Row,Image } from 'react-bootstrap';
const Confirmorder = () => {
  const[code,usecode]=useState(123456789)
 
  
    return ( 
     
        <div className="confirmorder ">
            <p><Image src={envelop}/></p>
           <p>لطفا منتظر نتیجه بررسی صحت فایلها باشید</p> 
           <p >کدرهگیری سفارش <span style={{color:'#1976d2'}}>{code}</span></p>
           <p >جهت پیگیری روند سفارش به بخش  سفارش ها مراجعه کنید</p>

        </div>
      
     );
}
 
export default Confirmorder;