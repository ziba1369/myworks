import React, {useState, useEffect} from "react";
import {Button, Col, Row, Card} from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {
    ToastsStore,
    ToastsContainer,
    ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import {orderAPI} from "../../../api/api";

const PhotoUpload = (props) => {

    const [photoStep] = useState({border: "0px", backgroundColor: "#007bff"});

    ////////////////////////preview image/////////////////////////////////
    const changeprev = () => {
        document.getElementById("prev").style.display = "block";
    };

    ////////////////////////useeffectfor upload photo /////////////////////////////////
    useEffect(() => {
        new FileUploadWithPreview("myUniqueUploadId");
        window.addEventListener("fileUploadWithPreview:imagesAdded", function (e) {
            props.setOrderFilecount(e.detail.addedFilesCount);
            props.setPhotoUpload(e.detail.cachedFileArray);
        });
        window.addEventListener("fileUploadWithPreview:imageDeleted", function (e) {
            props.setOrderFilecount(e.detail.addedFilesCount);
            props.setPhotoUpload(e.detail.cachedFileArray);
        });
    }, []);

    ////////////////////////count choosed languages/////////////////////////////////
    const languagenum = () => {
        let w = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                w++;
            }
        }
        return w;
    };
    ////////////////////////count choosed certificate/////////////////////////////////
    const acceptnum = () => {
        let w = 0;
        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                w++;
            }
        }
        return w;
    };
    ////////////////////////count choosed certificate/////////////////////////////////
    const deliverynum = () => {
        let z;
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                z = props.data.delivery[x].name;
            }
        }
        return z;
    };
    ////////////////////////sum all vlaue of orders/////////////////////////////////
    const sumValue = () => {
        let sumd = 0;
        let sumv = 0;
        let sum = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                sum = sum + parseInt(props.data.languages[x].price);
            }
        }
        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                sumv = sumv + parseInt(props.data.certificates[x].price);
            }
        }
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                sumd = sumd + parseInt(props.data.delivery[x].price);
            }
        }

        if (props.data.count > 0) {
            return (props.data.count + 1) * (sum + sumv + sumd);
        } else {
            return sum + sumv + sumd;
        }
    };

    ////////////////////////main return /////////////////////////////////
    return (
        <React.Fragment>
            <ToastsContainer
                position={ToastsContainerPosition.TOP_CENTER}
                store={ToastsStore}
            />
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                <Card className="documenttype ">
                    <Card.Header>نوع مدرک ترجمه</Card.Header>
                    <Card.Body>
                        <Card.Title> {Cookies.get("title")}</Card.Title>
                        <Card.Text>
                            زبان ترجمه<span>{languagenum()} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            مهرو تاییدات<span>{acceptnum()} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            نسخه اضافه<span>{props.data.count} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            نوع تحویل<span>{deliverynum()}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{borderRadius: "1rem", height: "100%"}}
            >
                <Card style={{borderRadius: "1rem", height: "100%"}}>
                    <div className="uploadphoto">
                        <Row>
                            <div className="upload-text">
                                <p>نمامی صفحات (حتی صفحات خالی) تصویر یافایل واضح آپلود شود </p>
                                <p>
                                    صفحه اول اسامی که در فایل ها آپلود شده به منظور صحیح نوشتن
                                    اسامی در فایل الزامی است
                                </p>
                            </div>
                        </Row>
                        <Row>
                            <div
                                className="custom-file-container"
                                data-upload-id="myUniqueUploadId"
                            >
                                <label
                                    className="custom-file-container__custom-file uploadphotobox"
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
                                    className="custom-file-container__image-preview"
                                />
                                <label>
                                    <a
                                        href="javascript:void(0)"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"/>
                                </label>
                            </div>
                        </Row>
                    </div>
                </Card>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
                <p className="addteaxt"/>
                <Button
                    style={{margin: "1rem 0", fontSize: ".8rem", fontFamily: "fanum"}}
                    variant="primary"
                    size="lg">
                    <p>مجموع هزینه ها</p>
                    <p>{sumValue()}</p>
                </Button>
                <Button
                    onClick={props.click}
                    className="loginbutton"
                    style={photoStep}>
                    ادامه سفارش
                </Button>
            </Col>
        </React.Fragment>
    );
};

export default PhotoUpload;
