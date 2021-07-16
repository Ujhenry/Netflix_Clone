import React from 'react'
import banner from "./images/banner.jpg"
import Logo from "./images/Logo.png"
import "./Header.css";

function Header() {
    return (
        <div className ="container">
            <div className ="header_wrapper">
                <div className="header">
                    <span className="logo">
                        <img className="header_logo" src={Logo} alt="" />
                        <span className="Screen_Text">NetFlix</span>
                    </span>
                    <a href="www.google.com" className="authLinks-redButton">Sign In</a>
                </div>
            </div>
        
        <div className="card">
            <div className="hero-card">
                <div className="card-background">
                    <div className="img-wrapper">
                        <img className="img-creative" src={banner} alt=""/>      
                    </div>
                    <div className="img-gradient"></div>
                </div>
            </div>
        </div>    

            <div className="text">
                <h1 className="text-tittle"> Unlimited Movies, TV Shows, and More.</h1>
                <h2 className="text-subtitle"> Watch anywhere. Cancel anytime</h2>
                <form className="email-form" method="GET">
                    <h3 className="email-tittle">
                        Ready to watch? Enter your Email to create or restart your membership.
                    </h3>
                    <div className="email-form2">
                                <div className="email-container"></div>
                                <div className="placement">
                                <label className="input_id" placeholder="email">
                                    <input type="Email" name="email" class="textfield" maxLength="50" minLength="5"></input>
                                     <label for ="id-email" class="placelabel" >Email Adress</label>
                                </label>
        
                                </div>
                            
                        

                        <div className="container-wrap">
                            <button className="btn-red">
                                <span className="btn-text">Get Started</span>
                            </button>
                        </div>
                    </div>
                </form>
                <h3 className="card-disclaimer"></h3>

             </div>
             <div className="center-pixel"></div>     
        </div>

        
    )
}

export default Header
