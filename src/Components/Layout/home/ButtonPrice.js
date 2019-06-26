import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
const ButtonPrice = () => {
    return (
        <ButtonToolbar className=" price">
            <button className="btn-light-theme" href="#"><a href={null}>نرخ نامه مصوب ترجمه رسمی</a></button>
            <button className="btn-color-theme" href="#"><Link to='/Order'> ثبت سفارش آنلاین ترجمه</Link></button>
        </ButtonToolbar>
    );
}

export default ButtonPrice;