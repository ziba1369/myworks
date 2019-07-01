import React, { useState, useEffect } from "react";
import { Row, Button, Col, Form, Card } from "react-bootstrap";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

const ServicesGroup = ({ onClicks, step, onChangess }) => {
  const [service, setService] = useState();
  const [types, setTypes] = useState();
  const handleServiceChange = e => {
    setService(e.target.value);
  };

  const handleTypeTransChange = e => {
    setTypes(e.target.value);
  };
  const handleSubmit = () => {
    if (service === undefined) {
      document.getElementById("groups").style.borderColor = "red";
      ToastsStore.warning("لطفا گروه بندی خدمات  انتخاب کنید");
    } else if (types === undefined) {
      document.getElementById("types").style.borderColor = "red";
      ToastsStore.warning("لطفا نوع مدرک  ترجمه را انتخاب کنید");
    } else {
    
      onClicks();
     
    }

  };
  if(service && types)
  {
    let changebutton=document.getElementById("add1");
    changebutton.classList.add('changebutton');
  }
  return (
    <React.Fragment>
      <Col xl={3} lg={3} md={3} sm={12} xs={12}>
        <Card className="documenttype ">
          <Card.Header>نوع مدرک ترجمه</Card.Header>
          <Card.Body style={{ padding: "8rem 0" }}>
            {/* // <Card.Title>{typedoc.type}</Card.Title>
            // <Card.Text>
            //   زبان ترجمه<span>{typedoc.countchoose} مورد</span>
            // </Card.Text>
            // <Card.Text>
            //   مهرو تاییدات<span>{typedoc.accept} مورد</span>
            // </Card.Text>
            // <Card.Text>
            //   نسخه اضافه<span>{typedoc.extradoc} مورد</span>
            // </Card.Text>
            // <Card.Text>
            //   نوع تحویل<span>{typedoc.deliverytype} مورد</span>
            // </Card.Text> */}
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
        <Card style={{ borderRadius: "1rem", height: "100%" }}>
          <Form className=" servicesgroup rtl row">
            <Col xl={12} lg={12} md={12} xs={12}>
              <Form.Group>
                <Form.Label>گروه بندی خدمات</Form.Label>
                <Form.Control
                  id="groups"
                  as="select"
                  type="select"
                  onChange={handleServiceChange}
                  vlaue="service"
                  name="slelect"
                  required
                >
                  <option value="" disabled selected>
                    یک گزینه را انتخاب کنید
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Form.Group>
                <Form.Label>نوع مدرک ترجمه</Form.Label>
                <Form.Control
                  as="select"
                  id="types"
                  type="select"
                  onChange={handleTypeTransChange}
                  vlaue="types"
                  name="typedocservice"
                  required
                >
                  <option value="" disabled selected>
                    یک گزینه را انتخاب کنید
                  </option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
        <ToastsContainer
          position={ToastsContainerPosition.TOP_CENTER}
          store={ToastsStore}
        />
        <Button onClick={handleSubmit} id="add1" type="submit">
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default ServicesGroup;
