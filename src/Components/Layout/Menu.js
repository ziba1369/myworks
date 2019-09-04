import React, {useState, useEffect} from "react";
import {Nav, NavDropdown, Row, Dropdown, Col} from "react-bootstrap";
import Media from "react-media";
import {Link, withRouter} from "react-router-dom";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import * as Cookies from "js-cookie";
import {menuAPI} from '../../api/api';
////////////////menu function/////////////////////
const Menu = props => {
    ////////////////set initial variable/////////////////////
    const [servicemenu, setservicemenu] = useState([]);
    ////////////////get data menu from server/////////////////////
    useEffect(() => {
        menuAPI(response => {
            if (response.data.success) {
                setservicemenu(response.data.headers);
            }
        })

    }, []);

    return (
        <Nav className="menu">
            <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
                             store={ToastsStore}
            />
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
                                    return (
                                        <Col lg={4} xl={4} key={item.id}>
                                            <div className="smenu">
                                                <p>
                                                    <Dropdown.Item className="dropdown-item" role="button">
                                                        <Link to={"/services/" + item.id + "/" + item.slug}>{item.title}</Link>
                                                    </Dropdown.Item>
                                                </p>
                                                {item.subcat.map(child => {
                                                    return (
                                                        <Dropdown.Item
                                                            onClick={() => {
                                                                Cookies.set("title", child.name, {
                                                                    expires: 7,
                                                                    path: "/"
                                                                });
                                                                Cookies.set("types", child.id, {
                                                                    expires: 7,
                                                                    path: "/"
                                                                });
                                                                props.history.push("/order/" + child.slug);
                                                            }}
                                                            key={child.id}
                                                        >
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
                                    return (
                                        <React.Fragment>
                                            <p>
                                                {" "}
                                                <Dropdown.Item key={item.id}>
                                                    <Link
                                                        to={"/services/" + item.id + "/" + item.slug}>{item.title}</Link>
                                                </Dropdown.Item>
                                            </p>
                                            {item.subcat.map(child => {
                                                return (
                                                    <Dropdown.Item
                                                        onClick={() => {
                                                            Cookies.set("title", child.name, {
                                                                expires: 7,
                                                                path: "/"
                                                            });
                                                            Cookies.set("types", child.id, {
                                                                expires: 7,
                                                                path: "/"
                                                            });
                                                            props.history.push("/order/" + child.slug);
                                                        }}
                                                        key={child.id}
                                                    >
                                                        {child.name}
                                                    </Dropdown.Item>
                                                );
                                            })}
                                        </React.Fragment>
                                    );
                                })}
                            </Row>
                        </React.Fragment>
                    )}
                />
            </NavDropdown>

            <div className="nav-link">
                <Link to="/contactus">تماس باما</Link>
            </div>
            <div className="nav-link">
                <Link to="/aboutus">درباره ما</Link>
            </div>
        </Nav>
    );
};

export default withRouter(Menu);
