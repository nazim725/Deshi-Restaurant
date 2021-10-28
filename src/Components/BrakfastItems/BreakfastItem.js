import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BreakfastItem.css'
import Slide from 'react-reveal/Slide';

const BreakfastItem = (props) => {
    const { name, img, price, _id } = props.breakfast;
    return (
        <div>
            <Row xs={1} md={2} className="g-2">

                <Col>
                    <Slide bottom cascade>
                        <Card className="card border-0 shadow">
                            <div className="text-center"><Card.Img variant="top" src={img} className="image-breakfast" /></div>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className="fw-bold">
                                    price: $ {price}
                                </Card.Text>
                                <Link to={`/breakfastSingleItem/${_id}`}><button className="btn btn-warning order-button">Order </button></Link>
                            </Card.Body>
                        </Card>
                    </Slide>

                </Col>

            </Row>

        </div>
    );
};

export default BreakfastItem;