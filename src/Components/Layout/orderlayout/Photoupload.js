import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import {ToastsStore,ToastsContainer,ToastsContainerPosition} from "react-toasts";
import axios from "axios";
import * as Cookies from "js-cookie";
////////////////////photoupload function /////////////////////////////
const Photoupload = ({ onClicks, step, onChanges,orderFileCount, setOrderFilecount,photoUpload,setPhotoUpload,languages,validation,delivery,countorder }) => {
////////////////////////set variable/////////////////////////////////

const [photoStep] = useState({border: "0px",backgroundColor: "#007bff"});
////////////////////////preview image/////////////////////////////////

  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };
  ///////////////////////////////////////////////////
    ////////////////////////count choosed languages/////////////////////////////////
  //eslint-disable-next-line
  const languagenum = () => {
    let w = 0;
    for (let x in languages) {
      if (languages[x].checkin) {
        w++;
      }
    }
    return w;
  };
  ////////////////////////count choosed certificate/////////////////////////////////
   //eslint-disable-next-line
  const acceptnum = () => {
    let w = 0;
    for (let x in validation) {
      if (validation[x].checkin) {
        w++;
      }
    }
    return w;
  };
  ////////////////////////count choosed certificate/////////////////////////////////
   //eslint-disable-next-line
  const deliverynum = () => {
    let z;
    for (let x in delivery) {
      if (delivery[x].checkin) {
        z = delivery[x].name;
      }
    }
    return z;
  };
   ////////////////////////useeffectfor upload photo /////////////////////////////////
   useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
      setOrderFilecount(e.detail.addedFilesCount);
      setPhotoUpload(e.detail.cachedFileArray);
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
////////////////////////handle submit/////////////////////////////////
  const handleSubmit = () => {
    ////////////////////////send choose languages to server /////////////////////////////////
    const orderlanguages = languages;
    const order_lang = orderlanguages.filter(item => item.checkin === true);
    const order_languages = order_lang.map(item => {
      return (
        item.name.split(" به ")[0] +
        "|" +
        item.name.split(" به ")[1] +
        "|" +
        item.price
      );
    });
  ////////////////////////send choose certificate to server /////////////////////////////////
    const orderValidation =validation;
    const order_cert = orderValidation.filter(item => item.checkin === true);
    const order_certificate = order_cert.map(item => {
      return item.name + "," + item.price;
    });
  ////////////////////////send choose deliver to server /////////////////////////////////
    const translate_type = delivery;
    const deliver = translate_type.filter(item => item.checkin === true);
    const deliverytype = deliver.map(item => {return item.type;});
    const deliverypr = translate_type.filter(item => item.checkin === true);
    const deliveryprice = deliverypr.map(item => {return item.price});
    
  ////////////////////////set items to send server /////////////////////////////////

    const formDataorder = new FormData();
  
      formDataorder.append("customer_token", Cookies.get("token"));
      formDataorder.append("order_name",Cookies.get("title"));
      formDataorder.append("customer_description","");
      formDataorder.append("order_type","normal");
      formDataorder.append("translate_type",deliverytype[0]);
      formDataorder.append("page_count",0);
      formDataorder.append("copy_count",countorder);
      formDataorder.append("weight_added_version", 0);
      formDataorder.append("normal_price",deliveryprice[0]);
      formDataorder.append("fast_price", deliveryprice[0]);
      formDataorder.append("total_price", Cookies.get("sumValue"))
      formDataorder.append("need_certificate",0);
      formDataorder.append("order_file_count",orderFileCount);
      console.log(photoUpload!==undefined)
      if(photoUpload!==undefined)
      {
        
      photoUpload.map((item,index) =>{
      
        formDataorder.append("order_file_"+ index ,photoUpload[0]);
       
      })
      }
      formDataorder.append("order_languages",order_languages);
      formDataorder.append("order_certificate",order_certificate);

  
   
   
  ////////////////////////send data to server /////////////////////////////////
    
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/app_make_order",
        formDataorder,
        { headers: { "Content-Type": "multipart/form-data"} }
      )
      .then(function(response) {
       console.log(response.data)
        if (response.data.success) {
          Cookies.set("order_code", response.data.order_code, { path: "/", expires: 7 })
          onClicks();
        } else {
          ToastsStore.error(response.data.error);
        }
      
       
        
      });
    


   

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
              نسخه اضافه<span>{countorder} مورد</span>
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
          style={photoStep}
        >
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default Photoupload;
