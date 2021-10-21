import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-secondary">

            <Row className="footer-blog mt-4 pt-4">
                 <Col>
                 <h3 className="text-warning fw-bold">Deshi Restaurant</h3>
                </Col>
                 <Col>
                <a href="">About Online Food</a>
                <a href="">Read our Blogs</a>
                <a href="">Sign up To deliver</a>
                <a href="">Add Your restaurant</a>
                </Col>
                 <Col>

                <a href="">Get Help</a>
                <a href="">Read FAQs</a>
                <a href="">View All Cities</a>
                <a href="">Restaurant near me</a>
                </Col>

            </Row>

            <Row className="footer-link mt-4">
                <Col>
                <p>Copyright @ 2000 Online Food</p>
                </Col>

                <Col className="link">
                <a href="">Public Policy</a>
                <a href="">Terms of Uses</a>
                <a href="">Pricing</a>
                </Col>
            </Row>
            
        </div>
    );
};

export default Footer;