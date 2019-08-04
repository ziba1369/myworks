import React from "react";
import Container from "react-bootstrap/Container";
import {Col} from "react-bootstrap";
import Slide from "./Layout/home/Slide";
import Introduce from "./Layout/home/Introduce";
import Services from "./Layout/home/Services";
import Popularservices from "./Layout/home/Popularservices";
import Contatus from "./Layout/home/ContatctUs";
import Relatedwebsites from "./Layout/home/Relatedwebsites";
import Newsletter from "./Layout/home/Newsletter";
import MetaTags from 'react-meta-tags';
import NavBar from "./Layout/NavBar";
//////////////////home function/////////////////////
const Home = () => {
    return (
      
        <React.Fragment>
             <header>
                <NavBar/>  
             </header>
             {/* <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags> */}
            <Col xl={12} md={12} sm={12} xs={12} className=" rtl">
                <Slide/>
            </Col>
            <Container>
                <Introduce/>
                <Services/>
                <Popularservices/>
            </Container>
            <Relatedwebsites/>
            <Container>
                <Newsletter/>
            </Container>

            <footer className="rtl footerback">
                <Container>
                    <Col
                        xl={{span: 10, offset: 1}}
                        md={12}
                        sm={12}
                        xs={12}
                        className="footer"
                    >
                        <Contatus/>
                    </Col>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Home;
