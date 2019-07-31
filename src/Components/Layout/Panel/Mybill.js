import React,{useState,useEffect} from 'react';
import {Nav,Col,Tab,Row,Container} from 'react-bootstrap';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import Media from "react-media";
import * as Cookies from "js-cookie";
import axios from "axios";
const Myorder = () => {
  const[order,setOrder]=useState([]);
  useEffect(() => {
    axios
        .get(
            "http://hezare3vom.ratechcompany.com/api/front/get_user_orders?customer_token="+ Cookies.get('token') ,
            {
                headers: {"Content-Type": "application/json"}
                
            }
        )
        .then(function (response) {
          console.log(response.data,'www')
            if (response.data.success) {
                setOrder(response.data.orders);
                console.log(response.data.orders)
               

            } else {
                ToastsStore.error(response.data.error);
            }
        })
        // .catch(function (error) {
        //     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
        // });
        
  },[]);
    return ( 
      <React.Fragment>
      <div className="row namepanel">
         <p className="textpanel">
         لیست فاکتورها
        </p>
         </div>
        
         <Media
              query="(min-width:992px)"
              render={() => (
        
         <React.Fragment>
   
   
         <div className="row myorder">
             
               <Col lg={1} xl={1} md={1}>ردیف</Col>
               <Col lg={2} xl={2} md={2}>عنوان سفارش</Col>
               <Col lg={3} xl={3} md={3}>شماره سفارش</Col>
               <Col lg={2} xl={2} md={2}>تاریخ ثبت</Col>
               <Col lg={2} xl={2} md={2}>وضعیت</Col>
               <Col lg={2} xl={2} md={2}>عملیات</Col>
            
               </div>
               <div className="contentpanel">
               {order.map(item=>{
                 Cookies.set('order_id',item.id, {expires: 7, path: '/'})
             return(
               <div className="row myorderlist">
               <Col lg={1} xl={1} md={1}>{item.id}</Col>
               <Col lg={2} xl={2} md={2}>{item.order_name}</Col>
               <Col lg={3} xl={3} md={3}>{item.order_code}</Col>
               <Col lg={2} xl={2} md={2}>{item.created_at}</Col>
               <Col lg={2} xl={2} md={2}>{item.status}</Col>
               <Col lg={2} xl={2} md={2}>عملیات</Col>
               </div>
             )
             })
           }
           </div>
   
           </React.Fragment>
              )}/>
   
   <Media
              query="(max-width:992px)"
              render={() => (
               <div className="contentpanel">
               {order.map(item=>{
                 Cookies.set('order_id',item.id, {expires: 7, path: '/'})
             return(
               <div className="row myorderlist">
               <Col lg={1} xl={1} md={1}>ردیف</Col>
               <Col lg={1} xl={1} md={1}>{item.id}</Col>
               <Col lg={2} xl={2} md={2}>عنوان سفارش</Col>
               <Col lg={2} xl={2} md={2}>{item.order_name}</Col>
               <Col lg={3} xl={3} md={3}>شماره سفارش</Col>
               <Col lg={3} xl={3} md={3}>{item.order_code}</Col>
               <Col lg={2} xl={2} md={2}>تاریخ ثبت</Col>
               <Col lg={2} xl={2} md={2}>{item.created_at}</Col>
               <Col lg={2} xl={2} md={2}>وضعیت</Col>
               <Col lg={2} xl={2} md={2}>{item.status}</Col>
               <Col lg={2} xl={2} md={2}>عملیات</Col>
               <Col lg={2} xl={2} md={2}>عملیات</Col>
               </div>
             )
             })
           }
           </div>
   
       
              )}/>
   
             </React.Fragment>
    )
}
 
export default Myorder;