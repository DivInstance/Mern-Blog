import React, { useState } from 'react';
import './../styles/subnewsletter.css';
import axios from 'axios';

const formUrl = 'https://script.google.com/macros/s/AKfycbx5lBfuMixeMQYdZYR7IbSDyaYwwGiH0Dfp8vN3AKNmLyp9dEni9tLz12mFTQn-WG8qAQ/exec'

export default function SubscribeNewsletter() {
  const [formData, setFormData] = useState({
    Email_ID: ''
  });

  const [submitText, setSubmitText] = useState('Subscribe');
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

  return (
    <>
    {submitted ? (
      <center>
          <div className='thankugreett'>
            
            <div className='thankuimgg'>
                <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707226119/thanku_hfiump.jpg" alt='pic of blogs' className='thankuavtarr'/>
            </div>

            <div className='diff'>
              <div class="h-33">Thank you for subscribing!</div>

              <div class="thnakuletterr">
                  You are now part of our community. Get ready to receive exciting updates,
                  exclusive offers, and more directly to your inbox.
              </div>
            </div>
            <div class="h-3e">Thank you for subscribing!</div>

            <div class="thnakulettere">
                You are now part of our community. Get ready to receive exciting updates,
                exclusive offers, and more directly to your inbox.
            </div>

          </div>
      </center>
      ) : (
    <center>
        <div className='parentletter'>
          <div className='newsletter'>

            <div className='letterimg'>
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png" className='pic' alt='newsletter'/>
            </div>

            <div className='lettersecond'>

              <div className='subscribetonews'>
                Subscribe to our newsletter to get the latest updates and news
              </div>

              <div className='subnews'>
                <span><b>Subscribe</b> <br></br>to our newsletter to get the latest<br></br> updates and news</span>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                    <div className='subscribebutton' >
                        <div className='mail'>
                          <input  type="email" id='email' name='Email_ID' value={formData.Email_ID} onChange={handleChange} placeholder="Enter your email"   style={{width:'100%',height:'100%',color:'black',border:'0px',borderRadius:'20px',outline:'none',padding:'0px 20px'}} required/> 
                        </div>
                            
                        <button type='submit' className='subscribe'>
                          <div className='subscribe'>
                              {submitText}
                          </div>
                        </button>
            
                    </div>
                </form>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className='maill'>
                      <input   type="email" id='email' name='Email_ID' value={formData.Email_ID} onChange={handleChange} placeholder="Enter your email"    style={{width:'100%',color:'black',border:'0px',borderRadius:'20px',outline:'none',padding:'0px 20px'}} required/> 
                  </div>
                  <button type='submit' className='subscribee'>
                    {submitText}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

    </center>
    )}
    </>
  );
}
