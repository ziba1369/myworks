import React, { useState, useeffect } from "react";
import { Col, Row, Breadcrumb, Container, Image,Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import khabanameh from "../images/khabarnameh.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import phoneIcon from '../images/phone-symbol-of-an-auricular-inside-a-circle.svg';
import emailIcon from '../images/email.svg';
const BlogOriginal = () => {
  const [newsdet, setnews] = useState([
    {
      id: 1,
      img: khabanameh,
      title: "مراحل ترجمه رسمی  در ایران",
      date: "۲۲ آذر ۹۸",
      content:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      id: 2,
      img: khabanameh,
      title: "مراحل ترجمه رسمی  در ایران",
      date: "۲۲ آذر ۹۸",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
    },
    {
      id: 3,
      img: khabanameh,
      title: "مراحل ترجمه رسمی  در ایران",
      date: "۲۲ آذر ۹۸",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
    },
    {
      id: 4,
      img: khabanameh,
      title: "مراحل ترجمه رسمی  در ایران",
      date: "۲۲ آذر ۹۸",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
    }
  ]);
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
  return (
    <Container>
      <Row>
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
              <Link to="/services">اخبار</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item active href={null}>
              {newsdet[0].title}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row style={{ margin: "1rem 0.2rem 4rem .2rem" }}>
        <Col lg={4} xl={4} md={4} sm={12} xs={12}>
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
              {tag.map(i=>{return (
                  <Button>{i.name}</Button>
              )})}
          </div>

        </Col>
        <Col
          className="detailnews"
          lg={{ span: 7, offset: 1 }}
          xl={{ span: 7, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          sm={12}
          xs={12}
        >
          <Image src={newsdet[0].img} alt={newsdet[0].title} />
          <Col lg={12} xl={12} md={12} sm={12} xs={12}>
            <p className="detail-title">{newsdet[0].title}</p>
            <p>{newsdet[0].content}</p>
          </Col>
        </Col>
      </Row>
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
    </Container>
  );
};

export default BlogOriginal;
