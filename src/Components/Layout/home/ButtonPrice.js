import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';

const ButtonPrice = () => {
    return (
        <ButtonToolbar className=" price">
            <button className="btn-light-theme" href="#"><a href={null}>نرخ نامه مصوب ترجمه رسمی</a></button>
            <button className="btn-color-theme" href="#"><a href={null}> ثبت سفارش آنلاین ترجمه</a></button>
        </ButtonToolbar>
    );
}

export default ButtonPrice;