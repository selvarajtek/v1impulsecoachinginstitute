import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap'

import Homeslide from '../carousel/Homeslide';
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import {RiVideoFill} from "react-icons/ri";

import './Home.css';
import './Slide.css';
import './HomeOld.css';

function Home() {

  const scrollSlideCase = () => {
    window.scrollTo(0, 660);
  }

  return (
      <section className='home-slide'  style={{overflow:'hidden'}} >
          <div id='tap_page'>
            <div>
                <img src='/background/4.jpg' id='slide-img' />
            </div>
            <div className='overlay'>
              <Row>
                <Col className='center-align first-col' >
                    <Card style={{ width: '18rem' }} className='front-cards'>
                      <Card.Header className='front-card-header'>TNPSC</Card.Header>
                      <Card.Body>
                        <Card.Text>
                        Group I, Group II, Group II-A, Group IV, VAO
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />

                    <Card style={{ width: '18rem' }} className='front-cards'>
                      <Card.Header className='front-card-header'>UPSC</Card.Header>
                      <Card.Body>
                        <Card.Text>
                        Prelims cum mains, SOptional, Study Hall (with wi-fi) & Mentoring
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                </Col>
                <Col className='center-align second-col'>
                  <div className='slogan'>
                    <p>TO BUILD YOURSELF</p>
                  </div>
                  <Homeslide />
                </Col>
                <Col className='center-align third-col'>
                      <Card style={{ width: '18rem' }} className='front-cards'>
                        <Card.Header className='front-card-header'>SSC AND BANKING</Card.Header>
                        <Card.Body>
                          <Card.Text>
                          Online Course, Study Hall (with wi-fi) & Mentoring
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <br />

                      <Card style={{ width: '18rem' }} className='front-cards'>
                        <Card.Header className='front-card-header'>SI AND PC</Card.Header>
                        <Card.Body>
                          
                          <Card.Text>
                            Online Course, Study Hall (with wi-fi) & Mentoring
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    <br />
                </Col>
              </Row>
            
            <div>
            
            </div>
              <Row className='front-qoutes'>
                <Col className='center-align quotes-line'>
                  <div class="content">
                    <div class="slider-wrapper">
                      <div class="slider">
                          <div class="slider-text1">If you are waiting for the right time, it's now</div>
                          <div class="slider-text2">If you are waiting for the right time, it's now</div>
                          <div class="slider-text3">If you are waiting for the right time, it's now</div>
                      </div>
                    </div>       
                  </div>
                </Col>
                <Col className='center-align'>
                  <span class='btn-video'>
                      <a href="https://youtu.be/lk9XUeBV8o8" target='_blank' style={{display:'flex',textDecoration:'none',color:'white'}} className='yt-anchorlink'><RiVideoFill className='yt-icon'></RiVideoFill> <p>Watch video</p></a>
                  </span>
                </Col>
              </Row>

              <div onClick={scrollSlideCase} style={{textAlign:'center'}}>
                  <IoIosArrowDown id='scrolldownicon'></IoIosArrowDown>
              </div>
            </div>
          </div>


          <div id='mobile_page'>
            <div>
                <img src='/background/4.jpg' id='slide-img' />
            </div>
            <div className='overlay'>
              <Row>
                <Col className='center-align second-col'>
                  <div className='slogan'>
                    <p>TO BUILD YOURSELF</p>
                  </div>
                  <Homeslide />
                </Col>
              </Row>
            
            <div>
            
            </div>
              <Row className='front-qoutes'>
              <Col className='center-align quotes-line' xs={10}>
                  <div class="content">
                    <div class="slider-wrapper">
                      <div class="slider">
                          <div class="slider-text1">If you are waiting for the right time, it's now</div>
                          <div class="slider-text2">If you are waiting for the right time, it's now</div>
                          <div class="slider-text3">If you are waiting for the right time, it's now</div>
                      </div>
                    </div>       
                  </div>
                </Col>
                <Col className='center-align' xs={2}>
                  <span class='btn-video'>
                      <a href="https://youtu.be/lk9XUeBV8o8" target='_blank' style={{display:'flex',textDecoration:'none',color:'white'}} className='yt-anchorlink'><RiVideoFill className='yt-icon'></RiVideoFill> <p></p></a>
                  </span>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col className='center-align first-col' >
                    <Card style={{ width: '18rem' }} className='front-cards'>
                      <Card.Header className='front-card-header'>TNPSC</Card.Header>
                      <Card.Body>
                        <Card.Text>
                        Group I, Group II, Group II-A, Group IV, VAO
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />

                    <Card style={{ width: '18rem' }} className='front-cards'>
                      <Card.Header className='front-card-header'>UPSC</Card.Header>
                      <Card.Body>
                        <Card.Text>
                        Prelims cum mains, SOptional, Study Hall (with wi-fi) & Mentoring
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                </Col>
                  
                <Col className='center-align third-col'>
                      <Card style={{ width: '18rem' }} className='front-cards'>
                        <Card.Header className='front-card-header'>SSC AND BANKING</Card.Header>
                        <Card.Body>
                          <Card.Text>
                          Online Course, Study Hall (with wi-fi) & Mentoring
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <br />

                      <Card style={{ width: '18rem' }} className='front-cards'>
                        <Card.Header className='front-card-header'>SI AND PC</Card.Header>
                        <Card.Body>
                          
                          <Card.Text>
                            Online Course, Study Hall (with wi-fi) & Mentoring
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    <br />
                </Col>
              </Row>
            </div>
          </div>


          {/* HOME PAGE CONTENT */}


          <Container className='home-page-content'>
              <div>

              </div>
                  <Card>
                    {/* <Card.Header>Why Impulse is unique</Card.Header> */}
                    <Card.Body>
                        <Row className="justify-content-sm-center" md={3}>
                          <Col md="10" className='heading'>
                            <p style={{textAlign:'center'}}>
                                Why Impulse is unique{" "}?
                            </p>
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />Integrated course for Prelims and Mains
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />Separate batch for college students
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />Daily Current Affairs material and Quiz
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />One to One mentorship
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />Compatibility between Online and Offline course
                          </Col>
                          <Col lg="3" md="5" sm="5" className='impluse-points'>
                            <BsArrowRightShort id="icon-point" />One-time fees till you make to the final list
                          </Col>
                        </Row>
                    </Card.Body>
                  </Card>

                  <Row xs={1} md={2} className="g-4 test-current"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <Col>
                        <Card>
                          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                          <Card.Body>
                            <Card.Title>Test Series</Card.Title>
                            <Card.Text>
                            <p style={{padding:'20px'}}>
                        Practise is an inevitable part of any competitive exam.
                        <br/>We at Impulse make sure that aspirants are not only taught skillfully to become the best but are also tested time to time to make sure that the aspirants are ready for the battle. 
                        <br/>Test series are designed scientifically on periodic basic
                        <br/> Daily tests, Weekly Test, Monthly Test....
                         {/* <br/>Daily tests - Daily tests are conducted soon after daily classes to make sure that the aspirants have understood the concepts, it also enables them to self analyse their understanding so that they can ask their doubts the very next day. 
                        <br/>Weekly Test - Weekly tests are conducted on every Saturday covering all the portions that were taught in thee week. 
                        <br/>Monthly Test - Monthly tests are conducted on 1st sunday of every month covering all the portions that were taught in the previous month. 
                        <br/>This pattern of periodic tests helps in Recall , Retention, Revise of all the topics that has been taught. */}
                           <p className="read-more">
                              {/* <Link to='/testseries' id='readmorelink' style={{color: 'rgb(172, 190, 7)'}}>{"Read More>>"}</Link> */}
                           </p>
                        </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col>
                        <Card>
                          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                          <Card.Body>
                            <Card.Title>Current Affairs</Card.Title>
                            <Card.Text>
                            <p style={{padding:'20px'}}>
                     Current Affairs is an important part of preparation for all types of competitive exams, impulse has got some of the best mentors in the industry who curate current affairs that specifically meets the demand of the concerned exam. 
               {/* Every aspirant has to make an important decision of what to read and what to omit while reading newspapers, magazines or any other current affairs material, We here at make sure that our current affairs materials are readily consumable with on point explanation and viable solutions for each news item. 

               Downloadable PDFs are available on the website under Current Affairs section of each competitive exam. */}
                        <p className="read-more">
                           {/* <Link to='/currentaffairs' style={{color: 'rgb(11, 140, 179)'}} id='readmorelink'>{"Read More>>"}</Link> */}
                        </p>
                     </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                  </Row>

                <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Col xs="11" sm={{ order: 'last' }} id='about-content'>
                      <h3 className='heading' style={{margin:'30px'}}>About Impulse</h3>
                      <span>
                        
                        <p style={{padding:' 0 20px',backgroundColor:'white'}}> 
                        <img src='/pic/comma.png' id='comma'/>
                        {"      "}IMPULSE is an A-class institution, coaching students with best of the best subject
                        experts for TNPSC (Tamilnadu Public Service Commission), UPSC (Union Public Service
                        Commission), SSC and Banking exams. In addition, continuous monitoring of the performance of students
                        makes their learning faster and easier. Being student-centric we are focused to work
                        relentlessly with the students to make their dream a reality.
                        </p>
                      </span>
                  </Col>
                </Row>
                
               <div>
               <h3 className='heading' style={{textAlign:'center',padding:'4%'}}>Impulse Educational Trust</h3>
                <Row className="justify-content-sm-center" md={2}>
                  <Col md="5" className='content-img'>
                      <div className=''>
                        <img src="/pic/trust.png" id='trust'/>
                      </div>
                  </Col>
                  <Col md="6">
                      <div>
                        <p>
                        <img src='/pic/comma.png' id='comma'/>
                            {'            '}Civilisation starts with education; we strive to make everyone
                            achieve education.” We all make a living by what we get but we make
                            a life by what we give. We at Impulse Educational Trust consciously
                            ensure a life to whom we give and let them be life changers to
                            another deserving child once their life is transformed. Impulse
                            Educational Trust has been consciously created to give back to the
                            society. Deserving students from economically weaker strata of the
                            society can avail scholarship based on an entrance examination.
                            Children of serving defence personnel can avail full waiver of fees
                            (Tuition fees). For students who have lost the primary bread earner
                            of the family due to unfortunate circumstance, the fees payable will
                            be waived off till he/she continues his/her education from IMPULSE.
                            Dedicated students who have cleared the respective exam in their
                            very first attempt, the fees that have been paid to IMPULSE will be
                            refunded Why don’t you join us in touching someone’s life? Click the
                            link below if you wish to contribute. 
                            {/* Contribute here{" "}
                            <p className="read-more">
                              {"Read more>>"}
                            </p> */}
                        </p>
                      </div>
                  </Col>
                </Row>
               </div>

              <hr />

               <div className='header_founder'>
               <Row id="hf1">
               <Col md={5}>
                  <div id='hf1-sub1'>
                     <img src="/home/Vignesh anna.jpg" id='fcard-image' alt="..." />
                  </div>
               </Col>
               <Col md={5}>
                  <div>
                     <h5 class="card-title">Mr. S.Vignesh<br/><small className="small-heading">Managing Director</small></h5>
                     <p class="card-text">We at IMPULSE Coaching Institute strive for the overall
                        development of students and travel with them till they achieve
                        their dream.
                        <br />Our methodical teaching and testing add to the
                        advantage of our students. We make sure that we stand on top of
                        our industry by evolving regularly. # Join, experience and
                        succeed.</p>
                  </div>
               </Col>
               </Row>

               <Row id="hf2">
               <Col md={5} sm={{ order: 'first' }}>
                  <div>
                     <h5 class="">Mr. K. Palanivelu<br/><small className="small-heading">The Founder</small></h5>
                           
                           <p class="card-text">The importance we have attached to education for generations has
                              culminated in the development of Kalai Kovil Vidhya Mandhir
                              Matric. Higher Secondary School, Tirupur and Velan Vikhass Matric.
                              Higher Secondary School, Palani. Moving beyond schools, we have
                              ventured into the next step - IMPULSE COACHING INSTITUTE, where we
                              successfully train students aspiring to get into the government
                              service. Join us and grow with us. All the best! - Mr. K.
                              Palanivelu (The founder)</p>
                  </div>
               </Col>
               <Col md={5} sm={{ order: 'last' }}>
                  <div id='hf2-sub1'>
                     <img src="/home/founder.jpg" id='fcard-image' alt="..." />
                  </div>
               </Col>
               </Row>
               </div>

          </Container>
          
      </section>
  )
}

export default Home