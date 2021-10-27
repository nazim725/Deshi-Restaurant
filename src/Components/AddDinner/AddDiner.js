import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';


const AddDiner = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const handleAddDinner = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const newDinner= { name, price, img }
        fetch('https://morning-reef-83761.herokuapp.com/dinner', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDinner)
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
            <h2  className="mb-4">Add  Dinner Item</h2>
            <Form onSubmit={handleAddDinner}>
                <Row className="w-50">
                    <Col>
                        <Form.Control  className="input-field" ref={nameRef} placeholder="Dinner Food Item Name" required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control  className="input-field" ref={priceRef} placeholder="price"  required/>
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control  className="input-field" ref={imgRef} placeholder="Image URL" required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Button variant="primary" type="submit">
                        Add Item
                    </Button>
                </Row>
            </Form>
            
        </div>
    );
};

export default AddDiner;