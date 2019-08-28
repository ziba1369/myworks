import React,{useState,useEffect} from "react";
import { Image, Col, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Translator from '../images/Translators.jpg';
import { metatagAPI } from "../api/api";
import MetaTags from "react-meta-tags";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
/////function aboutus
const AboutUs = () => {
  
  const [licence,setLicence]=useState([
    {
      name:"licence",
      imagelic:Translator
    },
    {
      name:"licence",
      imagelic:Translator
    }
    ,
    {
      name:"licence",
      imagelic:Translator
    }, 
    {
      name:"licence",
      imagelic:Translator
    }

  ])
  const [mettag, setMetatag] = useState({
    title: "",
    metatags: []
  });
  useEffect(() => {
    metatagAPI("aboutus", response => {
      console.log(response.data);
      if (response.data.success) {
        setMetatag({
          title: response.data.title,
          metatags: response.data.metatags
        });
      } else {
        ToastsStore.error(response.data.error);
      }
    });
  },[])
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <MetaTags>
        <title>{mettag.title}</title>
        {mettag.metatags.map(i => {
          if(mettag.metatags.name)
          {return (
              <meta name={i.name} content={i.content} /> 
          );}
          else if(mettag.metatags.property)
          {return (
              <meta property={i.property} content={i.content} />
          );}
        })}
      </MetaTags>
      <div className="container padding-about">
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
              <Breadcrumb.Item>درباره ما</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <div className="titlepage">درباره ما</div>
        <div className="row aboutpage">
         
          <Row>
          <p className="text-about  col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
            دارالترجمه رسمی هزاره سوم، با مجوز قوه قضاییه و با شماره پروانه
            تاسیس دارالترجمه رسمی 340 تهران از سال 1385 رسماً فعالیت خود را در
            زمینه ترجمه رسمی اسناد و مدارک آغاز نمود.این دارالترجمه همچنین دارای
            شماره ثبت 26360 از ثبت شرکت ها و موسسات غیرتجاری جهت انجام امور
            ترجمه غیررسمی می باشد. هدف اصلی از تاسیس دارالترجمه رسمی هزاره سوم
            ارائه کلیه خدمات ترجمه و امور مرتبط با آن برای هموطنان عزیز می باشد.
            از جمله خدمات این دارالترجمه ارائه سرویس ترجمه اسناد و مدارک و اخذ
            تاییدات ترجمه های انجام شده از سوی قوه قضاییه و وزارت امور خارجه می
            باشد. این خدمت برای افراد حقیقی و حقوقی ، شرکت ها و موسسات دولتی و
            خصوصی و نیز دانشجویان و مسافران و یا افراد خارجی و ایرانیان مقیم
            خارج از کشور جهت ارائه اسناد و مدارک خود به زبان کشور مقصد می باشد.
            در زمینه ترجمه غیررسمی و ترجمه مقالات و کتب و نیز ترجمه قراردادها و
            مکاتبات شرکت ها نیز دارالترجمه هزاره سوم، با بهره گیری از جدیدیترین
            روش های ترجمه اقدام به ارائه سرویس حضوری و غیرحضوری نموده است این
            دارالترجمه با بهره گیری از مترجمین رسمی قوه قضاییه، اساتید دانشگاه و
            نیز مترجمین غیررسمی رشته های مختلف سعی بر آن داشته که خدمات ترجمه ای
            به روز و مدرنی را برای مراجعین حضوری و نیز غیر حضوری در فضای مجازی
            ارائه نماید بنیانگذار و مدیریت این دارالترجمه آقای دکترمحمد باقر
            سالک موسوی میباشد.ایشان در سال 1356در تبریز متولد و تحصیلات خود را
            در در زمینه زبان و ادبیات انگلیسی ،آموزش زبان انگلیسی به غیر انگلیسی
            زبانان و نیز مترجمی زبان در دانشگاهای ایران انجام داده است. وی بیش
            از 17 سال است که کار حرفه ای تدریس و ترجمه زبان را همزمان انجام
            میدهند و در طی این سالها فقط و فقط با اتکا به نیرو و دانش خویش و نیز
            بهره جستن از اساتید اهل فن و خبرگان این رشته توانسته است تا با همراه
            سازی علم و عمل برای حداقل 20 نفر کار آفرینی نمایید و برای جامعه خویش
            مفید واقع شود.شعار وی در زمینه ترجمه دقت در ترجمه و نظم در زمان بندی
            تحویل کار به مردم میباشد و همیشه خود و کارمندانشان را به نظم در امور
            و دقت در ترجمه توصیه مینمایند. محل اصلی دارالترجمه درمنطقه 5 و میدان
            پونک تهران میباشد و اخیرا نیز در اواخر سال 1392 نیز شعبه جدید آن در
            تهران و در منطقه 2 افتتاح گردید. مدیریت مجموعه هدف از افتتاح این
            شعبه را ایجاد شغل برای جوانان و نیز ارایه خدمات ترجمه در نزدیکی محل
            زندگی مردم جهت جلوگیری از مسافرتهای درون شهری زاید و نیز کمک به
            تمیزی محیط زیست و کاهش آلودگی اعلام نمودند.
          </p>
          </Row>
           <Row>
              <p className="text-licence">مجوزها واعتبارها</p>
              <p className="image-licence row">
                {licence.map(pic=>{
                  return(
                     <div className="col-xl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12">
                    <Image src={pic.imagelic} alt={pic.name}/>
                   </div>
                  )
                })}
               
              </p>
          </Row> 
          <div className="row" style={{width:"100%",margin:"0px",padding: "0px"}}>
          <p className="text-licence">همکاران دارالترجمه</p>
          <div className="coworker col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div className="ul-coworker" >
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
              <div className="text-coworker"><span className="circle-coworker"></span>جناب آقای محمد قوچی مترجم  رسمی قوه قضاییه با شماره پروانه 927 دارای مدرک لیسانس زبان و ادبیات انگلیسی و نیز لیسانس حقوق و همچنین مدرک فوق لیسانس حقوق</div>
            </div>
          </div>
          </div> 
        
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
