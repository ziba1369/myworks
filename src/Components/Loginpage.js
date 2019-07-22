import React, {useState, useEffect} from "react";
import {Container, Button, Col, Form} from "react-bootstrap";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import $ from "jquery";
import {Link} from "react-router-dom";
import axios from "axios";
import * as Cookies from "js-cookie";
import Footer from './Layout/Footer';
const Login = props => {
    const [mobile, setMobile] = useState("");
    const [pass, setPass] = useState("");
    const [loginButton, setLoginButtonStyle] = useState({
        backgroundColor: "#e1e1e1"
    });

    const checkLoginButton = () => {
        const phoneno = /^(9|09)(12|19|35|36|37|38|39|32|21|03|01)\d{7}$/;
        if (mobile.match(phoneno) && pass.length > 1) {
            setLoginButtonStyle({backgroundColor: "#1976d2"});
            $(".loginbutton").removeAttr("disabled");
        } else {
            setLoginButtonStyle({backgroundColor: "#e1e1e1"});
            $(".loginbutton").attr("disabled", "disabled");
        }
    };

    const handleName = e => {
        setMobile(e.target.value);
    };

    const handlepassword = e => {
        setPass(e.target.value);
    };
    // checkLoginButton function after mobile value changed
    useEffect(() => {
        checkLoginButton();
    }, [mobile]);

    // checkLoginButton function after password value changed
    useEffect(() => {
        checkLoginButton();
    }, [pass]);

    const loginbutton = () => {

        const checkbox = document.getElementById('checkbox');
        const login = {
            mobile: mobile,
            password: pass
        };
        axios
            .post("http://hezare3vom.ratechcompany.com/api/login_app", login, {
                headers: {"Content-Type": "application/json"}
            })
            .then(function (response) {
                //console.log(response.data.success);
                if (response.data.success) {
                    if (checkbox.checked) {
                        Cookies.set("token", response.data.token, {path: "/", expires: 7});
                        Cookies.set("name", response.data.customer_name, {path: "/", expires: 7});
                        Cookies.set("family", response.data.customer_family, {path: "/", expires: 7});
                        Cookies.set("customer_img", response.data.customer_img, {path: "/", expires: 7});
                    } else {
                        Cookies.set("token", response.data.token, {path: "/", expires: 1});
                        Cookies.set("name", response.data.customer_name, {path: "/", expires: 1});
                        Cookies.set("family", response.data.customer_family, {path: "/", expires: 1});
                        Cookies.set("customer_img", response.data.customer_img, {path: "/", expires: 1});
                    }
                    props.history.push("/");
                    window.location.reload();
                } else {
                    ToastsStore.error(response.data.error);
                }
            })
            .catch(function (error) {
                ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
            });

    };


    return (

        <div className="loginpage">
            <Container>
                <Col
                    xl={{span: 4, offset: 4}}
                    lg={{span: 4, offset: 4}}
                    md={{span: 4, offset: 4}}
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
                                vlaue={mobile}
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
                            <Form.Check

                                type="checkbox"
                                id='checkbox'
                                label="مرابه خاطر بسپارید"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            size="lg"
                            style={loginButton}
                            onClick={loginbutton}
                            className="loginbutton"
                        >
                            ورود
                        </Button>
                        <p className="forgetpass">
                            <Link to="/forgetpass">رمز عبور را فراموش کرده اید</Link>
                        </p>
                        <hr/>
                        <p className="activesys">
                            هنوز در سیستم فعال نشدید
                            <Link to="/register">
                                <span>عضویت</span>
                            </Link>
                        </p>
                    </Form>
                </Col>

            </Container>
            <Footer/>
        </div>


    );
};
export default Login;
