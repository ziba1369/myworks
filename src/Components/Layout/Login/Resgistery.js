import React, { useState, useEffect } from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import {
  ToastsStore,
  ToastsContainer,
  ToastsContainerPosition
} from "react-toasts";
import $ from "jquery";
import axios from "axios";
import * as Cookies from "js-cookie";
const Forgetpass = () => {
  const [step, setStep] = useState(1);
  const [firstStep, setFirstStep] = useState({ display: "block" });

  const [secondStep, setSecondStep] = useState({
    display: "none",
    marginTop: "60px"
  });
  const [thirdStep, setThirdStep] = useState({
    display: "none",
    marginTop: "60px"
  });

  useEffect(() => {
    switch (step) {
      case 1:
        setFirstStep({ display: "block" });
        setSecondStep({ display: "none" });
        setThirdStep({ display: "none" });

        break;
      case 2:
        setFirstStep({ display: "none" });
        setSecondStep({ display: "block" });
        setThirdStep({ display: "none" });

        break;
      case 3:
        setFirstStep({ display: "none" });
        setSecondStep({ display: "none" });
        setThirdStep({ display: "block" });

        break;
      default:
        break;
    }
  }, [step]);
  //////////////////// FIRST STEP //////////////////////
  const [mobile, setMobile] = useState("");
  const [vertification, setVertification] = useState("");
  const [RegisterFirst, setRegisterFirstStyle] = useState({
    backgroundColor: "#e1e1e1"
  });
  const checkRegisterFirstButton = () => {
    if (mobile.length === 11) {
      setRegisterFirstStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterFirstStyle({ backgroundColor: "#e1e1e1" });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };

  // change mobile value when changed
  const handleMobileChange = e => {
    setMobile(e.target.value);
  };
  // checkRegisterFirstButton function after mobile value changed
  useEffect(() => {
    checkRegisterFirstButton();
  }, [mobile]);

  // checkRegisterFirstButton function after rules value changed
  const loginfirstStep = props => {
    setStep(2);

    var login = {
      mobile_number: mobile
    };
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/get_verification_code",
        login,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        console.log(response.data.success);
        if (response.data.success) {
          Cookies.set("token", response.data.code, { path: "/", expires: 7 });
          ToastsStore.success(response.data.code);
          setVertification(response.data.code);
          props.history.push("/");
        } else {
          ToastsStore.error(response.data.errmessage);
        }
      })
      .catch(function(error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
      });
  };
  //////////////////// SECOND STEP //////////////////////
  // states

  const [active, setActive] = useState("");
  // const[vertiification_code,setVertification]=useState([]);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(60);
  const [RegisterSecond, setRegisterSecondStyle] = useState({
    backgroundColor: "#e1e1e1"
  });
  const [activSecond, setactiveSecondStyle] = useState({
    color: "#e1e1e1"
  });
  const changeStep = () => {
    setStep(1);
  };
  const mobileStep = props => {
    if (second === 0) {
      setSecond(60);

      var login = {
        mobile_number: mobile
      };
      axios
        .post(
          "http://hezare3vom.ratechcompany.com/api/get_verification_code",
          login,
          { headers: { "Content-Type": "application/json" } }
        )
        .then(function(response) {
          console.log(response.data.success);
          if (response.data.success) {
            Cookies.set("token", response.data.code, { path: "/", expires: 7 });
            ToastsStore.success(response.data.code);
            setVertification(response.data.code);
            props.history.push("/");
          } else {
            ToastsStore.error(response.data.errmessage);
          }
        })
        .catch(function(error) {
          ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
        });
    }
  };

  useEffect(() => {
    let interval = null;
    if (second < 61 && second > 0 && step === 2) {
      interval = setInterval(() => {
        setSecond(second => second - 1);
        document.querySelector(".rightreg").style.color = "rgb(225, 225, 225)";
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (second === 0) {
      document.querySelector(".rightreg").style.color = "#1976d2";
    }
    return () => clearInterval(interval);
  }, [second, step]);

  // check conditions and enable/disable register button
  const checkRegisterSecondButton = () => {
    if (parseInt(active) === parseInt(vertification)) {
      setRegisterSecondStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterSecondStyle({ backgroundColor: "#e1e1e1" });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };

  // change mobile value when changed
  const handlerActiveChange = e => {
    setActive(e.target.value);
  };
  // checkRegisterFirstButton function after mobile value changed
  useEffect(() => {
    checkRegisterSecondButton();
  }, [active]);

  // checkRegisterFirstButton function after rules value changed
  const loginSecondStep = props => {
    if (parseInt(active) === parseInt(vertification)) {
      setStep(3);
    }
    console.log(active, vertification);
    var verti = {
      mobile_number: mobile,
      vertification_vode: vertification
    };
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/check_verification_code",
        verti,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        console.log(response.data.success);
        if (response.data.success) {
          Cookies.set("token", { path: "/", expires: 7 });
          ToastsStore.success(response.data.code);
          props.history.push("/");
        }
      })
      .catch(function(error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
      });
  };

  //////////////////// THIRD STEP //////////////////////

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [certi, setCertifi] = useState("");
  const [birthday, setBirthday] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ]);
  const [birthvalue, setBirthvalue] = useState("روز");
  const [birthmonth, setBirthmonth] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ]);
  const [birthmonthvalue, setBirthmonthvalue] = useState("ماه");
  const [birthyear, setBirthyear] = useState([1398]);
  const [birthyearvalue, setBirthyearvalue] = useState("سال");
  const [pass, setPass] = useState("");
  const [passr, setPassr] = useState("");
  const [RegisterThird, setRegisterThirdStyle] = useState({
    backgroundColor: "#e1e1e1"
  });

  // check conditions and enable/disable register button

  useEffect(() => {
    checkRegisterThirdButton();
  }, [certi]);

  useEffect(() => {
    checkRegisterThirdButton();
  }, [pass]);
  useEffect(() => {
    checkRegisterThirdButton();
  }, [passr]);

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
  };
  const handlePass = e => {
    setPass(e.target.value);
  };
  const handlePassr = e => {
    setPassr(e.target.value);
  };
  const checkRegisterThirdButton = () => {
    console.log(pass.length);
    if (
      name.length > 1 &&
      lastname.length > 1 &&
      certi.length === 11 &&
      pass.length > 1 &&
      passr.length > 1 &&
      pass === passr &&
      birthday &&
      birthmonth &&
      birthyear
    ) {
      setRegisterThirdStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterThirdStyle({ backgroundColor: "#e1e1e1" });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };

  const loginThirdStep = props => {
    var vertiification = {
      name: name,
      lastname: lastname,
      national_code: certi,
      mobile: mobile,
      birth_day: birthday,
      birth_month: birthmonth,
      birth_year: birthyear,
      password: pass
    };
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/sign_up_app",
        vertiification,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        if (response.data.success) {
          Cookies.set("token", { path: "/", expires: 7 });

          props.history.push("/");
        } else {
          ToastsStore.error(response.data.errmessage);
        }
      })
      .catch(function(error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
      });
  };

  ///////////////////////////////////////////
  return (
    <React.Fragment>
      <div className="registerpage">
        <Container>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            md={{ span: 4, offset: 4 }}
            sm={12}
            xs={12}
          >
            <div dir="rtl">
              <div style={firstStep}>
                <ToastsContainer
                  position={ToastsContainerPosition.TOP_CENTER}
                  store={ToastsStore}
                />
                <p className="textlogin">فراموشی کلمه عبور</p>
                <Form.Group>
                  <Form.Label>
                    شماره تلفن همراهی که با آن ثبت نام کرده اید وارد نمایید
                  </Form.Label>
                  <Form.Label>شماره همراه</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=""
                    onChange={handleMobileChange}
                    vlaue={mobile}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  id="rfbutton"
                  style={RegisterFirst}
                  onClick={loginfirstStep}
                  className="loginbutton"
                >
                  ورود
                </Button>
              </div>
              <div style={secondStep}>
                <ToastsContainer
                  position={ToastsContainerPosition.TOP_CENTER}
                  store={ToastsStore}
                />
                <p className="textlogin">فعالسازی</p>
                <Form.Group>
                  <Form.Label>
                    کد فعالسازی ارسال شده به شماره همراه را وارد کنید
                  </Form.Label>
                  <Form.Label>کد فعالسازی</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={handlerActiveChange}
                    vlaue={active}
                    required
                  />
                  <p id="timer">
                    0{min}:{second}
                  </p>
                  <p className="retuen">
                    <a
                      className="rightreg"
                      onClick={mobileStep}
                      style={activSecond}
                    >
                      ارسال مجدد کد فعالسازی
                    </a>
                    <a onClick={changeStep} className="leftreg">
                      اصلاح شماره تماس
                    </a>
                  </p>
                </Form.Group>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  id="rfbutton"
                  style={RegisterSecond}
                  onClick={loginSecondStep}
                  className="loginbutton"
                >
                  ثبت
                </Button>
              </div>
              <div style={thirdStep}>
                <ToastsContainer
                  position={ToastsContainerPosition.TOP_CENTER}
                  store={ToastsStore}
                />
                <p className="textlogin">اطلاعات شخصی</p>
                <Form.Group>
                  <Form.Label>نام </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={handleName}
                    value={name}
                    required
                  />
                  <Form.Label>نام خانوادگی</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={handleLastName}
                    value={lastname}
                    required
                  />
                  <Form.Label>کدملی</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    onChange={handleCertificate}
                    value={certi}
                    required
                  />
                  <Form.Label />
                  <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Form.Control
                        id="groups"
                        as="select"
                        type="select"
                        onChange={handleBirthday}
                        value={birthvalue}
                        name="slelect"
                        required
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
                          <option value="num">{num}</option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                  <Form.Label>کلمه عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={handlePass}
                    value={pass}
                    required
                  />
                  <Form.Label>تکرار کلمه عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={handlePassr}
                    value={passr}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  id="rfbutton"
                  style={RegisterThird}
                  onClick={loginThirdStep}
                  className="loginbutton"
                >
                  ثبت
                </Button>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Forgetpass;
