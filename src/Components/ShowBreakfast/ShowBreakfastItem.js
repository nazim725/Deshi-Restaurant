import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowBreakfastItem = (props) => {
    const { name, img, price, _id } = props.breakfastItem;
    const { handleDeleteBreakfast } = props;





    return (
        <div>
            
             <div>
            
            <Row xs={1} md={2} className="g-2">

                <Col>
                    <Card className="card border-0 shadow">
                        <div className="text-center"><Card.Img variant="top" src={img} className="image-breakfast" /></div>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="fw-bold">
                                price: $ {price}

                            </Card.Text>
                            <Link to={`/updateBreakfast/${_id}`}><button className="btn btn-warning me-4">Update </button></Link>
                            <button onClick={() => handleDeleteBreakfast(_id)} className="btn btn-warning">Delete</button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
        </div>
       
    );
};

export default ShowBreakfastItem;