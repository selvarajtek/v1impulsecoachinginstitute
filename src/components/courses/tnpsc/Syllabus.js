
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
  
  function Syllabus() {
    return (
      <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Col md={11}>
            <div class="main-container">
              <div class="heading">
                <h4 class="heading__title">REVISED SYLLABUS</h4>
                <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">SCHEME OF EXAMINATIONS - FOR ALL POSTS</a></p>
              </div>
              <div class="cards-b">
                <div class="card-b card-1">
                  <h4 class="card__title">GROUP I</h4>
                  <p class="card__apply">
                    <a class="card__link" target='_blank' href="https://www.tnpsc.gov.in/static_pdf/Syllabus/Gr_I_09_03_2020.pdf">Click to view syllabus<i class="fas fa-arrow-right"></i></a>
                  </p>
                </div>
                <div class="card-b card-2">
                  <h4 class="card__title">GROUP-II AND IIA</h4>
                  <p class="card__apply">
                    <a class="card__link" target='_blank'  href="https://www.tnpsc.gov.in/static_pdf/syllabus/G2_Revised_Scheme_Syllabus_27012022.pdf">Click to view syllabus<i class="fas fa-arrow-right"></i></a>
                  </p>
                </div>
                <div class="card-b card-3">
                  <h4 class="card__title">GROUP IV AND VAO</h4>
                  <p class="card__apply">
                    <a class="card__link" target='_blank'  href="https://www.tnpsc.gov.in/static_pdf/syllabus/G4_Scheme_Revised_27012022.pdf">Click to view syllabus<i class="fas fa-arrow-right"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
      </Row>  
      
    );
  }
export default Syllabus;