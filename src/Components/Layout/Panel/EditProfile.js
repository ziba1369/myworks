import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
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
/////////////////edit profile function///////////////////
const EditProfile = props => {
  /////////////////set variable ///////////////////
  const [name, setName] = useState(Cookies.get("name"));
  const [lastname, setLastName] = useState(Cookies.get("family"));
  const [imageprofile, setImageprofile] = useState("");
  const [certi, setCertifi] = useState(Cookies.get("national_code"));
  const [mobile] = useState(Cookies.get("mobile"));
  const [birthday] = useState([
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
  const [birthmonth] = useState([
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
  const [birthmonthvalue, setBirthmonthvalue] = useState(
    Cookies.get("birth_month")
  );
  const [birthyear, setBirthyear] = useState([]);
  const [birthyearvalue, setBirthyearvalue] = useState(
    Cookies.get("birth_year")
  );
  const [Edit, setEdit] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: ".25rem"
  });
  /////////// get years vale from server ////////////
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
      });
  }, []);

  /////////// check edit butoon ////////////
  const checkEditButton = () => {
    if (name !== undefined && lastname !== undefined && certi !== undefined) {
      if (name.length > 0 && lastname.length > 0 && certi.length === 10) {
        setEdit({
          backgroundColor: "#1976d2",
          border: "0px",
          width: "11vw"
        });
        $("#rfbutton").removeAttr("disabled");
      } else {
        setEdit({
          backgroundColor: "#e1e1e1",
          border: "0px",
          width: "11vw"
        });
        $("#rfbutton").attr("disabled", "disabled");
      }
    }
  };
  /////////// set name in variable ////////////
  const handleName = e => {
    setName(e.target.value);
  };
  /////////// set lastname in variable ////////////
  const handleLastName = e => {
    setLastName(e.target.value);
  };
  /////////// set certificate in variable ////////////
  const handleCertificate = e => {
    setCertifi(e.target.value);
  };
  /////////// set birthday  in variable ////////////
  const handleBirthday = e => {
    setBirthvalue(e.target.value);
  };
  /////////// set birthmonth  in variable ////////////
  const handleBirthmonth = e => {
    setBirthmonthvalue(e.target.value);
  };
  /////////// set birthyear  in variable ////////////
  const handleBirthyear = e => {
    setBirthyearvalue(e.target.value);
  };
  /////////// set image  in variable ////////////
  const uploaderhandler = e => {
    setImageprofile(e.target.files[0]);
  };
  /////////// set keypress for image ////////////
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

  /////////// useeffect for changing active or diactive butoon ////////////

  useEffect(() => {
    checkEditButton();
  }, [
    name,
    lastname,
    certi,
    mobile,
    birthvalue,
    birthmonthvalue,
    birthyearvalue
  ]);

  /////////// preview detail ////////////
  const changeprev = () => {
    document.getElementById("prev").style.display = "block";
  };

  /////////// useeffect for upload photo ////////////
  useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId");
    window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
      const pictures = {
        pic: e.detail.cachedFileArray.tokens
      };
    });
  }, []);
  /////////// send data to server ////////////
  const sendEditRgister = () => {
    const formData = new FormData();
    formData.append("customer_token", Cookies.get("token"));
    formData.append("name", name);
    formData.append("family", lastname);
    formData.append("national_code", certi);
    formData.append("birth_day", birthvalue);
    formData.append("birth_month", birthmonthvalue);
    formData.append("birth_year", birthyearvalue);
    if (imageprofile !== null) {
      formData.append("profile_image", imageprofile);
    }
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/app_edit_profile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      )
      .then(function(response) {
        if (response.data.success) {
          Cookies.set("name", name, { path: "/", expires: 7 });
          Cookies.set("family", lastname, {
            path: "/",
            expires: 7
          });
          Cookies.set("national_code", certi, {
            path: "/",
            expires: 7
          });
          Cookies.set("birth_day", birthvalue, {
            path: "/",
            expires: 7
          });
          Cookies.set("birth_month", birthmonthvalue, {
            path: "/",
            expires: 7
          });
          Cookies.set("birth_year", birthyearvalue, {
            path: "/",
            expires: 7
          });
          if (response.data.customer_image !== "") {
            Cookies.set("customer_img", response.data.customer_image, {
              path: "/",
              expires: 7
            });
          }
          window.location.reload();
        } else {
          ToastsStore.error(response.data.error);
        }
      });
  };

  return (
    <div className="container rtl" style={{ maxWidth: "65vw" }}>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
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
          <div className="row date">
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
          </div>
        </Col>

        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>شماره همراه </Form.Label>
            <Form.Control
              type="text"
              placeholder={Cookies.get("mobile")}
              disabled
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
            id="rfbutton"
            style={Edit}
            onClick={sendEditRgister}
            className="loginbutton editprofile"
          >
            ثبت
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default EditProfile;
