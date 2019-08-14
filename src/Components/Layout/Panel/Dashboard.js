import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Row, Dropdown, Col } from "react-bootstrap";
import Media from "react-media";
const NewOrder=()=>{

    return(
    <React.Fragment>
     <div className="info-panel row">
         <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 countorder">
            <p>3</p>
            <p>تعداد سفارشات</p>
            
         </div>
         <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 paybox">
             <p>120000</p>
             <p>سبد پرداخت</p>
         </div>
         <div className="col-xl-3 col-lg-3 col-md-3  col-xs-12 readytrans">
            <p>2</p>
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
            <div className="row lastorderlist">
                    <Col lg={1} xl={1} md={1}>
                     1
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      2
                    </Col>
                    <Col lg={3} xl={3} md={3}>
                      3
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      4
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      5
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                     6
                    </Col>
                  </div>
               
           
          </React.Fragment>
        )}
      />
      
       <Media
        query="(max-width:992px)"
        render={() => (
          <div className="contentpanel">
          
              
                <div className="row myorderlist">
                  <Col lg={12} xl={12} md={12}>
                    ردیف
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    1
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عنوان سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   2
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    شماره سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   3
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    تاریخ ثبت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    4
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    وضعیت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    5
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عملیات
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   6
                  </Col>
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
            <div className="row lastorderlist">
                    <Col lg={1} xl={1} md={1}>
                     1
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      2
                    </Col>
                    <Col lg={3} xl={3} md={3}>
                      3
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      4
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      5
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                     6
                    </Col>
                  </div>
               
           
          </React.Fragment>
        )}
      />
       <Media
        query="(max-width:992px)"
        render={() => (
          <div className="contentpanel">
          
             
                <div className="row myorderlist">
                  <Col lg={12} xl={12} md={12}>
                    ردیف
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    1
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عنوان سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   2
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    شماره سفارش
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   3
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    تاریخ ثبت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    4
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    وضعیت
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    5
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                    عملیات
                  </Col>
                  <Col lg={12} xl={12} md={12}>
                   6
                  </Col>
                </div>
             
          
          </div>
        )}
      />
            </div>
      </div>
     </React.Fragment>
    )
}
export default NewOrder