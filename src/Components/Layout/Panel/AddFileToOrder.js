import React, {useState, useEffect} from "react";
import {Row} from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {editOrderFileAPI} from "../../../api/api";
import * as Cookies from "js-cookie";
import {ToastsStore} from "react-toasts";

function AddFileToOrder(props) {
    const [orderFileCount, setOrderFilecount] = useState(0);
    const [photoUpload, setPhotoUpload] = useState();

    const changeprev = () => {
        document.getElementById("prev").style.display = "block";
    };
    useEffect(() => {
        new FileUploadWithPreview("myUniqueUploadIdtwo");
        window.addEventListener("fileUploadWithPreview:imagesAdded", function (e) {
            setOrderFilecount(e.detail.addedFilesCount);
            setPhotoUpload(e.detail.cachedFileArray);
            const pictures = {
                pic: e.detail.cachedFileArray.tokens
            };
        });
        window.addEventListener("fileUploadWithPreview:imageDeleted", function (e) {
            const pictures = {
                pic: e.detail.cachedFileArray.tokens
            };
        });
    }, []);

    const handleAddFile = () => {
        editOrderFileAPI(Cookies.get('token'),
            props.orderID,
            props.rejectedId,
            "2",
            photoUpload,
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
        <React.Fragment>
            <div className="row editorder">اصلاح سفارش</div>
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
                <div className="uploadphoto" style={{margin: '0 auto'}}>
                    <Row>فایلهای پیوست</Row>
                    <Row>
                        <div className="upload-text">
                            <p>{props.orderDesc}</p>
                        </div>
                    </Row>
                    <Row>
                        <div
                            className="custom-file-container"
                            data-upload-id="myUniqueUploadIdtwo"
                        >
                            <label
                                className="custom-file-container__custom-file uploadphotoboxorder"
                                onClick={changeprev}
                            >
                                <input
                                    type="file"
                                    className="custom-file-container__custom-file__custom-file-input "
                                    accept="*"
                                    multiple
                                    aria-label=""
                                />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760"/>
                                <span className="custom-file-container__custom-file__custom-file-control"/>
                            </label>
                            <div
                                id="prev"
                                className="custom-file-container__image-preview order-pic"
                                style={{width: '100% !important'}}
                            />
                            <label>
                                <a
                                    href="javascript:void(0)"
                                    className="custom-file-container__image-clear"
                                    title="Clear Image"
                                />
                            </label>
                        </div>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddFileToOrder;