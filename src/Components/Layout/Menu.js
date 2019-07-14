import React,{useState,useEffect} from 'react';
import {Nav, NavDropdown, Row,Dropdown,Col} from 'react-bootstrap';
import Media from 'react-media';
import {Link} from "react-router-dom";

const Menu = () => {
const[servicemenu,setservicemenu]=useState([
    {
        title:'مدارک شناسایی',
        link:'/services/1',
        child:[
            {
                title:'یک',
                link:'/services/1',
            },
            {
                title:'دو',
                link:'/services/1',
            }
        ]
     
    },
    {
        title:'مدارک تحصیلی',
        link:'/services/3',
        child:[
            {
                title:'یک',
                link:'/services/1',
            },
            {
                title:'دو',
                link:'/services/1',
            }
        ]
     
    },
    {
        title:'مدارک مالی',
        link:'/services/4',
        child:[
            {
                title:'یک',
                link:'/services/1',
            },
            {
                title:'دو',
                link:'/services/1',
            }
        ]
     
    },
    {
        title:'مدارک شغلی',
        link:'/services/2',
        child:[
            {
                title:'یک',
                link:'/services/1',
            },
            {
                title:'دو',
                link:'/services/1',
            }
        ]
     
    },
    {
        title:'مدارک شرکتی',
        link:'/services/0',
        child:[
            {
                title:'یک',
                link:'/services/1',
            },
            {
                title:'دو',
                link:'/services/1',
            }
        ]
     
    },
    
    

])
    return (

        <Nav className="menu">
            <div className="nav-link"><Link to="/">صفحه اصلی</Link></div>
            <div className="nav-link"><Link to="/">قیمت ترجمه</Link></div>
            <NavDropdown to="/" title="خدمات ترجمه" id="collasible-nav-dropdown" className="submenu">
           

                <Media
                    query="(min-width:768px)"

                    render={() =>
                       
                        <React.Fragment>
                            <Row>
                            {servicemenu.map(item=>{
                                return(
                            <Col lg={4} xl={4} md={4}>
                                <div className="smenu"><p><Dropdown.Item><Link to={item.link}>{item.title}</Link></Dropdown.Item></p>
                                {item.child.map(child=>{
                                   return(
                                    
                                    <Dropdown.Item href={child.link}>{child.title}</Dropdown.Item>
                                   )}
                                )}
                                   
                                </div>
                                </Col>
                          )}
                          )}
                                </Row>
                       
                        </React.Fragment>}/>
                <Media
                    query="(max-width:768px)"

                    render={() => <React.Fragment><Row>
                        {servicemenu.map(item=>{
                            return(
                            <React.Fragment>
                               <p> <Dropdown.Item><Link to={item.link}>{item.title}</Link></Dropdown.Item></p>
                               
                                {item.child.map(child=>{
                                    return(
                                     
                                     <Dropdown.Item href={child.link}>{child.title}</Dropdown.Item>
                                    )}
                                 )}
                                 </React.Fragment>
                            )
                        })

                        }
                        
                        {/* <Dropdown.Item href="#">یک</Dropdown.Item>
                        <Dropdown.Item href="#">دو</Dropdown.Item>
                        <Dropdown.Item href="#">سه</Dropdown.Item> */}



                    </Row></React.Fragment>}/>
                   
            </NavDropdown>

            <div className="nav-link"><Link to="/">تماس باما</Link></div>
            <div className="nav-link"><Link to="/">درباره ما</Link></div>
        </Nav>
    );
}

export default Menu;