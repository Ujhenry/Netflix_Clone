import React from 'react'
import nettv from "./images/nettv.png"
import netflixvideo from "./images/netflix-video.m4v"
import './Row_Below.css';

function Row_Below() {
    return (
        <div className="row_below">
            <div className="row_below-container">
                <div className="below-text">
                    <h1 className="below-title">Enjoy on your TV.</h1>
                    <h2 className="below-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>

    
                    <div className="img-container">
                        <img className="img1"  src={nettv}/>
                            <div className="below-animation">
                                <video src={netflixvideo}>
                                    
                                </video>
                            </div>
                    </div>
    

                
            </div>
        </div>

    )
}

export default Row_Below
