import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Cookies from "js-cookie";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import $ from "jquery";
import axios from "axios";
import { withRouter } from "react-router";
//////////////////function changepass/////////////////////
const Passchange = props => {
  //////////////set initial variable/////////////////////
  const [pass, setPass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [newpassr, setNewpassr] = useState("");
  const [ChangePass, setChangePass] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: ".25rem"
  });
  //////////////set password value in variable////////////////
  const handlepass = e => {
    setPass(e.target.value);
  };
  //////////////set newpassword value in variable////////////////
  const handleNewPass = e => {
    setNewpass(e.target.value);
  };
  //////////////set repeat newpassword value in variable////////////////
  const handleNewPassr = e => {
    setNewpassr(e.target.value);
  };
  //////////////set password value in variable////////////////
  const checkChangePassButton = () => {
    if (
      pass.length > 1 &&
      newpass.length > 1 &&
      newpassr.length > 1 &&
      newpass === newpassr
    ) {
      setChangePass({
        backgroundColor: "#1976d2",
        border: "0px",
        width: "11vw"
      });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setChangePass({
        backgroundColor: "#e1e1e1",
        border: "0px",
        width: "11vw"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  //////////////set pass in variable////////////////
  useEffect(() => {
    checkChangePassButton();
  }, [pass]);
  //////////////set newpass in variable////////////////
  useEffect(() => {
    checkChangePassButton();
  }, [newpass]);
  //////////////set repeat new pass in variable////////////////
  useEffect(() => {
    checkChangePassButton();
  }, [newpassr]);
  //////////////send changed pass to server////////////////
  const sendCahngepass = () => {
    const password={
      customer_token:Cookies.get('token'),
      old_password:pass,
      new_password:newpass,

    }
    axios
    .post(
      "http://hezare3vom.ratechcompany.com/api/app_change_password",
      password,
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function(response) {
      // console.log(response.data.success);
      if (response.data.success) {
        Cookies.remove("token");
        props.history.push("/");
       
       
      } else {
        ToastsStore.error(response.data.error);
      }
    })
  
  };
  //////////////use effect to match pass border////////////////
  useEffect(() => {
    let borders = document.getElementsByClassName("borderpass");

    if (newpass !== newpassr && newpass.length > 0 && newpassr.length > 0) {
      var i;
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid red";
      }
    } else if (
      newpass === newpassr &&
      newpass.length > 0 &&
      newpassr.length > 0
    ) {
      var i;
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid green";
      }
    } else if (newpass.length === 0 && newpassr.length === 0) {
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = " 1px solid #ced4da";
      }
    }
  }, [newpass, newpassr]);

  return (
    <div className="container rtl" style={{ maxWidth: "65vw" }}>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
      <Row>
        <h5>تغییرکلمه عبور</h5>
      </Row>
      <Row>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>رمز فعلی</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              onChange={handlepass}
              value={pass}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>رمز جدید</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              onChange={handleNewPass}
              value={newpass}
              className="borderpass"
              required
            />
          </Form.Group>
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          <Form.Group>
            <Form.Label>تکرار رمز جدید</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              onChange={handleNewPassr}
              value={newpassr}
              className="borderpass"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <div
          className="ltr col-xl-12 col-lg-12 col-md-12 col-12"
          style={{ textAlign: "left", padding: "2rem 1rem" }}
        >
          <Button
            variant="primary"
            size="lg"
            id="rfbutton"
            style={ChangePass}
            onClick={sendCahngepass}
            className="loginbutton chanepassprof"
          >
            ثبت
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default withRouter(Passchange);
