import React, {useState, useEffect} from "react";
import {Col} from "react-bootstrap";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from "react-toasts";
import Media from "react-media";
import * as Cookies from "js-cookie";
import {cancelitemAPI, myorderAPI} from '../../../api/api';
import editIcon from '../../../images/pencil-edit-button.svg';
import deleteIcon from '../../../images/rubbish-bin.svg';
import EditOrder from "./EditOrder";
import AddFileToOrder from "./AddFileToOrder";
import AddFile from "./AddFiles";
function Myorder () {

    const [step, setStep] = useState(1);
    const [order, setOrder] = useState([]);
    const [subComponentProps, setSubComponentProps] = useState({});

    //////////////////get orders list from server//////////////////
    useEffect(() => {
        myorderAPI(Cookies.get("token"), (response) => {
            if (response.data.success) {
                setOrder(response.data.orders);
            } else {
                ToastsStore.error(response.data.error);
            }
        })
    }, []);

    const handleEdit = (item) =>{
        if (item.status === "جدید" || item.status === "ارسال مجدد" ){
            setSubComponentProps({
                orderName: item.order_name,
                orderDate: item.created_at,
                orderCode: item.order_code,
                orderID: item.id,
            });
            setStep(4);
        } else {
            if (item.rejects[0].title === "خوانا نبودن"){
                setSubComponentProps({
                    orderName: item.order_name,
                    orderDate: item.created_at,
                    orderCode: item.order_code,
                    orderIssue: item.rejects[0].title,
                    orderID: item.id,
                    rejectedId: item.rejects[0].order_reject_id
                });
                setStep(3);
            } else {
                setSubComponentProps({
                    orderName: item.order_name,
                    orderDate: item.created_at,
                    orderCode: item.order_code,
                    orderIssue: item.rejects[0].title,
                    orderDesc: item.rejects[0].description,
                    orderID: item.id,
                    rejectedId: item.rejects[0].order_reject_id
                });
                setStep(2);
            }
        }

    };

    const handleCancel = (orderCode) => {
        cancelitemAPI(Cookies.get("token"), orderCode, response => {
            if (response.data.success) {
                window.location.reload();
                ToastsStore.error("سفارش شما با موفقیت لغو شد");
            } else {
                ToastsStore.error(response.data.error);
            }
        });
    };

    const Content = () => {
        switch (step) {
            case 1:
                return (
                    <div>
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
                                        {order.map((item, index) => {
                                            return (
                                                <div className="row myorderlist">
                                                    <Col lg={1} xl={1} md={1}>
                                                        {index + 1}
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
                                                        {item.status === "جدید" || item.status === "ارسال مجدد" || item.status === "عدم تایید" ?
                                                            <img style={{width: '13px', margin: "5px"}} src={editIcon} onClick={() => handleEdit(item)}
                                                                 alt=""/>
                                                            : null}
                                                        {(item.status === "جدید" || item.status === "عدم تایید" ||
                                                            item.status === "ارسال مجدد" || item.status === "منتظر پرداخت" || item.status === "تایید شده")?
                                                            <img style={{width: '13px', margin: "5px"}} src={deleteIcon} onClick={() => handleCancel(item.order_code)}
                                                                 alt=""/>
                                                            : null}
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
                                    {order.map((item, index) => {
                                        return (
                                            <div className="row myorderlist">
                                                <Col lg={12} xl={12} md={12}>
                                                    ردیف
                                                </Col>
                                                <Col lg={12} xl={12} md={12}>
                                                    {index + 1}
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
                                                    {item.status === "جدید" || item.status === "ارسال مجدد" || item.status === "عدم تایید" ?
                                                        <img style={{width: '13px', margin: "5px"}} src={editIcon} onClick={() => handleEdit(item)}
                                                             alt=""/>
                                                        : null}
                                                    {(item.status === "جدید" || item.status === "عدم تایید" ||
                                                        item.status === "ارسال مجدد" || item.status === "منتظر پرداخت" || item.status === "تایید شده")?
                                                        <img style={{width: '13px', margin: "5px"}} src={deleteIcon} onClick={() => handleCancel(item.order_code)}
                                                             alt=""/>
                                                        : null}
                                                </Col>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        />
                    </div>
                );
            case 2:
                return (
                    <AddFileToOrder {...subComponentProps}/>
                );
            case 3:
                return (
                    <EditOrder {...subComponentProps}/>
                );
            case 4:
                return (
                  <AddFile {...subComponentProps}/>
                );
        }
    };

    return <Content/>;
};

export default Myorder;
