import React from 'react';
import {Container, Button, Card, InputGroup, Row, Col, Breadcrumb} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PriceServices extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            activePage:1,
            data: [{
                id: 1,
                title: 'شناسنامه',
                pricetrans: "۲۵۰۰",
                extraprice: "۳۷۰۰"

            },
                {
                    id: 2,
                    title: 'شناسنامه',
                    pricetrans: "۲۵۰۰",
                    extraprice: "۳۷۰۰"

                },
                {
                    id: 3,
                    title: 'شناسنامه',
                    pricetrans: "۲۵۰۰",
                    extraprice: "۳۷۰۰"

                },
                {
                    id: 4,
                    title: 'شناسنامه',
                    pricetrans: "۲۵۰۰",
                    extraprice: "۳۷۰۰"

                },
                {
                    id: 5,
                    title: 'شناسنامه',
                    pricetrans: "۲۵۰۰",
                    extraprice: "۳۷۰۰"

                },
                {
                    id: 6,
                    title: 'شناسنامه',
                    pricetrans: "۲۵۰۰",
                    extraprice: "۳۷۰۰"

                }
            ]
        }
        this.onPageChanged = this.onPageChanged.bind(this)
    }

    onPageChanged(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    getButtonsId(id){
      let data=[];
      this.setState({data:data});
    }

    render() {


        return (
            <Container fluid className="contentpadding">

                <Row>
                    <Col className="service-breadcrumb" xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Breadcrumb className="rtl">
                            <Breadcrumb.Item><Link to="/">صفحه اصلی</Link></Breadcrumb.Item>
                            <Breadcrumb.Item active href={null}>
                                خدمات ترجمه
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>


                    <Col className="service-search" xl={3} lg={3} md={12} sm={12} xs={12}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                            </InputGroup.Prepend>

                            <input className="form-control textholder" type="text"
                                   placeholder="نام خدمات یا نوع مدرک را جستجو کنید" aria-label="Search"/>

                        </InputGroup>
                    </Col>
                </Row>


                <Row>
                    <Col className="service-detail rtl" xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Row>
                            {this.state.data.map((item, index) => {
                                    return (
                                        (<div id="paginationcard" key={index}
                                              className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 rtl">
                                            <Card className="detail-card">
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        <p className="textprice text-gray ">هزینه ترجمه:</p>
                                                        <p className="numberprice "> تومان{item.pricetrans}</p>
                                                        <p className="textprice text-gray ">هزینه نسخه اضافه:</p>
                                                        <p className="numberprice "> تومان{item.extraprice}</p>
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <p className="service-price"><a href={null}>ثبت سفارش</a></p>
                                                </Card.Footer>
                                            </Card>
                                        </div>)
                                    )
                                }
                            )
                            }

                        </Row>
                        <Pagination
                    activePage={this.state.activePage} // active page number
                    itemsCountPerPage={2} // your limit value send to server with axios
                    totalItemsCount={450} //TODO get it from server
                    pageRangeDisplayed={5} // Number of pages visitor see in browser
                    onChange={this.onPageChanged}
                />
                    </Col>


                    <Col className="service-box" xl={3} lg={3} md={12} sm={12} xs={12}>

                        <Card className="gservices" style={{textAlign: "center"}}>
                            <Card.Body>
                                <Card.Title className="sbox-title">گروه بندی خدمات</Card.Title>

                                <Button className="paleblue" block>
                                    همه موارد
                                </Button>
                                <Button className="navyblue" onClick={()=>this.getButtonsId(1)} block>
                                    مدارک شناسایی
                                </Button>
                                <Button className="pink" onClick={()=>this.getButtonsId(2)} block>
                                    مدارک تحصیلی
                                </Button>
                                <Button className="aquamarine" onClick={()=>this.getButtonsId(3)} block>
                                    مدارک مالی
                                </Button>
                                <Button className="violet" onClick={()=>this.getButtonsId(4)} block>
                                    مدارک شغلی
                                </Button>
                                <Button className="cream" onClick={()=>this.getButtonsId(5)} block>
                                    مدارک شرکتی
                                </Button>


                            </Card.Body>
                        </Card>
                    </Col>
                    <div>

                    </div>

                </Row>
            
            </Container>
        );
    }
}

export default PriceServices;
