import React, {Fragment, useState, useEffect} from 'react';
import {editOrderFileAPI, getOrderFileAPI} from "../../../api/api";
import {ToastsStore} from "react-toasts";
import * as Cookies from "js-cookie";
import {Row} from "react-bootstrap";


export default function EditOrder(props) {

    // refs
    let inputOpenFileRef = React.createRef();

    // states
    const [images, setImages] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [sendButton, activeSendButton] = useState({
        disabled: "disabled",
        style: {color: "#5d5d5d", backgroundColor: "#ffffff"}
    });


    useEffect(() => {
        getOrderFileAPI(Cookies.get('token'), props.orderID, (response) => {
            if (response.data.success) {
                let files = [];
                for (let i in response.data.rejected_files) {
                    files.push({
                        id: i,
                        img: response.data.rejected_files[i].file_address,
                        status: "عدم تایید",
                        files: null
                    })
                }
                setImages(files);
            } else {
                ToastsStore.error(response.data.error);
            }
        });
    }, []);

    // this method lunch when user open image file
    const handleOpenFile = event => {
        var fileName = event.target.files[0].name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
            const file = event.target.files[0];
            let reader = new FileReader();
            reader.onloadend = function () {
                let imagesList = [...images];
                for (let i in imagesList) {
                    if (imagesList[i].id === selectedId) {
                        imagesList[i].files = file;
                        imagesList[i].img = reader.result;
                        imagesList[i].status = "آماده آپلود";
                    }
                }
                setImages(imagesList);
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        activeSendButton({
            disabled: "",
            style: {color: "#ffffff", backgroundColor: "#1976d2"}
        });
        for (let i in images) {
            if (images[i].status === "عدم تایید") {
                activeSendButton({
                    disabled: "disabled",
                    style: {color: "#5d5d5d", backgroundColor: "#ffffff"}
                });
                break;
            }
        }
    }, [images]);


    // this method run when user click on send order button
    const handleAddFile = () => {
        let files = [];
        for (let i in images) {
            files.push(images[i].files)
        }
        editOrderFileAPI(Cookies.get('token'),
            props.orderID,
            props.rejectedId,
            "1",
            files,
            (response) => {
                if (response.data.success) {
                    ToastsStore.error("فایل های شما با موفقیت آپلود شد");
                    window.location.reload();
                } else {
                    ToastsStore.error(response.data.error);
                }
            })
    };


    return (
        <Fragment><div className="row editorder">اصلاح سفارش</div>
            <div className="row" style={{margin: '0 3rem'}}>
                <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
                    <p className="title-custom">نام سفارش</p>
                    <p className="title-cutomdet">{props.orderName}</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
                    <p className="title-custom">تاریخ سفارش</p>
                    <p className="title-cutomdet">{props.orderDate}</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
                    <p className="title-custom">کد سفارش</p>
                    <p className="title-cutomdet">{props.orderCode}</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
                    <p className="title-custom">دلیل عدم تایید</p>
                    <p className="title-cutomdet">{props.orderIssue}</p>
                </div>
                <div className="uploadphoto" >
                    <Row>فایلهای پیوست</Row>
                    <Row>
                        <div className="upload-text">
                            <p>تمامی صفحات (حتی صفحات خالی) تصویر یافایل واضح آپلود شود </p>
                            <p>
                                صفحه اول اسامی که در فایل ها آپلود شده به منظور صحیح نوشتن
                                اسامی در فایل الزامی است
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <input id="image" ref={inputOpenFileRef} onChange={handleOpenFile}
                               accept="image/x-png,image/jpeg/pdf" type="file" style={{display: "none"}}/>
                        {images.map((item, index) => {
                            let style;
                            if (item.status === "عدم تایید") {
                                style = {color: "#FF5400"}
                            } else {
                                style = {color: "#1976d2"}
                            }
                            return (
                                <div key={index} className="edit-file-images">
                                    <img src={item.img} alt=""/>
                                    <p style={style}>{item.status}</p>
                                    <button className="re-upload" onClick={() => {
                                        setSelectedId(item.id);
                                        inputOpenFileRef.current.click()
                                    }}>آپلود مجدد
                                    </button>
                                </div>
                            )
                        })}
                    </Row>
                    <Row>
                        <button disabled={sendButton.disabled} style={sendButton.style} className="btn-second-edit-file"
                                onClick={handleAddFile}>ارسال
                        </button>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
}
