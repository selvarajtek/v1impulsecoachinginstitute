import React, { useEffect, useState } from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import Currentaffairs from './Currentaffairs';
import axios from 'axios';
// import Database from '../database/Database';
function CATnpsc() {

  let postlinks11=[['http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf','http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf'
  ,'http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf','http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf'
  ,'http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf'],
  ['http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf','http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf'
  ,'http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf','http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf'
  ,'http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf']];
  const [postlinks,setPostLinks]=useState([]);
  const API_PATH = 'http://localhost/impulse/currentaffairs/getcurrentaffairs.php';
  
  useEffect(()=>{
    axios({
      method: 'post',
      url: API_PATH,
      headers: {
          'content-type': 'application/json'
      }
  })
  .then(result => {
      console.log(result.data);
      setPostLinks(result.data);
  })
  .catch(

  );
  },[])
  const downloadCurrentAffairs=()=>{
      
  }

  return (
    <section>
        <Currentaffairs/>
        <Container>
            <div className='cat-heading'>
              
              <h3>TNPSC</h3>
            </div>
            {/* <Database/> */}
            <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>MARCH CURRENT AFFAIRS - 2022</Card.Title>
                    <hr/>
                    <Card.Text  style={{cursor:'pointer'}}>
                      <a href='http://localhost/impulse/currentaffairs/files/2022/03/UPSC_March23.pdf' download={true} onClick={() => downloadCurrentAffairs(1)}>1. This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))} */}
            {
                postlinks.map((arr,idx1)=>(
                  <Col>
                   <Card>
                    <Card.Body>
                      <Card.Title>MARCH CURRENT AFFAIRS - 2022</Card.Title>
                      <hr/>
                       {arr.map((postlink,idx2)=>(
                              <Card.Text style={{cursor:'pointer'}}>
                              <a href={postlink} download={true} onClick={() => downloadCurrentAffairs(1)}>{idx2+1}. This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.</a>
                              </Card.Text>
                        ))}
                  </Card.Body>
                  </Card>
                </Col>
                ))
              }
          </Row>
        </Container>
    </section>
  )
}

export default CATnpsc