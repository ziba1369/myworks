import React, {useState} from 'react';
import {Image, Col, Row} from "react-bootstrap";
import khabanameh from "../images/khabarnameh.jpg";
import {Link} from "react-router-dom";
import Paginatior from "react-hooks-paginator";
const Steptranslate = () => {
    const  pageLimit=1;
    const [currentData, setCurrentData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const[lastnews,setLastnews]=useState([
        {
            id: 6,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }
    ])
    const [newsdet, setnews] = useState([
        {
            id: 1,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        },
        {
            id: 2,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }
        ,
        {
            id: 3,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }
        ,
        {
            id: 4,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }
        ,
        {
            id: 5,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        },
        {
            id: 6,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        },
        {
            id: 7,
            img: khabanameh,
            title: "مراحل ترجمه رسمی  در ایران",
            date: "۲۲ آذر ۹۸",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
        }

    ]);
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
                        <Link to="{null}"> ادامه مطلب</Link>
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
                        <Link to="{null}"> ادامه مطلب</Link>
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
        </React.Fragment>
     );
}
 
export default Steptranslate;