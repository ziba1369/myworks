import React, { useState, useEffect } from "react";
import {
  Nav,
  Col,
  Tab,
  Row,
  Container,
  Image,
  Form,
  Button
} from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import $ from "jquery";
import axios from "axios";
const EditProfile = (props) => {
  const [name, setName] = useState("");
  const[image,setImage]=useState('');
  const [lastname, setLastName] = useState("");
  const [certi, setCertifi] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [Register, setRegister] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: "0"
  });
  const checkRegisterButton = () => {
    const phoneno = /^(9|09)(12|19|35|36|37|38|39|32|21|03|01)\d{7}$/;
    if (name.length > 1 &&
      lastname.length > 1 &&
      certi.length === 10 &&
      mobile.match(phoneno)) {
      setRegister({
        backgroundColor: "#1976d2",
        border: "0px",
        width: "11vw",
        borderRadius: "0"
      });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegister({
        backgroundColor: "#e1e1e1",
        border: "0px",
        width: "11vw",
        borderRadius: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  const handleMobileChange = e => {
    setMobile(e.target.value);
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleLastName = e => {
    setLastName(e.target.value);
  };

  const handleCertificate = e => {
    setCertifi(e.target.value);
  };
  const uploaderhandler=(e)=>
  {
    setImage(e.target.files[0])
  }
  useEffect(() => {
    checkRegisterButton();
  }, [lastname]);

  useEffect(() => {
    checkRegisterButton();
  }, [certi]);

  useEffect(() => {
    checkRegisterButton();
  }, [mobile]);

  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };
  useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
    const pictures = {
      pic: e.detail.cachedFileArray.tokens
    };
  })
  }, []);

  const sendEditRgister = () => {
    const addimage=document.getElementById('showimage').style.backgroundImage;
    //const sendfile=addimage.style.backgroundImage;
  const editprofile={
    customer_token:Cookies.get('token'),
    profile_image:image,
    name:name,
    family:lastname,
    national_code:certi
  
  }
    axios
        .post("http://hezare3vom.ratechcompany.com/api/app_edit_profile",editprofile,{
            headers: {"Content-Type": "application/json"}
        })
        .then(function (response) {
          console.log(response.data)
            if (response.data.success) {
              alert(response.data)
                    Cookies.set("customer_token", response.data.token, {path: "/", expires: 7});
                    Cookies.set("name", response.data.name, {path: "/", expires: 7});
                    Cookies.set("family", response.data.lastname, {path: "/", expires: 7});
                   // Cookies.set("profile_image", response.data.profile_image, {path: "/", expires: 7});
                    Cookies.set("national_code", response.data.national_code, {path: "/", expires: 7});
                props.history.push("/");
                window.location.reload();
            } else {
                ToastsStore.error(response.data.error);
            }
        })
        .catch(function (error) {
            ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
        });

};

  return (
    <div className="container rtl" style={{maxWidth: '65vw'}}>
      <Row>
        <Col
          xl={{ span: 2, offset: 5 }}
          lg={{ span: 2, offset: 5 }}
          md={{ span: 2, offset: 5 }}
          xs={{ span: 2, offset: 5 }}
        >
          <div
            className="custom-file-container"
            data-upload-id="myUniqueUploadId"
          >
            <label className="uploadremove">
              Upload File{" "}
              <a
                href="javascript:void(0)"
                class="custom-file-container__image-clear"
                title="Clear Image"
              >
                &times;
              </a>
            </label>
            <label className="custom-file-container__custom-file  upladersize">
              <input
                type="file"
                className="custom-file-container__custom-file__custom-file-input"
                accept="*"
                aria-label="Choose File"
                onChange={uploaderhandler}
              />
              <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
              <span className="custom-file-container__custom-file__custom-file-control" />
            </label>
            <div id="showimage" className="custom-file-container__image-preview upload-preview" />
          </div>
        </Col>
      </Row>
      <Row>
        <h5>مشخصات شخصی</h5>
      </Row>
      <Row>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>نام </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={handleName}
              value={name}
              required
            />
          </Form.Group>
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>نام خانوادگی</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={handleLastName}
              value={lastname}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>کدملی</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              onChange={handleCertificate}
              value={certi}
              required
            />
          </Form.Group>
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>شماره همراه</Form.Label>
            <Form.Control
              type="tel"
              placeholder=""
              onChange={handleMobileChange}
              vlaue={mobile}
              required
            />
          </Form.Group>
        </Col>
        <div
          className="ltr col-xl-12 col-lg-12 col-md-12 col-12"
          style={{ textAlign: "left", padding: "2rem 1rem" }}
        >
          <Button
            variant="primary"
            size="lg"
            type="submit"
            id="rfbutton"
            style={Register}
            onClick={sendEditRgister}
            className="loginbutton"
          >
            ثبت
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default EditProfile;
