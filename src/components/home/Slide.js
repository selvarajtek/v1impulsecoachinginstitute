import React, { useEffect, useState } from 'react';
// import { IoIosArrowDown } from "react-icons/io";
// import Flip from 'react-reveal/Flip';
import './Slide.css';
// import Democlass from '../democlass/Democlass';
import { NavLink} from 'react-router-dom';
import { Button,Col,Row } from 'react-bootstrap';
// import './Home.css';
// import { BsArrowRightShort } from "react-icons/bs";
// import {RiVideoFill} from "react-icons/ri";

function SlideImage() {

    const [imageSrc, setImageSrc] = useState('/slide/1.jpg');
    let count = 2;

    useEffect(() => {
        setInterval(() => {
            if (count >= 5) {
                count = 1;
            }
            setImageSrc('/slide/' + count + '.jpg');
            // console.log(count);
            count++;
        }, 50000);
    }, [count]);

    const scrollSlideCase = () => {
        window.scrollTo(0, 660);
    }

    

    return (
        <section className='home-container-slide'>
            <div className='home-slide'>
                <div>
                    <img src={imageSrc} id='slide-img' />
                </div>

                <div className='overlay'>
                    
                </div>
            </div>
        </section>
    )
}

export default SlideImage;
