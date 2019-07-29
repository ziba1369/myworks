import React, { useState, useEffect } from "react";
import { Col, Row, Breadcrumb, Container, Image,Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from './Layout/NavBar';
import khabanameh from "../images/khabarnameh.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import phoneIcon from '../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../images/email.svg';
import * as Cookies from "js-cookie";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import axios from "axios";
import Footer from './Layout/Footer';
const BlogOriginal = (props) => {
  const [newsdet, setNews] = useState([]);
  const [tag,setTag]=useState([
      {
          id:'1',
          name:'ترجمه رسمی'
      },
      {
        id:'2',
        name:'ترجمه' 
      }
  ])
  useEffect(() => {
  
    axios
        .get(
            "http://hezare3vom.ratechcompany.com/api/front/get_news/?news_slug="+props.match.params.slug,
            
            {
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(function (response) {
         // console.log(response)
            if (response.data.success) {
                setNews([response.data]);
                //console.log(setNews)
              
               
            } else {
                ToastsStore.error(response.data.error);
            }
        })
        // .catch(function (error) {
        //     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
        // });
        
  },[props.match.params.slug]);
  return (
      <React.Fragment>
          <header>
                <NavBar/>  
             </header>
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
            return (
              <React.Fragment>
              {i.title}
              </React.Fragment>
            )
            })
          }
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
  
      <Row className="rtl">
      <Col className="detailnews"
          lg={{ span: 7, offset: 1 }}
          xl={{ span: 7, offset: 1 }}
          md={{ span:8, offset:2 }}
          sm={{ span:8, offset:2 }}
          xs={{ span:8, offset:2  }}
          style={{marginLeft: "4% !important",marginRight:"3% !important"}}
        >
      {newsdet.map(i=>{
          return(
           <React.Fragment>

          <Image src={i.img} alt={i.title} />
          <Col lg={12} xl={12} md={12} sm={12} xs={12}>
            <p className="detail-title">{i.short}</p>
            <div className="content-news" dangerouslySetInnerHTML={{__html: i.content}}></div>
          </Col>
          </React.Fragment>
          )
          })
        }
         </Col>
        <Col lg={{ span:4, offset:0 }} xl={{ span:4, offset:0 }} md={{ span:8, offset:2 }} sm={{ span:8, offset:2 }} xs={{ span:8, offset:2 }}>
          <div className="rlnews">
          <h5 className="head-rtnews">اخبارهای مرتبط</h5>
          {newsdet.map(i => {
            return (
              <Row>
                <Col lg={7} xl={7} md={12} sm={12} xs={12}>
                  {i.title}
                </Col>
                <Col lg={5} xl={5} md={12} sm={12} xs={12}>
                  <Image src={i.img} alt={i.title} />
                </Col>
              </Row>
            );
          })}
          </div>
          <div className="tag">
              {newsdet.map(item=>{
              return(
                <React.Fragment>
                {item.tags.map(tag=>{
                  return (
                    <button type="button" class="btn btn-primary">{tag}</button>
                  )
                })}
                </React.Fragment>
              )
              }
              )} 
          </div>

        </Col>
       
      </Row>
    </Container>
    <Footer/>
      </React.Fragment>
  );
};

export default BlogOriginal;
