import React, {useState,useEffect} from 'react';
import {Image, Col, Row} from "react-bootstrap";
import khabanameh from "../images/khabarnameh.jpg";
import {Link} from "react-router-dom";
import Paginatior from "react-hooks-paginator";
import axios from "axios";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
import Footer from './Layout/Footer';
const Steptranslate = () => {
    const  pageLimit=7;
    const [currentData, setCurrentData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const[lastnews,setLastnews]=useState([])
    const [newsdet, setNews] = useState([]);
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
            .catch(function (error) {
                ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
            });
            
      },[]);
      useEffect(() => {
        axios
            .get(
                "http://hezare3vom.ratechcompany.com/api/front/get_news_list?limit=1",
                {
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(function (response) {
                if (response.data.success) {
                    setLastnews(response.data.news);
                    //console.log(response.data.news)
                   

                } else {
                    ToastsStore.error(response.data.error);
                }
            })
            .catch(function (error) {
                ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
            });
            
      },[]);
    const show = newsdet.map((item, index) => {
        return (

            <Row className="contnewsletter" key={item.id}>
                <Col className="newsimage" xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Image src={item.img} alt={item.title}/>
                </Col>
                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Row>
                        <Col
                            className="rtl titlenews"
                            xl={8}
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                        >
                            <h5>{item.title}</h5>
                        </Col>
                        <Col className="newsdate" xl={4} lg={4} md={4} sm={12} xs={12}>
                            {item.date}
                        </Col>
                    </Row>
                    <Row className="contentnews rtl">{item.content}</Row>
                    <Row className="extracontent">
                    <Link to={'/blog/'+item.slug}> ادامه مطلب</Link>
                    </Row>
                </Col>
            </Row>


        );
    });
    const showlast = lastnews.map((item, index) => {
        return (

            <Row className="contnewsletterlast" key={item.id}>
                <Col className="newsimage" xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Image src={item.img} alt={item.title}/>
                </Col>
                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Row>
                        <Col
                            className="rtl titlenews"
                            xl={8}
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                        >
                            <h5>{item.title}</h5>
                        </Col>
                        <Col className="newsdate" xl={4} lg={4} md={4} sm={12} xs={12}>
                            {item.date}
                        </Col>
                    </Row>
                    <Row className="contentnews rtl">{item.content}</Row>
                    <Row className="extracontent">
                    <Link to={'/blog/'+item.slug}> ادامه مطلب</Link>
                    </Row>
                </Col>
            </Row>


        );
    });
 
     
    return ( 
        <React.Fragment>
             <Row className=" slideone rtl">
                <Col xl={{ span: 10, offset: 1}} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={12} className="centerlogo">
                 {showlast}             
                </Col>
                </Row>
                <Row className="rtl" >
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 4 }} xs={{ span: 8, offset: 2 }} className="newsletter">
                {show}
                
            </Col>
         
            </Row>
            <div className="rtl centerapge">
            <Paginatior
          totalRecords={newsdet.length}
          pageLimit={1}
          pageNeighbours={1}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
    
      </div>
      <Footer/>
        </React.Fragment>
     );
}
 
export default Steptranslate;