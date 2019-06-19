import React from "react";
import {Row,Card } from "react-bootstrap";
const Photoupload = () => {
  return (
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
  );
};

export default Photoupload;
