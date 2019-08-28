import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Row, Dropdown, Col } from "react-bootstrap";
import { dashboardAPI } from "../../../api/api";
import Media from "react-media";
import { withRouter } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import Myorder from './Myorder';
import * as Cookies from "js-cookie";
const NewOrder = (props) => {
  const [dashboarduser, setDashboard] = useState({
    totalOrders: "",
    totalPrice: "",
    readyOrders: "",
    lastOrders: [],
    lastReadyTransaltion: []
  });
  useEffect(() => {
    dashboardAPI(Cookies.get("token"), response => {
      console.log(response.data, "dash");
      if (response.data.success) {
        setDashboard({
          totalOrders: response.data.totalOrders,
          totalPrice: response.data.totalPrice,
          readyOrders: response.data.readyOrders,
          lastOrders: response.data.lastOrders,
          lastReadyTransaltion: response.data.lastReadyTransaltions
        });

        console.log(response.data, "dash");
      } else {
        ToastsStore.error(response.data.error);
      }
    });
  }, []);
  console.log(dashboarduser, "data");
  return (
    <React.Fragment>
      <div className="info-panel row">
        <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 countorder" onClick={()=>{
          props.history.push("/profile/myorders");
          window.location.reload();
        }}>
         
          <p>11{dashboarduser.totalOrders}</p>
          <p>تعداد سفارشات</p>
         
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 paybox" onClick={()=>{
          props.history.push("/basket");
        }}>
          <p>{dashboarduser.totalPrice}</p>
          <p>سبد پرداخت</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 readytrans" onClick={()=>{
          props.history.push("/profile/mytranslates");
          window.location.reload();
        }}>
          <p>{dashboarduser.readyOrders}</p>
          <p>ترجمه آماده</p>
        </div>
      </div>
      <div className="lastorder">
        <p>لیست آخرین سفارشات</p>
        <div className="lastorder-box">
          <Media
            query="(min-width:992px)"
            render={() => (
              <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 lastorder-title">
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

                <div className="lastorderlist">
                  {dashboarduser.lastOrders.map((i,index) => {
                    return (
                      <div className="row myorderlist">
                        <Col lg={1} xl={1} md={1}>
                          {index+1}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.order_name}
                        </Col>
                        <Col lg={3} xl={3} md={3}>
                          {i.order_code}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.created_at}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.status}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          6
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
                <div className="row myorderlist">
                  {dashboarduser.lastOrders.map((i,index) => {
                    return (
                      <React.Fragment>
                        <Col lg={12} xl={12} md={12}>
                          ردیف
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {index+1}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          عنوان سفارش
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.order_name}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          شماره سفارش
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.order_code}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          تاریخ ثبت
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.created_at}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          وضعیت
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.status}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          عملیات
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          6
                        </Col>
                        </React.Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className="lastorder">
        <p>لیست آخرین ترجمه های آماده</p>
        <div className="lastorder-box">
          <Media
            query="(min-width:992px)"
            render={() => (
              <React.Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 lastorder-title">
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

                <div className="lastorderlist">
                  {dashboarduser.lastReadyTransaltion.map((i,index) => {
                    return (
                      <div className="row myorderlist">
                        <Col lg={1} xl={1} md={1}>
                          {index+1}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.order_name}
                        </Col>
                        <Col lg={3} xl={3} md={3}>
                          {i.order_code}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.created_at}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          {i.status}
                        </Col>
                        <Col lg={2} xl={2} md={2}>
                          6
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
                <div className="row myorderlist">
                  {dashboarduser.lastReadyTransaltion.map((i,index) => {
                    return (
                      <React.Fragment>
                        <Col lg={12} xl={12} md={12}>
                          ردیف
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {index+1}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          عنوان سفارش
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.order_name}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          شماره سفارش
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.order_code}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          تاریخ ثبت
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.created_at}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          وضعیت
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          {i.status}
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          عملیات
                        </Col>
                        <Col lg={12} xl={12} md={12}>
                          6
                        </Col>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(NewOrder);
