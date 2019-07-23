import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Row, Dropdown, Col } from "react-bootstrap";
import Media from "react-media";
import { Link,withRouter} from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import axios from "axios";
const Menu = (props) => {

  const [servicemenu, setservicemenu] = useState([
  //   {
  //     id:'1',
  //     title: "مدارک شناسایی",
  //     link: "/services/1",
  //     child: [
  //       {
  //         id:"11",
  //         title: "یک",
  //         link: "/services/1"
  //       },
  //       {
  //         id:'12',
  //         title: "دو",
  //         link: "/services/1"
  //       }
  //     ]
  //   },
  //   {
  //     title: "مدارک تحصیلی",
  //     link: "/services/3",
  //     id:'2',
  //     child: [
  //       {
  //         id:'21',
  //         title: "یک",
  //         link: "/services/1"
  //       },
  //       {
  //         id:'22',
  //         title: "دو",
  //         link: "/services/1"
  //       }
  //     ]
  //   },
  //   {
  //     id:'3',
  //     title: "مدارک مالی",
  //     link: "/services/4",
  //     child: [
  //       {
  //         id:'31',
  //         title: "یک",
  //         link: "/services/1"
  //       },
  //       {
  //         id:'32',
  //         title: "دو",
  //         link: "/services/1"
  //       }
  //     ]
  //   },
  //   {
  //     id:'4',
  //     title: "مدارک شغلی",
  //     link: "/services/2",
  //     child: [
  //       {
  //         id:'41',
  //         title: "یک",
  //         link: "/services/1"
  //       },
  //       {
  //         id:'42',
  //         title: "دو",
  //         link: "/services/1"
  //       }
  //     ]
  //   },
  //   {
  //     id:'5',
  //     title: "مدارک شرکتی",
  //     link: "/services/0",
  //     child: [
  //       {
  //         id:'51',
  //         title: "یک",
  //         link: "/services/1"
  //       },
  //       {
  //         id:'52',
  //         title: "دو",
  //         link: "/services/1"
  //       }
  //     ]
  //   }
    ]);
    // const childhandler=(item)=>{
    //   Cookies.set('title', item.title, {expires: 7, path: '/'});
    //   Cookies.set('types', item.id, {expires: 7, path: '/'});
    //   props.history.push("/order/" + item.slug);
    //   window.location.reload();
    // }
  useEffect(() => {
    axios
      .get("http://hezare3vom.ratechcompany.com/api/front/web_menu", {
        headers: { "Content-Type": "application/json" }
      })
      .then(function(response) {
        
        if (response.data.success) {
           setservicemenu(response.data.headers);
           console.log(response.data.headers);
        } else {
          ToastsStore.error(response.data.error);
        }
      })
      .catch(function(error) {
        ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
      });
  }, []);

  return (
    <Nav className="menu">
      <div className="nav-link">
        <Link to="/">صفحه اصلی</Link>
      </div>
      <div className="nav-link">
        <Link to="/">قیمت ترجمه</Link>
      </div>
      <NavDropdown
        to="/"
        title="خدمات ترجمه"
        id="collasible-nav-dropdown"
        className="submenu"
      >
        <Media
          query="(min-width:992px)"
          render={() => (
            <React.Fragment>
              <Row>
                {servicemenu.map(item => {
                 const link='/services/'+ item.id;
                  return (
                    
                    <Col lg={4} xl={4}  key={item.id} >
                      <div className="smenu">
                        <p>
                         
                          
                        
                          <Dropdown.Item  class="dropdown-item" role="button">
                          <Link to={link}>
                            {item.title}
                          </Link>
                            </Dropdown.Item>
                        
                        
                         
                         
                        </p>
                        {item.subcat.map(child => {
                        
                          return (
                        
                            <Dropdown.Item onClick={() =>{    Cookies.set('title', child.name, {expires: 7, path: '/'});
                            Cookies.set('types', child.id, {expires: 7, path: '/'});
                            props.history.push("/order/" + child.slug);
                            } } key={child.id}>
                             
                                {child.name}  
                              
                          
                            </Dropdown.Item>
                          
                          );
                        })}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </React.Fragment>
          )}
        />
        <Media
          query="(max-width:991px)"
          render={() => (
            <React.Fragment>
              <Row>
                {servicemenu.map(item => {
                    const link='/services/'+ item.id;
                  return (
                    <React.Fragment>
                      <p>
                        {" "}
                        <Dropdown.Item key={item.id}>
                          <Link to={link}>{item.title}</Link>
                        </Dropdown.Item>
                      </p>

                      {item.subcat.map(child => {
                        
                        return (
                          <Dropdown.Item onClick={() =>{    Cookies.set('title', child.name, {expires: 7, path: '/'});
                          Cookies.set('types', child.id, {expires: 7, path: '/'});
                          props.history.push("/order/" + child.slug);
                          } } key={child.id}>
                            
                            {child.name}
                           
                          </Dropdown.Item>
                        );
                      })}
                    </React.Fragment>
                  );
                })}

                {/* <Dropdown.Item href="#">یک</Dropdown.Item>
                        <Dropdown.Item href="#">دو</Dropdown.Item>
                        <Dropdown.Item href="#">سه</Dropdown.Item> */}
              </Row>
            </React.Fragment>
          )}
        />
      </NavDropdown>

      <div className="nav-link">
        <Link to="/">تماس باما</Link>
      </div>
      <div className="nav-link">
        <Link to="/">درباره ما</Link>
      </div>
    </Nav>
  );
};

export default withRouter(Menu);
