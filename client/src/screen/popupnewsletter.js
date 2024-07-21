import React, { useState } from 'react'; 
import './../styles/subnewsletter.css';
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx";

const formUrl = 'https://script.google.com/macros/s/AKfycbx5lBfuMixeMQYdZYR7IbSDyaYwwGiH0Dfp8vN3AKNmLyp9dEni9tLz12mFTQn-WG8qAQ/exec'

export default function Popupnewsletter() {
  const [formData, setFormData] = useState({
    Email_ID: ''
  });
  const [submitText, setSubmitText] = useState('Subscribe');
  const [showPopup, setShowPopup] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const { Email_ID } = formData;
    setSubmitted(true);
    e.preventDefault();
    axios({
      method: 'get',
      url: `${formUrl}?&Email_ID=${encodeURIComponent(Email_ID)}`
    })
    .then((r) => r.data)
    .then((data) => {
      setSubmitText('Subscribed');
      setFormData({
        Email_ID: '',
        timestamp: new Date(),
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  

  const handleClose = () => {
      setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-background"></div>
          <div className="popup-content">
          {submitted ? (
          <center>
              <div className='thankugreet'>
                <div className='close' onClick={handleClose} style={{cursor:'pointer'}}>
                  <RxCrossCircled className='crossimg'/>
                </div>
                <div className='thankuimg'>
                    <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707226119/thanku_hfiump.jpg" className='thankuavtar' alt="tankUBox"/>
                </div>

                <div class="h-3">Thank you for subscribing!</div>
                  <div class="thnakuletter">
                      You are now part of our community. Get ready to receive exciting updates,
                      exclusive offers, and more directly to your inbox.
                  </div>
              </div>
          </center>
          ) : 
          ( 
            <>
              <center>
                <div className='popupletter'>
                  <div className='close' onClick={handleClose} style={{cursor:'pointer'}}>
                    <RxCrossCircled className='crossimg'/>
                  </div>
                  <div className='newsletter'>
                    <div className='letterimg'>
                      <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706783129/Frokerassets/Group_1171276820_1_hysw5m.jpg" className='pic' alt='newsletter popup'/>
                    </div>
                    <div className='lettersecond'>
                          <div className='staytuned'>
                            Stay tuned!
                          </div>
                          <div className="paragraph">
                            Subscribe to our Newsletter for Exclusive Updates, Tips, and More.
                          </div>
                          <div className="paragraphh">
                            Subscribe to our Newsletter for Exclusive Updates, Tips, and More.
                          </div>
                          <div>
                            <form onSubmit={handleSubmit}>
                              <div className='subscribebutton' >
                                  <div className='mail'>
                                    <input type="email" id='email' name='Email_ID' value={formData.Email_ID} onChange={handleChange} placeholder="Enter your email"   style={{width:'100%',height:'100%',color:'black',border:'0px',borderRadius:'20px',outline:'none',padding:'0px 20px'}} required/> 
                                  </div>     

                                  <button type='submit' className='subscribe'>
                                      {submitText}
                                  </button>                                
                              </div>
                            </form> 
                          </div>  

                          <div>
                            <form onSubmit={handleSubmit}>
                              <div className='maill'>
                                  <input type="email" id='email' name='Email_ID' value={formData.Email_ID} onChange={handleChange} placeholder="Enter your email"    style={{width:'100%',color:'black',border:'0px',borderRadius:'20px',outline:'none',padding:'0px 20px'}} required/> 
                              </div>

                              <button type='submit'  className='subscribee'>
                                    {submitText}                            
                              </button>
                            </form>
                          </div>
                    </div>
                  </div>
                </div>
              </center>  
            </>
            )} 
          </div>
        </div>
      )}
    </> 
  );
}