import axios from "axios";

//////////////////// Global Variables //////////////////////
const crosAnyWhere = "https://cors-anywhere.herokuapp.com/";
const serverURL = "http://hezare3vom.ratechcompany.com/api/";
const headers = { headers: { "Content-Type": "application/json" } };
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
export const get_forget_pass_code=(mobile_number,callBack)=>{
    axios.post(serverURL+"get_forget_pass_code",
    {
        mobile_number:mobile_number  
    } ,headers)
    .then(function (response) {
        callBack(response);
    });
};
///check_forget_pass_code
export const check_forget_pass_code=(mobile_number,forget_pass_code,callBack)=>{
    console.log(mobile_number)
    axios.post(serverURL+"check_forget_pass_code",{
        mobile_number:mobile_number,
        forget_pass_code:forget_pass_code
    },headers)
    .then(function (response) {
        callBack(response);
    });
}
///////change_forget_pass

export const change_forget_pass=( mobile_number,new_password,forget_pass_code,callBack)=>{
    axios.post(serverURL+"change_forget_pass",{
        mobile_number:mobile_number,
        new_password:new_password,
        forget_pass_code:forget_pass_code
    },headers)
    .then(function (response) {
        callBack(response);
    });
}


///////////////////send order data to server////////////////////////
export const orderAPI=(formDataorder,callBack)=>{
    console.log(formDataorder)
    axios.post(serverURL+"app_make_order",
        formDataorder
    ,{ headers: { "Content-Type": "multipart/form-data"} })
    .then(function (response) {
        callBack(response);
    });
}


/////////////////////price servces////////////////////
////total api
export const priceservicesAPI=(pageLimit,offset,category_id,callBack)=>{
    axios.post(serverURL+"get_products_list?limit=" +
    pageLimit +
    "&offset=" +
    offset +
    "&category_id=" +
    category_id
    ,headers)
    .then(function (response) {
        callBack(response);
    }); 

}
////search api
export const searchAPI=(offset,pageLimit,category_id,callBack)=>{
    axios.post(serverURL+"get_products_list?limit=" +
    pageLimit +
    "&offset=" +
    offset +
    "&category_id=" +
    category_id
    ,headers)
    .then(function (response) {
        callBack(response);
    }); 

}