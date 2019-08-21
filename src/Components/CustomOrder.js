import React, { useState, useEffect } from "react";
import {Container,Button,Row,Col,Breadcrumb,Image} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Tabschoice from "./Layout/customorderlayout/Tabschoice";
import Photoupload from "./Layout/customorderlayout/Photoupload";
import Confirmorder from "./Layout/customorderlayout/Confirmorder";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import * as Cookies from "js-cookie";
import axios from "axios";
//////////////order function////////////////////
const Order = props => {
  ///////////////set initial variable///////////////////
  const [step, setStep] = useState(1);
  const [styleone, setStyleone] = useState();
  const [styletwo, setStyletwo] = useState();
  const [stylethree, setStylethree] = useState();
  const [stylefour, setStylefour] = useState();
  const [stylefive, setStylefive] = useState();
  const [lineone, setLineone] = useState();
  const [linetwo, setLinetwo] = useState();
  const [linethree, setLinethree] = useState();
  const [linefour, setLinefour] = useState();
  const [madarek, setMadarek] = useState([]);
  const [blogviewer, setBlogviewer] = useState({ display: "block" });
  const [orderuser, setOrderuser] = useState({ display: "none" });

  //////////////////////tabchoice///////////////////////
  const [customOrder,setCustomorder]=useState({
    languages:[],
    title:'',
    des:'',
    confirm:0,
    type:0,
   
  
  })
  //////////////////////////photoupload////////////////////////////
  const [customOrderFileCount, setCustomOrderFileCount] = useState(0);
  const [customPhotoUpload,setcustomPhotoUpload]=useState();
  //////////////add step////////////////////
  const increment = () => {
    setStep(step + 1);
  };
  //////////////////////useeefect to set step///////////////
  useEffect(() => {
    switch (step) {
      case 1:
        setStyleone({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylethree({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefour({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1"
        });
        setLineone({
          display: "none"
        });
        setLinetwo({
          display: "none"
        });
        setLinethree({
          display: "none"
        });
        setLinefour({
          display: "none"
        });
        break;

      case 2:
        setStyleone({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#fafafa",
          position: "relative",
          border: "0px solid #e1e1e1",
          color: "#495267",
          boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
        });
        setStylethree({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefour({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setLineone({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinetwo({
          display: "none"
        });
        setLinethree({
          display: "none"
        });
        setLinefour({
          display: "none"
        });

        break;

      case 3:
        setStyleone({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylethree({
          backgroundColor: "#fafafa",
          position: "relative",
          border: "0px solid #e1e1e1",
          color: "#495267",
          boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
        });
        setStylefour({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setLineone({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinetwo({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinethree({
          display: "none"
        });
        setLinefour({
          display: "none"
        });
        break;

      case 4:
        setStyleone({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylethree({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylefour({
          backgroundColor: "#fafafa",
          position: "relative",
          border: "0px solid #e1e1e1",
          color: "#495267",
          boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setLineone({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinetwo({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinethree({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinefour({
          display: "none"
        });
        break;

      case 5:
        setStyleone({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylethree({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylefour({
          backgroundColor: "#aad0f4",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          position: "relative",
          border: "0px solid #e1e1e1",
          color: "#495267",
          boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
        });
        setLineone({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinetwo({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinethree({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        setLinefour({
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "50%",
          top: "50%",
          height: "0.5em",
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#1976d2",
          zIndex: "-1"
        });
        break;
      case 6:
        setStyleone({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStyletwo({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylethree({
          backgroundColor: "#aad0f4",
          borderColor: "#aad0f4",
          color: "#495267"
        });
        setStylefour({
          backgroundColor: "#aad0f4",
          border: "2px solid #e1e1e1",
          color: "#495267"
        });
        setStylefive({
          backgroundColor: "#fafafa",
          position: "relative",
          border: "0px solid #e1e1e1",
          color: "#495267",
          boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)"
        });

        break;

      default:
        break;
    }
  }, [step]);
  //////////handler go to step1////////////
  const handlerType = () => {
    if (step < 1) {
      return step;
    } else if (step === 3) {
      return step;
    }else if(step===4)
    {
      return step
    }

    setStep(1);
  };
  //////////handler go to step2////////////
  const handlerUpload = () => {
    if (step < 2) {
      return step;
    } else if (step === 3) {
      return step;
    }else if(step===4)
    {
      return step
    }
    setStep(2);
  };
  //////////handler go to step3////////////
  const handlerConfirm = () => {
    if (step < 3) {
      return step;
    }else if (step === 3) {
      return step;
    }else if(step===4)
    {
      return step
    }
    setStep(3);
  };
  //////////handler go to step4////////////
  const handlerPay = () => {
    if (step < 4) {
      return step;
    }
    setStep(4);
  };
  //////////////use effect get data type////////////////////////
  useEffect(() => {
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/app_get_languages", 
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function (response) {
        if(response.data.success)
        {
   
          let lang = [];
          for (let i in response.data.languages) {
              lang.push({
                  lang: response.data.languages[i],
                  status: 1
              })
          }
          setCustomorder({
            languages:lang,
            title:'',
            des:'',
            confirm:0,
            type:0,
          });

        }
      
      });
    
  }, []);
  //////////check user is login////////////////
  useEffect(() => {
    if (Cookies.get("token")) {
      setBlogviewer({ display: "none" });
      setOrderuser({ display: "block" });
    }
  }, []);
  if (Cookies.get("token") == null) {
    return <Redirect to="/login" />;
  } else {



   
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <Container>
          <Row>
            <Col
              className="service-breadcrumb"
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Breadcrumb className="rtl">
                <Breadcrumb.Item>
                  <Link to="/">صفحه اصلی</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/services/all">ترجمه سفارشی</Link>
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item active href={null}>
                  {Cookies.get("title")}
                </Breadcrumb.Item> */}
              </Breadcrumb>
            </Col>
          </Row>
        

          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="titlesections orderheader"
          >
            <h5>فرآیند ثبت ترجمه سفارشی</h5>
          </Col>
          <Row className="orderbuttons rtl">
           

            <Col
              id="kindtrans"
              className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
            >
              <Button style={styleone} onClick={handlerType} size="lg">
                نوع ترجمه
              </Button>
              <span style={lineone} />
            </Col>

            <Col
              id="upload"
              className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
            >
              <Button style={styletwo} onClick={handlerUpload} size="lg">
                آپلود مدارک
              </Button>
              <span style={linetwo} />
            </Col>

            <Col
              id="confirm"
              className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer"
            >
              <Button size="lg" style={stylethree} onClick={handlerConfirm}>
                تایید سفارش
              </Button>
              <span style={linethree} />
            </Col>
            <Col
              id="pay"
              className="col-xl-3 col-lg-3 col-md-3 col-xs-3 selectcer last"
            >
              <Button size="lg" style={stylefour} onClick={handlerPay}>
                پرداخت
              </Button>
            </Col>
          </Row>

          <Row
            className="rtl"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            {/* {step === 1 && <ServicesGroup onClicks={increment} count={step} />} */}
            {step === 1 && <Tabschoice onClicks={increment} count={step} data={customOrder} setdata={(customorderdata)=>setCustomorder(customorderdata)} />}
            {step === 2 && <Photoupload onClicks={increment} count={step}  data={customOrder} customPhotoUpload={customPhotoUpload} setcustomPhotoUpload={(customPhotoUpload)=>{setcustomPhotoUpload(customPhotoUpload)}} customOrderFileCount={customOrderFileCount} setCustomOrderFileCount={(customOrderFileCount)=>{setCustomOrderFileCount(customOrderFileCount)}} />}
            {step === 3 && <Confirmorder onClicks={increment} count={step} />}
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
};

export default Order;
