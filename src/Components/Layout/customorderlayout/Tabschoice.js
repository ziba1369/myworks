import React, {useState, useEffect} from "react";
import {Button, Form, Col, Nav, Row, Tab, TabContainer, Image, Card, Accordion} from "react-bootstrap";
import adddoc from "../../../images/add-documents.svg";
import delitype from "../../../images/deliverytype.svg";
import acceptsign from "../../../images/acceptsign.svg";
import tranlatelang from "../../../images/translatellang.svg";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from "react-toasts";
import Media from "react-media";

function TabsChoice(props) {


    const [buttonStyle, setButtonStyle] = useState({
        borderColor: "#e1e1e1",
        backgroundColor: "#fafafa",
        color: "#e1e1e1",
        border: "0px"
    });

    //////////////////////////set language/////////////////////////
    const languageSelect = index => {
        let dataCheck = {...props.data};
        if (props.data.languages[index].status === 0) {
            dataCheck.languages[index].status = 1;
        } else if (props.data.languages[index].status === 1) {
            dataCheck.languages[index].status = 0;
        }
        props.setdata(dataCheck);
    };

    ////////////////////////set data to languages /////////////////////////////////
    const language = props.data.languages.map((item, index) => {
        return (
            <Row>
                <div className="col-8 text-services">{item.lang}</div>
                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <div className="stylenumprice">
                        <Form.Check
                            value={item.lang}
                            type="checkbox"
                            id="langu"
                            name="langu"
                            className="langu"
                            onChange={() => {
                                languageSelect(index);
                            }}
                            checked={item.status === 0 ? "checked" : ""}
                        />
                    </div>
                </Col>
            </Row>
        );
    });

    /////////////////////////////////////handler title/////////////////////////////
    const setChangetitle = e => {
        let dataCopy = {...props.data};
        dataCopy.title = e.target.value;
        props.setdata(dataCopy);
    };
    /////////////////////////////////////handler des/////////////////////////////
    const setChangedes = e => {
        let dataCopy = {...props.data};
        dataCopy.des = e.target.value;
        props.setdata(dataCopy);
    };
    ///////////////////////////////handler confirm///////////////////////////////
    const confirmChange = (status) => {
        let dataCopy = {...props.data};
        dataCopy.confirm = status;
        props.setdata(dataCopy);
    };
    /////////////////////////////////handler type translate///////////////////////
    const typeTranslateChange = index => {
        let dataCopy = {...props.data};
        dataCopy.type = index;
        props.setdata(dataCopy);
    };

    ////////////////////////calc count of selected languages//////////////////////
    const languageCount = () => {
        let w = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].status === 0) {
                w++;
            }
        }
        return w;
    };

    //////////////////////////////////handle next step///////////////////////////////////////////////////////////////////
    const handleTabs = () => {
        if (
            languageCount() > 0 &&
            props.data.title.length > 1 &&
            props.data.type !== undefined &&
            props.data.confirm !== undefined
        ) {
            props.click();
        }
    };
    //////////////////////////////////// change button/////////////////////////////////////////////////////
    useEffect(() => {
        if (
            languageCount() > 0 &&
            props.data.title.length > 1 &&
            props.data.type !== undefined &&
            props.data.confirm !== undefined) {
            setButtonStyle({
                backgroundColor: "#1976d2",
                borderRadius: "5px",
                boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)",
                color: "#fff"
            });
        } else {
            setButtonStyle({
                borderColor: "#e1e1e1",
                backgroundColor: "#fafafa",
                color: "#e1e1e1",
                border: "0px"
            });
        }
    }, [props.data]);


    return (
        <React.Fragment>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                <Card className="documenttype">
                    <Card.Header>نوع مدرک ترجمه</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            زبان ترجمه
                            <span>
                {languageCount()}
                                مورد
              </span>
                        </Card.Text>
                        <Card.Text>
                            عنوان سفارش<span className="titlecustomorder">{props.data.title}</span>
                        </Card.Text>
                        <Card.Text>
                            تاییدات<span>{props.data.confirm === 1 ? "رسمی" : "غیررسمی"}</span>
                        </Card.Text>
                        <Card.Text>
                            نوع تحویل<span>{props.data.type === 1 ? "فوری" : "عادی"}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col
                xl={6}
                lg={6}
                md={9}
                sm={12}
                xs={12}
                style={{borderRadius: "1rem"}}
            >
                <TabContainer
                    id="left-tabs-example"
                    //  onChange={changeButton}
                    defaultActiveKey="first"
                >
                    <Media
                        query="(min-width:991px)"
                        render={() => (
                            <div className="row bordertab">
                                <Col
                                    className="tabsorder customordertabs"
                                    xl={4}
                                    lg={4}
                                    md={12}
                                    sm={12}
                                >
                                    <Nav
                                        variant="pills"
                                        className="flex-column tabsdet hvr-sweep-to-bottom"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <Image src={tranlatelang}/>
                                                زبان ترجمه
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <Image src={acceptsign}/>
                                                عنوان سفارش
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <Image src={adddoc}/>
                                                توضیحات سفارش
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">
                                                <Image src={delitype}/> تاییدات
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">
                                                <Image src={delitype}/> نوع تحویل
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col
                                    className="tabsordercontent"
                                    // style={{minWidth: "300px", width: "300px"}}
                                    xl={8}
                                    lg={8}
                                    md={12}
                                    sm={12}
                                >
                                    <Tab.Content>
                                        <Tab.Pane className="tabcheckbox" eventKey="first">
                                            {language}
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tabcheckbox title-customorder"
                                            eventKey="second"
                                        >
                                            <p>
                                                <input
                                                    type="text"
                                                    value={props.data.title}
                                                    onChange={e => {
                                                        setChangetitle(e);
                                                    }}
                                                />
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tabcheckbox text-customorder"
                                            eventKey="third"
                                        >
                                            <p>
                                                <textarea
                                                    rows="4"
                                                    cols="50"
                                                    type="text"
                                                    value={props.data.des}
                                                    onChange={e => {
                                                        setChangedes(e);
                                                    }}
                                                />
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tabcheckbox confirm-customorder"
                                            eventKey="fourth"
                                        >
                                            <p>
                                                <span className="input-title">رسمی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="certi"
                                                    checked={props.data.confirm === 1 ? "checked" : ""}
                                                    className="nameorder"
                                                    onChange={() => confirmChange(1)}
                                                />
                                            </p>
                                            <p>
                                                <span className="input-title">غیررسمی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="certi"
                                                    checked={props.data.confirm === 0 ? "checked" : ""}
                                                    className="nameorder"
                                                    onChange={() => confirmChange(0)}
                                                />
                                            </p>
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tabcheckbox  type-customorder"
                                            style={{textAlign: "center"}}
                                            eventKey="fifth"
                                        >
                                            <p>
                                                <span className="input-title">عادی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    checked={props.data.type === 0 ? "checked" : ""}
                                                    className="nameorder"
                                                    value="0"
                                                    onChange={() => typeTranslateChange(0)}
                                                />
                                            </p>
                                            <p>
                                                <span className="input-title">فوری</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    checked={props.data.type === 1 ? "checked" : ""}
                                                    className="nameorder"
                                                    value="1"
                                                    onChange={() => typeTranslateChange(1)}
                                                />
                                            </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </div>
                        )}
                    />
                    <Media
                        query="(max-width:992px)"
                        render={() => (
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        زبان ترجمه
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{language}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        عنوان سفارش
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>
                                                <input
                                                    type="text"
                                                    value={props.data.title}
                                                    onChange={e => {
                                                        setChangetitle(e);
                                                    }}
                                                />
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        توضیحات سفارش
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <p>
                                                <textarea
                                                    rows="4"
                                                    cols="50"
                                                    type="text"
                                                    value={props.data.des}
                                                    onChange={e => {
                                                        setChangedes(e);
                                                    }}
                                                />
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        تاییدات
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <p>
                                                <span className="input-title">رسمی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="certi"
                                                    checked={props.data.confirm === 1 ? "checked" : ""}
                                                    className="nameorder"
                                                    onChange={() => confirmChange(1)}
                                                />
                                            </p>
                                            <p>
                                                <span className="input-title">غیررسمی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="certi"
                                                    checked={props.data.confirm === 0 ? "checked" : ""}
                                                    className="nameorder"
                                                    onChange={() => confirmChange(0)}
                                                />
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        نوع تحویل
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <p>
                                                <span className="input-title">عادی</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    checked={props.data.type === 0 ? "checked" : ""}
                                                    className="nameorder"
                                                    value="0"
                                                    onChange={() => typeTranslateChange(0)}
                                                />
                                            </p>
                                            <p>
                                                <span className="input-title">فوری</span>{" "}
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    checked={props.data.type === 1 ? "checked" : ""}
                                                    className="nameorder"
                                                    value="1"
                                                    onChange={() => typeTranslateChange(1)}
                                                />
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )}
                    />
                </TabContainer>
            </Col>
            <Col xl={3} lg={3} md={12} sm={12} xs={12} className="Continue-order">
                <ToastsContainer
                    position={ToastsContainerPosition.TOP_CENTER}
                    store={ToastsStore}
                />

                <Button style={buttonStyle} id="add1" onClick={handleTabs} type="submit">
                    ادامه سفارش
                </Button>
            </Col>
        </React.Fragment>
    );
};

export default TabsChoice;
