import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
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

const EditProfile = props => {
  const [name, setName] = useState(Cookies.get("name"));
  const [imageprofile, setImageprofile] = useState("");
  const [lastname, setLastName] = useState(Cookies.get("family"));
  const [certi, setCertifi] = useState(Cookies.get("national_code"));
  const [mobile, setMobile] = useState([]);

  const [birthday, setBirthday] = useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ]);
  const [birthvalue, setBirthvalue] = useState(Cookies.get("birth_day"));
  const [birthmonth, setBirthmonth] = useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ]);
  const [birthmonthvalue, setBirthmonthvalue] = useState(Cookies.get("birth_month"));
  const [birthyear, setBirthyear] = useState([]);
  const [birthyearvalue, setBirthyearvalue] = useState(Cookies.get("birth_year"));
  const [Register, setRegister] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: ".25rem"
  });
  const checkRegisterButton = () => {
    const phoneno = /^(9|09)(12|19|35|36|37|38|39|32|21|03|01)\d{7}$/;
    if (name.length > 0 &&
      lastname.length > 0 &&
      certi.length === 10 &&
      birthvalue !== undefined &&
      birthmonthvalue !== undefined &&
      birthyearvalue !== undefined ) {
      setRegister({
        backgroundColor: "#1976d2",
        border: "0px",
        width: "11vw",
     
      });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegister({
        backgroundColor: "#e1e1e1",
        border: "0px",
        width: "11vw",
      
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
  const handleBirthday = e => {
    setBirthvalue(e.target.value);
  };
  const handleBirthmonth = e => {
    setBirthmonthvalue(e.target.value);
  };
  const handleBirthyear = e => {
    setBirthyearvalue(e.target.value);
    //console.log(e.target.value)
  };
  const uploaderhandler = e => {
    setImageprofile(e.target.files[0]);
  };
  useEffect(() => {
    document
      .querySelector("#certi")
      .addEventListener("keypress", function(evt) {
        if (
          (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
          evt.which > 57
        ) {
          evt.preventDefault();
        }
      });
  }, [certi]);
  // useEffect(() => {

  //     document.querySelector("#mobile").addEventListener("keypress", function (evt) {
  //         if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
  //             evt.preventDefault();
  //         }
  //     })

  // }, [certi])
  useEffect(() => {
    checkRegisterButton();
  }, [lastname]);

  useEffect(() => {
    checkRegisterButton();
  }, [certi]);

  useEffect(() => {
    checkRegisterButton();
  }, [mobile]);
  useEffect(() => {
    checkRegisterButton();
  }, [birthvalue]);
  useEffect(() => {
    checkRegisterButton();
  }, [birthmonthvalue]);
  useEffect(() => {
    checkRegisterButton();
  }, [birthyearvalue]);

  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };
  useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
  }, []);
  console.log(imageprofile, "image");

  const sendEditRgister = () => {
    const formData = new FormData();
    formData.append("customer_token", Cookies.get("token"));
    formData.append("profile_image", imageprofile);
    formData.append("name", name);
    formData.append("family", lastname);
    formData.append("national_code", certi);
    formData.append("birth_day", birthvalue);
    formData.append("birth_month", birthmonthvalue);
    formData.append("birth_year", birthyearvalue);
    console.log(formData.get("profile_image"));
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/app_edit_profile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      )
      .then(function(response) {
        console.log(response.data);
        if (response.data.success) {
          Cookies.set("customer_token", response.data.token, {
            path: "/",
            expires: 7
          });
          Cookies.set("name", response.data.name, { path: "/", expires: 7 });
          Cookies.set("family", response.data.lastname, {
            path: "/",
            expires: 7
          });
          Cookies.set("profile_image", response.data.profile_image, {
            path: "/",
            expires: 7
          });
          Cookies.set("national_code", response.data.national_code, {
            path: "/",
            expires: 7
          }); 
          Cookies.set("birth_day", response.data.birt_day, {
            path: "/",
            expires: 7
          });
          Cookies.set("birth_month", response.data.birth_month, {
            path: "/",
            expires: 7
          });
          Cookies.set("birth_year", response.data.birth_year, {
            path: "/",
            expires: 7
          });

          props.history.push("/");
          window.location.reload();
        } else {
          ToastsStore.error(response.data.error);
        }
      })
     
  };
  useEffect(() => {
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/get_year",

        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          setBirthyear(response.data.year);
          // console.log(response.data.year)
        } else {
          ToastsStore.error(response.data.error);
        }
      })
     
  }, []);

  return (
    <div className="container rtl" style={{ maxWidth: "65vw" }}>
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
            <div
              id="showimage"
              className="custom-file-container__image-preview upload-preview"
            />
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
              id="certi"
              required
            />
          </Form.Group>
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
        <Form.Label>تاریخ تولد</Form.Label>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <Form.Control
                id="day"
                as="select"
                type="select"
                onChange={handleBirthday}
                value={birthvalue}
                name="slelect"
                required
                className="day"
              >
                <option selected disabled>
                  روز
                </option>

                {birthday.map(num => (
                  <option value={num}>{num}</option>
                ))}
              </Form.Control>
            </Col>

            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <Form.Control
                id="groups"
                as="select"
                type="select"
                onChange={handleBirthmonth}
                value={birthmonthvalue}
                name="slelect"
                required
                className="month"
              >
                <option selected disabled>
                  ماه
                </option>
                {birthmonth.map(num => (
                  <option value={num}>{num}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <Form.Control
                id="groups"
                as="select"
                type="select"
                onChange={handleBirthyear}
                value={birthyearvalue}
                name="slelect"
                required
              >
                <option selected disabled>
                  سال
                </option>
                {birthyear.map(num => (
                  <option value={num}>{num}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Col>
       
        <Col
          xl={6}
          lg={6}
          md={6}
          xs={12}
         
        >
          <Form.Group>
            <Form.Label>
              شماره همراه{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={Cookies.get("mobile")}
              disabled
            />
          </Form.Group>
        </Col>
       
        <div
          className="ltr col-xl-12 col-lg-12 col-md-12 col-12"
          style={{ textAlign: "left", padding: "2rem 1rem"}}
        >
          <Button
            variant="primary"
            size="lg"
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
