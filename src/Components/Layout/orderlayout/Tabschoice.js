import React, { useState } from "react";
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
import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
 
const Tabschoice = ({ onClicks, step, onChanges }) => {
  const [typedoc, changetypedoc] = useState({
    type: "شناسنامه",
    countchoose: "۱",
    accept: "۱",
    extradoc: "۰",
    deliverytype: "عادی"
  });
  const [languages, setLang] = useState([
    {
      id: 1,
      value: "fatoen",
      name: "فارسی به انگلیسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 2,
      value: "entofa",
      name: "انگلیسی به فارسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 3,
      value: "arotfa",
      name: "عربی به فارسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 4,
      value: "fatoen",
      name: "فارسی به عربی",
      price: "۲۶۰۰۰",
      checkin: false
    }
  ]);

  const [validation,setVal] = useState([
    {
      id: 1,
      name: "مهروتاییدیه دفترترجمی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 2,
      name: "تاییدیه وزارت امورخارجه",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 3,
      name: "تاییدیه دادگستری",
      price: "۲۶۰۰۰",
      checkin: false
    }
  ]);
  const [count, setcount] = useState(0);
  const [delivery, setDelivery] = useState([
    { type: "automatic", name: "عادی", id: 1, checkin:false },
    { type: "express", name: "فوری", id: 2 ,checkin:false}
  ]);

  const lnaguage = languages.map((item, index) => {
    const langhandle = () => {
      var lng = languages;
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
                id={item.id}
              />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const valid = validation.map((item, index) => {
    const validhandle = () => {
      var val = validation;
      val[index].checkin = !val[index].checkin;
      setVal(val);
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
              />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const typedelivery = delivery.map((item, index) => {
    const deliveryhandle = () => {
      var del = delivery;
     del[index].checkin = !del[index].checkin;
     setDelivery(del);
    };
    return (
      <Row>
        <Col sm={6}>{item.name}</Col>
        <Col sm={6}>
          <p>
            <span>
              <Form.Check type="checkbox" onChange={deliveryhandle}   id={item.id} />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const handleSubmit = () => {
    let blang = false;
    let bval=false;
    let bdel=false;
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
    } else if(blang===false){
      ToastsStore.warning('لطفا یک زبان برای ترجمه انتخاب کنید')
   
    }else if(bval===false)
    {
      ToastsStore.warning('لطفا  نوع تاییدیه را انتخاب کنید')
    }else if(bdel===false)
     {
      ToastsStore.warning('لطفا نحوه ارسال  را  برای ترجمه انتخاب کنید')
     }
     
  };

  return (
    <React.Fragment>
      <Row>
   
 

       
 
        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
          <Card className="documenttype ">
            <Card.Header>نوع مدرک ترجمه</Card.Header>
            <Card.Body>
              <Card.Title>{typedoc.type}</Card.Title>
              <Card.Text>
                زبان ترجمه<span>{typedoc.countchoose} مورد</span>
              </Card.Text>
              <Card.Text>
                مهرو تاییدات<span>{typedoc.accept} مورد</span>
              </Card.Text>
              <Card.Text>
                نسخه اضافه<span>{typedoc.extradoc} مورد</span>
              </Card.Text>
              <Card.Text>
                نوع تحویل<span>{typedoc.deliverytype} مورد</span>
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
          <TabContainer id="left-tabs-example" defaultActiveKey="first">
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
              <Col className="tabsordercontent" xl={9} lg={9} md={9} sm={9}>
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
                  <Tab.Pane className="tabcheckbox" style={{textAlign:"center"}} eventKey="fourth">
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
        <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} />
         
          <Button
            style={{ margin: "1rem 0", fontSize: ".8rem", fontFamily: "fanum" }}
            variant="primary"
            size="lg"
          >
            <p>مجموع هزینه ها</p>
            <p>2500000 تومان</p>
          </Button>
          <Button id="add1" onClick={handleSubmit} type="submit">
            ادامه سفارش
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Tabschoice;
