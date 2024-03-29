import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Slide from "./Layout/home/Slide";
import Introduce from "./Layout/home/Introduce";
import Services from "./Layout/home/Services";
import Popularservices from "./Layout/home/Popularservices";
import Contatus from "./Layout/home/ContatctUs";
import Relatedwebsites from "./Layout/home/Relatedwebsites";
import Newsletter from "./Layout/home/Newsletter";
import { metatagAPI } from "../api/api";
import MetaTags from "react-meta-tags";
import NavBar from "./Layout/NavBar";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
//////////////////home function/////////////////////
const Home = () => {
  const [mettag, setMetatag] = useState({
    title: "",
    metatags: []
  });
  useEffect(() => {
    metatagAPI("home", response => {
      if (response.data.success) {
        setMetatag({
          title: response.data.title,
          metatags: response.data.metatags
        });
      }
    });
  }, []);
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <MetaTags>
        <title>{mettag.title}</title>
        {mettag.metatags.map(i => {
          return (
            <React.Fragment>
              <meta name={i.name} content={i.content} />
              <meta property={i.property} content={i.content} />
            </React.Fragment>
          );
        })}
      </MetaTags>
      <Col xl={12} md={12} sm={12} xs={12} className=" rtl">
        <Slide />
      </Col>
      <Container>
        <Introduce />
        <Services />
        <Popularservices />
      </Container>
      <Relatedwebsites />
      <Container>
        <Newsletter />
      </Container>

      <footer className="rtl footerback">
        <Container>
          <Col
            xl={{ span: 10, offset: 1 }}
            md={12}
            sm={12}
            xs={12}
            className="footer"
          >
            <Contatus />
          </Col>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Home;
