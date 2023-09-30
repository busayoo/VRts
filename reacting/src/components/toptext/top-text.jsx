import React from 'react'
import Dashboard from '../images/Web analytics on dashboard.png'
import Koa1 from "../images/koala's head.png"
import Koa2 from "../images/Koala.png"
import Koa3 from "../images/Koala-1.png"
export default function Toptext() {
    return (
        <div>
            <div class="top-text">
                <div class="top-text-left">
                    <p>Treat your human resources like people.</p>
                    <p>Software that helps you build a better office community from tracking Koalified applicants to payroll to retirement planning.</p>
                </div>
                <div class="top-text-image">
                    <img src={Dashboard} alt="jpg"/>
                </div>
                <div class="koala-in-top">
                    <div class="koa-1">
                        <img src={Koa1} alt="koala"/>
                    </div>
                    <div class="koa-2">
                        <img src={Koa2} alt="koala"/>
                    </div>
                    <div class="koa-3">
                        <img src={Koa3} alt="koala"/>
                    </div>
                </div>
            </div>
        </div> 
    )
}
