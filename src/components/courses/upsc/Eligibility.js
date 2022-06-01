
import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import './Upsc.css';

const Eligibility = () => {
    return (
        <section>
            <section className="brochure-fee">
                <p colSpan="2" className='u_heading'>Eligibility Overview</p>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Age Limit</td>
                            <td>21 to 32 years</td>
                        </tr>
                        <tr>
                            <td>Age Relaxation</td>
                            <td>As per category (mentioned below)</td>
                        </tr>
                        <tr>
                            <td>Educational Qualification for IAS</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>Indian citizens only</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
            
            <Row className="brochure_content">
                
                <h5 className='u1_heading'>UPSC Age Limit – Minimum and Maximum Age for IAS</h5>

                <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment u_card1 shadow rounded'>
                    <h5 style={{textTransform:'uppercase'}}>UPSC Exam Age Limit For Civil Services Exam 2021</h5>
                    <hr />
                    <p>
                    As per the Civil Services Age Limit, the candidate Should be between 21 and 32 years, as on 1st August 2021 (for the UPSC CSE 2021), i.e., he/she must have been born not earlier than 2nd August 1989 and not later than 1st August 2000.
                    </p>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-optionals u_card2 shadow rounded'>
                    <h5 style={{textTransform:'uppercase'}}>UPSC Age Limit for Civil Services Exam 2022</h5>
                    <hr />
                    <p>
                    The candidates must have attained 21 years of age and be less than 32 years of age as of 1st August 2022.  *The official notification will carry UPSC Age Limit 2022 details. The official notification will carry the details about the age for UPSC Exam 2022.
                    </p>
                </Col>
            </Row>
                
            </Row>


            <section className="brochure-fee">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>CATEGORY</th>
                            <th>AGE LIMIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IAS exam Age Limit for General Category</td>
                            <td style={{textAlign:'center'}}>21 - 32</td>
                        </tr>
                        <tr>
                            <td>EWS</td>
                            <td style={{textAlign:'center'}}>21 - 32</td>
                        </tr>
                        <tr>
                            <td>SC/ST</td>
                            <td style={{textAlign:'center'}}>21 - 37</td>
                        </tr>
                        <tr>
                            <td>IAS OBC Age Limit</td>
                            <td style={{textAlign:'center'}}>21 - 35</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
            
            <section className="brochure-fee">
                <div style={{textAlign:'center',padding:'10px', paddingTop:'0px'}}>
                    <h5 className='u1_heading'>Eligibility – Age Relaxation & Number of Attempts</h5>
                    <small>(Civil Services Age limit relaxations, as discussed below, will apply).</small>
                </div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="3" style={{textTransform:'uppercase',padding:'10px'}}>UPSC Exam Age Limit for General, SC/ST, OBC & Other categories</th>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <th>UPSC Age Limit- Upper Relaxation</th>
                            <th>Number of Attempts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>General</td>
                            <td>32</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>OBC</td>
                            <td>35</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>SC/ST</td>
                            <td>37</td>
                            <td>Unlimited (Up to age limit)</td>
                        </tr>
                        <tr>
                            <td>Disabled Defence Services Personnel</td>
                            <td>35</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Ex-Servicemen</td>
                            <td>37</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Persons with
Benchmark Disability – EWS (Economically Weaker Section)</td>
                            <td>42</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            <Row className="brochure-fee">
                <Col  className='shadow rounded'>
                    <h5 className='u_note'>NOTE:</h5>
                    <hr />
                    <ul style={{listStyle:'square'}}>
                        <li style={{padding:'10px'}}>As per the IAS Eligibility for Defence Servicemen, the persons Disabled in operations during hostilities with any foreign country or in a disturbed area and released as a consequence thereof have special Civil Services age limit relaxation</li>
                        <li style={{padding:'10px'}}>The IAS Eligibility states that ECOs/SSCOs who have completed an initial period of assignment of 5 years Military Service as on 1st August 2020 get five years of age relaxation, provided whose assignment has been extended beyond five years and in whose case the Ministry of Defense issues a certificate that they can apply for civil employment and that they will be released on three months’ notice on the selection from the date of receipt of an offer of appointment.</li>
                    </ul>
                </Col>
            </Row>
        </section>
    )
}
export default Eligibility;