
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

          <Col>
            <div className="main-container">
              <div className="heading">
                <h4 className="heading__title">BOOKS</h4>
                <p className="heading__credits"><a className="heading__link" target="_blank" href="https://dribbble.com/sl">SCHEME OF EXAMINATION BOOKS</a></p>
              </div>
              <div className="cards-b">
                <div className="card-b1 card-5 flexcardNumberGreen">
                  <p className="card__title-2">கல்வி தொலைக்காட்சி
2021-22ஆம் ஆண்டிற்கான, 1 முதல் 12 வரை வகுப்புகளுக்கான கல்வி தொலைக்காட்சி நிகழ்ச்சிகளை மாண்புமிகு முதலமைச்சர் தொடங்கிவைத்தார். தலைசிறந்த பாடப்பொருள் நிபுணர்களின் உதவியுடன் எல்லா பாடங்களுக்கும் கல்வி காணொளி உள்ளடங்களைக் கல்வி தொலைக்காட்சி உருவாக்கிவருகிறது. தரமான கல்வி நிகழ்ச்சி ஒளிபரப்பைத் தொடர்ந்து மேற்கொண்டுவருகிறது.</p>
                  <p className="card__apply">
                    <a className="card__link-1" target='_blank' href="https://tnschools.gov.in/students-hub/?lang=ta">Click to download books<i className="fas fa-arrow-right"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={10}>
              

    <div className="flexbox">
        <div className="flexcard flexcardBlue">
            {/* <div className="flexcardNumber flexcardNumberBlue">02</div> */}
            <div className="flex flexcardTitle"></div>
            <h5 style={{textTransform: 'uppercase', textAlign:'center'}}>Group I & Group II (Mains) :</h5>
            <div className="flex flexcardText">
              <ul className = 'ul-flexbox'>
                <li>Polity</li>
                <li>Social Issue</li>
              </ul>
            </div>
        </div>
        <div className="flexcard flexcardOrange">
            {/* <div className="flexcardNumber flexcardNumberOrange">03</div> */}
            <div className="flex flexcardTitle"></div>
            <h5 style={{textTransform: 'uppercase', textAlign:'center'}}>Group II & IIA (Prilims), Group IV :</h5>
            <div className="flex flexcardText">
              <ul className = 'ul-flexbox'>
                <li>Tamil</li>
                <li>Mathematics</li>
                <li>Political science</li>
                <li>Modern History</li>
                <li>Tamil Nadu History</li>
              </ul>
            </div>
        </div>
</div>
          </Col>
      </Row>  
      
    );
  }
export default Important;