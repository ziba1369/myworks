import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Col,
  Nav,
  Row,
  Tab,
  TabContainer
} from "react-bootstrap";

const Tabschoice = () => {
  const [language] = useState([
    {
      id: 1,
      type: "fatoen",
      name: "فارسی به انگلیسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 2,
      type: "fatoen",
      name: "انگلیسی به فارسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 3,
      type: "fatoen",
      name: "عربی به فارسی",
      price: "۲۶۰۰۰",
      checkin: false
    },
    {
      id: 4,
      type: "fatoen",
      name: "فارسی به عربی",
      price: "۲۶۰۰۰",
      checkin: false
    }
  ]);

  const [validation] = useState([
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
  const [delivery, setdelivery] = useState([
    { type: "automatic", name: "عادی", id: 1 },
    { type: "express", name: "فوری", id: 2 }
  ]);

  const lnaguage = language.map((item, index) => {
    return (
      <Row>
        <Col sm={8}>{item.name}</Col>
        <Col sm={4}>
          <p className="stylenumprice">
            {item.price} <span className="styletoman"> تومان</span>
            <span>
              <Form.Check type="checkbox" id={item.id} />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const valid = validation.map((item, index) => {
    return (
      <Row>
        <Col sm={8}>{item.name}</Col>
        <Col sm={4}>
          <p className="stylenumprice">
            {item.price} <span className="styletoman"> تومان</span>
            <span>
              <Form.Check className="checkbox-container checkmark" type="checkbox" id={item.id} />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  const typedelivery = delivery.map((item, index) => {
    return (
      <Row>
        <Col sm={6}>{item.name}</Col>
        <Col sm={6}>
          <p>
            <span>
              <Form.Check type="checkbox" id={item.id} />
            </span>
          </p>
        </Col>
      </Row>
    );
  });

  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <Col className="tabsorder" xl={3} lg={3} md={3} sm={3}>
        <Nav variant="pills" className="flex-column tabsdet">
          <Nav.Item>
            <Nav.Link eventKey="first">زبان ترجمه</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">مهرو تاییدات</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">نسخه اضافه</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">نوع تحویل</Nav.Link>
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
            <p style={{color:'#454f63',textAlign:'center',fontSize:'1rem',paddingTop:'2rem'}} className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12">
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
          <Tab.Pane eventKey="fourth">
          <p style={{color:'#454f63',textAlign:'center',fontSize:'1rem',paddingTop:'2rem'}} className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12">زمان تحویل ترجمه</p>
            {typedelivery}
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </TabContainer>
  );
};

export default Tabschoice;
