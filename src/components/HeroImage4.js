import React, { useState } from 'react';
import "./HeroImageStyles4.css";
import { MdOutlineLocationOn, MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md';

const HeroImage4 = () => {

    const [status, setStatus] = useState("Send Message");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(details),
    });
    setStatus("Send Message");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className = 'footer4'>
      <div className = 'footer-container4'>
        <div className = 'contact'>
            <h1>Contact</h1>
            <p>Please feel free to contact me for any inquiries or opportunities you may have. 
                I would be happy to connect with you and discuss any potential collaboration or project.</p>

                
                <div className = 'container4'>
                  <div className = 'left'>

                    <div className = 'icons'>
                      <MdOutlineLocationOn id = 'social-icons1' style = {{color: '#fff'}} size = '1rem'/>
                      <MdOutlineMailOutline id = 'social-icons2' style = {{color: '#fff'}} size = '1rem'/>
                      <MdOutlinePhoneInTalk id = 'social-icons3' style = {{color: '#fff'}} size = '1rem'/>
                    </div>
                    
                    <div className = 'text'>
                      <p><p></p></p>
                      <p1 id = 'location'>Location:</p1> 
                      <p><p></p></p>           
                      <p1 id = 'email'>Email:</p1>
                      <p><p></p></p>
                      <p1 id = 'call'>Call:</p1>
                    </div>
                    
                  </div>

                  <div className = 'right'>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <h2><label htmlFor = "name">Name:</label></h2>
                        <input type = "text" id = "name" required />
                        <p></p>
                      </div>
                      <div>
                        <h2><label htmlFor = "email">Email:</label></h2>
                        <input type = "email" id = "email" required />
                        <p></p>
                      </div>
                      <div>
                        <h2><label htmlFor = "message">Message:</label></h2>
                        <textarea id ="message" required />
                      </div>
                      <button type = "submit">{status}</button>
                      </form>
                  </div>
                </div>

                

        </div>
      </div>
    </div>

    

  )
}

export default HeroImage4
