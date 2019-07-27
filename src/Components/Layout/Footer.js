import React,{useState,useEffect} from "react";
import { Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import phoneIcon from '../../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../../images/email.svg';
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
  } from "react-toasts";
const Footer = () => {
    const [newsdet, setNews] = useState([]);
    const  pageLimit=3;
    useEffect(() => {
        axios
            .get(
                "http://hezare3vom.ratechcompany.com/api/front/get_news_list?limit=" + pageLimit  ,
                {
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(function (response) {
                if (response.data.success) {
                    setNews(response.data.news);
                    //console.log(response.data.news)
                   

                } else {
                    ToastsStore.error(response.data.error);
                }
            })
            // .catch(function (error) {
            //     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
            // });
            
      },[]);
    return ( 
        <Row className="foter-blog rtl">
        <Col  xl={12} lg={12}  md={12}   sm={12}  xs={12}>
          
          <Row>
           
           <Col  xl={2} lg={2}  md={2}   sm={12}  xs={12}>
             <p><Link to="/">صفحه اصلی</Link></p>
             <p><Link to="/">خدمات ترجمه</Link></p>
             <p><Link to="/">قیمت ترجمه</Link></p>
             <p><Link to="/">درباره ما</Link></p>
           </Col>
           <Col  xl={4} lg={4}  md={4}   sm={12}  xs={12}>
            <h5>آخرین خبر</h5>
             {newsdet.map(item=>{
              
                 return(
                     <p>{item.title}</p>
                 )
             }
                 )}
           </Col>
           <Col  xl={3} lg={3}  md={3}   sm={12}  xs={12} style={{textAlign:"center"}}> 
           <Col xl={12} lg={3} md={12} sm={12} xs={12}>
                      <p><img src={phoneIcon} alt={"phoneIcon"}/></p>
                      <p><span>021-44442131</span></p>
                      <p><span>021-44442131</span></p>
                  </Col>

                  <Col xl={12} md={12} sm={12} xs={12}>
                      <p><img src={emailIcon} alt={"emailIcon"}/></p>
                      <p className="mail"><span>info@Hezare3.com</span></p>

                  </Col>

           </Col> 
           <Col  xl={3} lg={3}  md={3}   sm={12}  xs={12}  style={{textAlign:"center"}}> 
           <Col xl={12} md={12} sm={12} xs={12}>
                      <p><img src={phoneIcon} alt={"phoneIcon"}/></p>
                      <p><span>میدان پونک ،ساختمان 130،طبقه 5ام، واحد320</span></p>
                     
                  </Col>

                  <Col xl={12} md={12} sm={12} xs={12} className="fontawe ">
                      <Link className="instagram"><FontAwesomeIcon icon={faInstagram}/></Link>
                      <Link className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></Link>
                      <Link className="twitter"><FontAwesomeIcon icon={faTwitter}/></Link>
                      <Link className="facebook"><FontAwesomeIcon icon={faFacebook}/></Link>

                  </Col>
                  
           </Col> 
          </Row>
        
        </Col>   
    </Row>
     );
}
 
export default Footer;