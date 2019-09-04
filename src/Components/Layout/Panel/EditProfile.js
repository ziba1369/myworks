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
import {getYear,app_edit_profileAPI,getprofileApI} from '../../../api/api';
import editicon from '../../../images/pencil-edit-button.svg';
/////////////////edit profile function///////////////////
const EditProfile = props => {
  /////////////////set variable ///////////////////
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [imageprofile, setImageprofile] = useState();
  const [certi, setCertifi] = useState();
  const [mobile,setMobile] = useState();
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
  const [birthvalue, setBirthvalue] = useState('');
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
  const [birthmonthvalue, setBirthmonthvalue] = useState('');
  const [birthyear, setBirthyear] = useState([]);
  const [birthyearvalue, setBirthyearvalue] = useState('');
  const [Edit, setEdit] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: ".25rem"
  });
  /////////// get years vale from server ////////////
  useEffect(() => {
    getYear(response=>{
      if (response.data.success) {
        setBirthyear(response.data.year);
       
      } else {
        ToastsStore.error(response.data.error);
      }
    })
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

  /////////// set keypress for image ////////////
  useEffect(() => {
    document
      .querySelector("#certi")
      .addEventListener("keypress", function(evt) {
        if (
          (evt.which !== 8 && evt.which !== 0 && evt.which < 48) ||
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
  //////////get_user_data///////////////////
  useEffect(()=>{
    getprofileApI(Cookies.get("token"),(response)=>{
      if (response.data.success) {
        console.log(response.data)
       setName(response.data.customer_name);
       setLastName(response.data.customer_family);
       setImageprofile(response.data.customer_img);
       setCertifi(response.data.national_code);
       setBirthyearvalue(response.data.birth_year);
       setBirthmonthvalue(response.data.birth_month);
       setBirthvalue(response.data.birth_day);
       setMobile(response.data.mobile)
      
      }else {
        ToastsStore.error(response.data.error);
      }
    })
  },[])

  /////////// send data to server //////////
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

    app_edit_profileAPI(formData,(response)=>{
      if (response.data.success) {
        ToastsStore.success("تغییر اطلاعات کاربری با موفقیت انجام گردید");
       
        setTimeout(window.location.reload(), 2000);
       
        
      } else {
        ToastsStore.error(response.data.error);
      }
    })



  };

  return (
    <div className="container rtl" style={{ maxWidth: "65vw" }}>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
      <Row>
        <div className="profpic">
       
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
                onChange={e=>{setImageprofile(e.target.files[0])}}
              />
              <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
              <span className="custom-file-container__custom-file__custom-file-control" />
            </label>
            <div
              id="showimage"
              className="custom-file-container__image-preview upload-preview"
            />
          </div>
        </div>
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
              onChange={e => {setName(e.target.value)}}
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
              onChange={e=>{setLastName(e.target.value)}}
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
              type="tel"
              placeholder=""
              onChange={e=>{setCertifi(e.target.value)}}
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
                onChange={e=>{setBirthvalue(e.target.value)}}
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
                onChange={e=>{setBirthmonthvalue(e.target.value)}}
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
                onChange={e=>{setBirthyearvalue(e.target.value);}}
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
