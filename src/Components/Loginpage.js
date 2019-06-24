import React, { useState, useEffect } from "react";
import { Container, Button, Col, Form } from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPasss] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
     if (event) event.preventDefault();
    if (name.length<1) {
      ToastsStore.error("لطفا نام کاربری را وارد کنید");
    }
    else if(pass.length<5){
      ToastsStore.error("لطفا رمز عبور را واد کنید");
    }
      else {
      alert("ok");
    }
  };

  const handleName = e => {
    e.persist();
    setName(e.target.name);
  };

  useEffect(() => {
    handleSubmit()
  }, [name]);


  const handlepassword = e => {
    e.persist();
   setPasss(e.target.pass)
  };
  useEffect(() => {
    handleSubmit()
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
              onClick={handleSubmit}
            >
              ورود
            </Button>
            <p className="forgetpass">رمز عبور را فراموش کرده اید</p>
            <hr />
            <p className="activesys">
              هنوز در سیستم فعال نشدید<span>عضویت</span>
            </p>
          </Form>
        </Col>
      </Container>
    </div>
  );
};
export default Login;
