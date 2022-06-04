
import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import './Upsc.css';

const Examinationstructure=()=>{
    return(
        <section>
            <Row className="brochure-fee">
                <h4 className='u_heading' style={{padding:'10px'}}>Exam Structure</h4>
                <p style={{fontSize:'18px'}}>
                    The UPSC civil services exam pattern is officially divided into two stages called Preliminary and Main Examination while in practice, it is a three-stage exam. The third being Personality Test/Interview.
                    <br />
                    As per the IAS exam pattern, candidates who clear the Prelims are eligible for Mains and candidates who clear the Main reach the interview stage.
                </p>
            </Row>

            <Row className="brochure-fee">
                <h5 className='u3_heading' >The Civil Services (Preliminary) Examination pattern:</h5>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th colSpan="6" style={{textTransform:'uppercase',padding:'20px'}}>Civils Exam Pattern – Prelims</th>
                        </tr>
                        <tr style={{textTransform:'uppercase'}}>
                            <th>Paper</th>
                            <th>Type</th>
                            <th>No. of questions</th>
                            <th>UPSC Total Marks</th>
                            <th>Duration</th>
                            <th>Negative marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>General Studies I</td>
                            <td>Objective</td>
                            <td>100</td>
                            <td>200</td>
                            <td>2 hours</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>General Studies II (CSAT)</td>
                            <td>Objective</td>
                            <td>80</td>
                            <td>200</td>
                            <td>2 hours</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </Table>

                <div className='civil_content'>
                    This examination is meant to serve as a screening test only; the marks obtained in the Civil Services (Preliminary) Examination by the candidates who are declared qualified for admission to the Civil Services (Main) Examination will not be counted for determining their final order of merit.
                    The number of candidates to be admitted to the Civil Services (Main) Examination will be about twelve to thirteen times the total approximate number of vacancies to be filled in the year through this Examination. Only those candidates who are declared by the Commission to have qualified in the Civil Services (Preliminary) Examination in the year will be eligible for admission to the Civil Services (Main) Examination of that year provided they are otherwise eligible for admission to the Civil Services (Main) Examination.
                    The Commission will draw a list of candidates to be qualified for Civil Services (Main) Examination based on the criterion of minimum qualifying marks of 33% in General Studies Paper II of Civil Services(Preliminary) Examination and total qualifying marks of General Studies Paper I of Civil Services (Preliminary) Examination as may be determined by the commission.
                </div>
            </Row>

            <Row className="brochure-fee">
                <h5 className='u3_heading'>The Civil Services (Main) Examination:</h5>
                <div className='civil_content'>
                    The Civil Services (Main) Examination will consist of a Written Examination and an Interview/Personality Test. The Written Examination will consist of 9 papers of conventional essay type , out of which two papers will be of qualifying in nature.
                   <br/> Marks obtained for all the compulsory papers (Paper I t o Paper VII) and Marks obtained in Interview/Personality Test will be counted for ranking.
                </div>
            </Row>
            
            <section className="brochure-fee">
                <Table striped bordered hover responsive id='table-scheme'>
                    <thead>
                        <tr>
                            <th colSpan="4" style={{textTransform:'uppercase',padding:'15px'}}>Scheme for Main Examination</th>
                        </tr>
                        <tr style={{textTransform:'uppercase'}}>
                            <th>Paper</th>
                            <th>Subject</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paper A</td>
                            <td>Compulsory Indian language</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Paper B</td>
                            <td>English</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Paper I</td>
                            <td>Essay</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper II</td>
                            <td>General Studies I - (Indian Heritage and Culture, History and Geography of the World and Society)</td>
                            
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper III</td>
                            <td>General Studies II - (Governance, Constitution, Polity, Social Justice and International relations)</td>
                            
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper IV</td>
                            <td>General Studies III - (Technology, Economic Development, Biodiversity, Environment, Security and Disaster Management)</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper V</td>
                            <td>General Studies IV - (Ethics, Integrity and aptitude)</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper VI</td>
                            <td>Optional I</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Paper VII</td>
                            <td>Optional II</td>
                            <td>250</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded'>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{textTransform:'uppercase'}}>
                            <th>Test</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sub Total - Written test</td>
                            <td>1750 Marks</td>
                        </tr>
                        <tr>
                            <td>Personality Test</td>
                            <td>275 Marks</td>
                        </tr>
                        <tr>
                            <td>Grand Total</td>
                            <td>2025 Marks</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-optionals shadow rounded'>
                    <div>
                    The papers on Indian languages and English (Paper A and paper B) will be of Matriculation or equivalent standard and will be of qualifying nature. The marks obtained in these papers will not be counted for ranking.
                    <br/>Evaluation of the papers, namely, 'Essay', 'General Studies' and Optional Subject of all the candidates would be done simultaneously along with evaluation of their qualifying papers on ‘Indian Languages’ and ‘English’ but the papers on Éssay', General Studies and Optional Subject of only such candidates will be taken cognizance who attain 25% marks in ‘Indian Language’ and 25% in English as minimum qualifying standards in these qualifying papers.
                    <br/>Marks obtained by the candidates for the Paper I to  VII only will be counted for merit ranking. However, the Commission will have the discretion to fix qualifying marks in any or all of these papers.

                    </div>
                </Col>
            </Row>
            
            <section className='brochure-fee2 shadow rounded' style={{padding:'20px'}}>
                <h5 className='u3_heading'>List of optional subjects for Main Examination:</h5>

                <ul style={{listStyle:'square', fontSize: '17px'}}>
                    <li style={{padding:'10px'}}>Agriculture</li>
                    <li style={{padding:'10px'}}>Animal Husbandry and Veterinary Science</li>
                    <li style={{padding:'10px'}}>Anthropology</li>
                    <li style={{padding:'10px'}}>Botany</li>
                    <li style={{padding:'10px'}}>Chemistry</li>
                    <li style={{padding:'10px'}}>Civil Engineering</li>
                    <li style={{padding:'10px'}}>Commerce and Accountancy</li>
                    <li style={{padding:'10px'}}>Economics</li>
                    <li style={{padding:'10px'}}>Electrical Engineering</li>
                    <li style={{padding:'10px'}}>Geography</li>
                    <li style={{padding:'10px'}}>Geology</li>
                    <li style={{padding:'10px'}}>History</li>
                    <li style={{padding:'10px'}}>Law</li>
                    <li style={{padding:'10px'}}>Management</li>
                    <li style={{padding:'10px'}}>Mathematics</li>
                    <li style={{padding:'10px'}}>Mechanical Engineering</li>
                    <li style={{padding:'10px'}}>Medical Science</li>
                    <li style={{padding:'10px'}}>Philosophy</li>
                    <li style={{padding:'10px'}}>Physics</li>
                    <li style={{padding:'10px'}}>Political Science and International Relations</li>
                    <li style={{padding:'10px'}}>Psychology</li>
                    <li style={{padding:'10px'}}>Public Administration</li>
                    <li style={{padding:'10px'}}>Sociology</li>
                    <li style={{padding:'10px'}}>Statistics</li>
                    <li style={{padding:'10px'}}>Zoology</li>
                    <li style={{padding:'10px'}}>Literature of any one of the following languages:</li>
                    <p>
                    Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi,Nepali, Odia, Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu and English.
                    </p>
                </ul>
            </section>
           
        </section>
    )
}
export default Examinationstructure;