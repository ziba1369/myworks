// -----------------------------import npm-----------------------------------------
import React, { useState, useEffect } from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import {ToastsStore,ToastsContainer,ToastsContainerPosition} from "react-toasts";
import $ from "jquery";
import axios from "axios";
import * as Cookies from "js-cookie";
import Footer from "./Layout/Footer";
import NavBar from './Layout/NavBar';

const Register = props => {
  // -----------------------------define variable-----------------------------------------
  const [step, setStep] = useState(1);
  const [firstStep, setFirstStep] = useState({ display: "block" });
  const [secondStep, setSecondStep] = useState({display: "none",marginTop: "60px"});
  const [thirdStep, setThirdStep] = useState({display: "none",marginTop: "60px"});
  // -----------------------------check mobile regex----------------------------------------- 
  const mobileCheck=()=>{
  const phoneno=/^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
        if(!(mobile.match(phoneno)))
    
          ToastsStore.warning("کاربر گرامی لطفا شماره همراه خود را با فرمت مناسب وارد نمایید")
        
      
        }
   // -----------------------------check change  step -----------------------------------------

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
  const [verification, setVerification] = useState("");
  const [RegisterFirst, setRegisterFirstStyle] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    boxShadow: "unset"
  });
  
  const checkRegisterFirstButton = () => {
    const phoneno = /^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
    if (mobile.match(phoneno)) {
      setRegisterFirstStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterFirstStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };


  const checkRegisterFirstEnter = () => {
    const phoneno = /^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
    if (mobile.match(phoneno)) {
      setRegisterFirstStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
      loginfirstStep()
    } else {
      ToastsStore.warning('کاربر گرامی لطفا شماره همراه خود را با فرمت مناسب وارد نمایید')
      setRegisterFirstStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };


  // checkRegisterFirstButton function after mobile value changed
  useEffect(() => {
    checkRegisterFirstButton();
  }, [mobile]);

  // checkRegisterFirstButton function after rules value changed
  const loginfirstStep = () => {
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
        // console.log(response.data.success);
        if (response.data.success) {
          ToastsStore.success(response.data.code);
          Cookies.set("mobile", mobile, { path: "/", expires: 7 });
          setStep(2);
        } else {
          ToastsStore.error(response.data.error);
        }
      })
    
  };
  //////////////////// SECOND STEP //////////////////////
  //states

  const [active, setActive] = useState("");
  //const[vertiification_code,setVerification]=useState([]);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(60);
  const [RegisterSecond, setRegisterSecondStyle] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    boxShadow: "unset"
  });
  const [activSecond, setactiveSecondStyle] = useState({
    color: "#e1e1e1"
  });

  const mobileStep = () => {
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
          //console.log(response.data.success);
          if (response.data.success) {
            Cookies.set("token", response.data.token, {
              path: "/",
              expires: 7
            });
            ToastsStore.success(response.data.code);
            setVerification(response.data.code);
          } else {
            ToastsStore.error(response.data.error);
          }
        })
    
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

 
  // checkRegisterFirstButton function after mobile value changed
  useEffect(() => {
    checkRegisterSecondButton();
  }, [active]);

  // checkRegisterFirstButton function after rules value changed
  const loginSecondStep = () => {
    //console.log(active, verification);
    var verti = {
      mobile_number: mobile,
      verification_code: active
    };

    
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/check_verification_code",
        verti,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        // console.log(response.data);
        if (response.data.success) {
          //console.log(response.data)
          setStep(3);
         // Cookies.set("mobile",mobile, {path: "/",expires: 7});
        }else{
          ToastsStore.error("کدفعالسازی اشتباه است");
        }
      })
   
      
  };
  const checkRegisterSecondButton = () => {
    if (parseInt(active)) {
      setRegisterSecondStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterSecondStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  const checkRegisterSecondEnter = () => {
    if (parseInt(active)) {
      setRegisterSecondStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
      loginSecondStep()
    } else {
      setRegisterSecondStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  //////////////////// THIRD STEP //////////////////////

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [certi, setCertifi] = useState([]);

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
  const [birthvalue, setBirthvalue] = useState();
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
  const [birthmonthvalue, setBirthmonthvalue] = useState();
  const [birthyear, setBirthyear] = useState([]);
  const [birthyearvalue, setBirthyearvalue] = useState();
  const [pass, setPass] = useState([]);
  const [passr, setPassr] = useState([]);
  const [RegisterThird, setRegisterThirdStyle] = useState({
    backgroundColor: "#e1e1e1",
    border: "0px",
    boxShadow: "unset"
  });

  // check conditions and enable/disable register button
  const checkRegisterThirdButton = () => {

    if (
      name.length > 0 &&
      lastname.length > 0 &&
      certi.length === 10 &&
      pass.length > 1 &&
      passr.length > 1 &&
      pass === passr
    ) {
      setRegisterThirdStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
    } else {
      setRegisterThirdStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  const checkRegisterThirdEnter = () => {
    // console.log(pass.length);
    if (
      name.length > 0 &&
      lastname.length > 0 &&
      certi.length> 1 &&
      pass.length > 1 &&
      passr.length > 1 &&
      pass === passr
    ) {
      setRegisterThirdStyle({ backgroundColor: "#1976d2" });
      $("#rfbutton").removeAttr("disabled");
      loginThirdStep()

    } else {
      setRegisterThirdStyle({
        backgroundColor: "#e1e1e1",
        border: "0px",
        boxShadow: "0"
      });
      $("#rfbutton").attr("disabled", "disabled");
    }
  };
  useEffect(() => {
    checkRegisterThirdButton();
  }, [name]);

  useEffect(() => {
    checkRegisterThirdButton();
  }, [lastname]);

  useEffect(() => {
    checkRegisterThirdButton();
  }, [certi]);

  useEffect(() => {
    checkRegisterThirdButton();
   
  }, [birthvalue]);

  useEffect(() => {
   checkRegisterThirdButton();
  }, [birthmonthvalue]);

  useEffect(() => {
    checkRegisterThirdButton();
 }, [birthyearvalue]);

  useEffect(() => {
    checkRegisterThirdButton();
  }, [pass]);

  useEffect(() => {
    checkRegisterThirdButton();
  }, [passr]);
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

  const loginThirdStep = () => {
    var vertiification = {
      name: name,
      family: lastname,
      national_code: certi,
      mobile: mobile,
      birth_day: birthvalue,
      birth_month: birthmonthvalue,
      birth_year: birthyearvalue,
      password: pass
    };
    console.log(vertiification);
    axios
      .post(
        "http://hezare3vom.ratechcompany.com/api/sign_up_app",
        vertiification,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response) {
        console.log(response);
        if (response.data.success) {
          Cookies.set("token", response.data.token, { path: "/", expires: 7 });
          Cookies.set("name", response.data.customer_name, {
            path: "/",
            expires: 7
          });
          Cookies.set("family", response.data.customer_family, {
            path: "/",
            expires: 7
          });
          Cookies.set("customer_img", response.data.customer_img, {
            path: "/",
            expires: 7
          });
          Cookies.set("national_code",certi, {path: "/",expires: 7});
          Cookies.set("birth_month", birthmonthvalue, {path: "/",expires: 7});
          Cookies.set("birth_year", birthyearvalue, {path: "/",expires: 7});
          Cookies.set("birth_day",birthvalue, {path: "/",expires: 7});
         
          props.history.push("/");
          window.location.reload();
        } else {
          ToastsStore.error(response.data.error);
        }
      });
  };
  if (Cookies.get("token") !== undefined) {
    props.history.push("/");
  }
  useEffect(() => {
    let borders = document.getElementsByClassName("borderpass");

    if (pass !== passr && pass.length > 0 && passr.length > 0) {
      var i;
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid red";
      }
    } else if (pass === passr && pass.length > 0 && passr.length > 0) {
      var i;
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid green";
      }
    } else if (pass.length === 0 && passr.length === 0) {
      for (i = 0; i < borders.length; i++) {
        borders[i].style.border = " 1px solid #ced4da";
      }
    }
  }, [pass, passr]);
  ///////////////////////////////////////////
  useEffect(()=>{
    document.querySelector("#mobile").addEventListener("keypress", function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  })
   },[mobile])
   useEffect(()=>{
    document.querySelector("#certi").addEventListener("keypress", function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  });
   },[certi])
  return (
    <React.Fragment>
       <ToastsContainer
        position={ToastsContainerPosition.TOP_CENTER}
        store={ToastsStore}
      />
        <header>
                <NavBar/>  
             </header>
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
                <p className="textlogin">عضویت</p>
                <Form.Group>
                  <Form.Label>شماره همراه</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=""
                    onChange={e=>{setMobile(e.target.value)}}
                    id="mobile"
                    value={mobile}
                    onBlur={mobileCheck}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterFirstEnter();
                      }
                    }}
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
                 ارسال کد فعالسازی
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
                    onChange={e=>{setActive(e.target.value)}}
                    vlaue={active}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterSecondEnter();
                      }
                    }}
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
                    <a onClick={()=>{setStep(1)}} className="leftreg">
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
                    onChange={ e =>{setName(e.target.value)}}
                    value={name}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterThirdEnter();
                      }
                    }}
                    required
                  />
                  <Form.Label>نام خانوادگی</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={e => {setLastName(e.target.value)}}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterThirdEnter();
                      }
                    }}
                    value={lastname}
                    required
                  />
                  <Form.Label>کدملی</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=""
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterThirdEnter();
                      }
                    }}
                    id="certi"
                    onChange={e => {setCertifi(e.target.value)}}
                    value={certi}
                    required
                  />
                  <Form.Label />
                  <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Form.Control
                        id="day"
                        as="select"
                        type="select"
                        onChange={ e => {setBirthvalue(e.target.value)}}
                        value={birthvalue}
                        name="slelect"
                        onKeyPress={event => {
                          if (event.key === "Enter") {
                            checkRegisterThirdEnter();
                          }
                        }}
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
                        onChange={e => {setBirthmonthvalue(e.target.value)}}
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
                        onChange={e => {setBirthyearvalue(e.target.value)}}
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
                  <Form.Label>کلمه عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={e => {setPass(e.target.value)}}
                    value={pass}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterThirdEnter();
                      }
                    }}
                    className="borderpass"
                    required
                  />
                  <Form.Label>تکرار کلمه عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={ e => {setPassr(e.target.value)}}
                    className="borderpass"
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        checkRegisterThirdEnter();
                      }
                    }}
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
      <Footer />
    </React.Fragment>
  );
};

export default Register;
