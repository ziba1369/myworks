import React, { useState, useEffect } from "react";
import { Nav, Col, Tab, Row, Container, Image, Form ,Button} from "react-bootstrap";
import * as Cookies from "js-cookie";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import $ from "jquery";
const EditProfile = () => {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [certi, setCertifi] = useState([]);
    const [mobile,setMobile]=useState([]);
    const [Register, setRegister] = useState({
        backgroundColor: "#e1e1e1",
        border: "0px",
        width: "11vw",
        borderRadius: "0"
    });
    const checkRegisterButton = () => {
        const phoneno = /^(9|09)(12|19|35|36|37|38|39|32|21|03|01)\d{7}$/;
        if (name.length>1 && lastname.length>1 && certi.length===10 && mobile.match(phoneno) ) {
            setRegister({backgroundColor: "#1976d2", border: "0px",
            width: "11vw",
            borderRadius: "0"});
            $("#rfbutton").removeAttr("disabled");
        } else {
            setRegister({backgroundColor: "#e1e1e1",  border: "0px",
            width: "11vw",
            borderRadius: "0"});
            $("#rfbutton").attr("disabled", "disabled");
        }
    };
    const handleMobileChange = e => {
        setMobile(e.target.value);
    };
    
    const handleName = e => {
        setName(e.target.value);
    };
    const handleLastName = e => {
        setLastName(e.target.value);
    };
    
    const handleCertificate = e => {
        setCertifi(e.target.value);
    };
    useEffect(() => {
        checkRegisterButton();
    }, [lastname]);

    useEffect(() => {
        checkRegisterButton();
    }, [certi]);

    useEffect(() => {
        checkRegisterButton();

    }, [mobile]);

    const changeprev = () => {
        document.getElementById("prev").style.display = "block";
      };
      useEffect(() => {
         new FileUploadWithPreview('myUniqueUploadId')
    },[])
    
    return ( 
        <div className="container rtl">
        <Row>

            <Col xl={{ span: 2, offset: 5 }} lg={{ span: 2, offset: 5 }} md={{ span: 2, offset: 5 }} xs={{ span: 2, offset: 5 }}>
            <div className="custom-file-container" data-upload-id="myUniqueUploadId">
    <label className="uploadremove">
         Upload File <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a>
  
    </label>
    <label className="custom-file-container__custom-file  upladersize" >
        <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="*"  aria-label="Choose File" />
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <span className="custom-file-container__custom-file__custom-file-control"></span>
    </label>
    <div className="custom-file-container__image-preview upload-preview"></div>
    
</div>


             
             
            </Col>
          
       </Row>
       <Row><h5>مشخصات شخصی</h5></Row>
        <Row>
            <Col xl={6} lg={6} md={6} xs={12}>
            <Form.Group>
                                    <Form.Label>نام </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        onChange={handleName}
                                        value={name}
                                        required
                                    />
                                 
                                    </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={6} xs={12}>
            <Form.Group>
                                   
                                    <Form.Label>نام خانوادگی</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        onChange={handleLastName}
                                        value={lastname}
                                        required
                                    />
                                    </Form.Group>
            </Col>

        </Row>
        <Row>
               <Col xl={6} lg={6} md={6} xs={12}>
            <Form.Group>
                                   
                                     <Form.Label>کدملی</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder=""
                                        onChange={handleCertificate}
                                        value={certi}
                                        required
                                    />
                                    </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={6} xs={12}>
            <Form.Group>
                                   
            <Form.Label>شماره همراه</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder=""
                                        onChange={handleMobileChange}
                                        vlaue={mobile}
                                        required
                                    />
                                </Form.Group>
                                 
            </Col>
            <div className="ltr col-xl-12 col-lg-12 col-md-12 col-12" style={{textAlign: "left",padding: "2rem 1rem"}}>
            <Button
                                    variant="primary"
                                    size="lg"
                                    type="submit"
                                    id="rfbutton"
                                    style={Register}
                                    //onClick={Rgister}
                                    className="loginbutton"
                                >
                                    ثبت
                                </Button>
                                </div>
        </Row>

        </div>
     );
}
 
export default EditProfile;