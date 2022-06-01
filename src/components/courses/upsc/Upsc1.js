
import React, { useState } from 'react';
import { Tabs, Tab, Row, Col, Table, Dropdown, NavDropdown, Nav, Accordion, Navbar, DropdownButton } from 'react-bootstrap';

// import Eligibility from './Eligibility';
// import Examinationstructure from './Examinationstructure';
// import Listofservices from './Listofservices';
// import './Upsc.css';

const Sscbanking = () => {
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

    let bankingimportant_content = Array();
    let bankingimportant_heading = Array();
    bankingimportant_heading = ['ATM (Automatic Teller Machines)','Bancassurance','Bouncing of a cheque','Bank Account','Bank Rate','Basis Point','Call Money','Cheque','Core Banking','Core Banking Solutions (CBS)','CRR (Cash Reverse Ratio)','Current Account','Debit Card','Demat Account','Dishonor of Cheque','E-Banking','EFT – (Electronic Fund Transfer)','Fiscal Deficit','Inflation','Initial Public Offering (IPO)','Kiosk Banking','Leverage Ratio','Liquidity','Market Capitalization','Mortgage','Mutual Fund','Monetary Policy'
    ,'Non-bank ATM / White-labeled ATM', 'Non-performing Assets (NPAs)','Permanent Account Number (PAN)','Plastic Money','Point of Sale (PoS)','Prime Lending Rate (PLR)','Pass Book','Repo Rate','Reverse Repo Rate','Special Drawing Rights (SDR)','SLR (Statutory Liquidity Ratio)','Teller','Universal Banking','Universal Banking','Wholesale Banking'];
    let importLength = bankingimportant_heading.length;
    bankingimportant_content = [
        'They are machines that dispense cash, receive cash, accept cheques, and give balance details and mini statements to the customers through Computer network',
        'It is the distribution of insurance products and the insurance policies of insurance companies by banks as corporate agents through their branches. Banks charge a fee for this service from insurance companies',
        'When an account has insufficient funds the cheque is not payable and is returned by the bank with a reason “Exceeds arrangement” or “funds insufficient”.',
        'It is account of nominal interest which can only be used for personal purpose and which has some restrictions on withdrawal.',
        'It is the rate of interest charged by a central bank to commercial banks on the advances and the loans it extends.',
        'One-hundredth of 1% point normally used for indicating cost of finance.',
        'It is a loan that is made for a very short period of a few days only with a low rate of interest',
        'It is written by an individual to transfer amount between two accounts of the same bank or a different bank and the money is withdrawn from the account.',
        'It is a general term used to describe the services provided by a group of networked bank branches.',
        'In this all the branches of the bank are connected together and the customer can access his/her funds or transactions from any other branch.',
        'The number of funds that a bank keep with the RBI. If the percentage of CRR increases then the amount with the bank comes down.',
        'It is an account that can be opened generally for business purposes with no restrictions on withdrawals and no interest paid.',
        'It is a card issued by the bank so the customers can withdraw their money from their accounts electronically.',
        'The way in which a bank keeps money in a deposit account in the same way the Depository Company converts share certificates into electronic form and keep them in a Demat account,',
        'Non-payment of a cheque by the paying banker with a return memo giving reasons for the non-payment.',
        'It is a type of banking in which we can conduct financial transactions electronically. RTGS, Credit cards, Debit cards etc come under this category.',
        'In this we use Automatic teller machine, wire transfer and computers to move funds between different accounts in different or same bank.',
        'It is the amount of Funds borrowed by the government to meet the expenditures.',
        'It is an increase in the quantity of money in circulation without any corresponding increase in goods thus leading to an abnormal rise in the price level.',
        'It is the time when a company makes the first offering of the shares to the public.',
        'Doing banking from a cubicle from which food, newspapers, tickets, etc are also sold.',
        'It is a financial ratio which gives us an idea or a measure of a company’s ability to meet its financial losses.',
        'It is the ability of converting an investment quickly into cash with no loss in value.',
        'The product of the share price and number of the company’s outstanding ordinary shares.',
        'It is a kind of security which one offers for taking an advance or loan from someone.',
        'These are investment schemes. It pools money from various investors in order to purchase securities.',
        'It refers to the Central Government policy with respect to the quantity of money in the economy, the rate of interest and the exchange rate.',
        'An ATM or cash machine that does not prominently display a bank’s name or logo. A fee will be charged for cash withdrawals in these ATMs and they don’t accept deposits.',
        'NPA or non-performing Assets are loans given by a bank on which repayments or interest payments are not being made on time.',
        'PAN is a number issued by the Income Tax Department to their tax payers.',
        'Plastic money is a name given to Credit cards, Debit cards, ATM cards anf International Cards issued by banks.',
        'PoS refers to a location at which a payment of a card transaction occurs.',
        'Rate of interest at which a bank gives loan to its most reliable customer i.e., customer with ‘zero risk’.',
        'It is a book where all the bank transactions are recorded. They are mainly issued to Current or Savings Bank account holders.',
        'Commercial banks borrow funds by the RBI if there is any shortage in the form of rupees. If this rate increases it becomes expensive to borrow money from RBI and vice versa.',
        'It is the exact opposite of the repo rate. It is the rate at which RBI borrows money from banks when it feels there is too much money floating in the banking system.',
        'It is a reserve asset (Paper Gold) created within the framework of the International Monetary Fund in an attempt to increase international liquidity.',
        'It is amount that a commercial bank should have before giving credits to its customers which should be either in the form of gold, money or bonds.',
        'He/she is a staff member of the bank who cashes cheques, accepts deposits and perform different banking services for the general mass.',
        'When financial institutions and banks undertake activities related to banking like investment, issue of debit and credit card etc then it is known as universal banking.',
        'Internet banking is sometimes known as virtual banking. It is called so because it has no bricks and boundaries. It is controlled by the World Wide Web.',
        'It is similar to retail banking with a slight difference that it mainly focuses on the financial needs of the institutional clients and the industry.'
    ];
    return (
        <section>

            <div class="page-header">
            
            <div class='page-head-title'>
                    <a href="#" class="developer6669">
                        <div class="img-container">
                            <img src="pic/ssc.jpg" alt="" />
                        </div>
                    </a>  
                    <h5 className='course_heading'>SSC AND BANKING</h5>
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
                    <Dropdown className='tab-btn'>
                    <Dropdown.Toggle className='dropdown-toggle btn-secondary' id="dropdown-basic">
                         Exam Syllabus
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => tabHandler_sub(0)}>PO Syllabus</Dropdown.Item>
                        <Dropdown.Item onClick={() => tabHandler_sub(1)}>CLERK Syllabus</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(2)}>Important Banking Terms</button>
                    <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(3)}>Fees Structure</button>
                </Nav>
            {/* </Container> */}
            </Navbar>
import React, { useState } from 'react';
import { Tabs, Tab, Row, Col, Table,} from 'react-bootstrap';
import Eligibility from './Eligibility';
import Examinationstructure from './Examinationstructure';
import Listofservices from './Listofservices';
import './Upsc.css';

const Upsc = () => {
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
        <section className='upsc-container'>
            
            



            <section className='tabs-container'>
                <div className='upsc-heading'>
                    <h3>UPSC</h3>
                </div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 course-tabs responsive-tab shadow p-3 mb-5 rounded"
                >
                    <h3>UPSC</h3>
                    <Tab eventKey="brochure" title="Brochure" className='course-tab'>
                        <Brochure />
                    </Tab>
                    <Tab eventKey="eligibility" title="Eligibility" className='course-tab'>
                        <Eligibility />
                    </Tab>
                    <Tab eventKey="services" title="List of services" className='course-tab'>
                        <Listofservices />
                    </Tab>
                    <Tab eventKey="structure" title="Examination structure" className='course-tab'>
                        <Examinationstructure />
                    </Tab>
                </Tabs>

                
            </section>
        </section>
    )
}

const Brochure = () => {
    return (
        <section>
            <Row className="brochure_content">
                <h4 className=''>Impulse Edge for UPSC</h4>
                <p>
                    Our scientifically designed Upgraded Full Time program is a complete
                    solution for all threee stages of Civil Services Exam. The course
                    endues students not only with the relevant konwledge but also provides
                    right kind of orientation and skills for developing administrative
                    traits. The program undertakes thorough coverage of the prescribed
                    syllabus of General Studies and the optional Subjects by well-trained
                    subject experts and professionals.
                    <br />
                    The programs is ideal for graduates who are ready to dedicate a
                    complete year for the preparation of CSE. THere will be both objective
                    and descriptive tests conducted at regular intervals, followed by
                    discussions to analyse the performance and thereby improve it.
                    <br />
                    Mock interview will be conducted by serving and retired government
                    officials and subject experts to give the feel of actual interview.
                    Recordings of the mock interview will be given to students for them to
                    look at their mistakes and correct it.
                </p>
            </Row>

            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded'>
                    <h5 >Assesment - Periodic Test</h5>
                    <hr />
                    <ul>
                        <li>Daily tests     - After every class</li>
                        <li>Weekly tests    - Every Saturday</li>
                        <li>Monthly tests   - First sunday of each month</li>
                        <li>Quarterly tests - On topic covered so far</li>
                    </ul>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-optionals shadow rounded'>
                    <h5>Optionals</h5>
                    <hr />
                    <ul>
                        <li>Public administration</li>
                        <li>Political science and international relations</li>
                        <li>Geography</li>
                        <li>History</li>
                        <li>Tamil literature</li>
                        <li>Sociology</li>
                        <li>English literature</li>
                    </ul>
                </Col>
            </Row>

            <section className="brochure-fee">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2">FEES STRUCTURE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GS + CSAT + Prelims Test Series</td>
                            <td>Rs. 60,000 (includes Periodic Tests)</td>
                        </tr>
                        <tr>
                            <td>Optional</td>
                            <td>Rs. 20,000</td>
                        </tr>
                        <tr>
                            <td>Mains Test Series</td>
                            <td>Rs. 10,000</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </section>
    )
}

export default Upsc;
                
            </div>
            
            {/* Broucher */}
            {tab[0] && 
            <div id='brochure'>
                <div class="container">
                    <div class="row">
                    <div class="col">
                        <div class="status-box-vertical status-box-vertical-primary card2">
                        <div class="header">
                            <h4 className='why_banking'>WHY BANKING ?</h4>
                        </div>
                        <div class="footer">
                            <div class="box">
                            <p class="top-title">Banks are institutions that are responsible for
                            driving funds into the economy which further
                            leads to the development of the country. Banking
                            has been amongst the sought-after careers for
                            ages, especially in India and still the mindset of
                            the population has not changed. No matter the
                            ongoing changes in the technology and the
                            revolution taking place in the business industry,
                            the only thing that has remained constant over
                            centuries is having a career in the banking sector.
                            Obviously one might not feel motivated to work in
                            a sector if they are not aware about the present
                            and future benefits.</p>
                            {/* <p class="title">CHOOSE</p> */}
                            <p class="icon"><i class="fa fa-money"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>  
                    {/* <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="status-box-vertical status-box-vertical-success card1">
                        <div class="header">
                            <p class="title">Lorem</p>
                            <div class="details">
                            <p class="big">
                                2,500 - 3,500
                            </p>
                            <p class="small">
                                1,000,000,000
                            </p>
                            </div>
                        </div>
                        <div class="body">
                            chart
                        </div>
                        <div class="footer">
                            <h4 class="footer-title">lorem</h4>
                            <div class="box">
                            <p class="top-title">0.993423442</p>
                            <p class="title">$989,342,434</p>
                            <p class="icon"><i class="fa fa-money"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="status-box-vertical status-box-vertical-primary card1">
                        <div class="header">
                            <p class="title">Lorem</p>
                            <div class="details">
                            <p class="big">
                                2,500 - 3,500
                            </p>
                            <p class="small">
                                1,000,000,000
                            </p>
                            </div>
                        </div>
                        <div class="body">
                            chart
                        </div>
                        <div class="footer">
                            <h4 class="footer-title">lorem</h4>
                            <div class="box">
                            <p class="top-title">0.993423442</p>
                            <p class="title">$989,342,434</p>
                            <p class="icon"><i class="fa fa-money"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="status-box-vertical status-box-vertical-warning card1">
                        <div class="header">
                            <p class="title">Lorem</p>
                            <div class="details">
                            <p class="big">
                                2,500 - 3,500
                            </p>
                            <p class="small">
                                1,000,000,000
                            </p>
                            </div>
                        </div>
                        <div class="body">
                            chart
                        </div>
                        <div class="footer">
                            <h4 class="footer-title">lorem</h4>
                            <div class="box">
                            <p class="top-title">0.993423442</p>
                            <p class="title">$989,342,434</p>
                            <p class="icon"><i class="fa fa-money"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="status-box-vertical status-box-vertical-danger card1">
                        <div class="header">
                            <p class="title">Lorem</p>
                            <div class="details">
                            <p class="big">
                                2,500 - 3,500
                            </p>
                            <p class="small">
                                1,000,000,000
                            </p>
                            </div>
                        </div>
                        <div class="body">
                            chart
                        </div>
                        <div class="footer">
                            <h4 class="footer-title">lorem</h4>
                            <div class="box">
                            <p class="top-title">0.993423442</p>
                            <p class="title">$989,342,434</p>
                            <p class="icon"><i class="fa fa-money"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>       */}
                    </div>
                </div>

                <div><h4 className='why_choose_points' style={{textAlign: 'center', textTransform: 'uppercase'}}>Why choose Banking as career?</h4></div> <br/>
                    
                <div class="card-category-1">
                    
                    <div class="basic-card basic-card-aqua">
                        <div class="card-link">
                            <a href="#" title="Read Full"><span>Good Social Standing</span></a>
                        </div>
                    </div>

                    <div class="basic-card basic-card-lips">
                        <div class="card-link">
                            <a href="#" title="Read Full"><span>High Growth Sector</span></a>
                        </div>
                    </div>

                    <div class="basic-card basic-card-light">
                        <div class="card-link">
                            <a href="#" title="Read Full"><span>Competitive Compensation</span></a>
                        </div>
                    </div>

                    <div class="basic-card basic-card-dark">
                        <div class="card-link">
                            <a href="#" title="Read Full"><span>Comparatively High job security</span></a>
                        </div>
                    </div>
                    
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="prepare_exam_heading"><h4>How To Prepare for Banking Exams</h4></div> <br/>
                            <div class="footer" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                                <div className='how-prepare-icon'>
                                    <img src='pic/preparation.png' width={'350'}/>
                                </div>
                                <div className='how-prepare-content'>A job in the banking sector is one of the most
                                    sought-after jobs in the country. With banks
                                    recruiting every year, thousands of candidates
                                    apply in exams conducted by Institute of Banking
                                    Personnel Selection (IBPS) and other banks.
                                </div>
                            </div>
                        </div>  

                        <div>
                            <ul className='prepare_ul'>
                                <li className='prepare_li'>Plan properly</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        The first thing that you need to do is
                                        plan. Having a proper plan is
                                        imperative as it ensures that no time
                                        is wasted. When drawing up the plan,
                                        you need to be aware of the exam
                                        pattern, syllabus, previous year’s
                                        cutoff etc. Knowing about these will
                                        help you in preparing well for the
                                        upcoming exams by focusing on
                                        those aspects which needs work.
                                        </div>
                                    </div>
                                </div>
                                <li className='prepare_li'>Make a timetable</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        Next, you need to set a timetable.
                                        Doing this will help you in managing
                                        your time fruitfully and cover a
                                        number of sections during the day. It
                                        must be noted here that in the exam
                                        you need to score cut-off marks in
                                        each section to be eligible for the job.
                                        </div>
                                    </div>
                                </div>

                                <li className='prepare_li'>Use online resources to learn</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        You should use as much online
                                        resources as possible. It will keep you
                                        updated with the recent happenings
                                        as well as enable you to master the
                                        tricks and methods used in solving
                                        the questions without wasting too
                                        much time on any questions
                                        </div>
                                    </div>
                                </div>

                                <li className='prepare_li'>Go through the entire syllabus</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        Cover the entire syllabus when preparing
                                        for the exam. Doing this will ensure that you
                                        can easily solve any question that comes in
                                        the exam. As a variety of questions are
                                        posed in an exam, being prepared is
                                        imperative.
                                        </div>
                                    </div>
                                </div>

                                <li className='prepare_li'>Practice</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        Another important thing is to practice as
                                        much as possible. The more you practice
                                        the better you will get at solving the
                                        questions. You can try solving the questions
                                        from mock tests by setting a specific time.
                                        Doing this will ensure that you can keep a
                                        track of time and answer as many questions
                                        as possible during the exam.
                                        </div>
                                    </div>
                                </div>

                                <li className='prepare_li'>Revise thoroughly</li>
                                <div class="card-category-1">
                                    <div class="basic-card-dub basic-card-light">
                                        <div class="card-link">
                                        Once you think that your preparation is
                                        done, revise thoroughly. Do not take it easy
                                        and keep working hard on each section. It
                                        will ensure that there is no complacency.
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }

            {/* Syllabus */}
            {tab[1] && 

                subtab[0] ?
                    <div id='syllabus' style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                        
                        <Row>
                            <Col md={12}>
                            <h4 className='syllabus-heading'>SBI PO - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#64BECF"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-up"></i></div>
                                        <div className="title">Interview</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Banking and Current Affairs</li>
                                                <li>Situational awareness</li>
                                                <li>Temperament and mindset, cultural fit to the banking industry</li>
                                                <li>Confidence and communication skills.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={12}>
                            <h4 className='syllabus-heading'>IBPS PO - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#64BECF"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-up"></i></div>
                                        <div className="title">Interview</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Banking and Current Affairs</li>
                                                <li>Situational awareness</li>
                                                <li>Temperament and mindset, cultural fit to the banking industry</li>
                                                <li>Confidence and communication skills.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={12}>
                            <h4 className='syllabus-heading'>IBPS RRB PO - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English / Hindi Language</li>
                                                <li>Computer Knowledge</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#64BECF"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-up"></i></div>
                                        <div className="title">Interview</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Banking and Current Affairs</li>
                                                <li>Situational awareness</li>
                                                <li>Temperament and mindset, cultural fit to the banking industry</li>
                                                <li>Confidence and communication skills.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    :
                    subtab[1] && 
                    <div id='syllabus' style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                        
                        <Row>
                            <Col md={12}>
                            <h4 className='syllabus-heading'>SBI CLERK - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-up"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={12}>
                            <h4 className='syllabus-heading'>IBPS CLERK - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>English Language</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#64BECF"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-up"></i></div>
                                        <div className="title">Interview</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Banking and Current Affairs</li>
                                                <li>Situational awareness</li>
                                                <li>Temperament and mindset, cultural fit to the banking industry</li>
                                                <li>Confidence and communication skills.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={12}>
                            <h4 className='syllabus-heading'>IBPS RRB CLERK - SYLLABUS</h4>
                                <ul className='underlist'>
                                    <li className="card1" style={{color : "#D00903"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Preliminary Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability</li>
                                                <li>Quantitative Aptitude</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="card1" style={{color : "#EC9E38"}}>
                                        <div className="icon"><i class="fa-solid fa-book-circle-arrow-right"></i></div>
                                        <div className="title">Mains Exam</div>
                                        <div className="content">
                                            <ul className='list_content_syllabus'>
                                                <li>Reasoning Ability & Computer Knowledge</li>
                                                <li>Quantitative Aptitude</li>
                                                <li>Financial Awareness</li>
                                                <li>English / Hindi Language</li>
                                                <li>Computer Knowledge</li>
                                                <li>General Awareness</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
            
            }

            {/* Important Banking Terms */}
            {tab[2] && 
            <div id='importantbankingterms'>

            <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                <Col md={10} className='importantterms_desc'>
                    <div>
                    Banking terms and concepts are many and can
                        sometimes be difficult to figure out, even for the
                        industry professionals. However, since banking is a
                        significant part of our business and personal life, it is
                        useful for consumers to learn some common banking
                        terms.
                    </div>
                </Col>
                <Col md={10}>
                    <Accordion defaultActiveKey="0" flush alwaysOpen>
                    {Array.from({ length: importLength }).map((_, idx) => (
                        <Accordion.Item eventKey={idx}>
                            <Accordion.Header><h5 className='bank_import_heading' style={{textTransform:'capitalize'}}>{bankingimportant_heading[idx]}</h5></Accordion.Header>
                            <Accordion.Body className='bank_import_content' >
                            {bankingimportant_content[idx]}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                    </Accordion> 
                </Col>
            </Row>
                {/* <Important/> */}
            </div>
            }

            {/* Fees Structure */}
            {tab[3] && 
            <div id='fees_structure'>
                <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                    <Col md={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="2">FEES STRUCTURE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Course Fees</td>
                                    <td>Rs. 10,000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            }
        </section>
    )
}

export default Sscbanking;