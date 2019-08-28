import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import axios from "axios";
import Media from "react-media";
import * as Cookies from "js-cookie";
import {mytranslateAPI} from '../../../api/api';
////////////////////dunction translate list////////////////////////
const Mytranslate = () => {
  /////////////////set initiale  variable//////////////////
  const [translate, setTranslate] = useState([]);
  /////////////////take data from server//////////////////
  useEffect(() => {
    mytranslateAPI(Cookies.get("token"), Cookies.get("order_id"),(response)=>{
      if (response.data.success) {
        setTranslate(response.data.orders);
        console.log(response.data.orders);
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
      <Media
        query="(min-width:992px)"
        render={() => (
          <React.Fragment>
            <div className="row namepanel">
              <p className="textpanel">لیست ترجمه ها</p>
            </div>

            <div className="row myorder">
              <Col lg={1} xl={1} md={1}>
                ردیف
              </Col>
              <Col lg={2} xl={2} md={2}>
                عنوان سفارش
              </Col>
              <Col lg={2} xl={3} md={2}>
                شماره سفارش
              </Col>
              <Col lg={2} xl={2} md={2}>
                تاریخ ثبت
              </Col>
              <Col lg={2} xl={2} md={2}>
                وضعیت
              </Col>
              <Col lg={3} xl={2} md={3}>
                عملیات
              </Col>
            </div>

            {translate.map((item,index)=> {
              Cookies.set("order_id", item.id, { expires: 7, path: "/" });
              return (
                <div className="row myorderlist">
                  <Col lg={1} xl={1} md={1}>
                    {index+1}
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
                  {item.translations.map(i => {
                    return (
                      <Col lg={2} xl={2} md={2}>
                        {i.file_name}
                      </Col>
                    );
                  })}
                </div>
              );
            })}
          </React.Fragment>
        )}
      />

      <Media
        query="(max-width:992px)"
        render={() => (
          <React.Fragment>
            <div className="row namepanel">
              <p className="textpanel">لیست ترجمه ها</p>
            </div>

            <div className="contentpanel">
              {translate.map((item,index) => {
                Cookies.set("order_id", item.id, { expires: 7, path: "/" });
                return (
                  <div className="row myorderlist">
                    <Col lg={1} xl={1} md={1}>
                      ردیف
                    </Col>
                    <Col lg={1} xl={1} md={1}>
                      {index+1}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      عنوان سفارش
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.order_name}
                    </Col>
                    <Col lg={2} xl={3} md={2}>
                      شماره سفارش
                    </Col>
                    <Col lg={3} xl={3} md={3}>
                      {item.order_code}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      تاریخ ثبت
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.created_at}
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      وضعیت
                    </Col>
                    <Col lg={2} xl={2} md={2}>
                      {item.status}
                    </Col>
                    <Col lg={3} xl={2} md={3}>
                      عملیات
                    </Col>
                    {item.translations.map(i => {
                      return (
                        <Col lg={2} xl={2} md={2}>
                          {i.file_name}
                        </Col>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};

export default Mytranslate;
