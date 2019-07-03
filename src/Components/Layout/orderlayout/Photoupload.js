import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, FormLabel } from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import axios from "axios";
const Photoupload = ({ onClicks, step, onChanges }) => {
  const [typedoc, changetypedoc] = useState({
    type: "شناسنامه",
    countchoose: "۱",
    accept: "۱",
    extradoc: "۰",
    deliverytype: "عادی"
  });

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
      // Use e.detail.uploadId to match up to your specific input

      console.log(e.detail.cachedFileArray);
      console.log(e.detail.addedFilesCount);
      const pictures={
        pic:e.detail.cachedFileArray.tokens
      }
      axios
        .post(
          "http://hezare3vom.ratechcompany.com/api/get_verification_code",
          pictures,
          { headers: { "Content-Type": "application/json" } }
        )
        .then(function(response) {
          console.log(response.data.success);
          if (response.data.success) {
          } else {
          }
        })
        .catch(function(error) {
        
        });
    });
  }, []);

  return (
    <React.Fragment>
      <Col xl={3} lg={3} md={3} sm={12} xs={12}>
        <Card className="documenttype ">
          <Card.Header>نوع مدرک ترجمه</Card.Header>
          <Card.Body>
            <Card.Title>{typedoc.type}</Card.Title>
            <Card.Text>
              زبان ترجمه<span>{typedoc.countchoose} مورد</span>
            </Card.Text>
            <Card.Text>
              مهرو تاییدات<span>{typedoc.accept} مورد</span>
            </Card.Text>
            <Card.Text>
              نسخه اضافه<span>{typedoc.extradoc} مورد</span>
            </Card.Text>
            <Card.Text>
              نوع تحویل<span>{typedoc.deliverytype} مورد</span>
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
                class="custom-file-container"
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
                    >
               
                    </a>
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
        <Button id="add1" onClick={handleSubmit} type="submit">
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default Photoupload;
