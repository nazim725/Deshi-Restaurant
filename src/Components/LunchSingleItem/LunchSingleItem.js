import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const LunchSingleItem = () => {
    const [lunch, setLunch] = useState({})
    const { lunchId } = useParams();
    const url = `https://morning-reef-83761.herokuapp.com/lunch/${lunchId}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [lunchId])
    return (
        <div className="add-form  my-4">
            <h2 className="my-4">Order Confirmation Form</h2>

            <Form className>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" value={lunch.name} />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" value={lunch.price} />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" value={lunch.img} />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" placeholder='Your Name' />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" placeholder='Your Email' />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" placeholder='Your Phone' />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" placeholder='Your Address' />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" type="text" placeholder='Order Date' />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <button className="btn btn-secondary" >Confirm Order</button>
                    </Col>
                </Row>
            </Form>







        </div>
    );
};

export default LunchSingleItem;