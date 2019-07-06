import React, {useState} from 'react'
import {Card} from 'react-bootstrap';

const Documenttype = () => {
    const [typedoc, changetypedoc] = useState({
        type: 'شناسنامه',
        countchoose: '۱',
        accept: '۱',
        extradoc: '۰',
        deliverytype: 'عادی'

    })
    return (
        <Card className="documenttype ">
            <Card.Header>نوع مدرک ترجمه</Card.Header>
            <Card.Body>
                <Card.Title>{typedoc.type}</Card.Title>
                <Card.Text>زبان ترجمه<span>{typedoc.countchoose} مورد</span></Card.Text>
                <Card.Text>مهرو تاییدات<span>{typedoc.accept} مورد</span></Card.Text>
                <Card.Text>نسخه اضافه<span>{typedoc.extradoc} مورد</span></Card.Text>
                <Card.Text>نوع تحویل<span>{typedoc.deliverytype} مورد</span></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Documenttype;