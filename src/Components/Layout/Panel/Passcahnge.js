import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import $ from "jquery";
import { withRouter } from "react-router";
import {passchangeAPI} from '../../../api/api';
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
    
    passchangeAPI(password,(response)=>{
      if (response.data.success) {
        Cookies.remove("token");
        ToastsStore.success("تغییر رمز با موفقیت انجام گردید");
        setTimeout(function(){
          props.history.push("/") // you can pass true to reload function to ignore the client cache and reload from the server
      },2000); 
        
       
       
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
      
      for (let i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid green";
      }
    } else if (newpass.length === 0 && newpassr.length === 0) {
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = " 1px solid #ced4da";
      }
    }
  }, [newpass, newpassr]);

  return (
    <div className="container rtl changepasspanel" style={{ maxWidth: "65vw" }}>
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
              onChange={e => {setPass(e.target.value)}}
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
              onChange={e => {setNewpass(e.target.value)}}
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
              onChange={e => {setNewpassr(e.target.value)}}
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
