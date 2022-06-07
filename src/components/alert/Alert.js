import React, { useState } from 'react';
import { Modal, Button, Image, Card } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';

import './Alert.css';

function Alert() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton className='alert-header'>
                            </Modal.Header>
                <Modal.Body>
                    <Card className="bg-dark text-white">
                        <Card.Img src="/pic/democalss.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button> */}
                    <a href="https://t.me/impulseupsc" target='_blank'><Button variant="info">
                        Click to Join
                    </Button></a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Alert
