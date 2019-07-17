import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Breadcrumb,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabschoice from "./Layout/orderlayout/Tabschoice";
import Photoupload from "./Layout/orderlayout/Photoupload";
import Confirmorder from "./Layout/orderlayout/Confirmorder";
import Footer from "./Layout/Footer";
import shenasnameh from '../images/Shenasname_1.jpg';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import axios from "axios";
const Order = props => {
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
   const [madarek,setMadarek]=useState(
       {
           product_img:shenasnameh,
           product_description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
           product_feauures:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        }
   );
  const increment = () => {
    setStep(step + 1);
  };

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
          border: "2px solid #e1e1e1",
          color: "#495267"
        });

        break;

      default:
        break;
    }
  }, [step]);

  const handlerType = () => {
    if (step < 1) {
      return step;
    }

    setStep(1);
  };
  const handlerUpload = () => {
    if (step < 2) {
      return step;
    }
    setStep(2);
  };
  const handlerConfirm = () => {
    if (step < 3) {
      return step;
    }
    setStep(3);
  };
  const handlerPay = () => {
    if (step < 4) {
      return step;
    }
    setStep(4);
  };
  useEffect(()=>{

    axios
    .get(
        "http://hezare3vom.ratechcompany.com/api/front/get_products_details?product_id="+Cookies.get('types'),
        
        {
            headers: {"Content-Type": "application/json"}
        }
    )
    .then(function (response) {
      // console.log(response.data)
        if (response.data.success) {
         //setMadarek(response.data);
            // console.log('true')
           

        } else {
            ToastsStore.error(response.data.error);
            
        }
    })
    .catch(function (error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
    });
}, [Cookies.get('types')])

   
  return (
    <React.Fragment>
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
                <Link to="/services/all">خدمات ترجمه</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active href={null}>
              {Cookies.get('title')}
              </Breadcrumb.Item>
            </Breadcrumb>
            
          </Col>
        </Row>
        <Row>
        <Col
         
         xl={8}
         lg={8}
         md={8}
         sm={12}
         xs={12}
       >
           <div>
           <p className="titletype">شناسنامه</p>
            <p className="titlemadarek">توضیحات</p>
           <p className="content">{madarek.product_description}</p>
           </div>
           <div>
            <p className="titlemadarek">مزیت</p>
           <p className="content">{madarek.product_feauures}</p>
           </div>

       </Col>
         <Col
         
         xl={4}
         lg={4}
         md={4}
         sm={12}
         xs={12}
       >
         <Image className="imagemadrek" src={madarek.product_img} alt={madarek.product_img} />  
         
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
              <h5>فرآیند ثبت سفارش ترجمه</h5>
            </Col>
        <Row className="orderbuttons rtl">
          {/* <Col
            id="choosecer"
            className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
          >
            <Button style={styleone} onClick={handlerMadrak} size="lg">
              انتخاب مدرک
            </Button>
            <span style={lineone} />
          </Col> */}

          <Col
            id="kindtrans"
            className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
          >
            <Button style={styleone} onClick={handlerType} size="lg">
              نوع ترجمه
            </Button>
            <span style={lineone} />
          </Col>

          <Col
            id="upload"
            className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
          >
            <Button style={styletwo} onClick={handlerUpload} size="lg">
              آپلود مدارک
            </Button>
            <span style={linetwo} />
          </Col>

          <Col
            id="confirm"
            className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer"
          >
            <Button size="lg" style={stylethree} onClick={handlerConfirm}>
              تایید سفارش
            </Button>
            <span style={linethree} />
          </Col>
          <Col
            id="pay"
            className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 selectcer last"
          >
            <Button size="lg" onClick={handlerPay}>
              پرداخت
            </Button>
          </Col>
        </Row>

        <Row
          className="rtl"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          {/* {step === 1 && <ServicesGroup onClicks={increment} count={step} />} */}
          {step === 1 && <Tabschoice onClicks={increment} count={step} />}
          {step === 2 && <Photoupload onClicks={increment} count={step} />}
          {step === 3 && <Confirmorder onClicks={increment} count={step} />}
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Order;
