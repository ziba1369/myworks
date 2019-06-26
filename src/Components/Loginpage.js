import React, { useState, useEffect } from "react";
import { Container, Button, Col, Form } from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import $ from 'jquery';
import {Link} from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loginButton, setLoginButtonStyle] = useState({backgroundColor: "#e1e1e1"})

  const checkLoginButton = () => {
    if (name.length>1 && pass.length>1) {
        setLoginButtonStyle({backgroundColor: "#1976d2"})
        $(".loginbutton").removeAttr("disabled");
    } else {
        setLoginButtonStyle({backgroundColor: "#e1e1e1"})
        $(".loginbutton").attr("disabled","disabled");
    }
}



  const handleName = e => {
    setName(e.target.value);
  };


  const handlepassword = e => {
   setPass(e.target.value)
  };
     // checkLoginButton function after mobile value changed
     useEffect(() => {
      checkLoginButton()
  }, [name]);

  // checkLoginButton function after password value changed
  useEffect(() => {
      checkLoginButton()
  }, [pass]);


  return (
    <div className="loginpage">
      <Container>
        <Col
          xl={{ span: 4, offset: 4 }}
          lg={{ span: 4, offset: 4 }}
          md={{ span: 4, offset: 4 }}
          sm={12}
          xs={12}
        >
          <Form dir="rtl">
            <ToastsContainer
              position={ToastsContainerPosition.TOP_CENTER}
              store={ToastsStore}
            />
            <p className="textlogin">ورود</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={handleName}
                vlaue={name}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>کلمه عبور</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={handlepassword}
                value={pass}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="مرابه خاطر بسپارید" />
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              style={loginButton}
            
              className="loginbutton"
            >
              ورود
              
            </Button>
            <p className="forgetpass"><Link to='/forgetpass'>رمز عبور را فراموش کرده اید</Link></p>
            <hr />
            <p className="activesys">
              هنوز در سیستم فعال نشدید<Link to="/register"><span>عضویت</span></Link>
            </p>
          </Form>
        </Col>
      </Container>
    </div>
  );
};
export default Login;
