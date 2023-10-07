import React from 'react'
import Hamburger from '../images/hamburger.png'
export default function Header() {
  return (
    <header>
      <div class="top-logo">
                  <img src='/logo.png' alt="logo"/>
              </div>
              <div class="head-text">
                  <p>HOME</p>
                  <p>ABOUT</p>
                  <p>CONTACT</p>
              </div>
              <div class="hamburger-menu">
                <img src={Hamburger} alt="menu"/>
            </div>
    </header>
  )
} 
