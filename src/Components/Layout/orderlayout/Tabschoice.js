import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Col,
  Nav,
  Row,
  Tab,
  TabContainer,
  Image,
  Card
} from "react-bootstrap";
import adddoc from "../../../images/add-documents.svg";
import delitype from "../../../images/deliverytype.svg";
import acceptsign from "../../../images/acceptsign.svg";
import tranlatelang from "../../../images/translatellang.svg";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import axios from "axios";
import * as Cookies from "js-cookie";

const Tabschoice = ({ optiontype,onClicks, step, onChanges }) => {
  const types= Cookies.get('types');
  const [typedoc, changetypedoc] = useState({
    type: "شناسنامه",
    countchoose: "۱",
    accept: "۱",
    extradoc: "۰",
    deliverytype: "عادی"
  });
  const [languages, setLang] = useState([]);
  const [validation, setVal] = useState([]);
  const [count, setcount] = useState(0);
  const [delivery, setDelivery] = useState([
    { type: "automatic", name: "عادی", id: 1, checkin: false, price: 20000 },
    { type: "express", name: "فوری", id: 2, checkin: false, price: 40000 }
  ]);
  const [styleone, setStyleone] = useState({
    borderColor: "#e1e1e1",
    backgroundColor: "#fafafa",
    color: "#e1e1e1",
    border: "0px"
  });
  
  const lnaguage = languages.map((item, index) => {
    const langhandle = () => {
      
      var lng = [...languages];
      lng[index].checkin = !lng[index].checkin;
      setLang(lng);
      
    };

    return (
      <Row>
        <Col sm={8}>{item.name}</Col>
        <Col sm={4}>
          <p className="stylenumprice">
            {item.price} <span className="styletoman"> تومان</span>
            <span>
              <Form.Check
                onChange={langhandle}
                value={item.value}
                type="checkbox"
                id="langu"
                className="langu"
                checked={item.checkin? "checked": ""}
              />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const valid = validation.map((item, index) => {
    var val = [...validation];
    if(val[index].needed===1){
      val[index].checkin=true;
    
    }
    const validhandle = () => {
      if(val[index].needed===0)
      {
      val[index].checkin = !val[index].checkin;
      
      setVal(val);
      }
     
    };
    return (
      <Row key={item.id}>
        <Col sm={8}>{item.name}</Col>
        <Col sm={4}>
          <p className="stylenumprice">
            {item.price} <span className="styletoman"> تومان</span>
            <span>
              <Form.Check
                className="checkbox-container checkmark"
                type="checkbox"
                onChange={validhandle}
                id={item.id}
                checked={item.needed===1 ?"checked ":item.checkin? "checked": ""}
              />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const typedelivery = delivery.map((item, index) => {
    const deliveryhandle = () => {
      var del = [...delivery];
      del[index].checkin = !del[index].checkin;
      setDelivery(del);
    };
    return (
      <Row>
        <Col sm={6}>{item.name}</Col>
        <Col sm={6}>
          <p>
            <span>
              <Form.Check
                type="radio"
                name="deliver"
                onChange={deliveryhandle}
                id={item.id}
                checked={item.checkin? "checked ": ""}
              />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const handleSubmit = () => {
    let blang = false;
    let bval = false;
    let bdel = false;
    for (let x in languages) {
      if (languages[x].checkin) {
        blang = true;
        break;
      }
    }

    for (let x in validation) {
      if (validation[x].checkin) {
        bval = true;

        break;
      }
    }
    for (let x in delivery) {
      if (delivery[x].checkin) {
        bdel = true;

        break;
      }
    }
    if (blang && bval && bdel) {
      onClicks();
    } else if (blang === false) {
      ToastsStore.warning("لطفا یک زبان برای ترجمه انتخاب کنید");
    } else if (bval === false) {
      ToastsStore.warning("لطفا  نوع تاییدیه را انتخاب کنید");
    } else if (bdel === false) {
      ToastsStore.warning("لطفا نحوه ارسال  را  برای ترجمه انتخاب کنید");
    }
  };
  const changeButton = () => {
    let blang = false;
    let bval = false;
    let bdel = false;
    for (let x in languages) {
      if (languages[x].checkin) {
        blang = true;

        break;
      }
    }
    for (let x in validation) {
      if (validation[x].checkin) {
        bval = true;

        break;
      }
    }
    for (let x in delivery) {
      if (delivery[x].checkin) {
        bdel = true;

        break;
      }
    }
    if (blang && bval && bdel) {
      setStyleone({
        backgroundColor: "#1976d2",
        borderRadius: "5px",
        boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)",
        color: "#fff"
      });
    } else if (blang === false) {
      setStyleone({
        borderColor: "#e1e1e1",
        backgroundColor: "#fafafa",
        color: "#e1e1e1",
        border: "0px"
      });
    } else if (bval === false) {
      setStyleone({
        borderColor: "#e1e1e1",
        backgroundColor: "#fafafa",
        color: "#e1e1e1",
        border: "0px"
      });
    } else if (bdel === false) {
      setStyleone({
        borderColor: "#e1e1e1",
        backgroundColor: "#fafafa",
        color: "#e1e1e1",
        border: "0px"
      });
    }
  };
  const languagenum = () => {
    let w = 0;
    for (let x in languages) {
      if (languages[x].checkin) {
        w++;
      }
    }
    return w;
  };
  const acceptnum = () => {
    let w = 0;
    for (let x in validation) {
      if (validation[x].checkin) {
        w++;
      }
    }
    return w;
  };

  const deliverynum = () => {
    let z;
    for (let x in delivery) {
      if (delivery[x].checkin) {
        z = delivery[x].name;
      }
    }
    return z;
  };
  useEffect(() => {
    changeButton();
    Cookies.set("languages",languages, {expires: 7,path: "/"});
    // console.log(languages);
    

  }, [languages]);
  useEffect(() => {
    Cookies.set("validation", validation, {expires: 7,path: "/"});
    changeButton();
  }, [validation]);
  useEffect(() => {
   Cookies.set("delivery", delivery, {expires: 7,path: "/"});
    changeButton();
  }, [delivery]);


  useEffect(()=>{
    if(Cookies.get("delivery") !== null) {
     
      setDelivery(JSON.parse(Cookies.get("delivery")))
     
    }
  },[])
 

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

    if (count > 0) {
      return (count + 1) * (sum + sumv + sumd);
    } else {
      return sum + sumv + sumd;
    }
  };
  useEffect(()=>{
    Cookies.set('languagenum',languagenum(),{ expires: 7, path: '' })

  },[languagenum])
  useEffect(()=>{
    Cookies.set('acceptnum',acceptnum(),{ expires: 7, path: '' })

  },[acceptnum])

  useEffect(()=>{
    Cookies.set('count',count,{ expires: 7, path: '' })

  },[count])
  useEffect(()=>{
    Cookies.set('deliverynum',deliverynum(),{ expires: 7, path: '' })

  },[deliverynum])



  useEffect(() => {
    axios
    .get(
        "http://hezare3vom.ratechcompany.com/api/front/get_products_details?product_id="+types,
       
        {
            headers: {"Content-Type": "application/json"}
        }
    )
    .then(function (response) {
        if (response.data.success) {
            if (Cookies.get("languages") !== null) {
              setLang(JSON.parse(Cookies.get("languages")))
           
             }else{
              setLang(response.data.product_languages);
            }

            if(Cookies.get("validation") !== null) {
     
              setVal(JSON.parse(Cookies.get("validation")))
             
             } else {
              setVal(response.data.product_certificates);
             }
            
           

        } else {
            ToastsStore.error(response.data.error);
            
        }
    })


}, [types]);

console.log(validation)
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
          <Card className="documenttype">
            <Card.Header>نوع مدرک ترجمه</Card.Header>
            <Card.Body>
              <Card.Title>{typedoc.type}</Card.Title>
              <Card.Text>
                زبان ترجمه
                <span>
                  {languagenum()}
                 
                  مورد
                </span>
              </Card.Text>
              <Card.Text>
                مهرو تاییدات<span>{acceptnum()} مورد</span>
              </Card.Text>
              <Card.Text>
                نسخه اضافه<span>{count} مورد</span>
              </Card.Text>
              <Card.Text>
                نوع تحویل<span>{deliverynum()}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{ borderRadius: "1rem", height: "100%" }}
        >
          <TabContainer
            id="left-tabs-example"
            //  onChange={changeButton}
            defaultActiveKey="first"
          >
            <div className="row bordertab">
              <Col className="tabsorder" xl={3} lg={3} md={3} sm={3}>
                <Nav
                  variant="pills"
                  className="flex-column tabsdet hvr-sweep-to-bottom"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Image src={tranlatelang} />
                      زبان ترجمه
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Image src={acceptsign} />
                      مهرو تاییدات
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Image src={adddoc} />
                      نسخه اضافه
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      <Image src={delitype} /> نوع تحویل
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col
                className="tabsordercontent"
                style={{ minWidth: "300px",width:"300px" }}
                xl={9}
                lg={9}
                md={9}
                sm={9}
              >
                <Tab.Content>
                  <Tab.Pane className="tabcheckbox" eventKey="first">
                    {lnaguage}
                  </Tab.Pane>
                  <Tab.Pane className="tabcheckbox" eventKey="second">
                    {valid}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p
                      style={{
                        color: "#454f63",
                        textAlign: "center",
                        fontSize: "1rem",
                        paddingTop: "2rem"
                      }}
                      className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12"
                    >
                      تعداد نسخه اضافه
                    </p>
                    <div className="counter">
                      <div className="incre col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12">
                        <Button
                          className="increase"
                          onClick={() => setcount(prevCount => prevCount + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text col-xl-8 col-lg-8 col-md-8 col-sm-12  col-xs-12">
                        {count}
                      </div>
                      <div className="dec col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12">
                        <Button
                          className="decrease col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12"
                          onClick={() => {
                            if (count <= 0) setcount(0);
                            else {
                              setcount(prevCount => prevCount - 1);
                            }
                          }}
                        >
                          -
                        </Button>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tabcheckbox"
                    style={{ textAlign: "center" }}
                    eventKey="fourth"
                  >
                    <p
                      style={{
                        color: "#454f63",
                        textAlign: "center",
                        fontSize: "1rem",
                        paddingTop: "2rem"
                      }}
                      className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12"
                    >
                      زمان تحویل ترجمه
                    </p>
                    {typedelivery}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
          </TabContainer>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
          <ToastsContainer
            position={ToastsContainerPosition.TOP_CENTER}
            store={ToastsStore}
          />

          <Button
            style={{ margin: "1rem 0", fontSize: ".8rem", fontFamily: "fanum" }}
            variant="primary"
            size="lg"
          >
            <p>مجموع هزینه ها</p>
            <p>{sumValue()} تومان</p>
          </Button>
          <Button
            style={styleone}
            id="add1"
            onClick={handleSubmit}
            type="submit"
          >
            ادامه سفارش
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Tabschoice;
