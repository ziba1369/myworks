// import React, { useState, useEffect } from "react";
// import { Row } from "react-bootstrap";
// import FileUploadWithPreview from "file-upload-with-preview";
// import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
// const EditOrder = () => {
//     const [photoUpload,setPhotoUpload]=useState();
//     const [orderFileCount, setOrderFilecount] = useState(0);
  
//   ////////////////////////preview image/////////////////////////////////
//   const [imageorder, setImageOrder] = useState([
//     {
//       id: 1
//     },
//     {
//       id: 2
//     },
//     {
//       id: 3
//     },
//     {
//       id: 4
//     },
//     {
//       id: 5
//     },
//     {
//       id: 6
//     }
//   ]);

//    const changeprev = () => {
//         document.getElementById("prev").style.display = "block";
//       };
//       useEffect(() => {
//         new FileUploadWithPreview("myUniqueUploadIdtwo");
//         window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
//           setOrderFilecount(e.detail.addedFilesCount);
//           setPhotoUpload(e.detail.cachedFileArray);
//           const pictures = {
//             pic: e.detail.cachedFileArray.tokens
//           };
//         });
//         window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
//           const pictures = {
//             pic: e.detail.cachedFileArray.tokens
//           };
//         });
//       }, []);
//   return (
//     <React.Fragment>
//       <div className="row editorder">اصلاح سفارش</div>
//       <div className="row" style={{ margin: "0 3rem" }}>
//         <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
//           <p className="title-custom">نام سفارش</p>
//           <p className="title-cutomdet">گواهی پایان کار</p>
//         </div>
//         <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
//           <p className="title-custom">تاریخ سفارش</p>
//           <p className="title-cutomdet">1398/04/05</p>
//         </div>
//         <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
//           <p className="title-custom">نوع سفارش</p>
//           <p className="title-cutomdet">رسمی</p>
//         </div>
//         <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 col-sm-12">
//           <p className="title-custom">نوع ترجمه</p>
//           <p className="title-cutomdet">عادی</p>
//         </div>
//         <div className="uploadphoto" style={{ margin: "0 auto" ,width:"100%"}}>
//           <Row>فایلهای پیوست</Row>

//        <div className="row">
//             {imageorder.map(i => {
//               return (
//                 <div className="images-order">
//                   <div className="image-set-order custom-file-container__image-preview order-pic " id="prev">{i.id}</div>
//                   <div className="cancel-order">عدم تایید</div>
//                   <div
//                     className="custom-file-container"
//                     data-upload-id="myUniqueUploadIdtwo"
//                   >
//                     <label
//                       className="custom-file-container__custom-file uploadphotoboxedit"
//                       onClick={changeprev}
//                     >
//                       <input
//                         type="file"
//                         className="custom-file-container__custom-file__custom-file-input "
//                         accept="*"
//                         aria-label=""
//                       />
//                       <input
//                         type="hidden"
//                         name="MAX_FILE_SIZE"
//                         value="10485760"
//                       />
//                       <span className="custom-file-container__custom-file__custom-file-control" />
//                     </label>
//                     <div
//                       id="prev"
//                       className="custom-file-container__image-preview order-pic"
//                       style={{ width: "100% !important" }}
//                     />
//                     <label>
//                       <a
//                         href="javascript:void(0)"
//                         className="custom-file-container__image-clear"
//                         title="Clear Image"
//                       />
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//             {/* <form>
     
//        <input type="file" onChange={onImageChange} className="filetype" id="group_image"/>
//        <img id="target" alt={picture} src={picture} />
//   </form> */}
//          </div> 
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default EditOrder;
import React, {Fragment, useState, useEffect} from 'react';
import {editOrderFileAPI, getOrderFileAPI} from "../../../api/api";
import {ToastsStore} from "react-toasts";
import * as Cookies from "js-cookie";


export default function EditFile(props) {

    // refs
    let inputOpenFileRef = React.createRef();

    // states
    const [images, setImages] = useState([]);
    const [loading, showLoading] = useState({display: "block"});
    const [selectedId, setSelectedId] = useState(0);

    const [sendButton, activeSendButton] = useState({
        disabled: "disabled",
        style: {color: "#5d5d5d", backgroundColor: "#ffffff"}
    });


    useEffect(() => {
        getOrderFileAPI(Cookies.get('token'), props.location.state.id, (response)=>{
            if (response.data.success){
                let files = [];
                for (let i in response.data.rejected_files) {
                    files.push({
                        id: i,
                        img: response.data.rejected_files[i].file_address,
                        status: "عدم تایید",
                        files: null
                    })
                }
                setImages(files);
                showLoading({display: "none"});
            } else {
                showLoading({display: "none"});
                ToastsStore.error(response.data.error);
            }
        });
    },[]);

    // this method lunch when user open image file
    const handleOpenFile = event => {
        var fileName = event.target.files[0].name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
            const file = event.target.files[0];
            let reader  = new FileReader();
            reader.onloadend = function () {
                let imagesList = [...images];
                for (let i in imagesList) {
                    if (imagesList[i].id === selectedId) {
                        imagesList[i].files = file;
                        imagesList[i].img = reader.result;
                        imagesList[i].status = "آماده آپلود";
                    }
                }
                setImages(imagesList);
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        activeSendButton({
            disabled: "",
            style: {color: "#ffffff", backgroundColor: "#1976d2"}
        });
        for (let i in images) {
            if (images[i].status === "عدم تایید") {
                activeSendButton({
                    disabled: "disabled",
                    style: {color: "#5d5d5d", backgroundColor: "#ffffff"}
                });
                break;
            }
        }
    },[images]);


    // this method delete image from uploaded image list by index
    const deleteImageItem = (index) => {
        let imagesList = [...images];
        imagesList.splice(index,1);
        setImages(imagesList);
    };

    // this method run when user click on send order button
    const handleAddFile = () => {
        showLoading({display: "block"});
        let files = [];
        for (let i in images) {
            files.push(images[i].files)
        }
        editOrderFileAPI( Cookies.get('token'),
            props.location.state.id,
            props.location.state.rejectedId,
            "1",
            files,
            (response)=>{
                if (response.data.success){
                    showLoading({display: "none"});
                    ToastsStore.error("فایل های شما با موفقیت آپلود شد");
                    props.history.goBack();
                } else {
                    showLoading({display: "none"});
                    ToastsStore.error(response.data.error);
                }
            })
    };


    if (Cookies.get('token') == null) {
        return (
            <a to='/login'/>
        );
    } else {
        return (
            <Fragment>
                <div>
                    <div className="edit-file-action-bar">
                        <p>آپلود</p>
                        <img className="edit-file-back"  onClick={()=> props.history.goBack()}
                             alt="برگشت"/>
                    </div>
                    <div className="edit-file-container">
                        <div className="edit-file-upload-desc">
                            <p>تمامی عکس های زیر به خاطر خوانا نبودن رد شده است</p>
                            <p>خواهشمندیم تصاویر با کیفیت تری را آپلود نمایید</p>
                        </div>
                        <div>
                            <input id="image" ref={inputOpenFileRef} onChange={handleOpenFile}
                                   accept="image/x-png,image/jpeg/pdf" type="file" style={{display: "none"}}/>
                            {images.map((item, index) => {
                                let style;
                                if (item.status === "عدم تایید") {
                                    style = {color: "#FF5400"}
                                } else {
                                    style = {color: "#1976d2"}
                                }
                                return (
                                    <div key={index} className="edit-file-images">
                                        <img src={item.img} alt=""/>
                                        <span style={style}>{item.status}</span>
                                        <button onClick={() => {
                                            setSelectedId(item.id);
                                            inputOpenFileRef.current.click()}}>آپلود مجدد</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button disabled={sendButton.disabled} style={sendButton.style} className="btn-second-edit-file" onClick={handleAddFile}>ارسال</button>
                </div>
                <div style={loading} className="loading-container">
                    <div className="loading">
                      
                        <span>در حال بارگذاری</span>
                    </div>
                </div>
            </Fragment>
        );
    }
}
