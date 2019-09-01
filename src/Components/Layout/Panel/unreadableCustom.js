import React, { useState, useEffect } from "react";
import {Row} from "react-bootstrap";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
const UnreadableCustom = () => { 
    const[ordername,setOrderName]=useState();
    const[orderdate,setOrderDate]=useState();
    const[typeOrder,settypeOrder]=useState();
    const[typeCustom,setTypeCustom]=useState();
    const [orderFileCount, setOrderFilecount] = useState(0);
    const [photoUpload,setPhotoUpload]=useState();
    
    const changeprev = () => {
        document.getElementById("prev").style.display = "block";
      };
      useEffect(() => {
        new FileUploadWithPreview("myUniqueUploadIdtwo");
        window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
          setOrderFilecount(e.detail.addedFilesCount);
          setPhotoUpload(e.detail.cachedFileArray);
          const pictures = {
            pic: e.detail.cachedFileArray.tokens
          };
        });
        window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
          const pictures = {
            pic: e.detail.cachedFileArray.tokens
          };
        });
      }, []);
    return(
        <React.Fragment>
        <div className="row editorder">اصلاح سفارش</div>
       <div className="row" style={{margin:'0 3rem'}}>
      
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
            <p className="title-custom">نام سفارش</p>
            <p className="title-cutomdet">گواهی پایان کار</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
            <p className="title-custom">تاریخ سفارش</p>
            <p className="title-cutomdet">1398/04/05</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
            <p className="title-custom">نوع سفارش</p>
            <p className="title-cutomdet">رسمی</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
            <p className="title-custom">نوع ترجمه</p>
            <p className="title-cutomdet">عادی</p>
        </div>
        <div className="uploadphoto" style={{margin:'0 auto'}}>
            <Row>فایلهای پیوست</Row>
            <Row>
              <div className="upload-text">
                <p>تمامی صفحات (حتی صفحات خالی) تصویر یافایل واضح آپلود شود </p>
                <p>
                  صفحه اول اسامی که در فایل ها آپلود شده به منظور صحیح نوشتن
                  اسامی در فایل الزامی است
                </p>
              </div>
            </Row>
            <Row>
              <div
                className="custom-file-container"
                data-upload-id="myUniqueUploadIdtwo"
              >
                <label
                  className="custom-file-container__custom-file uploadphotoboxorder"
                  onClick={changeprev}
                >
                  <input
                    type="file"
                    className="custom-file-container__custom-file__custom-file-input "
                    accept="*"
                    multiple
                    aria-label=""
                  />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <span className="custom-file-container__custom-file__custom-file-control" />
                </label>
                <div
                  id="prev"
                  className="custom-file-container__image-preview order-pic"
                  style={{width:'100% !important'}}
                />
                <label>
                  <a
                    href="javascript:void(0)"
                    className="custom-file-container__image-clear"
                    title="Clear Image"
                  />
                </label>
              </div>

              {/* <form>
     
       <input type="file" onChange={onImageChange} className="filetype" id="group_image"/>
       <img id="target" alt={picture} src={picture} />
  </form> */}
            </Row>
          </div>
       </div>
       </React.Fragment>
    )
}
 
export default UnreadableCustom;