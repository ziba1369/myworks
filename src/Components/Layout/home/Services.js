import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";
import officeDoc from "../../../images/sherkati-g.svg";
import workDoc from "../../../images/shoghli.svg";
import financeDoc from "../../../images/mali-g.svg";
import educarionDoc from "../../../images/tahsili-g.svg";
import cardDoc from "../../../images/passport.46186dcf.svg";
import {Link} from "react-router-dom";
import {getHomeServicesAPI} from "../../../api/api";

const Services = () => {

    const [info, setInfo] = useState([]);

    useEffect(()=>{
        getHomeServicesAPI((response)=>{
            if (response.data.success){
                setInfo([
                    {
                        id: 1,
                        title: "مدارک شرکتی",
                        img: officeDoc,
                        alt: "مدارک شرکتی",
                        color: "#ffe7bd",
                        boxshadow: "0px 4px 20px 1px #ffe7bd",
                        name: "officedoc",
                        history: "/services/5/" + response.data["5"]
                    },
                    {
                        id: 2,
                        title: "مدارک شغلی",
                        img: workDoc,
                        alt: "مدارک شغلی",
                        color: "#dac2d4",
                        boxshadow: "0px 4px 20px 1px #dac2d4",
                        name: "workdoc",
                        history: "/services/2/" + response.data["2"]
                    },
                    {
                        id: 3,
                        title: "مدارک مالی",
                        img: financeDoc,
                        alt: "مدارک مالی",
                        color: "#c5edd7",
                        boxshadow: "0px 4px 20px 1px #c5edd7",
                        name: "financedoc",
                        history: "/services/4/" + response.data["4"]
                    },
                    {
                        id: 4,
                        title: "مدارک تحصیلی",
                        img: educarionDoc,
                        alt: "مدارک تحصیلی",
                        color: "#ffdfe6",
                        boxshadow: "0px 4px 20px 1px #ffdfe6",
                        name: "educarionDoc",
                        history: "/services/3/" + response.data["3"]
                    },
                    {
                        id: 5,
                        title: "مدارک شناسایی",
                        img: cardDoc,
                        alt: "مدارک شناسایی",
                        color: "#ebeeff",
                        boxshadow: "0px 4px 20px 1px #ebeeff",
                        name: "carddoc",
                        history: "/services/1/" + response.data["1"]
                    }
                ])
            }
        });
    },[]);

    ////////////////create cerds //////////////////
    const cards = info.map((item, index) => {
        return (
            <div
                key={item.id}
                className="child col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 col-xs-2dot4"
            >
                <Card
                    className="pulse noborder"
                    style={{backgroundColor: item.color, boxShadow: item.boxshadow}}
                >
                    <Link to={item.history}>
                        <Card.Img
                            variant="top"
                            alt={item.alt}
                            className={item.name}
                            src={item.img}
                        />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        );
    });

    return (
        <div className="row services">
            <div className="servicestext titlesections col-12">
                <h5 className="titlesections">خدمات ترجمه</h5>
            </div>
            {cards}
        </div>
    );
};
export default Services;
