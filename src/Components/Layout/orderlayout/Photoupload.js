import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, FormLabel } from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {
  ToastsStore,
  ToastsContainer,
  ToastsContainerPosition
} from "react-toasts";
import axios from "axios";
import $ from "jquery";
import * as Cookies from "js-cookie";
const Photoupload = ({ onClicks, step, onChanges }) => {

  const [photoStep, setPhotoStep] = useState({
    border: "0px",
    backgroundColor: "#007bff"
  });
  const [typedoc, changetypedoc] = useState([]);

  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };

  const handleSubmit = () => {
    onClicks();
  };




  useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
      // e.detail.uploadId
      // e.detail.cachedFileArray
      // e.detail.addedFilesCount
      // Use e.detail.uploadId to match up to your specific input;
    

      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
    window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
      // e.detail.uploadId
      // e.detail.cachedFileArray
      // e.detail.addedFilesCount
      // Use e.detail.uploadId to match up to your specific input
      // if (e.detail.cachedFileArray.length > 0) {
      //   setLoginButtonStyle({ backgroundColor: "#007bff" });
      //   $(".loginbutton").removeAttr("disabled");
      // } else {
      //   setLoginButtonStyle({ backgroundColor: "#e1e1e1", border: "0px" });
      //   $(".loginbutton").attr("disabled", "disabled");
      // }

      console.log(e.detail.cachedFileArray.length);
      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
  }, []);

 useEffect(()=>{
const orderlanguages=JSON.parse(Cookies.get('languages'));
const order_languages=orderlanguages.map((item, index) => {
  if(item.checkin)
   {
     
      return (item.name.replace("به", "|")|item.price)
   }
} );
console.log(order_languages,"py");
const orderset={
  customer_token: Cookies.get('token'),
  // order_name:,
  // customer_description:,
  // order_type:"custom,normal",
  // translate_type:"fast,normal",
  // page_count:,
  // copy_count:,
  // weight_added_version:,
  // normal_price:,
  // fast_price:,
  // totalprice:,
  // need_certificate:,
  // order_file_count:,
  // order_languages:,

}


  axios
  .post(
    "http://hezare3vom.ratechcompany.com/api/app_make_order",
     orderset,
    { headers: { "Content-Type": "application/json" } }
  )
  .then(function(response) {
    // console.log(response.data.success);
    if (response.data.success) {
     console.log(response.data)
    } else {
      ToastsStore.error(response.data.error);
    }
  })
 },[])
  return (
    <React.Fragment>
      <Col xl={3} lg={3} md={3} sm={12} xs={12}>
        <Card className="documenttype ">
          <Card.Header>نوع مدرک ترجمه</Card.Header>
          <Card.Body>
            <Card.Title> {Cookies.get('title')}</Card.Title>
            <Card.Text>
              زبان ترجمه<span>{Cookies.get("languagenum")} مورد</span>
            </Card.Text>
            <Card.Text>
              مهرو تاییدات<span>{Cookies.get("acceptnum")} مورد</span>
            </Card.Text>
            <Card.Text>
              نسخه اضافه<span>{Cookies.get("count")} مورد</span>
            </Card.Text>
            <Card.Text>
              نوع تحویل<span>{Cookies.get("deliverynum")}</span>
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
          <p>2500000 تومان</p>
        </Button>
        <Button
          onClick={handleSubmit}
          className="loginbutton"
          style={photoStep}
        >
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default Photoupload;
