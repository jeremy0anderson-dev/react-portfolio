/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Scroll from 'react-scroll';
import {Link} from "react-router-dom";

const NavBarItems = [
  {
    text: 'Home',
  },
  {
    text: 'About',
  },
  {
    text: 'Projects',
  },
  {
    text: 'Skills',
  },
  {
    text: 'Contact',
  }
];

function NavBar () {
  const [burger, setBurger] = useState(false)
    return (
      <nav
        className="navbar is-link is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className='navbar-brand'>
          <a
            role="button"
            className={`navbar-burger ${burger ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setBurger(!burger)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${burger ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {
              NavBarItems.map(item => (<a
                key={item.text}
                className="navbar-item"
                onClick={() => {
                  Scroll.scroller.scrollTo(item.text, {
                    duration: 500,
                    delay: 100,
                    smooth: true,
                    offset: -52,
                  });
                }}
              >
                {item.text}
              </a>))
            }
          </div>
        </div>
      </nav>
    );
}

export default NavBar;
