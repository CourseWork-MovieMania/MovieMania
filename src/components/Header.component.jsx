import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <nav className="nav-wrapper indigo darken-4">
       <div className="container">
          <a href="/" className="brand-logo">MovieMania</a>
          <ul className="right">
              {/* change all a to LINK so that it will not reload it again but if you change them to NAVLINK then it will add a active class to it--so pretty good thing    */}
              <NavLink to = "/"><li>Home</li></NavLink>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
          </ul>
       </div>   
    </nav>
)
export default Header;