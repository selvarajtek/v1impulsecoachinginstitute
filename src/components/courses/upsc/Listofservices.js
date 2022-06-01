
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Upsc.css';

const Listofservices = () => {
    return (
        <section>
            <Row className="brochure-fee">
                <h4 className='u_heading' style={{padding:'10px'}}>List of Civil Services Jobs</h4>
                <div style={{letterSpacing:'1px', fontSize:'1.1rem'}}>
                <p>
                    The Civil Services examination is one of the most prestigious examinations in India. It is conducted by the Union Public Service Commission (UPSC). Throughout the country, these services have been the most sought after careers by youngsters.
                </p>
                <p>
                    The three types of services recruited through the Civil Services Examination are All India Services, Central Services, and State Services. The salaries too differ as per the post and category of the Services.
                    
                    Here is the complete list of the civil services jobs for which combined examinations are held. The UPSC rank allotment decides which service you will get. Students are asked to list the services as per their preferences. The higher your rank the more you get a post of your choice. UPSC ranks and services almost go hand in hand. The upsc rank structure has been followed all along and your position in that upsc rank list gets you into these services. You do get to write the exam again but once again upsc rank wise post for that year is alloted.
                </p>
                </div>
            </Row>

            <Row className="brochure-fee">
                
                <Col  className='shadow rounded' style={{letterSpacing:'1px', fontSize:'1.1rem'}}>
                <h4 className='u_heading' style={{padding:'10px',paddingTop:'20px'}}>SERVICES AND POSTS UNDER UPSC CIVIL SERVICE EXAMINATION</h4>
                    <hr />
                    <ul style={{listStyle:'square'}}>
                        <li style={{padding:'10px'}}>Indian Administrative Service (IAS)</li>
                        <li style={{padding:'10px'}}>Indian Foreign Service (IFS)</li>
                        <li style={{padding:'10px'}}>Indian Police Service (IPS)</li>
                        <li style={{padding:'10px'}}>Indian Audit and Accounts Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Civil Accounts Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Corporate Law Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Defence Accounts Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Defence Estates Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Information Service, Junior Grade Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Postal Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian P&T Accounts and Finance Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Railway Protection Force Service, Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Revenue Service (Customs & Indirect Taxes) Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Revenue Service (Income Tax) Group ‘A’</li>
                        <li style={{padding:'10px'}}>Indian Trade Service, Group ‘A’ (Grade III)</li>
                        <li style={{padding:'10px'}}>Armed Forces Headquarters Civil Service, Group ‘B’ (Section Officer’s Grade)</li>
                        <li style={{padding:'10px'}}>Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Civil Service (DANICS), Group ‘B’</li>
                        <li style={{padding:'10px'}}>Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Police Service (DANIPS), Group ‘B’</li>
                        <li style={{padding:'10px'}}>Pondicherry Civil Service (PONDICS), Group ‘B’</li>
                    </ul>
                </Col>
            </Row>

            

        </section>
    )
}
export default Listofservices;