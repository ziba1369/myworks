import React,{useState,useEffect} from "react";
import { Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import phoneIcon from '../../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../../images/email.svg';
import placeholder from '../../images/placeholder.svg';
import {ToastsContainer,ToastsStore,ToastsContainerPosition} from "react-toasts";
import {contactUsInfoAPI, newsAPI} from '../../api/api';
////////////////footer function/////////////////
const Footer = () => {
    ////////////////set inintal variable/////////////////
    const [contactData, setContactData] = useState({
        address: "",
        email: "",
        phone: [],
        social: {
            instagram: "",
            facebook: "",
            linkedin: "",
            twitter: ""
        }
    });
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
       });
        contactUsInfoAPI(response=>{
            if (response.data.success) {
                setContactData({
                    address: response.data.address.split("&")[0],
                    email: response.data.email,
                    phone: response.data.phone,
                    social: response.data.social
                });
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
             <p><Link to="/services/all/allServices">خدمات ترجمه</Link></p>
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
               {contactData.phone.map((phoneNumber, index)=>(
                   <p key={index}><span>{phoneNumber}</span></p>
               ))}
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
                      <p><img src={emailIcon} alt={"emailIcon"}/></p>
                      <p className="mail"><span>{contactData.email}</span></p>

                  </div>

           </Col> 
           <Col  xl={3} lg={3}  md={3}   sm={12}  xs={12}  style={{textAlign:"center"}}> 
           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
                    <p><img src={placeholder} alt={"placeholder"}/></p>
                      <p><span>{contactData.address}</span></p>
                  </div>
                  <Col xl={12} md={12} sm={12} xs={12} className="fontawe ">
                      <a href={contactData.social.instagram} className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                      <a href={contactData.social.linkedin} className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></a>
                      <a href={contactData.social.twitter} className="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                      <a href={contactData.social.facebook} className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                  </Col>
           </Col> 
          </Row>
        
        </Col>   
    </Row>
     );
}
 
export default Footer;