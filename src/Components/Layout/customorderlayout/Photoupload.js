import React, {useState, useEffect} from "react";
import {Button, Col, Row, Card} from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {ToastsStore, ToastsContainer, ToastsContainerPosition} from "react-toasts";

function PhotoUpload (props){

    const [customPhotoStep] = useState({border: "0px", backgroundColor: "#007bff"});

    const changeprev = () => {
        document.getElementById("prev").style.display = "block";
    };

    useEffect(() => {
        new FileUploadWithPreview("myUniqueUploadId");
        window.addEventListener("fileUploadWithPreview:imagesAdded", function (e) {
            props.setCustomOrderFileCount(e.detail.addedFilesCount);
            props.setcustomPhotoUpload(e.detail.cachedFileArray);
        });
        window.addEventListener("fileUploadWithPreview:imageDeleted", function (e) {
            props.setCustomOrderFileCount(e.detail.addedFilesCount);
            props.setcustomPhotoUpload(e.detail.cachedFileArray);
        });
    }, []);

    ////////////////////////calc count of selected languages//////////////////////
    const languageCount = () => {
        let w = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].status === 0) {
                w++;
            }
        }
        return w;
    };


    return (
        <React.Fragment>
            <ToastsContainer
                position={ToastsContainerPosition.TOP_CENTER}
                store={ToastsStore}
            />
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                <Card className="documenttype">

                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            زبان ترجمه<span>{languageCount()} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            عنوان سفارش<span>{props.data.title}</span>
                        </Card.Text>
                        <Card.Text>
                            مهرو تاییدات<span>{props.data.confirm === 1 ? "رسمی" : "غیررسمی"}</span>
                        </Card.Text>

                        <Card.Text>
                            نوع تحویل<span>{props.data.type === 1 ? "فوری" : "عادی"}</span>
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
                                        title="Clear Image"
                                    />
                                </label>
                            </div>
                        </Row>
                    </div>
                </Card>
            </Col>

            <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
                <p className="addteaxt"/>
                <Button
                    onClick={props.click}
                    className="loginbutton"
                    style={customPhotoStep}
                >
                    ادامه سفارش
                </Button>
            </Col>
        </React.Fragment>
    );
};

export default PhotoUpload;
