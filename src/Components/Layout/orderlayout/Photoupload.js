import React,{useState} from "react";
import {Button ,Col,Row,Card } from "react-bootstrap";
const Photoupload = ({ onClicks, step, onChanges }) => {
const[typedoc,changetypedoc]=useState({
        type:'شناسنامه',
        countchoose:'۱',
        accept:'۱',
        extradoc:'۰',
        deliverytype:'عادی'
   
    })
    const handleSubmit = () => {
    
        onClicks();
      
    };
  return (
     <React.Fragment>
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


      <Col xl={6} lg={6} md={6} sm={12} xs={12}  style={{borderRadius:'1rem',height:"100%"}}>

    <Card style={{borderRadius:'1rem',height:"100%"}}>
      <div className="uploadphoto">
       <Row>
         <div className="upload-text">
         <p>نمامی صفحات (حتی صفحات خالی) تصویر یافایل واضح آپلود شود </p>
         <p>صفحه اول اسامی که در فایل ها آپلود شده له منظور صحیح نوشتن اسامی در فایل الزامی است</p>
         </div>
       </Row>
       <Row>
       <form>
  <input type="file" name="pic" accept="image/*" />

  </form>
       </Row>
       </div>
    </Card>
    </Col>

    <Col xl={3} lg={3} md={3} sm={12} xs={12} className="Continue-order">
          <p className="addteaxt" />
          <Button style={{margin: "1rem 0",fontSize:'.8rem',fontFamily: 'fanum'}} variant="primary" size="lg">
            <p>مجموع هزینه ها</p>
            <p>2500000 تومان</p>
          </Button >
          <Button id="add1" onClick={handleSubmit} type="submit">
            ادامه سفارش
          </Button>
        </Col>
        </React.Fragment>
  );
};

export default Photoupload;
