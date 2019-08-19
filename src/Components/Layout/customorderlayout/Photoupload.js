import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {ToastsStore,ToastsContainer,ToastsContainerPosition} from "react-toasts";
import axios from "axios";
import * as Cookies from "js-cookie";
////////////////////photoupload function /////////////////////////////
const Photoupload = ({ onClicks, step, onChanges,photo,setPhoto,photoCount,setPhotoCount,data }) => {
////////////////////////set variable/////////////////////////////////

const [customPhotoStep] = useState({border: "0px",backgroundColor: "#007bff"});
////////////////////////preview image/////////////////////////////////
  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };
   ////////////////////////useeffectfor upload photo /////////////////////////////////
   useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
     setPhotoCount(e.detail.addedFilesCount);
       setPhoto(e.detail.cachedFileArray);
      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
    window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
  }, []);

////////////////////////////////
const languagenum = () => {
  let w=0;
  for (let x in data.languages) {
    if (data.languages[x].status===0) {
      w++;
    }
  }
  return w;
};
////////////////////////handle submit/////////////////////////////////
const handleSubmit = () => {
    onClicks()
  };
  ////////////////////////main return /////////////////////////////////
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
              زبان ترجمه<span>{languagenum()} مورد</span>
            </Card.Text>
            <Card.Text>
             عنوان سفارش<span>{data.title}</span>
            </Card.Text>
            <Card.Text>
              مهرو تاییدات<span>{data.confirm===1?"رسمی":"غیررسمی"}</span>
            </Card.Text>
            
            <Card.Text>
              نوع تحویل<span>{data.type===1?"فوری":"عادی"}</span>
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
        style={{ borderRadius: "1rem", height: "100%" }}
      >
        <Card style={{ borderRadius: "1rem", height: "100%" }}>
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
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <span className="custom-file-container__custom-file__custom-file-control" />
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

              {/* <form>
     
       <input type="file" onChange={onImageChange} className="filetype" id="group_image"/>
       <img id="target" alt={picture} src={picture} />
  </form> */}
            </Row>
          </div>
        </Card>
      </Col>

      <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
        <p className="addteaxt" />
        <Button
          style={{ margin: "1rem 0", fontSize: ".8rem", fontFamily: "fanum" }}
          variant="primary"
          size="lg"
        >
          <p>مجموع هزینه ها</p>
          <p>{Cookies.get("sumValue")}</p>
        </Button>
        <Button
          onClick={handleSubmit}
          className="loginbutton"
          style={customPhotoStep}
        >
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default Photoupload;
