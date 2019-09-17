import React, {useState, useEffect} from "react";
import {Col, Row, Form, Button} from "react-bootstrap";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import $ from "jquery";
import {getYear, app_edit_profileAPI, getprofileApI} from '../../../api/api';

const EditProfile = props => {

    // refs
    let inputOpenFileRef = React.createRef();

    /////////////////set variable ///////////////////
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [imageProfile, setImageProfile] = useState();
    const [certi, setCertifi] = useState();
    const [mobile, setMobile] = useState();
    const [birthday] = useState([
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
    ]);
    const [birthvalue, setBirthvalue] = useState('');
    const [birthmonth] = useState([
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
    ]);
    const [birthmonthvalue, setBirthmonthvalue] = useState('');
    const [birthyear, setBirthyear] = useState([]);
    const [birthyearvalue, setBirthyearvalue] = useState('');
    const [Edit, setEdit] = useState({
        backgroundColor: "#e1e1e1",
        border: "0px",
        width: "11vw",
        borderRadius: ".25rem"
    });
    const [loading, setLoading] = useState(false);

    /////////// get years vale from server ////////////
    useEffect(() => {
        getYear(response => {
            if (response.data.success) {
                setBirthyear(response.data.year);

            } else {
                ToastsStore.error(response.data.error);
            }
        })
    }, []);

    /////////// check edit butoon ////////////
    const checkEditButton = () => {
        if (name !== undefined && lastName !== undefined && certi !== undefined) {
            if (name.length > 0 && lastName.length > 0 && certi.length === 10) {
                setEdit({
                    backgroundColor: "#1976d2",
                    border: "0px",
                    width: "11vw"
                });
                $("#rfbutton").removeAttr("disabled");
            } else {
                setEdit({
                    backgroundColor: "#e1e1e1",
                    border: "0px",
                    width: "11vw"
                });
                $("#rfbutton").attr("disabled", "disabled");
            }
        }
    };

    /////////// set keypress for image ////////////
    useEffect(() => {
        if( $('#certi').length ){
            document
                .querySelector("#certi")
                .addEventListener("keypress", function (evt) {
                    if (
                        (evt.which !== 8 && evt.which !== 0 && evt.which < 48) ||
                        evt.which > 57
                    ) {
                        evt.preventDefault();
                    }
                });
        }
    }, [certi]);

    /////////// useeffect for changing active or diactive butoon ////////////
    useEffect(() => {
        checkEditButton();
    }, [name, lastName, certi, mobile, birthvalue, birthmonthvalue, birthyearvalue]);


    /////////// useeffect for upload photo ////////////
    useEffect(() => {
        if( $('#canvas').length ) {
            const canvas = document.getElementById('canvas');
            const img = new Image();
            img.src = imageProfile;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
            };
        }
    }, [imageProfile]);


    // this method lunch when user open image file
    const handleOpenFile = event => {
        var fileName = event.target.files[0].name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
            var file = event.target.files[0];
            var fr = new FileReader();
            fr.onload = () => {
                const canvas = document.getElementById('canvas');
                const img = new Image();
                img.src = fr.result;
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);
                    canvas.toBlob(function (blob) {
                        setImageProfile(blob);
                    }, 'image/jpeg', 1)
                };

            };   // onload fires after reading is complete
            fr.readAsDataURL(file);

        }
    };


    //////////get_user_data///////////////////
    useEffect(() => {
        getprofileApI(Cookies.get("token"), (response) => {
            if (response.data.success) {
                setName(response.data.customer_name);
                setLastName(response.data.customer_family);
                setImageProfile(response.data.customer_img);
                setCertifi(response.data.national_code);
                setBirthyearvalue(response.data.birth_year);
                setBirthmonthvalue(response.data.birth_month);
                setBirthvalue(response.data.birth_day);
                setMobile(response.data.mobile)
            } else {
                ToastsStore.error(response.data.error);
            }
        })
    }, []);

    /////////// send data to server //////////
    const sendEditRgister = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("customer_token", Cookies.get("token"));
        formData.append("name", name);
        formData.append("family", lastName);
        formData.append("national_code", certi);
        formData.append("birth_day", birthvalue);
        formData.append("birth_month", birthmonthvalue);
        formData.append("birth_year", birthyearvalue);
        if (imageProfile !== null) {
            formData.append("profile_image", imageProfile);
        }

        app_edit_profileAPI(formData, (response) => {
            if (response.data.success) {
                setLoading(false);
                if (response.data.customer_image.length !== 0) {
                    Cookies.set("customer_img", (response.data.customer_image + '?random_number=' + new Date().getTime()), {
                        path: "/",
                        expires: 7
                    });
                }
                ToastsStore.success("تغییر اطلاعات کاربری با موفقیت انجام گردید");
                setTimeout(function () {
                    window.location.reload(true)
                }, 1000);
            } else {
                setLoading(false);
                ToastsStore.error(response.data.error);
            }
        })


    };

    return (
        <React.Fragment>
            {loading ?
                <div className="container rtl" style={{maxWidth: "65vw"}}>
                    <Row>
                        <h5>در حال بارگذاری</h5>
                    </Row>
                </div>
                :
                <div className="container rtl" style={{maxWidth: "65vw"}}>
                    <ToastsContainer
                        position={ToastsContainerPosition.TOP_CENTER}
                        store={ToastsStore}
                    />
                    <Row>
                        <div className="profpic">
                            <input id="image" ref={inputOpenFileRef} onChange={handleOpenFile}
                                   accept="image/x-png,image/jpeg" type="file" style={{display: "none"}}/>
                            <canvas id="canvas" className="edit-profile-image" width="80px" height="80px" onClick={() => {inputOpenFileRef.current.click()}}/>

                        </div>
                    </Row>
                    <Row>
                        <h5>مشخصات شخصی</h5>
                    </Row>

                    <Row>
                        <Col xl={6} lg={6} md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>نام </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
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
                                    onChange={e => {
                                        setLastName(e.target.value)
                                    }}
                                    value={lastName}
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
                                    type="tel"
                                    placeholder=""
                                    onChange={e => {
                                        setCertifi(e.target.value)
                                    }}
                                    value={certi}
                                    id="certi"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12}>
                            <Form.Label>تاریخ تولد</Form.Label>
                            <div className="row date">
                                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Control
                                        id="day"
                                        as="select"
                                        type="select"
                                        onChange={e => {
                                            setBirthvalue(e.target.value)
                                        }}
                                        value={birthvalue}
                                        name="slelect"
                                        required
                                        className="day"
                                    >
                                        <option selected disabled>
                                            روز
                                        </option>

                                        {birthday.map(num => (
                                            <option value={num}>{num}</option>
                                        ))}
                                    </Form.Control>
                                </Col>

                                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Control
                                        id="groups"
                                        as="select"
                                        type="select"
                                        onChange={e => {
                                            setBirthmonthvalue(e.target.value)
                                        }}
                                        value={birthmonthvalue}
                                        name="slelect"
                                        required
                                        className="month"
                                    >
                                        <option selected disabled>
                                            ماه
                                        </option>
                                        {birthmonth.map(num => (
                                            <option value={num}>{num}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Control
                                        id="groups"
                                        as="select"
                                        type="select"
                                        onChange={e => {
                                            setBirthyearvalue(e.target.value);
                                        }}
                                        value={birthyearvalue}
                                        name="slelect"
                                        required
                                    >
                                        <option selected disabled>
                                            سال
                                        </option>
                                        {birthyear.map(num => (
                                            <option value={num}>{num}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </div>
                        </Col>

                        <Col xl={6} lg={6} md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>شماره همراه </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={Cookies.get("mobile")}
                                    disabled
                                />
                            </Form.Group>
                        </Col>

                        <div
                            className="ltr col-xl-12 col-lg-12 col-md-12 col-12"
                            style={{textAlign: "left", padding: "2rem 1rem"}}
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                id="rfbutton"
                                style={Edit}
                                onClick={sendEditRgister}
                                className="loginbutton editprofile"
                            >
                                ثبت
                            </Button>
                        </div>
                    </Row>
                </div>
            }
        </React.Fragment>
    );
};

export default EditProfile;
