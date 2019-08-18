import React, { useState, useEffect } from "react";
import {Button,Form,Col,Nav,Row,Tab,TabContainer,Image,Card,Accordion} from "react-bootstrap";
import adddoc from "../../../images/add-documents.svg";
import delitype from "../../../images/deliverytype.svg";
import acceptsign from "../../../images/acceptsign.svg";
import tranlatelang from "../../../images/translatellang.svg";
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import axios from "axios";
import * as Cookies from "js-cookie";
import Media from "react-media";
////////////////////////tabchoice function /////////////////////////////////
const Tabschoice = ({ optiontype, onClicks, step, onChanges }) => {
  /////////////////////set variable ///////////////////////

  const [customOrder,setCustomorder]=useState({
    languages:[],
    title:'',
    des:'',
    confirm:0,
    type:0,
   
  
  })
  
  const [styleone, setStyleone] = useState({
    borderColor: "#e1e1e1",
    backgroundColor: "#fafafa",
    color: "#e1e1e1",
    border: "0px"
  });

  //////////////////////////set langu/////////////////////////
  const languaselect = (index) => {
    let customOrderCheck = {...customOrder};
    if (customOrder.languages[index].status === 0) {
        customOrderCheck.languages[index].status = 1
    } else if (customOrder.languages[index].status === 1) {
        customOrderCheck.languages[index].status = 0
    }
    setCustomorder(customOrderCheck);
};

  ////////////////////////set data to languages /////////////////////////////////

  const lnaguage = customOrder.languages.map((item, index) => {
    return (
      <Row>
       <div className="col-8 text-services">{item.lang}</div>
        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
          <div className="stylenumprice">
           
            
              <Form.Check
                
                value={item.lang}
                type="checkbox"
                id="langu"
                className="langu"
                onChange={()=>{languaselect(index)}}
                
              />
           
          </div>
        </Col>
      </Row>
    );
  });

/////////////////////////////////////handler title/////////////////////////////
  const setChangetitle=(e)=>{
    let customOrderCopy={...customOrder};
    customOrderCopy.title=e.target.value
    setCustomorder(customOrderCopy)
  }
  /////////////////////////////////////handler des/////////////////////////////
  const  setChangedes=(e)=>{
    let customOrderCopy={...customOrder};
    customOrderCopy.des=e.target.value
    setCustomorder(customOrderCopy)
  }
  ///////////////////////////////handler confirm///////////////////////////////
  const confirmChange=(index)=>{
    let customOrderCopy={...customOrder};
    customOrderCopy.confirm=index;
    setCustomorder(customOrderCopy)
  }
  /////////////////////////////////handler type translate///////////////////////
  const typeTranslateChange=(index)=>{
    let customOrderCopy={...customOrder};
    customOrderCopy.type=index;
    setCustomorder(customOrderCopy);
    
  }

  ////////////////////////set data from server/////////////////////////////////
  useEffect(() => {
    axios
      .get(
        "http://hezare3vom.ratechcompany.com/api/app_get_languages", 
        

        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function (response) {
        if(response.data.success)
        {
   
          let lang = [];
          for (let i in response.data.languages) {
              lang.push({
                  lang: response.data.languages[i],
                  status: 1
              })
          }
          setCustomorder({
            languages:lang,
            title:'',
            des:'',
            confirm:0,
            type:0,
          });

        }
      
      });
  }, []);

  //////////////////////////////////////num of languages/////////////////////////
  const languagenum = () => {
    let w = 0;
    for (let x in customOrder.languages) {
      if (customOrder.languages[x].status===0) {
        w++;
      }
    }
    return w;
  };
  //////////////////////////////////handle newxt step///////////////////////////////////////////////////////////////////
  const handleTabs = () => {
    if(languagenum()>0 && customOrder.title.length>1 && customOrder.type!==undefined && customOrder.confirm!==undefined)
    {
      onClicks()
    }
  }
  //////////////////////////////////// change button/////////////////////////////////////////////////////
  const handleChangeButton=()=>{
    if(languagenum()>0 && customOrder.title.length>1 && customOrder.type!==undefined && customOrder.confirm!==undefined)
    {setStyleone({
        backgroundColor: "#1976d2",
        borderRadius: "5px",
        boxShadow: "0px 6px 10px -2px rgba(0, 0, 0, 0.32)",
        color: "#fff"
    })}
  }
  useEffect(()=>{
    handleChangeButton()}
    ,[customOrder])
  ////////////////////////////////////////////post data/////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////
  return (
    <React.Fragment>
       <Col xl={3} lg={3} md={3} sm={12} xs={12}>
        <Card className="documenttype">
          <Card.Header>نوع مدرک ترجمه</Card.Header>
          <Card.Body>
            <Card.Title>{Cookies.get("title")}</Card.Title>
            <Card.Text>
              زبان ترجمه
              <span>
              {languagenum()}
                مورد
              </span>
            </Card.Text>
            <Card.Text>
             عنوان سفارش<span>{customOrder.title}</span>
            </Card.Text>
            <Card.Text>
              تاییدات<span>{customOrder.confirm===1 ?'رسمی':'غیررسمی'}</span>
            </Card.Text>
            <Card.Text>
              نوع تحویل<span>{customOrder.type===1 ?'فوری':'عادی'}</span>
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
        style={{ borderRadius: "1rem" }}
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
                    <Image src={tranlatelang} />
                    زبان ترجمه
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <Image src={acceptsign} />
                    عنوان سفارش
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <Image src={adddoc} />
                    توضیحات سفارش
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <Image src={delitype} /> تاییدات
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <Image src={delitype} /> نوع تحویل
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
                <Tab.Pane className="tabcheckbox title-customorder" eventKey="second">
                   <p >
                     <input type="text" value={customOrder.title}  onChange={(e)=>{setChangetitle(e)}}/>
                  </p>
                </Tab.Pane>
                <Tab.Pane className="tabcheckbox text-customorder" eventKey="third">
                  <p>
                   <textarea rows="4" cols="50"  type="text" value={customOrder.des} onChange={(e)=>{setChangedes(e)}}/>
                  </p>
                </Tab.Pane>
                <Tab.Pane className="tabcheckbox confirm-customorder" eventKey="fourth">
                  <p>
                    <span className="input-title">رسمی</span>  <input type="radio" name="certi" checked={customOrder.confirm===0?"checked":''} className="nameorder" value="0" onChange={()=>confirmChange(0)}/>
                 </p>
                 <p>
                    <span className="input-title">غیررسمی</span> <input type="radio" name="certi" checked={customOrder.confirm===1?"checked":''} className="nameorder" value="1" onChange={()=>confirmChange(1)} />
                 </p>
                </Tab.Pane>
                <Tab.Pane
                  className="tabcheckbox  type-customorder"
                  style={{ textAlign: "center" }}
                  eventKey="fifth"
                >
                  <p>
                  <span className="input-title">عادی</span>  <input type="radio" name="type" checked={customOrder.type===0?"checked":''} className="nameorder" value="0" onChange={()=>typeTranslateChange(0,'عادی')}/>
                 </p>
                 <p>
                 <span className="input-title">فوری</span>  <input type="radio" name="type" checked={customOrder.type===1?"checked":''} className="nameorder" value="1" onChange={()=>typeTranslateChange(1,'فوری')} />
                 </p>
                  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
          )}/>
           {/* <Media
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
                            onClick={() => setcount(prevCount => prevCount + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <div className="text col-8">
                          {count}
                        </div>
                        <div className="dec col-2">
                          <Button
                            className="decrease col-2"
                            onClick={() => {
                              if (count <= 0) setcount(0);
                              else {
                                setcount(prevCount => prevCount - 1);
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
      /> */}
        </TabContainer>
      </Col>
      <Col xl={3} lg={3} md={12} sm={12} xs={12} className="Continue-order">
        <ToastsContainer
          position={ToastsContainerPosition.TOP_CENTER}
          store={ToastsStore}
        />
        

        
        <Button style={styleone} id="add1" onClick={handleTabs}  type="submit">
          ادامه سفارش
        </Button>
      </Col>
    </React.Fragment>
  );
};

export default Tabschoice;
