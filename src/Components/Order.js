import React, { useState, useEffect } from "react";
import {Container,Button,Row,Col,Breadcrumb,Image} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Tabschoice from "./Layout/orderlayout/Tabschoice";
import Photoupload from "./Layout/orderlayout/Photoupload";
import Confirmorder from "./Layout/orderlayout/Confirmorder";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import * as Cookies from "js-cookie";
import {getproductAPI,metatagAPI} from '../api/api';
import MetaTags from "react-meta-tags";
import { orderAPI } from "../api/api";
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
  ////////////////////////tabchoice/////////////////////////////////////////
  const [languages, setLang] = useState([]);
  const [validation, setVal] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [countorder, setcountorder] = useState(0);
  /////////////////////////photoupload///////////////////////////////
  const [orderFileCount, setOrderFilecount] = useState(0);
  const [photoUpload,setPhotoUpload]=useState();
  const [mettag, setMetatag] = useState({
    title: "",
    metatags: []
  });


  ////////////////////////count choosed languages/////////////////////////////////
  //eslint-disable-next-line
  const languagenum = () => {
    let w = 0;
    for (let x in languages) {
      if (languages[x].checkin) {
        w++;
      }
    }
    return w;
  };
  ////////////////////////count choosed certificate/////////////////////////////////
  //eslint-disable-next-line
  const acceptnum = () => {
    let w = 0;
    for (let x in validation) {
      if (validation[x].checkin) {
        w++;
      }
    }
    return w;
  };
  ////////////////////////count choosed certificate/////////////////////////////////
  //eslint-disable-next-line
  const deliverynum = () => {
    let z;
    for (let x in delivery) {
      if (delivery[x].checkin) {
        z = delivery[x].name;
      }
    }
    return z;
  };
    ////////////////////////sum all vlaue of orders/////////////////////////////////
  //eslint-disable-next-line
  const sumValue = () => {
    let sumd = 0;
    let sumv = 0;
    let sum = 0;
    for (let x in languages) {
      if (languages[x].checkin) {
        sum = sum + parseInt(languages[x].price);
      }
    }
    for (let x in validation) {
      if (validation[x].checkin) {
        sumv = sumv + parseInt(validation[x].price);
      }
    }
    for (let x in delivery) {
      if (delivery[x].checkin) {
        sumd = sumd + parseInt(delivery[x].price);
      }
    }

    if (countorder > 0) {
      return (countorder + 1) * (sum + sumv + sumd);
    } else {
      return sum + sumv + sumd;
    }
  };

  const sendData = () => {
    console.log('aaaaaa')
    ////////////////////////send choose languages to server /////////////////////////////////
    const orderlanguages = languages;
    const order_lang = orderlanguages.filter(item => item.checkin === true);
    const order_languages = order_lang.map(item => {
      return (
        item.name.split(" به ")[0] +
        "|" +
        item.name.split(" به ")[1] +
        "|" +
        item.price
      );
    });
    ////////////////////////send choose certificate to server /////////////////////////////////
    const orderValidation = validation;
    const order_cert = orderValidation.filter(item => item.checkin === true);
    const order_certificate = order_cert.map(item => {
      return item.name + "," + item.price;
    });
    ////////////////////////send choose deliver to server /////////////////////////////////
    const translate_type = delivery;
    const deliver = translate_type.filter(item => item.checkin === true);
    const deliverytype = deliver.map(item => {
      return item.type;
    });
    const deliverypr = translate_type.filter(item => item.checkin === true);
    const deliveryprice = deliverypr.map(item => {
      return item.price;
    });

    ////////////////////////set items to send server /////////////////////////////////

    const formDataorder = new FormData();

    formDataorder.append("customer_token", Cookies.get("token"));
    formDataorder.append("order_name", Cookies.get("title"));
    formDataorder.append("customer_description", "");
    formDataorder.append("order_type", "normal");
    formDataorder.append("translate_type", deliverytype[0]);
    formDataorder.append("page_count", 0);
    formDataorder.append("copy_count", countorder);
    formDataorder.append("weight_added_version", 0);
    formDataorder.append("normal_price", deliveryprice[0]);
    formDataorder.append("fast_price", deliveryprice[0]);
    formDataorder.append("total_price", sumValue());
    formDataorder.append("need_certificate", 0);
    formDataorder.append("order_file_count", orderFileCount);
    console.log(photoUpload !== undefined);
    if (photoUpload !== undefined) {
      photoUpload.map((item, index) => {
        formDataorder.append("order_file_" + (index+1), photoUpload[0]);
      });
    }
    formDataorder.append("order_languages", order_languages);
    formDataorder.append("order_certificate", order_certificate);

    ////////////////////////send data to server /////////////////////////////////
    orderAPI(formDataorder, response => {
      console.log(response.data,'aaww')
      if (response.data.success) {
        Cookies.set("order_code", response.data.order_code, {
          path: "/",
          expires: 7
        });
        setStep(4);
      } else {
        ToastsStore.error(response.data.error);
      }
    });
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
  //////////////use effect get data type get id product from server////////////////////////
  useEffect(() => {
    getproductAPI(Cookies.get("types"),(response)=>{
      if (response.data.success) {
        setMadarek(response.data)
        
        setLang(response.data.product_languages);
          
        setVal(response.data.product_certificates);
    
        setDelivery([
          {
            type: "normal",
            name: "عادی",
            id: 1,
            checkin: true,
            price: response.data.product_normal_price
          },
          {
            type: "fast",
            name: "فوری",
            id: 2,
            checkin: false,
            price: response.data.product_fast_price
          }
        ]);
      } else {
        ToastsStore.error(response.data.error);
      }
    })
  
  }, [Cookies.get("types")]);

  /////////////////metatag///
  useEffect(()=>{
    metatagAPI(props.match.params.name, (response) => {
      console.log(response);
      if (response.data.success) {
        setMetatag({
          title: response.data.title,
          metatags: response.data.metatags
        });
      } else {
        ToastsStore.error(response.data.error);
      }
    });
  },[])
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
        <MetaTags>
        <title>{mettag.title}</title>
        {mettag.metatags.map(i => {
          if(mettag.metatags.name)
          {return (
              <meta name={i.name} content={i.content} /> 
          );}
          else if(mettag.metatags.property)
          {return (
              <meta property={i.property} content={i.content} />
          );}
        })}
      </MetaTags>
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
                  {Cookies.get("title")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div>
                <p className="titletype">{Cookies.get("title")}</p>
                <p className="titlemadarek">توضیحات</p>
                <p className="content">{madarek.product_description}</p>
              </div>
              <div>
                <p className="titlemadarek">مزیت</p>
                <p className="content">{madarek.product_feauures}</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <Image
                className="imagemadrek"
                src={madarek.product_img}
                alt={madarek.product_img}
              />
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
            {step === 1 && <Tabschoice sumValue={sumValue} languagenum={languagenum} acceptnum={acceptnum} deliverynum={deliverynum} onClicks={()=>setStep(2)} count={step} languages={languages} setLang={(languagesdata)=>setLang(languagesdata)} validation={validation} setVal={(valdata)=>setVal(valdata)} delivery={delivery} setDelivery={(deldata)=>setDelivery(deldata)} countorder={countorder} setcountorder={(countorder)=>{setcountorder(countorder)}} />}
            {step === 2 && <Photoupload sumValue={sumValue} languagenum={languagenum} acceptnum={acceptnum} deliverynum={deliverynum} onClicks={()=>setStep(3)} count={step} languages={languages} setLang={(languagesdata)=>setLang(languagesdata)} validation={validation} setVal={(valdata)=>setVal(valdata)} delivery={delivery} setDelivery={(deldata)=>setDelivery(deldata)} countorder={countorder} setcountorder={(countorder)=>{setcountorder(countorder)}} orderFileCount={orderFileCount} setOrderFilecount={(orderfile)=>setOrderFilecount(orderfile)} photoUpload={photoUpload} setPhotoUpload={(photo)=>setPhotoUpload(photo)} />}
            {step === 3 && <Confirmorder sumValue={sumValue} languagenum={languagenum} acceptnum={acceptnum} deliverynum={deliverynum} onClicks={()=>setStep(4)} count={step} sendDat={sendData} languages={languages} setLang={(languagesdata)=>setLang(languagesdata)} validation={validation} setVal={(valdata)=>setVal(valdata)} delivery={delivery} setDelivery={(deldata)=>setDelivery(deldata)} countorder={countorder} setcountorder={(countorder)=>{setcountorder(countorder)}} orderFileCount={orderFileCount} setOrderFilecount={(orderfile)=>setOrderFilecount(orderfile)} photoUpload={photoUpload} setPhotoUpload={(photo)=>setPhotoUpload(photo)}  />}
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
};

export default Order;
