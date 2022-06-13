import React from 'react'
import './Marquee.css';
function Marquee() {
  return (
    <div className='' style={{display:'flex',justifyContent:'center',alignItems:'center',position:'fixed',marginTop:'-30px',width:'100%',zIndex:'1', height: '30px'}}>
        <marquee direction="right" className='marquee-body shadow-lg bg-body rounded'>
            <span>
                <a href='https://t.me/impulseupsc' rel="noreferrer" target='_blank' className='notification-scroll-text'><span className='notification-clickhere'>| Click here</span> <span>to join UPSC Telegram Channel </span></a>
                {/* <a href='https://forms.gle/paoPBbXohWuBUDkq7' rel="noreferrer" target='_blank' className='notification-scroll-text'><span className='notification-clickhere'>| Click here</span> <span>to register for scholorship exam |</span></a> */}
            </span>
        
        </marquee>
    </div>
  )
}

export default Marquee