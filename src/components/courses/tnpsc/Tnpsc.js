
import React, { useState } from 'react';
import { Tabs, Tab, Sonnet, Row, Col, Table, DropdownButton, Dropdown,Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
// import Eligibility from './Eligibility';
// import Examinationstructure from './Examinationstructure';
// import Listofservices from './Listofservices';
// import './Upsc.css';

const Tnpsc = () => {

    const [key, setKey] = useState('brochure');
    const [tab,setTab] = useState([true]);
    const [subtab,setSubTab] = useState([true]);
    
    const tabHandler=(tab)=>{
         let temparray = Array();
         let temparray2 = Array();
         temparray[tab] = true;
         setTab(temparray);
         setSubTab(temparray2);
         console.log(tab);
    }

    const tabHandler_sub=(subtab)=>{
        tabHandler(1);
        let temparray = Array();
        temparray[subtab] = true;
        setSubTab(temparray);
   }


    return (
        <section>
            <div class="page-header">
            
            <div class='page-head-title'>
                    <a href="#" class="developer6669">
                        <div class="img-container">
                            <img src="pic/tnpsclogo.jpg" alt="" />
                        </div>
                    </a>  
                    <h5 className='course_heading'>TNPSC</h5>
            </div>  
            <div class="social-icons">
                <a href="??" target="_blank" class="fb"
                ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="??" target="_blank" class="messenger"
                ><i class="fab fa-facebook-messenger"></i
                ></a>
                <a href="??" target="_blank" class="insta"
                ><i class="fab fa-instagram"></i
                ></a>
                <a href="??" target="_blank" class="telegram"
                ><i class="fab fa-telegram-plane"></i
                ></a>
                <a href="??" target="_blank" class="email"
                ><i class="fas fa-envelope"></i
                ></a>
            </div>
            </div>  
            <div >

            <Navbar className='tabs-cont'>
            {/* <Container> */}
                <Nav>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(0)}>Career</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(1)}>Eligibility</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(2)}>List Of Services</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(3)}>Examination Structure</button>
                </Nav>
            {/* </Container> */}
            </Navbar>
            
            {/* Career */}
            {tab[0] && 
                <div style={{marginTop:'30px'}}>
                    <Brochure/>
                </div>
            }

            {/* Eligibility */}
            {tab[1] && 
                <div style={{marginTop:'30px'}}>
                </div>
            }

            {/* List of Services */}
            {tab[2] && 
                <div style={{marginTop:'30px'}}>
                </div>
            }

            {/* Examination Structure */}
            {tab[3] && 
                <div style={{marginTop:'30px'}}>
                </div>
            }

            </div>
        </section>
    )
}

const Brochure = () => {
    return (
        <section>
            <Row className="brochure_content">
                {/* <h4 className=''>Impulse Edge for TNPSC</h4> */}
                <p>
                    <ul>
                        <li>
                        தமிழ்நாடு அரசு பணியாளர் தேர்வாணையம் நடத்தும் Group-1, Group- 2, Group 4 மற்றும் VAO முதலிய

முதல்நிலை தேர்வுகளுக்கும், Group-1 மற்றும் Group -II & II(A) ஆகியவற்றின் முதன்மைத் தேர்வுகளுக்கும்

பயிற்சி அளிக்கப்படும்.
                        </li>
                        <li>
                        தமிழ்நாடு அரசு பணியாளர் தேர்வாணையம் வெளியிட்டுள்ள பாடத்திட்டம் மூன்று மாதத்திற்குள் தெளிவாகவும்

விரைவாகவும் முடிக்கப்படும்.
                        </li>
                        <li>
                        தமிழக வரலாறு (unit -VII) மற்றும் தமிழக வளர்ச்சி நிர்வாகம் (unit - IX) ஆகியவற்றிற்கு தனி கவனம்

அளிக்கப்படும். 
                        </li>
                        <li>
                        பாட ஊவாரியான சந்தேகங்களுக்கு உடனடி தீர்வு வழங்குவதுடன் மெல்ல கற்கும் மாணவர்களுக்கு தனிப்பட்ட கவனம் அளிக்கப்படும்.

ஒவ்வொரு வகுப்பின் முடிவிலும் தினசரி தேர்வு நடத்தப்படும்.
                        </li>
                        <li>
                        வார இறுதியில் வார தேர்வும், மாத இறுதியில் மாத தேர்வும் நடத்தப்படும்.
                        </li>
                        <li>
                        பாடத்திட்டம் முடிக்கப்பட்ட உடன் பாடவாரியாக (Subject wise test) 80க்கும் மேற்பட்ட தேர்வுகள் நடத்தப்படும்.

பாட வாரியான தேர்வுகள் முடிந்தவுடன் முழு தேர்வுகள் (Full Test) நடத்தப்படும்.
                        </li>
                        <li>
                        முதன்மை தேர்வுகளுக்கு (Mains) 40க்கும் மேற்பட்ட தேர்வுகள் நடத்தப்படும்.

நேர மேலாண்மை, நடப்பு நிகழ்வுகள், பாட குறிப்புகளை தொகுத்தல் முதலியவற்றை எளிமையாக்கும் வகையில்

முதன்மை தேர்வுக்கு பயிற்சி அளிக்கப்படும்.
                        </li>
                        <li>
                        ஒவ்வொரு வார இறுதியிலும் நடப்பு நிகழ்வுகள் குறித்த வகுப்புகள் நடைபெறும்.
                        </li>
                        <li>
                        முதன்மைத் தேர்வில் வெற்றி பெறுபவர்களுக்கு நேர்முகத் தேர்விற்கான இலவச பயிற்சி அளிக்கப்படும்.
                        </li>
                        <li>
                        மாணவர்களை தேர்வு நோக்கில் மட்டுமல்லாமல் அறிவார்ந்த சிந்தனையை தூண்டும் வகையில் தேர்வுகள் நடத்தப்பட்டு அவர்களின் அறிவுத்திறன் மேலும் செம்மையாக்கப்படும்.
                        </li>
                    </ul>
                </p>
            </Row>

            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded'>
                    <h5 >தேர்வு முறை</h5>
                    <hr />
                    <ul>
                        <li>தினசரி தேர்வு    -   ஒவ்வொரு வகுப்பின்</li>
                        <li>வார தேர்வு       -   சனிக்கிழமை இறுதியில்</li>
                        <li>மாதத் தேர்வு     -   மாதத்தின் முதல் ஞாயிற்றுக்கிழமை</li>
                    </ul>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-optionals shadow rounded'>
                    <h5>பயிற்சி வகுப்புகள்</h5>
                    <hr />
                    <ul>
                        <li>தொகுதி -1 (Group- | )</li>
                        <li>தொகுதி - 2 & 2A ( Group - || & II(A) )</li>
                        <li>தொகுதி -4 (Group - IV ) மற்றும் கிராம நிர்வாக அலுவலர் (VAO) முதலிய தேர்வுகளுக்கு பயிற்சி</li>
                      
                    </ul>
                </Col>
            </Row>

            <section className="brochure-fee">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2">கட்டண முறை (FEES STRUCTURE)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>வகுப்பிற்கான கட்டணம் + தொடர் தேர்வுகள் (Test Series)<br/> (One time FEES till your placement)</td>
                            <td>ரூ.15,000</td>
                        </tr>
                        <tr>
                            <td>கொள்குறி வகை தொடர் தேர்வுகள் (Objective Type Test Series)</td>
                            <td>ரூ.5,000</td>
                        </tr>
                        <tr>
                            <td>கொள்குறி வகை தொடர் தேர்வுகள் (Objective Type Test Series for Group - II, IV) </td>
                            <td>ரூ.3,000</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </section>
    )
}

export default Tnpsc;