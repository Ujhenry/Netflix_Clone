import React from 'react'
import './Faq.css';

function Faq() {
    return (
        <div class="faq-row">
            <div class="faq-text">
                <h1 className="faq-title">Frequently Asked Questions</h1>
            </div>
            <ul class="row-list">
                <li class="faq-list-item"><button class="faq-question">What is Netflix?</button> 
                    <div class="faq-answer">
                        <span className="faq-answer-span">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</span>
                    </div>
                </li>

                <li class="faq-list-item"><button class="faq-question">How much does Netflix cost?</button>
                    <div class="faq-answer closed">
                        <span id="" data-uia="">Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        <br></br>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
                    </div>
                </li>
                
                <li class="faq-list-item"><button class="faq-question">How do I cancel?</button>
                    <div class="faq-answer">
                        <span className="faq-answer-span">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
                    </div>
                </li>
                
                <li class="faq-list-item" ><button class="faq-question">What can I watch on Netflix?</button>

                    <div class="faq-answer">
                        <span className="faq-answer-span" >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>
                    </div>
                </li>
               
                <li class="faq-list-item"><button class="faq-question">Is Netflix good for kids?</button>
                    <div class="faq-answer">
                        <span className="faq-answer-span">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        <br></br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
                    </div>
                </li>
                
            </ul>

            <form class="email-form" method="GET">
                <h3 class="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div class="email-form-lockup">
                     <div class="InputPlacement">
                        <label class="input_id" placeholder="email">
                           <input type="email" name="email" class="nfTextField" maxLength="50" minLength="5"></input>
                                <label class="placeLabel">Email address</label>
                        </label>
                        <button className="btn-red2">
                                <span className="btn-text2">Get Started</span>
                            </button>
                    </div>
                    
                </div>
            </form>     
              <div class="center-pixel"></div>
        </div>


    )
}

export default Faq
