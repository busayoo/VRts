import React from "react"
import Koa4 from "../images/Koala-2.png"
import Koa5 from "../images/Koala-3.png"
import Koa6 from "../images/Koala-4.png"
export default function MiddleText (){
    return(
        <div class="middle-space">
            <div class="center-text">
                <div class="center-texts-container">
                    <p>Fully Remote</p>
                    <p>Our fully remote training
                                                                                                                                                                                                allows you to take classes
                                                                                                                                                                                                and learn from the
                                                                                                                                                                                                comfort of your home or office.</p>
                </div>
            </div>
            <div class="empty-container-border"></div>
            <div class="bottom-text">
                <p>Bring your team together, wherever they happen to be</p>
                <div class="btm-container">
                    <button>Create Your Workspace</button>
                </div>
            </div>
            <div class="koala-in-center">
                <div class="koa-4">
                    <img src={Koa4} alt="koala"/>
                </div>
                <div class="koa-5">
                    <img src={Koa5}alt="koala"/>
                </div>
                <div class="koa-6">
                    <img src={Koa6} alt="koala"/>
                </div>
            </div> 
        </div>
        )
    }