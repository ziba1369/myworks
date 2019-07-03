import React from 'react';
import {Nav, NavDropdown, Row} from 'react-bootstrap';
import Media from 'react-media';
import {Link} from "react-router-dom";

const Menu = () => {

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
                                <div className="smenu"><p><Link to="/services/1">مدارک شناسایی</Link></p>
                                    <NavDropdown.Item><Link to="/Order">یک</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#">دو</NavDropdown.Item>
                                    <NavDropdown.Item href="#">سه</NavDropdown.Item>
                                </div>
                                <div className="smenu"><p>مدارک شناسایی</p>
                                    <NavDropdown.Item href="#">یک</NavDropdown.Item>
                                    <NavDropdown.Item href="#">دو</NavDropdown.Item>
                                    <NavDropdown.Item href="#">سه</NavDropdown.Item>
                                </div>
                            </Row>
                            <Row>
                                <div className="smenu"><p>مدارک شناسایی</p>
                                    <NavDropdown.Item href="#">یک</NavDropdown.Item>
                                    <NavDropdown.Item href="#">دو</NavDropdown.Item>
                                    <NavDropdown.Item href="#">سه</NavDropdown.Item>
                                </div>
                                <div className="smenu"><p>مدارک شناسایی</p>
                                    <NavDropdown.Item href="#">یک</NavDropdown.Item>
                                    <NavDropdown.Item href="#">دو</NavDropdown.Item>
                                    <NavDropdown.Item href="#">سه</NavDropdown.Item>
                                </div>
                            </Row>
                        </React.Fragment>}/>
                <Media
                    query="(max-width:768px)"

                    render={() => <React.Fragment><Row>
                        <p>مدارک شناسایی</p>
                        <NavDropdown.Item href="#">یک</NavDropdown.Item>
                        <NavDropdown.Item href="#">دو</NavDropdown.Item>
                        <NavDropdown.Item href="#">سه</NavDropdown.Item>

                        <p>مدارک شناسایی</p>
                        <NavDropdown.Item href="#">یک</NavDropdown.Item>
                        <NavDropdown.Item href="#">دو</NavDropdown.Item>
                        <NavDropdown.Item href="#">سه</NavDropdown.Item>


                        <p>مدارک شناسایی</p>
                        <NavDropdown.Item href="#">یک</NavDropdown.Item>
                        <NavDropdown.Item href="#">دو</NavDropdown.Item>
                        <NavDropdown.Item href="#">سه</NavDropdown.Item>

                        <p>مدارک شناسایی</p>
                        <NavDropdown.Item href="#">یک</NavDropdown.Item>
                        <NavDropdown.Item href="#">دو</NavDropdown.Item>
                        <NavDropdown.Item href="#">سه</NavDropdown.Item>

                    </Row></React.Fragment>}/>

            </NavDropdown>

            <Nav.Link href="#pricing">تماس باما</Nav.Link>
            <Nav.Link href="#pricing">درباره ما</Nav.Link>
        </Nav>
    );
}

export default Menu;