import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser"


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rr8ti8l', 'template_82e6xex', form.current, 'sisjZg7lTp4TEK9Vj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    //   service_rr8ti8l


  return (
    <div className='join' id='join-us'>

        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='enter you email ' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Join
