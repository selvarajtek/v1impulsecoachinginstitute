import React from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import Currentaffairs from './Currentaffairs';

function CAUpsc() {
  const downloadCurrentAffairs=()=>{

  }
  return (
    <section>
        <Currentaffairs/>
        <Container>
            <div className='cat-heading'>
              <h3>UPSC</h3>
            </div>

            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>MARCH CURRENT AFFAIRS - 2022</Card.Title>
                      <hr/>
                      <Card.Text onClick={downloadCurrentAffairs} style={{cursor:'pointer'}}>
                        <a href='/currentaffairs/daily.pdf' download={true}>1. This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </Container>
    </section>
  )
}

export default CAUpsc