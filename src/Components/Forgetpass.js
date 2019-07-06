import React, {useState, useEffect} from "react";
import {Container, Button, Col, Form} from "react-bootstrap";
import {
    ToastsStore,
    ToastsContainer,
    ToastsContainerPosition
} from "react-toasts";
import $ from "jquery";

const Forgetpass = () => {
    const [step, setStep] = useState(1);
    const [firstStep, setFirstStep] = useState({display: "block"});
    const [secondStep, setSecondStep] = useState({
        display: "none",
        marginTop: "60px"
    });
    const [thirdStep, setThirdStep] = useState({
        display: "none",
        marginTop: "60px"
    });
    const [fourthStep, setFourthStep] = useState({
        display: "none",
        marginTop: "60px"
    });
    useEffect(() => {
        switch (step) {
            case 1:
                setFirstStep({display: "block"});
                setSecondStep({display: "none"});
                setThirdStep({display: "none"});
                setFourthStep({display: "none"});

                break;
            case 2:
                setFirstStep({display: "none"});
                setSecondStep({display: "block"});
                setThirdStep({display: "none"});
                setFourthStep({display: "none"});
                break;
            case 3:
                setFirstStep({display: "none"});
                setSecondStep({display: "none"});
                setThirdStep({display: "block"});
                setFourthStep({display: "none"});
                break;
            case 4:
                setFirstStep({display: "none"});
                setSecondStep({display: "none"});
                setThirdStep({display: "none"});
                setFourthStep({display: "block"});
                break;
        }
    }, [step]);
    //////////////////// FIRST STEP //////////////////////
    // states

    const [mobile, setMobile] = useState("");

    const [RegisterFirst, setRegisterFirstStyle] = useState({
        backgroundColor: "#e1e1e1"
    });

    // check conditions and enable/disable register button
    const checkRegisterFirstButton = () => {
        if (mobile.length === 11) {
            setRegisterFirstStyle({backgroundColor: "#1976d2"});
            $("#rfbutton").removeAttr("disabled");
        } else {
            setRegisterFirstStyle({backgroundColor: "#e1e1e1"});
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
    const loginfirstStep = () => {
        setStep(2);

    };

    //////////////////// SECOND STEP //////////////////////
    // states
    const [activSecond, setactiveSecondStyle] = useState({
        color: "#e1e1e1"
    });
    const [active, setActive] = useState("");
    const [min, setMin] = useState(1)
    const [second, setSecond] = useState(60)
    const [RegisterSecond, setRegisterSecondStyle] = useState({
        backgroundColor: "#e1e1e1"
    });
    useEffect(() => {
        setMin(0)
        setInterval(() => {
            while (second > 60) {
                setSecond(second - 1)

            }
        }, 1000)
    }, [second])
    // check conditions and enable/disable register button
    const checkRegisterSecondButton = () => {
        if (active) {
            setRegisterSecondStyle({backgroundColor: "#1976d2"});
            $("#rfbutton").removeAttr("disabled");
        } else {
            setRegisterSecondStyle({backgroundColor: "#e1e1e1"});
            $("#rfbutton").attr("disabled", "disabled");
        }
    };
    useEffect(() => {
        let interval = null;
        if (second < 61 && second > 0 && step === 2) {
            interval = setInterval(() => {
                setSecond(second => second - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [second, step]);

    // change mobile value when changed
    const handlerActiveChange = e => {
        setActive(e.target.value);
    };
    // checkRegisterSecondButton function after mobile value changed
    useEffect(() => {
        checkRegisterSecondButton();
    }, [active]);

    // checkRegisterSecondButton function after rules value changed
    const loginSecondStep = () => {
        setStep(3);
    };
    const changeStep = () => {
        setStep(1)
    }

    //////////////////// THIRD STEP //////////////////////

    const [newpass, setnewpass] = useState("");
    const [newpassr, setnewpassr] = useState("");
    const [RegisterThird, setRegisterThirdStyle] = useState({
        backgroundColor: "#e1e1e1"
    });
    // check conditions and enable/disable register button
    const checkRegisteThirdButton = () => {
        if (newpass === newpassr) {
            setRegisterThirdStyle({backgroundColor: "#1976d2"});
            $("#rtbutton").removeAttr("disabled");
        } else {
            setRegisterThirdStyle({backgroundColor: "#e1e1e1"});
            $("#rtbutton").attr("disabled", "disabled");
        }
    };

    useEffect(() => {
        checkRegisteThirdButton();
    }, [newpass]);

    useEffect(() => {
        checkRegisteThirdButton();
    }, [newpassr]);

    // checkRegisterThirdButton function after rules value changed
    const loginThirdStep = () => {
        setStep(4);
    };
    const handlenewpass = e => {
        setnewpass(e.target.value);
    };
    const handlenewpassr = e => {
        setnewpassr(e.target.value);
    };

    //////////////////// FOURTH STEP //////////////////////
    // states
    const [RegisterFourth, setRegisterFourthStyle] = useState({
        backgroundColor: "#1976d2"
    });
    // check conditions and enable/disable register button
    const checkRegisterThirdButton = () => {
        /////from server
    };

    // checkRegisterFourthButton function after rules value changed
    const loginFourthStep = () => {
        setStep(5);
    };

    return (
        <React.Fragment>
            <div className="loginpage">
                <Container>
                    <Col
                        xl={{span: 4, offset: 4}}
                        lg={{span: 4, offset: 4}}
                        md={{span: 4, offset: 4}}
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
                                <Form.Group controlId="formBasicEmail">
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
                                <Form.Group controlId="formBasicEmail">
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
                                    <p id="timer">0{min}:{second}</p>
                                    <p className="retuen"><a className="rightreg" style={activSecond}>ارسال مجدد کد
                                        فعالسازی</a><a onClick={changeStep} className="leftreg">اصلاح شماره تماس</a></p>
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
                                <p className="textlogin">کلمه عبور جدید</p>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>کلمه عبور جدید</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        onChange={handlenewpass}
                                        vlaue={newpass}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>تکرار کلمه عبور جدید</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        onChange={handlenewpassr}
                                        vlaue={newpassr}
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    type="submit"
                                    id="rtbutton"
                                    style={RegisterThird}
                                    onClick={loginThirdStep}
                                    className="loginbutton"
                                >
                                    ورود
                                </Button>
                            </div>
                            <div style={fourthStep} className="textthird">
                                <p>کلمه عبور جدید شما با موفقیت ثبت شد</p>
                                <p>دوباره وارد شوید</p>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    type="submit"
                                    id="rfobutton"
                                    style={RegisterFourth}
                                    onClick={loginFourthStep}
                                    className="loginbutton"
                                >
                                    ورود
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
