import React, {useState, useEffect} from "react";
import {Button, Form, Col, Nav, Row, Tab, TabContainer, Image, Card, Accordion} from "react-bootstrap";
import adddoc from "../../../images/add-documents.svg";
import delitype from "../../../images/deliverytype.svg";
import acceptsign from "../../../images/acceptsign.svg";
import tranlatelang from "../../../images/translatellang.svg";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from "react-toasts";
import * as Cookies from "js-cookie";
import Media from "react-media";

function TabsChoice(props) {
    /////////////////////set variable ///////////////////////

    const [styleone, setStyleone] = useState({
        borderColor: "#e1e1e1",
        backgroundColor: "#fafafa",
        color: "#e1e1e1",
        border: "0px"
    });



    ////////////////////////count choosed languages/////////////////////////////////
    const languagenum = () => {
        let w = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                w++;
            }
        }
        return w;
    };
    ////////////////////////count choosed certificate/////////////////////////////////
    const acceptnum = () => {
        let w = 0;
        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                w++;
            }
        }
        return w;
    };
    ////////////////////////count choosed certificate/////////////////////////////////
    const deliverynum = () => {
        let z;
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                z = props.data.delivery[x].name;
            }
        }
        return z;
    };
    ////////////////////////sum all vlaue of orders/////////////////////////////////
    const sumValue = () => {
        let sumd = 0;
        let sumv = 0;
        let sum = 0;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                sum = sum + parseInt(props.data.languages[x].price);
            }
        }
        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                sumv = sumv + parseInt(props.data.certificates[x].price);
            }
        }
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                sumd = sumd + parseInt(props.data.delivery[x].price);
            }
        }

        if (props.data.count > 0) {
            return (props.data.count + 1) * (sum + sumv + sumd);
        } else {
            return sum + sumv + sumd;
        }
    };

    ////////////////////////set data to props.languages /////////////////////////////////
    const lnaguage = props.data.languages.map((item, index) => {
        const langhandle = () => {
            let copyData = {...props.data};
            let lng = [...copyData.languages];
            lng[index].checkin = !lng[index].checkin;
            props.setData(copyData);
        };

        return (
            <Row>
                <div className="col-8 text-services">{item.name}</div>
                <Col xl={4} lg={4} md={5} sm={5} xs={5}>
                    <div className="stylenumprice">
                        <span className="widthprice">{item.price}</span> <span className="styletoman"> تومان</span>
                        <Form.Check
                            onChange={langhandle}
                            value={item.value}
                            type="checkbox"
                            id="langu"
                            className="langu"
                            checked={item.checkin ? "checked" : ""}
                        />
                    </div>
                </Col>
            </Row>
        );
    });
    ////////////////////////set data to certificate/////////////////////////////////
    const valid = props.data.certificates.map((item, index) => {
        let copyData = {...props.data};
        let val = [...copyData.certificates];
        if (val[index].needed === 1) {
            val[index].checkin = true;
        }
        const validhandle = () => {
            if (val[index].needed === 0) {
                val[index].checkin = !val[index].checkin;
                props.setData(copyData);
            }
        };
        return (
            <Row key={item.id}>
                <div className="col-8 text-services">{item.name}</div>
                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p className="stylenumprice">
                        <span className="widthprice">{item.price} </span><span className="styletoman"> تومان</span>
                        <span>
              <Form.Check
                  className="checkbox-container checkmark"
                  type="checkbox"
                  onChange={validhandle}
                  id={item.id}
                  checked={
                      item.needed === 1 ? "checked " : item.checkin ? "checked" : ""
                  }
              />
            </span>
                    </p>
                </Col>
            </Row>
        );
    });
    ////////////////////////set data to delivery/////////////////////////////////
    const typedelivery = props.data.delivery.map((item, index) => {
        const deliveryhandle = () => {
            let copyData = {...props.data};
            var del = [...copyData.delivery];
            del[0].checkin = !del[0].checkin;
            del[1].checkin = !del[1].checkin;
            props.setData(copyData);
        };
        return (
            <Row key={item.id}>
                <div className="col-8 text-services">{item.name}</div>
                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>
            <span>
              <Form.Check
                  type="checkbox"
                  name="deliver"
                  onChange={deliveryhandle}
                  id={item.id}
                  checked={item.checkin ? "checked" : ""}
              />
            </span>
                    </p>
                </Col>
            </Row>
        );
    });

    ///////////////////handle button to next step///////////////////////////
    const handleSubmit = () => {
        let blang = false;
        let bval = false;
        let bdel = false;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                blang = true;
                break;
            }
        }

        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                bval = true;
                break;
            }
        }
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                bdel = true;
                break;
            }
        }
        if (blang && bval && bdel) {
            props.click();
        } else if (blang === false) {
            ToastsStore.warning("لطفا یک زبان برای ترجمه انتخاب کنید");
        } else if (bval === false) {
            ToastsStore.warning("لطفا  نوع تاییدیه را انتخاب کنید");
        } else if (bdel === false) {
            ToastsStore.warning("لطفا نحوه ارسال  را  برای ترجمه انتخاب کنید");
        }
    };
    ////////////////////////change button active&color/////////////////////////////////
    const changeButton = () => {
        let blang = false;
        let bval = false;
        let bdel = false;
        for (let x in props.data.languages) {
            if (props.data.languages[x].checkin) {
                blang = true;
                break;
            }
        }
        for (let x in props.data.certificates) {
            if (props.data.certificates[x].checkin) {
                bval = true;
                break;
            }
        }
        for (let x in props.data.delivery) {
            if (props.data.delivery[x].checkin) {
                bdel = true;
                break;
            }
        }
        if (blang && bval && bdel) {
            setStyleone({
                backgroundColor: "#1976d2",
                borderRadius: "5px",
                boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)",
                color: "#fff"
            });
        } else {
            setStyleone({
                borderColor: "#e1e1e1",
                backgroundColor: "#fafafa",
                color: "#e1e1e1",
                border: "0px"
            });
        }
    };


    ////////////////////////check change login button/////////////////////////////////

    useEffect(() => {
        changeButton();
    }, [props.data]);

    ////////////////////////set data in cookie/////////////////////////////////

    return (
        <React.Fragment>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                <Card className="documenttype">
                    <Card.Header>نوع مدرک ترجمه</Card.Header>
                    <Card.Body>
                        <Card.Title>{Cookies.get("title")}</Card.Title>
                        <Card.Text>
                            زبان ترجمه
                            <span>{languagenum()} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            مهرو تاییدات<span>{acceptnum()} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            نسخه اضافه<span>{props.data.count} مورد</span>
                        </Card.Text>
                        <Card.Text>
                            نوع تحویل<span>{deliverynum()}</span>
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
                                <Col className="tabsorder" xl={3} lg={3} md={3} sm={3}>
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
                                                مهرو تاییدات
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <Image src={adddoc}/>
                                                نسخه اضافه
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">
                                                <Image src={delitype}/> نوع تحویل
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col className="tabsordercontent"
                                    // style={{minWidth: "300px", width: "300px"}}
                                     xl={9}
                                     lg={9}
                                     md={12}
                                     sm={12}
                                >
                                    <Tab.Content>
                                        <Tab.Pane className="tabcheckbox" eventKey="first">
                                            {lnaguage}
                                        </Tab.Pane>
                                        <Tab.Pane className="tabcheckbox" eventKey="second">
                                            {valid}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p
                                                style={{
                                                    color: "#454f63",
                                                    textAlign: "center",
                                                    fontSize: "1rem",
                                                    paddingTop: "2rem"
                                                }}
                                                className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12"
                                            >
                                                تعداد نسخه اضافه
                                            </p>
                                            <div className="counter">
                                                <div className="incre col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12">
                                                    <Button
                                                        className="increase"
                                                        onClick={() => {
                                                            let copyData = {...props.data};
                                                            copyData.count = (copyData.count + 1);
                                                            props.setData(copyData);
                                                        }}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                                <div className="text col-xl-8 col-lg-8 col-md-8 col-sm-12  col-xs-12">
                                                    {props.data.count}
                                                </div>
                                                <div className="dec col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12">
                                                    <Button
                                                        className="decrease col-x1-2 col-lg-2 col-md-2 col-sm-12  col-xs-12"
                                                        onClick={() => {
                                                            if (props.data.count !== 0){
                                                                let copyData = {...props.data};
                                                                copyData.count = (copyData.count - 1);
                                                                props.setData(copyData);
                                                            }
                                                        }}
                                                    >
                                                        -
                                                    </Button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tabcheckbox"
                                            style={{textAlign: "center"}}
                                            eventKey="fourth"
                                        >
                                            <p
                                                style={{
                                                    color: "#454f63",
                                                    textAlign: "center",
                                                    fontSize: "1rem",
                                                    padding: "1rem 0rem 1rem 2rem"
                                                }}
                                                className="col-x1-12 col-lg-12 col-md-12 col-sm-12  col-xs-12"
                                            >
                                                زمان تحویل ترجمه
                                            </p>
                                            {typedelivery}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </div>
                        )}/>
                    <Media
                        query="(max-width:992px)"
                        render={() => (
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        زبان ترجمه
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{lnaguage}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        مهرو تاییدات
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>{valid}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        تعداد نسخه اضافه
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <div className="counter">
                                                <div className="incre col-2">
                                                    <Button
                                                        className="increase"
                                                        onClick={() => {
                                                            let copyData = {...props.data};
                                                            copyData.count = (copyData.count + 1);
                                                            props.setData(copyData);
                                                        }}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                                <div className="text col-8">
                                                    {props.data.count}
                                                </div>
                                                <div className="dec col-2">
                                                    <Button
                                                        className="decrease col-2"
                                                        onClick={() => {
                                                            if (props.data.count !== 0){
                                                                let copyData = {...props.data};
                                                                copyData.count = (copyData.count - 1);
                                                                props.setData(copyData);
                                                            }
                                                        }}
                                                    >
                                                        -
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        زمان تحویل ترجمه
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body> {typedelivery}</Card.Body>
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


                <Button
                    style={{margin: "1rem 0", fontSize: ".8rem", fontFamily: "fanum"}}
                    variant="primary"
                    size="lg"
                >
                    <p>مجموع هزینه ها</p>
                    <p>{sumValue()} تومان</p>
                </Button>
                <Button style={styleone} id="add1" onClick={handleSubmit} type="submit">
                    ادامه سفارش
                </Button>
            </Col>
        </React.Fragment>
    );
};

export default TabsChoice;
