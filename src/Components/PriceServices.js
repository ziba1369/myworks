import React, {useState, useEffect} from "react";
import {Container, Button, Card, InputGroup, Row, Col, Breadcrumb} from "react-bootstrap";
import NavBar from "./Layout/NavBar";
import {Link} from "react-router-dom";
import Paginatior from "react-hooks-paginator";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ToastsStore} from "react-toasts";
import * as Cookies from "js-cookie";
import Footer from "./Layout/Footer";
import {getHomeServicesAPI, metatagAPI, priceservicesAPI, searchAPI} from '../api/api';
import MetaTags from "react-meta-tags";
import officeDoc from "../images/sherkati-g.svg";
import workDoc from "../images/shoghli.svg";
import financeDoc from "../images/mali-g.svg";
import educarionDoc from "../images/tahsili-g.svg";
import cardDoc from "../images/passport.46186dcf.svg";


const PriceServices = props => {

    const [metaTag, setMetaTag] = useState({
        title: "",
        metaTags: []
    });
    const pageLimit = 15;
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [servicesButtons, setServicesButtons] = useState([]);


    useEffect(() => {
        setOffset(0);
        switch (props.match.params.id) {
            case "all":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            backgroundColor: "#3798f5",
                            boxShadow: " 0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ebeeff",
                            borderColor: "#5766b5"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffdfe6",
                            borderColor: "#ffdfe6"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#c5edd7",
                            borderColor: "#c5edd7"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#dac2d4",
                            borderColor: "#dac2d4"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffe7bd",
                            borderColor: "#ffe7bd"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            case "1":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            color: "#454f63 ",
                            backgroundColor: "#aad0f4",
                            borderColor: "#aad0f4"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            backgroundColor: "#5766b5",
                            boxShadow: "  0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffdfe6",
                            borderColor: "#ffdfe6"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#c5edd7",
                            borderColor: "#c5edd7"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#dac2d4",
                            borderColor: "#dac2d4"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffe7bd",
                            borderColor: "#ffe7bd"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            case "3":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            color: "#454f63 ",
                            backgroundColor: "#aad0f4",
                            borderColor: "#aad0f4"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ebeeff",
                            borderColor: "#5766b5"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            backgroundColor: "#ef9a9a",
                            boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#c5edd7",
                            borderColor: "#c5edd7"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#dac2d4",
                            borderColor: "#dac2d4"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffe7bd",
                            borderColor: "#ffe7bd"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            case "4":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            color: "#454f63 ",
                            backgroundColor: "#aad0f4",
                            borderColor: "#aad0f4"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ebeeff",
                            borderColor: "#5766b5"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffdfe6",
                            borderColor: "#ffdfe6"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            backgroundColor: "#0cb69f",
                            boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#dac2d4",
                            borderColor: "#dac2d4"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffe7bd",
                            borderColor: "#ffe7bd"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            case "2":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            color: "#454f63 ",
                            backgroundColor: "#aad0f4",
                            borderColor: "#aad0f4"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ebeeff",
                            borderColor: "#5766b5"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffdfe6",
                            borderColor: "#ffdfe6"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#c5edd7",
                            borderColor: "#c5edd7"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            backgroundColor: "#c463ac",
                            boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffe7bd",
                            borderColor: "#ffe7bd"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            case "5":
                setServicesButtons([
                    {
                        id: 1,
                        title: "همه موارد",
                        style: {
                            color: "#454f63 ",
                            backgroundColor: "#aad0f4",
                            borderColor: "#aad0f4"
                        },
                        url: "/services/all/allServices"
                    },
                    {
                        id: 2,
                        title: "مدارک شناسایی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ebeeff",
                            borderColor: "#5766b5"
                        },
                        url: "/services/1/slug"
                    },
                    {
                        id: 3,
                        title: "مدارک تحصیلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#ffdfe6",
                            borderColor: "#ffdfe6"
                        },
                        url: "/services/3/slug"
                    },
                    {
                        id: 4,
                        title: "مدارک مالی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#c5edd7",
                            borderColor: "#c5edd7"
                        },
                        url: "/services/4/slug"
                    },
                    {
                        id: 5,
                        title: "مدارک شغلی",
                        style: {
                            color: "#454f63",
                            backgroundColor: "#dac2d4",
                            borderColor: "#dac2d4"
                        },
                        url: "/services/2/slug"
                    },
                    {
                        id: 6,
                        title: "مدارک شرکتی",
                        style: {
                            backgroundColor: "#f4c36d",
                            boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                            border: "0px"
                        },
                        url: "/services/5/slug"
                    }
                ]);
                break;
            default:
                break;
        }
        metatagAPI(props.match.params.slug, response => {
            if (response.data.success) {
                setMetaTag({
                    title: response.data.title,
                    metaTags: response.data.metatags
                });
            }
        });
        getHomeServicesAPI((response)=>{
            if (response.data.success){
                switch (props.match.params.id) {
                    case "all":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    backgroundColor: "#3798f5",
                                    boxShadow: " 0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ebeeff",
                                    borderColor: "#5766b5"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffdfe6",
                                    borderColor: "#ffdfe6"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#c5edd7",
                                    borderColor: "#c5edd7"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#dac2d4",
                                    borderColor: "#dac2d4"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffe7bd",
                                    borderColor: "#ffe7bd"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    case "1":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    color: "#454f63 ",
                                    backgroundColor: "#aad0f4",
                                    borderColor: "#aad0f4"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    backgroundColor: "#5766b5",
                                    boxShadow: "  0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffdfe6",
                                    borderColor: "#ffdfe6"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#c5edd7",
                                    borderColor: "#c5edd7"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#dac2d4",
                                    borderColor: "#dac2d4"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffe7bd",
                                    borderColor: "#ffe7bd"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    case "3":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    color: "#454f63 ",
                                    backgroundColor: "#aad0f4",
                                    borderColor: "#aad0f4"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ebeeff",
                                    borderColor: "#5766b5"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    backgroundColor: "#ef9a9a",
                                    boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#c5edd7",
                                    borderColor: "#c5edd7"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#dac2d4",
                                    borderColor: "#dac2d4"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffe7bd",
                                    borderColor: "#ffe7bd"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    case "4":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    color: "#454f63 ",
                                    backgroundColor: "#aad0f4",
                                    borderColor: "#aad0f4"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ebeeff",
                                    borderColor: "#5766b5"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffdfe6",
                                    borderColor: "#ffdfe6"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    backgroundColor: "#0cb69f",
                                    boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#dac2d4",
                                    borderColor: "#dac2d4"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffe7bd",
                                    borderColor: "#ffe7bd"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    case "2":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    color: "#454f63 ",
                                    backgroundColor: "#aad0f4",
                                    borderColor: "#aad0f4"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ebeeff",
                                    borderColor: "#5766b5"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffdfe6",
                                    borderColor: "#ffdfe6"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#c5edd7",
                                    borderColor: "#c5edd7"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    backgroundColor: "#c463ac",
                                    boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffe7bd",
                                    borderColor: "#ffe7bd"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    case "5":
                        setServicesButtons([
                            {
                                id: 1,
                                title: "همه موارد",
                                style: {
                                    color: "#454f63 ",
                                    backgroundColor: "#aad0f4",
                                    borderColor: "#aad0f4"
                                },
                                url: "/services/all/allServices"
                            },
                            {
                                id: 2,
                                title: "مدارک شناسایی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ebeeff",
                                    borderColor: "#5766b5"
                                },
                                url: "/services/1/" + response.data["1"]
                            },
                            {
                                id: 3,
                                title: "مدارک تحصیلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#ffdfe6",
                                    borderColor: "#ffdfe6"
                                },
                                url: "/services/3/" + response.data["3"]
                            },
                            {
                                id: 4,
                                title: "مدارک مالی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#c5edd7",
                                    borderColor: "#c5edd7"
                                },
                                url: "/services/4/" + response.data["4"]
                            },
                            {
                                id: 5,
                                title: "مدارک شغلی",
                                style: {
                                    color: "#454f63",
                                    backgroundColor: "#dac2d4",
                                    borderColor: "#dac2d4"
                                },
                                url: "/services/2/" + response.data["2"]
                            },
                            {
                                id: 6,
                                title: "مدارک شرکتی",
                                style: {
                                    backgroundColor: "#f4c36d",
                                    boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    webkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    MozwebkitboxShadow: "0px 0px 15px -6px rgba(0,0,0,0.75)",
                                    border: "0px"
                                },
                                url: "/services/5/" + response.data["5"]
                            }
                        ]);
                        break;
                    default:
                        break;
                }
            }
        });
    }, [props.match.params.id]);
/////////////////////////search handler////////////////////
    const searchhandler = () => {

        setOffset(0);
        let value = document.getElementById("showSearch").value;
        searchAPI(pageLimit, 0, props.match.params.id, value, (response) => {
            if (response.data.success) {
                setData(response.data.products);
                setTotal(response.data.total);

            } else {
                ToastsStore.error(response.data.error);
            }
        })
    }
    /////////////get products data from server/////////////////////
    useEffect(() => {
        priceservicesAPI(pageLimit, offset, props.match.params.id, (response) => {
            if (response.data.success) {
                setData(response.data.products);
                setTotal(response.data.total);

            } else {
                ToastsStore.error(response.data.error);
            }
        })

    }, [props.match.params.id, offset]);

    return (
        <React.Fragment>
            <header>
                <NavBar/>
            </header>
            <MetaTags>
                <title>{metaTag.title}</title>
                {metaTag.metaTags.map(i => {
                    if (i.name) {
                        return (
                            <meta name={i.name} content={i.content}/>
                        );
                    } else if (i.property) {
                        return (
                            <meta property={i.property} content={i.content}/>
                        );
                    }
                })}
            </MetaTags>
            <Container fluid className="contentpadding">
                <Row>
                    <Col
                        className="service-breadcrumb"
                        xl={9}
                        lg={9}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <Breadcrumb className="rtl">
                            <Breadcrumb.Item>
                                <Link to="/">صفحه اصلی</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href={null}>
                                خدمات ترجمه
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>

                    <Col
                        className="service-search"
                        xl={{span: 3, offset: 0}}
                        lg={{span: 3, offset: 0}}
                        md={{span: 10, offset: 1}}
                        sm={{span: 10, offset: 1}}
                        xs={{span: 10, offset: 1}}
                    >
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text onClick={searchhandler} id="basic-addon1">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                            <input
                                className="form-control textholder"
                                type="text"
                                placeholder="نام خدمات یا نوع مدرک را جستجو کنید"
                                aria-label="Search"
                                id="showSearch"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <div className="row rtl">
                    <Col
                        className="service-box"
                        xl={{span: 3, offset: 0}}
                        lg={{span: 3, offset: 0}}
                        md={{span: 6, offset: 0}}
                        sm={{span: 8, offset: 2}}
                        xs={{span: 10, offset: 1}}
                    >
                        <Card className="gservices" style={{textAlign: "center"}}>
                            <Card.Body>
                                <Card.Title className="sbox-title">گروه بندی خدمات</Card.Title>
                                {servicesButtons.map((item)=>(
                                    <Button
                                        block
                                        style={item.style}
                                        onClick={e => props.history.push(item.url)}
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        className="service-detail rtl"
                        xl={{span: 9, offset: 0}}
                        lg={{span: 9, offset: 0}}
                        md={{span: 6, offset: 0}}
                        sm={{span: 11, offset: 0}}
                        xs={{span: 11, offset: 0}}
                    >
                        <Row>
                            {props.match.params.id &&
                            data.map(item => {
                                return (
                                    <div
                                        id="paginationcard"
                                        key={item.id}
                                        className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4 rtl"
                                    >
                                        <Card className="detail-card">
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    <p className="textprice text-gray ">هزینه ترجمه:</p>
                                                    <p className="numberprice ">
                                                        {item.pricetrans}تومان
                                                    </p>
                                                    <p className="textprice text-gray ">
                                                        هزینه نسخه اضافه:
                                                    </p>
                                                    <p className="numberprice">
                                                        {item.extraprice}تومان
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <p
                                                    className="service-price"
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => {
                                                        if (Cookies.get("token")) {
                                                            Cookies.set("title", item.title, {
                                                                expires: 7,
                                                                path: "/"
                                                            });
                                                            Cookies.set("types", item.id, {
                                                                expires: 7,
                                                                path: "/"
                                                            });
                                                            props.history.push("/order/" + item.slug);
                                                        } else {
                                                            props.history.push("/login/");
                                                        }
                                                    }}
                                                >
                                                    ثبت سفارش
                                                </p>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                );
                            })}
                        </Row>
                        <Paginatior
                            totalRecords={total}
                            pageLimit={pageLimit}
                            //  pageNeighbours={4}
                            setOffset={setOffset}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Col>

                    <div/>
                </div>
            </Container>
            <Footer/>
        </React.Fragment>
    );
};

export default PriceServices;
