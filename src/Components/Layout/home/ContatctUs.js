import React,{useState,useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import phoneIcon from '../../../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../../../images/email.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
  } from "react-toasts";
const Contatus = (props) => {
const[name,setName]=useState("");
const[tel,setTell]=useState("");
const[email,setEmail]=useState("");
const[issue,setIssue]=useState("");
const[message,setMessage]=useState("");
const [loginButton, setLoginButtonStyle] = useState({backgroundColor: "#e1e1e1"})
// const validateEmail=(email)=> {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }
useEffect(()=>{
    document.querySelector("#phone").addEventListener("keypress", function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  },[tel]);
})
const checkLoginButton = () => {
    const phoneno=/^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
    const mailno=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.length >0 && tel.match(phoneno) && email.match(mailno) && issue.length>0 && message.length>0) {
        setLoginButtonStyle({backgroundColor: "#1976d2"})
        $(".loginbutton").removeAttr("disabled");
    }
    else {
        setLoginButtonStyle({backgroundColor: "#e1e1e1"})
        $(".loginbutton").attr("disabled", "disabled");
    }
     

}
const handleName=(e)=>{
 setName(e.target.value)
}
const handleTell=(e)=>{
    setTell(e.target.value);
  
   }
   const handleEmail=(e)=>{
        setEmail(e.target.value);

   }
   const handleIssue=(e)=>{
    setIssue(e.target.value)
   }
   const handleMessage=(e)=>{
    setMessage(e.target.value)
   }
   useEffect(()=>{
        checkLoginButton()
  },
  [name])
  useEffect(()=>{

    checkLoginButton()
  },
  [tel])
  
  useEffect((e)=>{
    checkLoginButton()

  },
  [email])
  useEffect(()=>{
    checkLoginButton()
  },[issue])
  useEffect(()=>{
    checkLoginButton()
  },[message])
  const blurEmail=(e)=>{
    const mailno=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(!(email.match(mailno)))

      ToastsStore.warning("کاربر گرامی لطفا ایمیل خود را با فرمت مناسب وارد نمایید")
    
  
    }
    const blurPhone=(e)=>{
        const phoneno=/^(9|09)(12|19|30|33|35|36|37|38|39|32|21|03|02|04|05|41|31|34|01|10|11|13|14|15|16|17|18|19|90|91|92)\d{7}$/;
        if(!(tel.match(phoneno)))
    
          ToastsStore.warning("کاربر گرامی لطفا شماره همراه خود را با فرمت مناسب وارد نمایید")
        
      
        }
const sendHandler=()=>{
    const contactUs = {
        name: name,
        tel: tel,
        email:email,
        issue:issue,
        message:message

    };
    axios.post("http://hezare3vom.ratechcompany.com/api/front/send_message", contactUs, {headers: {'Content-Type': 'application/json'}})
        .then(function (response) {
           // console.log(response.data)
            if (response.data.success) {
                props.history.push("/");
                //console.log('contactus')


            } else {
                ToastsStore.error(response.data.errmessage);
            }
        })
        // .catch(function (error) {
        //     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
        // })
}
    return (
        <React.Fragment>
  <ToastsContainer
                  position={ToastsContainerPosition.TOP_CENTER}
                  store={ToastsStore}
                />
            <Row>
                <Col xl={9} md={9} sm={12} xs={12} className="footercontent">
                    <h5 className="call titlesections">تماس با ما</h5>
                    <Row>
                        <Col xl={6} md={6} sm={12} xs={12}>
                            <Form>
                                <Form.Group>
                                    <Form.Label   >نام</Form.Label>
                                    <Form.Control onChange={handleName} size="sm" type="text" value={name}/>
                                    <Form.Label  >شماره همراه</Form.Label>
                                    <Form.Control size="sm" type="number" onBlur={blurPhone} onChange={handleTell} vlaue={tel} id="phone" name="phone"/>
                                    <Form.Label id="email">ایمیل آدرس</Form.Label>
                                    <Form.Control  onChange={handleEmail}  onBlur={blurEmail} value={email} size="sm" pattern="/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/" type="eamil"/>
                                    <Form.Label >موضوع</Form.Label>
                                    <Form.Control  onChange={handleIssue} size="sm" value={issue} type="type"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xl={6} md={6} sm={12} xs={12}>
                            <Form>
                                <Form.Label value={message}>متن پیام</Form.Label>
                                <Form.Control  onChange={handleMessage} as="textarea" rows="9"/>
                            </Form>
                        </Col>
                    </Row>
                    <Col xl={{span: 4, offset: 4}} md={{span: 4, offset: 4}} sm={12} xs={12}>
                        <Button  style={loginButton} className="sendmessage loginbutton" type="submit" onClick={sendHandler}  block>ارسال پیام</Button>
                    </Col>
                </Col>
                <Col xl={3} md={3} sm={12} xs={12} className="socialicon">
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <p><img src={phoneIcon} alt={"phoneIcon"}/></p>
                        <p><span>021-44442131</span></p>
                        <p><span>021-44442131</span></p>
                    </Col>

                    <Col xl={12} md={12} sm={12} xs={12}>
                        <p><img src={emailIcon} alt={"emailIcon"}/></p>
                        <p className="mail"><span>info@Hezare3.com</span></p>

                    </Col>
                    <Col xl={12} md={12} sm={12} xs={12} className="fontawe ">
                        <Link to="/" className="instagram"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link to="/" className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link to="/" className="twitter"><FontAwesomeIcon icon={faTwitter}/></Link>
                        <Link to="/" className="facebook"><FontAwesomeIcon icon={faFacebook}/></Link>

                    </Col>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Contatus;