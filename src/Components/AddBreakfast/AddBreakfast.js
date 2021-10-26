import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Add.css'

const AddBreakfast = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAddBreakfast = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const newBreakfast = { name, price, img }
        fetch('http://localhost:5000/breakfast', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBreakfast)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the item.')
                    e.target.reset();
                }
            })




        e.preventDefault();
    }
    return (
        <div className="add-form  my-4">
            <h2  className="mb-4">Add a Breakfast Item</h2>
            <Form className="w-100" onSubmit={handleAddBreakfast}>
                <Row  className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={nameRef} placeholder="Breakfast Food Item Name" required />
                    </Col>
                </Row>
                <Row  className="w-50">
                    <Col>
                        <Form.Control className="input-field"  ref={priceRef} placeholder="price" required />
                    </Col>
                </Row>
                <Row  className="w-50">
                    <Col>
                        <Form.Control className="input-field"  ref={imgRef} placeholder="Image URL" required />
                    </Col>
                </Row>
                <Row  className="w-50">
                    <Button className="input-field"  variant="primary" type="submit">
                        Add Item
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default AddBreakfast;