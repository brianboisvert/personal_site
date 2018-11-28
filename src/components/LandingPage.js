
import React from 'react';
import headshot from '../images/headshot.jpg';

const LandingPage = (props) => {

  return(
    // LANDING PAGE
    <div>
      <div className="landing-page">
        <div className="landing-page-text">
          <div style={{"font-size": "36px"}}>
            Brian Boisvert
          </div><br />
          <div>
            Brooklyn based web developer with a passion for beautifully designed front-ends.
          </div>
        </div>
      </div>


      <div>
        <div className="about">
          <div className="headshot-container">
            <img className="headshot" src={headshot} alt="portrait" />
          </div>
          <div className="about-text">
            I’ve done a lot of things in my short professional career. <br/><br/>After graduating from the University of Massachusetts Amherst in 2014, I moved to New York and worked in the crazy, yet rewarding, world of sales at Yelp. I then followed a dream of working in the fashion industry to Tory Burch where I was deeply involved in both the design and sales processes as a women’s footwear merchandiser. I then indulged my wanderlust and taught English in elementary schools in the South of France.<br/><br/> It’s a pretty diverse background, sure, but what drove me has never changed. <strong>I love creating. I love learning. I love a good challenge.</strong> So here I am now, a recent graduate of the Flatiron School immersive web development program and a professional computer programmer.<br /><br />-Brian
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
