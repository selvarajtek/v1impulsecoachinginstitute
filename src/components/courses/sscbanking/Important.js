
import React, { useState } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  function Important() {
    return (
      <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Col md={10}>
            <Accordion defaultActiveKey="0">
            <Card>
            <Card.Header>
                <CustomToggle eventKey="0">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card>
            <Card.Header>
                <CustomToggle eventKey="1">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
          </Col>
      </Row>  
      
    );
  }
export default Important;