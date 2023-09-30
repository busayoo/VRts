import React from 'react'
import Globe from "../images/Globe.png"
import Sort from "../images/Sort.png"
import Koa5 from "../images/koala-5.png"
export default function Footer() {
  return (
    <footer>
      <div class="text-left">
                <p class="special">Privacy</p>
                <p class="special">Security</p>
                <p>Terms</p>
                <p>&copy; Koalified Inc</p>
            </div>
            <div class="right-footer">
                <div class="right-footer-one">
                    <img src={Globe} alt="globe"/>
                    <p>English</p>
                </div>
                <img src={Sort} alt="icon"/>
                <div class="floating-koala">
                    <img src={Koa5} alt="koala"/>
                </div>
            </div>
            <div class="mobile-footer">
                <p>&copy; Koalified Inc</p>
            <div class="wrap-footer">
                <img src={Globe} alt="globe"/>
                <p>EN</p>
            </div>
            </div>
    </footer>
  )
}
