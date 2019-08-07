import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import phoneIcon from "../../../images/phone-symbol-of-an-auricular-inside-a-circle.svg";
import placeholder from "../../../images/placeholder.svg";
import emailIcon from "../../../images/email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
/////////////main/////////////////////
const Contatus = props => {
  /////////////set-variable/////////////////////
  const [name, setName] = useState("");
  const [tel, setTell] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");
  const [loginButton, setLoginButtonStyle] = useState({
    backgroundColor: "#e1e1e1"
  });

  /////////////active login button/////////////////////
  const checkLoginButton = () => {
    const phoneno = /^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
    const mailno = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      name.length > 0 &&
      tel.match(phoneno) &&
      email.match(mailno) &&
      issue.length > 0 &&
      message.length > 0
    ) {
      setLoginButtonStyle({ backgroundColor: "#1976d2" });
      $(".loginbutton").removeAttr("disabled");
    } else {
      setLoginButtonStyle({ backgroundColor: "#e1e1e1" });
      $(".loginbutton").attr("disabled", "disabled");
    }
  };
  /////////////chack email////////////////////
  const blurEmail = e => {
    const mailno = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(mailno))
      ToastsStore.warning(
        "کاربر گرامی لطفا ایمیل خود را با فرمت مناسب وارد نمایید"
      );
  };
  /////////////check phone number/////////////////////
  const blurPhone = e => {
    const phoneno = /^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
    if (!tel.match(phoneno))
      ToastsStore.warning(
        "کاربر گرامی لطفا شماره همراه خود را با فرمت مناسب وارد نمایید"
      );
  };

  /////////////useeffect-validationphone-number/////////////////////
  useEffect(() => {
    document.querySelector("#phone").addEventListener(
      "keypress",
      function(evt) {
        if (
          (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
          evt.which > 57
        ) {
          evt.preventDefault();
        }
      },
      [tel]
    );
  });

  /////////////useeffect check change login button by name/////////////////////
  useEffect(() => {
    checkLoginButton();
  }, [name]);
  /////////////useeffect check change login button by tell/////////////////////
  useEffect(() => {
    checkLoginButton();
  }, [tel]);
  /////////////useeffect check change login button by email/////////////////////
  useEffect(
    e => {
      checkLoginButton();
    },
    [email]
  );
  /////////////useeffect check change login button by issue/////////////////////
  useEffect(() => {
    checkLoginButton();
  }, [issue]);
  /////////////useeffect check change login button by message/////////////////////
  useEffect(() => {
    checkLoginButton();
  }, [message]);

  /////////////hanlder-butoon/////////////////////
  const sendHandler = () => {
    const contactUs = {
      name: name,
      tel: tel,
      email: email,
      issue: issue,
      message: message
    };
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/front/send_message",
        contactUs,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        if (response.data.success) {
          console.log(response.data.success, "send");
        } else {
          ToastsStore.error(response.data.errmessage);
        }
      });
  };
  /////////////main return/////////////////////
  return (
    <React.Fragment>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
      <Row>
        <div className="col-xl-9 col-md-9 col-sm-12 col-xs-12 footercontent">
          <h5 className="call titlesections">تماس با ما</h5>
          <Row>
            <Col xl={6} md={6} sm={12} xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label>نام</Form.Label>
                  <Form.Control
                    onChange={e => {setName(e.target.value)}}
                    size="sm"
                    type="text"
                    value={name}
                  />
                  <Form.Label>شماره همراه</Form.Label>
                  <Form.Control
                    size="sm"
                    type="number"
                    onBlur={blurPhone}
                    onChange={e => {setTell(e.target.value)}}
                    vlaue={tel}
                    id="phone"
                    name="phone"
                  />
                  <Form.Label id="email">ایمیل آدرس</Form.Label>
                  <Form.Control
                    onChange={e => {setEmail(e.target.value)}}
                    onBlur={blurEmail}
                    value={email}
                    size="sm"
                    pattern="/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
                    type="eamil"
                  />
                  <Form.Label>موضوع</Form.Label>
                  <Form.Control
                    onChange={e => {setIssue(e.target.value)}}
                    size="sm"
                    value={issue}
                    type="type"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={6} md={6} sm={12} xs={12}>
              <Form>
                <Form.Label value={message}>متن پیام</Form.Label>
                <Form.Control onChange={e => {setMessage(e.target.value)}} as="textarea" rows="9" />
              </Form>
            </Col>
          </Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            md={{ span: 4, offset: 4 }}
            sm={12}
            xs={12}
          >
            <Button
              style={loginButton}
              className="sendmessage loginbutton"
              type="submit"
              onClick={sendHandler}
              block
            >
              ارسال پیام
            </Button>
          </Col>
        </div>
        <Col xl={3} md={3} sm={12} xs={12} className="socialicon">
          <Col xl={12} md={12} sm={12} xs={12}>
            <p>
              <img src={phoneIcon} alt={"phoneIcon"} />
            </p>
            <p>
              <span>021-44442131</span>
            </p>
            <p>
              <span>021-44442131</span>
            </p>
          </Col>

          <Col xl={12} md={12} sm={12} xs={12}>
            <p>
              <img src={emailIcon} alt={"emailIcon"} />
            </p>
            <p className="mail">
              <span>info@Hezare3.com</span>
            </p>
          </Col>

          <Col xl={12} md={12} sm={12} xs={12}>
            <p>
              <img src={placeholder} alt={"placehilder"} />
            </p>
            <p className="address">
              <span>میدان پونک-ساختمان پنجم-طبقه 6ام</span>
            </p>
          </Col>
          <div className="fontawe col-xl-12 col-md-12 col-sm-12 col-xs-12">
            <Link to="/" className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="/" className="linkdin">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="/" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="/" className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contatus;
