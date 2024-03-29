import React, {useState, useEffect} from "react";
import {Col, Row, Breadcrumb, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";
import {metatagAPI} from "../api/api";
import MetaTags from "react-meta-tags";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import axios from "axios";
import Footer from "./Layout/Footer";
import {newsAPI, get_newsAPI} from "../api/api";
///////////detail-news function//////////////////
const BlogOriginal = props => {
    ///////////set initial variable//////////////////
    const [newsdet, setNews] = useState([]);
    const [news, setNewss] = useState([]);
    const [mettag, setMetatag] = useState({
        title: "",
        metatags: []
    });
    //////////////get dtail news from server//////////////////

    useEffect(() => {
        newsAPI(4, (response) => {
            if (response.data.success) {
                setNewss(response.data.news);

            } else {
                ToastsStore.error(response.data.error);
            }
        })


        get_newsAPI(props.match.params.slug, response => {
            if (response.data.success) {
                setNews([response.data]);
            } else {
                ToastsStore.error(response.data.error);
            }
        });
        metatagAPI(props.match.params.slug, (response) => {
            if (response.data.success) {
                setMetatag({
                    title: response.data.title,
                    metatags: response.data.metatags
                });
            }
        });
    }, [props.match.params.slug]);

    return (
        <React.Fragment>
            <ToastsContainer
                position={ToastsContainerPosition.TOP_CENTER}
                store={ToastsStore}
            />
            <header>
                <NavBar/>
            </header>
            <MetaTags>
                <title>{mettag.title}</title>
                {mettag.metatags.map(i => {
                    if (mettag.metatags.name) {
                        return (
                            <meta name={i.name} content={i.content}/>
                        );
                    } else if (mettag.metatags.property) {
                        return (
                            <meta property={i.property} content={i.content}/>
                        );
                    }
                })}
            </MetaTags>
            <Container>
                <Col
                    className="service-breadcrumb"
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <Breadcrumb className="rtl">
                        <Breadcrumb.Item>
                            <Link to="/">صفحه اصلی</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/news">اخبار</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active href={null}>
                            {newsdet.map(i => {
                                return <React.Fragment key={i.id}>{i.title}</React.Fragment>;
                            })}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>

                <Row className="rtl">
                    <Col
                        className="detailnews"
                        lg={{span: 8, offset: 0}}
                        xl={{span: 8, offset: 0}}
                        md={{span: 10, offset: 1}}
                        sm={{span: 10, offset: 1}}
                        xs={{span: 10, offset: 1}}
                    >
                        {newsdet.map(i => {
                            return (
                                <React.Fragment key={i.id}>
                                    <Image src={i.img} alt={i.title}/>
                                    <Col lg={12} xl={12} md={12} sm={12} xs={12}>
                                        <p className="detail-title">{i.short}</p>
                                        <div
                                            className="content-news"
                                            dangerouslySetInnerHTML={{__html: i.content}}
                                        />
                                    </Col>
                                </React.Fragment>
                            );
                        })}
                    </Col>
                    <Col
                        lg={{span: 4, offset: 0}}
                        xl={{span: 4, offset: 0}}
                        md={{span: 10, offset: 1}}
                        sm={{span: 10, offset: 1}}
                        xs={{span: 10, offset: 1}}
                        className='related-news'
                    >
                        <div className="rlnews">
                            <h5 className="head-rtnews">اخبارهای مرتبط</h5>
                            {news.map(i => {
                                return (
                                    <Row key={i.id}>
                                        <Col lg={7} xl={7} md={12} sm={12} xs={12}>
                                            <Link to={"/blog/" + i.slug}> {i.title}</Link>
                                        </Col>
                                        <Col lg={5} xl={5} md={12} sm={12} xs={12}>
                                            <Image src={i.img} alt={i.title}/>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                        {/* <div className="tag">
              {newsdet.map(item => {
                return (
                  <React.Fragment>
                    {item.tags.map(tag => {
                      return (
                        <button key={tag.id} type="button" class="btn btn-primary">
                          {tag}
                        </button>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </div> */}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
};

export default BlogOriginal;
