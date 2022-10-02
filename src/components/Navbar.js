import React from 'react';
import './Navbar.css';
import Shop from '../UI/shop/Shop.js';
import Blog from '../UI/blog/Blog.js';
import Contact from '../UI/blog/Blog.js';
import About from '../UI/about/About.js';
import Pages from '../UI/pages/Pages.js';
import {ReactComponent as Login} from '../UI/icons/login.svg';
import {ReactComponent as Search} from '../UI/icons/search.svg';
import {ReactComponent as Cart} from '../UI/icons/cart.svg';
import {ReactComponent as Heart} from '../UI/icons/heart.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let count2 = 1;


function Navbar(props) {
  return (
    <Router>
    <div className='navbar'>
        <nav className='nav-body'>
            <h3>AccioJob</h3>
            <div className='nav-list'>
                <div className='nav-list1'>
                    <ul>
                        <li>
                            {/* <a href='/'>Home</a> */}
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        <li>
                            {/* <a href='/'>Shop</a> */}
                            <Link className='link' to='/shop'>Shop</Link>
                        </li>
                        <li>
                            {/* <a href='/'>About</a> */}
                            <Link className='link' to='/about'>About</Link>
                        </li>
                        <li>
                            {/* <a href='/'>Blog</a> */}
                            <Link className='link' to='/blog'>Blog</Link>
                        </li>
                        <li>
                            {/* <a href='/'>Contact</a> */}
                            <Link className='link' to='/contact'>Contact</Link>
                        </li>
                        <li>
                            {/* <a href='/'>Pages</a> */}
                            <Link className='link' to='/pages'>Pages</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-list2'>
                        <ul>
                            <li>
                                <Login height='12px' width='12px' margin='5px'/>
                                <a href='/'>Login / Register</a>
                            </li>
                            <li>
                                <Search height='16px' width='16px' margin-left='20px'/>
                            </li>
                            <li style={{height: '15px', width: '15px', marginLeft: '30px'}}>
                                <Cart />
                            </li>
                            <li style={{height: '16px', width: '5px', top: '15px', left: '36px', fontWeight: '400', fontSize: '12px', lineHeight: '16px', fontFamily: 'Montserrat', letterSpacing: '0.2px', color: '#23A6F0', marginLeft: '6px', marginBottom: '10px'}}>
                                {props.counter}
                            </li>
                            <li style={{marginLeft: '18px', padding: '2px'}}>
                                <Heart />
                            </li>
                            <li style={{height: '16px', width: '5px', top: '15px', left: '36px', fontWeight: '400', fontSize: '12px', lineHeight: '16px', fontFamily: 'Montserrat', letterSpacing: '0.2px', color: '#23A6F0', marginLeft: '3px', marginBottom: '10px'}}>
                                {count2}
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        <Switch>
            <Route path='/shop'>
                <Shop />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Route path='/pages'>
                <Pages />
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default Navbar