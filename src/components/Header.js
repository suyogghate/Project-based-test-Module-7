import React from 'react';
import './Header.css';
import girl from '../images/girl.png';

function Header() {
  return (
    <div className='header-row'>
        <div className='header-left'>
            <h5>SUMMER 2020</h5>
            <h1>NEW COLLECTION</h1>
            <h4>We know how large objects will act, <br/>but things on a small scale.</h4>
            <button className='shop-now-btn'>
                <h3>SHOP NOW</h3>
            </button>
        </div>
        <div className='header-right'>
            <img src={girl} alt="" />
        </div>
    </div>
  )
}

export default Header