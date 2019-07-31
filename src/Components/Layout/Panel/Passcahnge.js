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

const Passchange = props => {
 const[pass,setPass]=useState("");
 const[newpass,setNewpass]=useState("");
 const[newpassr,setNewpassr]=useState("");
 const [Register, setRegister] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    width: "11vw",
    borderRadius: ".25rem"
  });
 const handlepass=e=>{
     setPass(e.target.value)
 }
 const handleNewPass=e=>{
    setNewpass(e.target.value)
}
const handleNewPassr=e=>{
    setNewpassr(e.target.value)
}
const checkRegisterButton = () => {
    
    if (pass.length>1 && newpass.length>1 && newpassr.length>1 && newpass===newpassr) {
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
  useEffect(() => {
    checkRegisterButton();
  }, [pass]);

  useEffect(() => {
    checkRegisterButton();
  }, [newpass]);

  useEffect(() => {
    checkRegisterButton();
  }, [newpassr]);
  const sendCahngepass = () => {
    Cookies.remove("token");
    window.location.reload();
  }
  useEffect(()=>{
    let borders=document.getElementsByClassName('borderpass');

    if(newpass!==newpassr && newpass.length>0 && newpassr.length>0)
    {var i;
    for (i = 0; i < borders.length; i++) {
    borders[i].style.border = "1px solid red";
    }
     
    }else if(newpass===newpassr && newpass.length>0 && newpassr.length>0){
        var i;
    for (i = 0; i < borders.length; i++) {
    borders[i].style.border = "1px solid green";
    }}else if(newpass.length===0 && newpassr.length===0){
        for (i = 0; i < borders.length; i++) {
            borders[i].style.border = " 1px solid #ced4da";
            }
       
    }

},[newpass,newpassr])
  return (
    <div className="container rtl" style={{ maxWidth: "65vw" }}>
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
          style={{ textAlign: "left", padding: "2rem 1rem"}}
        >
          <Button
            variant="primary"
            size="lg"
            id="rfbutton"
            style={Register}
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

export default Passchange;
