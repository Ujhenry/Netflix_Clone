import React from 'react'
import  './Row.css'
import mobile from './images/mobile.jpg'
import boxshot from './images/boxshot.png'


function Row() {
    return (
        <div className="row">
            <div className="row2-container">
                 <div className="row3-text">
                      <h1 className="row4_title">Download your shows to watch offline.</h1>
                      <h2  className="row5_subtittle">Save your favorites easily and always have something to watch.</h2>
                </div>
                    <div className="img2-container">
                             <img className="card-img" src={mobile}/>
                                  <div className="animation">
                                       <div className="animation-image">
                                           <img className="mg" src={boxshot}/>

                                        </div>
                                           <div className="animation-text">
                                               <div className="text-0">Stranger Things</div>
                                               <div className="text-1">Downloading...</div>
                                    </div>
                    
                    </div>
                </div>
                        <div class="center-pixel"></div>
                    </div>
        </div>

    )
}

export default Row
