import React from 'react';
import './Footer.css';
import {ReactComponent as Facebook} from '../UI/icons/facebook.svg';
import {ReactComponent as Instagram} from '../UI/icons/instagram.svg';
import {ReactComponent as Twitter} from '../UI/icons/twitter.svg';

function Footer() {
  const [userEmail, setUserEmail] = React.useState('');

  
    const handleUserEmailChange = (event) => {
        // console.log(event);
        setUserEmail(event.target.value);  
    }

    const handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault();

        if(userEmail === ""){
            alert("Sorry, can't submit empty email");
            return;
        }

        // Creating the emails database

        fetch('https://get-in-touch-e977d-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json',
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userEmail: userEmail
            })
        }

        ).then((res) => {
            // console.log('res', res);
            return res.json();
        }).then((data) => {
            // console.log('data', data);
        });

        setUserEmail("");

        window.location.reload();
    }

    return (
    <div className='footer-container'>
        <div className="footer-header">
            <div className="container1">
                <div className="row1">
                    <h3>Acciojob</h3>
                    <div className='social-media'>
                        <Facebook className='facebook'/>
                        <Instagram className='insta'/>
                        <Twitter className='twitter'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className='horizontal-line'/>
        <div className="footer-body">
            <div className="footer-container">
                <div className="row2">
                    <div className="col-md-2">
                        <h5>Company Info</h5>
                        <div className='company-info-list'>
                            <a href="/">About Us</a>
                            <a href="/">Carrier</a>
                            <a href="/">We are hiring</a>
                            <a href="/">Blog</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Legal</h5>
                        <div className='company-info-list'>
                            <a href="/">About Us</a>
                            <a href="/">Carrier</a>
                            <a href="/">We are hiring</a>
                            <a href="/">Blog</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Features</h5>
                        <div className='company-info-list'>
                            <a href="/">Business Marketing</a>
                            <a href="/">User Analytic</a>
                            <a href="/">Live Chat</a>
                            <a href="/">Unlimited Support</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Resources</h5>
                        <div className='company-info-list'>
                            <a href="/">IOS & Android</a>
                            <a href="/">Watch a Demo</a>
                            <a href="/">Customers</a>
                            <a href="/">API</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Get In Touch</h5>
                        <div className='subscribe'>
                            <form onSubmit={handleSubmit} className='email-form'>
                                <input className='input-bar' type="text" placeholder='Your Email' onChange={handleUserEmailChange} value={userEmail}/>
                                <button className='subscribe-btn' type='submit'>Subscribe</button>
                            </form>
                        </div>
                        <p className='lorem'>Lorem ipsum dolor sit</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <h6>Made With ❤️ at Acciojob</h6>
        </div>
    </div>
  )
}

export default Footer