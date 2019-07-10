// import React,{useState,useEffect} from 'react';
// import {Col, Button, Row, Carousel} from 'react-bootstrap';
// import bithSertificate from '../../../images/passport (1).svg';
// import idCard from '../../../images/id-card.svg';
// import score from '../../../images/exam.svg';
// import customtrans from '../../../images/document.svg';
// import builddoc from '../../../images/contract.svg';
// import workcer from '../../../images/work-certificate.svg';
// import diploma from '../../../images/diploma.svg';
// import marriage from '../../../images/marriage-certificate.svg';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
// import Media from 'react-media';
// import axios from "axios";
// import {
//     ToastsContainer,
//     ToastsStore,
//     ToastsContainerPosition
//   } from "react-toasts";
// const Popularservices = () => {
//  const [Information,setInfo]=useState([]);

// useEffect(()=>{
//     axios.get("http://hezare3vom.ratechcompany.com/api/front/get_popular_products", {headers: { 'Content-Type': 'application/json' }})
// .then(function (response) {
//     if (response.data.success) {
//        setInfo(response.data.products)
//        console.log(response.data.products)
//     } else {
//         ToastsStore.error(response.data.error);
//     }
// })
// .catch(function (error) {
//     ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
// })
// },[])

//     const cardServices = Information.map((item) => {
//         return (


//                 <Col key={item.id} xl={3} lg={3} md={3} sm={12} xs={12} className="popularservices">
//                     <div className="servicetran">
//                         <div className="imgtrans">

//                             {/* <p className="jello"><img src={item.img} alt={"item.img"}/></p> */}

//                             <p>{item.title}</p>
//                         </div>
//                         {/* <div className="descriptiontrans">

//                             {item.description.map((des) => (
//                                 <p key={des.id}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


//                             <p style={{textAlign: "center"}}>قیمت (تومان)</p>
//                             <p style={{textAlign: "center", fontSize: "1rem"}} className="green">{item.price}</p>
//                         </div> */}
//                     </div>
//                     <div className="custom">
//                         <Button type="submit" className="green"><a href="#">ثبت سفارش</a></Button>
//                     </div>

//                 </Col>


//         )
//     })

//     const carousel = Information.map((item, inex) => {
//         return (
//             <Carousel.Item key={item.id}>
//                 <div className="servicetran">
//                     <div className="imgtrans">

//                         <p className="jello"><img src={item.img} alt={"item.img"}/></p>

//                         <p>{item.title}</p>
//                     </div>
//                     {/* <div className="descriptiontrans">

//                         {item.description.map((des, i) => (
//                             <p key={i}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


//                         <p style={{textAlign: "center"}}>قیمت (تومان)</p>
//                         <p style={{textAlign: "center"}} className="green">{item.price}</p>
//                     </div> */}
//                 </div>
//                 <div className="custom">
//                     <Button type="submit" className="green">ثبت سفارش</Button>
//                 </div>


//             </Carousel.Item>


//         )
//     })
//     return (
//         <React.Fragment>
//             <Media query="(min-width:769px)">
//                 <Row className="popularservices rtl">
//                     <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
//                         <h4 className="titlesections">خدمات پرمخاطب ترجمه</h4>

//                     </Col>
//                     {cardServices}
//                 </Row>
//             </Media>
//             <Media query="(max-width:768px)">
//                 <Row className="popularservices rtl">
//                     <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
//                         <h5 className="titlesections">خدمات پرمخاطب ترجمه</h5>

//                     </Col>
//                     <Carousel interval={null}>
//                         {carousel}
//                     </Carousel>
//                 </Row>
//             </Media>
//         </React.Fragment>
//     );
// }

// export default Popularservices;

import React, {useState,useEffect} from 'react';
import {Col, Button, Row, Carousel} from 'react-bootstrap';
import bithSertificate from '../../../images/passport (1).svg';
import idCard from '../../../images/id-card.svg';
import score from '../../../images/exam.svg';
import customtrans from '../../../images/document.svg';
import builddoc from '../../../images/contract.svg';
import workcer from '../../../images/work-certificate.svg';
import diploma from '../../../images/diploma.svg';
import marriage from '../../../images/marriage-certificate.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import Media from 'react-media';
import * as Cookies from "js-cookie";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition
} from "react-toasts";
const Popularservices = (props) => {

    const [Information, setinfo] = useState([
        {
            id: 4,
            img: customtrans,
            title: "ترجمه سفارشی",
            description: ['ترجمه رسمی', 'مهرمترجم رسمی', 'مهر دادگستری'],
            price: '۲۵۰۰'
        }
    ]);
    useEffect(()=>{
      
            axios
                .get(
                    "http://hezare3vom.ratechcompany.com/api/front/get_popular_products",
                    props.match.params.id,
                    {
                        headers: {"Content-Type": "application/json"}
                    }
                )
                .then(function (response) {
                    if (response.data.success) {
                        setinfo([...response.data.products,...Information]);
                       console.log([...response.data.products,...Information])
                       
    
                    } else {
                        ToastsStore.error(response.data.error);
                        
                    }
                })
                .catch(function (error) {
                    ToastsStore.error("اتصال خود به اینترنت را بررسی نمایید.");
                });
          }, []);
   
    const cardServices = Information.map((item, inex) => {
        return (


            <Col key={item.id} xl={3} lg={3} md={3} sm={12} xs={12} className="popularservices">
                <div className="servicetran">
                    <div className="imgtrans">

                        <p className="jello"><img src={item.img} alt={"item.img"}/></p>

                        <p>{item.title}</p>
                    </div>
                    <div className="descriptiontrans">

                        {item.description.map((des, i) => (
                            <p key={i}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


                        <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                        <p style={{textAlign: "center", fontSize: "1rem"}} className="green">{item.price}</p>
                    </div>
                </div>
                <div className="custom">
                    <Button type="submit" className="green" style={{cursor: "pointer"}} onClick={() => {
                        Cookies.set('service', item.group_id, {expires: 7, path: '/'});
                        Cookies.set('types', item.id, {expires: 7, path: '/'});
                        props.history.push("/order/2");
                    }}>ثبت سفارش</Button>
                </div>

            </Col>


        )
    })

    const carousel = Information.map((item, inex) => {
        return (
            <Carousel.Item key={item.id}>
                <div className="servicetran">
                    <div className="imgtrans">

                        <p className="jello"><img src={item.img} alt={"item.img"}/></p>

                        <p>{item.title}</p>
                    </div>
                    <div className="descriptiontrans">

                        {item.description.map((des, i) => (
                            <p key={i}>{des}<FontAwesomeIcon icon={faCheckCircle}/></p>))}


                        <p style={{textAlign: "center"}}>قیمت (تومان)</p>
                        <p style={{textAlign: "center"}} className="green">{item.price}</p>
                    </div>
                </div>
                <div className="custom">
                    <Button type="submit" className="green">ثبت سفارش</Button>
                </div>


            </Carousel.Item>


        )
    })
    return (
        <React.Fragment>
            <Media query="(min-width:769px)">
                <Row className="popularservices rtl">
                    <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
                        <h4 className="titlesections">خدمات پرمخاطب ترجمه</h4>

                    </Col>
                    {cardServices}
                </Row>
            </Media>
            <Media query="(max-width:768px)">
                <Row className="popularservices rtl">
                    <Col className="servicestext" xl={12} md={12} sm={12} xs={12}>
                        <h5 className="titlesections">خدمات پرمخاطب ترجمه</h5>

                    </Col>
                    <Carousel interval={null}>
                        {carousel}
                    </Carousel>
                </Row>
            </Media>
        </React.Fragment>
    );
}

export default withRouter(Popularservices);