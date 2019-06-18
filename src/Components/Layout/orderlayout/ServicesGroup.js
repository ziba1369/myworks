import React from "react";
import { Col, Form, Card } from "react-bootstrap";
const ServicesGrop = () => {
  return (
    <Card>
      <Form className=" servicesgroup rtl row">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>گروه بندی خدمات</Form.Label>
            <Form.Control as="select">
              <option>یک گزینه را انتخاب کنید</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xl={12} lg={12} md={12} xs={12}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>نوع مدرک ترجمه</Form.Label>
            <Form.Control as="select">
              <option>یک گزینه را انتخاب کنید</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form>
    </Card>
  );
};

export default ServicesGrop;
