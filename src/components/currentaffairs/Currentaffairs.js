import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

import './Currentaffairs.css';
// import UploadPdf from "./UploadPdf";

const Currentaffairs =()=>{
    return(
        <section className="currentaffairs-container">
            <Card className="bg-dark text-white current-header-card">
                <Card.Img src="/pages/collegestudent.jpg" className="current-image-card" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>CURRENT AFFAIRS</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Container>
                <Row className="current-desc">
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Description</Card.Title>
                            <Card.Text>
                            Current Affairs is an important part of preparation for all types of competitive exams, impulse has got some of the best mentors in the industry who curate current affairs that specifically meets the demand of the concerned exam. 
                            Every aspirant has to make an important decision of what to read and what to omit while reading newspapers, magazines or any other current affairs material, We here at make sure that our current affairs materials are readily consumable with on point explanation and viable solutions for each news item. 
                            Downloadable PDFs are available on the website under Current Affairs section of each competitive exam.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                {/* <UploadPdf/> */}
            </Container>
            <div >
                
            </div>
            
        </section>
    );
}

export default Currentaffairs;