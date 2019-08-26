import React, { useState, useEffect } from "react";
import {Col} from "react-bootstrap";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import axios from "axios";
import Media from "react-media";
import * as Cookies from "js-cookie";
import {myorderAPI} from '../../../api/api';
//////////////////function myorder//////////////////
const Myorder = () => {
  //////////////////set variable//////////////////
  const [order, setOrder] = useState([]);
  //////////////////get orders list from server//////////////////
  useEffect(() => {
    myorderAPI(Cookies.get("token"),(response)=>{
      if (response.data.success) {
        setOrder(response.data.orders);
       
      } else {
        ToastsStore.error(response.data.error);
      }
    })
   
  }, []);
  return (
    <React.Fragment>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
      <div className="row namepanel">
        <p className="textpanel">لیست سفارشات</p>
      </div>

      <Media
        query="(min-width:992px)"
        render={() => (
          <React.Fragment>
            <div className="row myorder normal">
              <Col lg={1} xl={1} md={1}>
                ردیف
              </Col>
              <Col lg={2} xl={2} md={2}>
                عنوان سفارش
              </Col>
              <Col lg={3} xl={3} md={3}>
                شماره سفارش
              </Col>
              <Col lg={2} xl={2} md={2}>
                تاریخ ثبت
              </Col>
              <Col lg={2} xl={2} md={2}>
                وضعیت
              </Col>
              <Col lg={2} xl={2} md={2}>
                عملیات
              </Col>
            </div>
            <div>
              {order.map(item => {
                Cookies.set("order_id", item.id, { expires: 7, path: "/" });
                return (
                  <div className="row myorderlist">
                    <Col lg={1} xl={1} md={1}>
                      {item.id}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.order_name}
                    </Col>
                    <Col lg={3} xl={3} md={3}>
                      {item.order_code}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.created_at}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.status}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      عملیات
                    </Col>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )}
      />

      <Media
        query="(max-width:992px)"
        render={() => (
          <div className="contentpanel">
            {order.map(item => {
              Cookies.set("order_id", item.id, { expires: 7, path: "/" });
              return (
                <div className="row myorderlist">
                  <Col lg={12} xl={12} md={12}>
                    ردیف
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    {item.id}
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عنوان سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    {item.order_name}
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    شماره سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    {item.order_code}
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    تاریخ ثبت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    {item.created_at}
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    وضعیت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    {item.status}
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عملیات
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عملیات
                  </Col>
                </div>
              );
            })}
          </div>
        )}
      />
    </React.Fragment>
  );
};

export default Myorder;
