import React,{useState,useEffect} from "react";
import { Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import phoneIcon from '../../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../../images/email.svg';
import placeholder from '../../images/placeholder.svg';
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import {newsAPI} from '../../api/api';
////////////////footer function/////////////////
const Footer = () => {
    ////////////////set inintal variable/////////////////
    const [newsdet, setNews] = useState([]);
    const  pageLimit=3;
    //////////////////use effect to get data from srever////
    useEffect(() => {
       newsAPI(pageLimit,(response)=>{
        if (response.data.success) {
            setNews(response.data.news);
           
           

        } else {
            ToastsStore.error(response.data.error);
        }
       })

      
      },[]);
    return ( 
      
        <Row className="foter-blog rtl">
         <ToastsContainer   position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} />
        <Col  xl={12} lg={12}  md={12}   sm={12}  xs={12}>
          
          <Row>
           
           <Col  xl={2} lg={2}  md={2}   sm={12}  xs={12}>
             <p><Link to="/">صفحه اصلی</Link></p>
             <p><Link to="/services/all">خدمات ترجمه</Link></p>
             <p><Link to="/">قیمت ترجمه</Link></p>
             <p><Link to="/contactus">تماس باما</Link></p>
             <p><Link to="/aboutus">درباره ما</Link></p>
           </Col>
           <Col  xl={4} lg={4}  md={4}   sm={12}  xs={12}>
            <h5>آخرین خبر</h5>
             {newsdet.map(item=>{
              
                 return(
                     <p> <Link to={"/blog/" + item.slug}>{item.title}</Link></p>
                 )
             }
                 )}
           </Col>
           <Col  xl={3} lg={3}  md={3}   sm={12}  xs={12} style={{textAlign:"center"}}> 
           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
                    <p><img src={phoneIcon} alt={"phoneIcon"}/></p>
                      <p><span>021-44442131</span></p>
                      <p><span>021-44442131</span></p>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
                      <p><img src={emailIcon} alt={"emailIcon"}/></p>
                      <p className="mail"><span>info@Hezare3.com</span></p>

                  </div>

           </Col> 
           <Col  xl={3} lg={3}  md={3}   sm={12}  xs={12}  style={{textAlign:"center"}}> 
           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
                    <p><img src={placeholder} alt={"placeholder"}/></p>
                      <p><span>میدان پونک ،ساختمان 130،طبقه 5ام، واحد320</span></p>
                     
                  </div>

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