import axios from "axios";

//////////////////// Global Variables //////////////////////
const crosAnyWhere = "https://cors-anywhere.herokuapp.com/";
const serverURL = "http://hezare3vom.ratechcompany.com/api/";
const headers = {headers: {"Content-Type": "application/json"}};
/////////////////////////loginapi///////////////////////
export const loginAPI = (mobile, password, callBack) => {
    axios
        .post(
            serverURL + "login_app",
            {
                mobile: mobile,
                password: password
            },
            headers
        )
        .then(function (response) {
            callBack(response);
        });
};
///////////////////////////////registerpage///////////////////////////////////////////////////
/////////////////register API//////////////////////
export const registerApi = (
    name,
    family,
    national_code,
    mobile,
    birth_day,
    birth_month,
    birth_year,
    password,
    callBack
) => {
    axios
        .post(
            serverURL + "sign_up_app",
            {
                name: name,
                family: family,
                national_code: national_code,
                mobile: mobile,
                birth_day: birth_day,
                birth_month: birth_month,
                birth_year: birth_year,
                password: password
            },
            headers
        )
        .then(function (response) {
            callBack(response);
        });
};
/////////////////////get year/////////////////////
export const getYear = callBack => {
    axios.get(serverURL + "get_year", headers).then(function (response) {
        callBack(response);
    });
};
////////////////////get_verification_code//////////////////////
export const get_verification_code = (mobile_number, callBack) => {
    axios
        .post(
            serverURL + "get_verification_code",
            {
                mobile_number: mobile_number
            },
            headers
        )
        .then(function (response) {
            callBack(response);
        });
};
//////////////////check vertification//////////////////
export const check_verification_code = (
    mobile_number,
    verification_code,
    callBack
) => {
    axios
        .post(
            serverURL + "check_verification_code",
            {
                mobile_number: mobile_number,
                verification_code: verification_code
            },
            headers
        )
        .then(function (response) {
            callBack(response);
        });
};
/////////////////////////////////////////////forget password/////////////////////////
/// get_forget_pass_code
export const get_forget_pass_code = (mobile_number, callBack) => {
    axios.post(serverURL + "get_forget_pass_code",
        {
            mobile_number: mobile_number
        }, headers)
        .then(function (response) {
            callBack(response);
        });
};
///check_forget_pass_code
export const check_forget_pass_code = (mobile_number, forget_pass_code, callBack) => {

    axios.post(serverURL + "check_forget_pass_code", {
        mobile_number: mobile_number,
        forget_pass_code: forget_pass_code
    }, headers)
        .then(function (response) {
            callBack(response);
        });
}
///////change_forget_pass

export const change_forget_pass = (mobile_number, new_password, forget_pass_code, callBack) => {
    axios.post(serverURL + "change_forget_pass", {
        mobile_number: mobile_number,
        new_password: new_password,
        forget_pass_code: forget_pass_code
    }, headers)
        .then(function (response) {
            callBack(response);
        });
}


///////////////////send order-next pai in phootouloader component data to server////////////////////////
export const orderAPI = (formDataorder, callBack) => {
    console.log(formDataorder)
    axios.post(serverURL + "app_make_order",
        formDataorder
        , {headers: {"Content-Type": "multipart/form-data"}})
        .then(function (response) {
            callBack(response);
        });
}


/////////////////////price servces////////////////////
////total api
export const priceservicesAPI = (pageLimit, offset, category_id, callBack) => {
    axios.get(serverURL + "front/get_products_list?limit=" +
        pageLimit +
        "&offset=" +
        offset +
        "&category_id=" +
        category_id
        , headers)
        .then(function (response) {
            callBack(response);
        });

}
////search api
export const searchAPI = (pageLimit, offset, category_id, search_query, callBack) => {
    axios.get(serverURL + "front/get_products_list?limit=" +
        pageLimit +
        "&offset=" +
        offset +
        "&category_id=" +
        category_id +
        "&search_query=" +
        search_query
        , headers)
        .then(function (response) {
            callBack(response);
        });

}

///////////////////////////order api//////////////////////////
export const getproductAPI = (product_id, callBack) => {
    axios.get(serverURL + "front/get_products_details?product_id=" + product_id,
        headers
    )
        .then(function (response) {
            callBack(response);
        });

}
//////////////////////////news api ///////////////////
export const newsAPI = (pageLimit, callBack) => {
    axios.get(serverURL + "front/get_news_list?limit=" +
        pageLimit, headers)
        .then(function (response) {
            callBack(response);
        })
}

///////////////////////menu api///////////////
export const menuAPI = (callBack) => {
    axios.get(serverURL + "front/web_menu",
        headers)
        .then(function (response) {
            callBack(response);
        })
}
///////////////////panel api////////////////
/////////passchange api
export const passchangeAPI = (password, callBack) => {
    axios.post(serverURL + "app_change_password", password, headers)
        .then(function (response) {
            callBack(response);
        })
}
////////////mytranslate api
export const mytranslateAPI = (customer_token, order_id, callBack) => {
    axios.get(serverURL + "front/get_user_translations?customer_token=" + customer_token +
        "&order_id=" + order_id, headers)
        .then(function (response) {
            callBack(response);
        })
}
//////////////myorder api

export const myorderAPI = (customer_token, callBack) => {
    axios.get(serverURL + "front/get_user_orders?customer_token=" +
        customer_token, headers)
        .then(function (response) {
            callBack(response);
        })
}

///////////mybill api
export const mybillAPI = (customer_token, callBack) => {
    axios.get(serverURL + "front/get_user_factors?customer_token=" +
        customer_token, headers)
        .then(function (response) {
            callBack(response);
        })
}
///////////edit profile
///get year
export const editprofileAPI = (customer_token, callBack) => {
    axios.get(serverURL + "front/get_user_orders?customer_token=" +
        customer_token, headers)
        .then(function (response) {
            callBack(response);
        })
}
///app_edit_profile
export const app_edit_profileAPI = (formData, callBack) => {
    axios.post(serverURL + "app_edit_profile", formData, headers)
        .then(function (response) {
            callBack(response);
        })
}
export const getprofileApI=(customer_token,callBack)=>{
    axios.get(serverURL+"front/get_user_data?customer_token="+customer_token,headers)
    .then(function(response){
        callBack(response)
    })
}
//dashboard
export const dashboardAPI = (customer_token, callBack) => {
    axios.get(serverURL + "front/user_dashboard?customer_token=" + customer_token, headers)
        .then(function (response) {
            callBack(response);
        })
}

//////////////////////home =>layount//////////////////////////
//popular services
export const get_popular_productsAPI = (param, callBack) => {
    axios.get(serverURL + "front/get_popular_products", param, headers)
        .then(function (response) {
            callBack(response);
        })
}
//contacus
export const send_messageAPI = (contactUs, callBack) => {
    axios.post(serverURL + "front/send_message", contactUs, headers)
        .then(function (response) {
            callBack(response);
        })
}
///////////////////////meta tag/////////////////////////
export const metatagAPI = (slug, callBack) => {
    axios.get(serverURL + "front/get_metatags?slug="+slug, headers)
        .then(function (response) {
            callBack(response);
        })
}

////////////////////////api basket////////////////////////
export const basketAPI = (customer_token, callBack) => {
    axios.get(serverURL + "front/user_cart?customer_token=" + customer_token, headers)
        .then(function (response) {
            callBack(response);
        })
}
////post item_id
export const cancelitemAPI = (customer_token, order_code, callBack) => {
    axios.post(serverURL + "front/user_order_cancel", {
        customer_token: customer_token,
        order_code: order_code
    }, headers)
        .then(function (response) {
            callBack(response);
        })
}
//////custom order api///////////////////////
// set custom order
export const customorderAPI = (formDataorder, callBack) => {
    console.log(formDataorder)
    axios.post(serverURL + "app_make_order",
        formDataorder
        , {headers: {"Content-Type": "multipart/form-data"}})
        .then(function (response) {
            callBack(response);
        });
}

/////////////////blog api//////////////////////
export const get_newsAPI = (slug, callBack) => {
    axios.get(serverURL + "front/get_news/?news_slug=" + slug,headers)
        .then(function (response) {
            callBack(response);
        });
}
// edit ordef file
export const editOrderFileAPI = (token, orderId, rejectId, editType, images, callBack) => {
    const formData = new FormData();
    formData.append("customer_token", token);
    formData.append("order_id", orderId);
    formData.append("order_reject_id", rejectId);
    formData.append("edit_type", editType);
    formData.append("file_count", images.length + 1);
    var i = 0;
    for (i = 0; i < images.length; i++) {
        formData.append("order_file_" + (i + 1), images[i]);
    }
    axios.post(serverURL + "edit_order_files", formData, headers)
        .then(function (response) {
            callBack(response)
        })
};
export const getOrderFileAPI = (token, orderId, callBack) => {
    axios.get(serverURL + "get_order_files/?customer_token=" + token + "&order_id=" + orderId , headers)
        .then(function (response) {
            callBack(response)
        })
};
