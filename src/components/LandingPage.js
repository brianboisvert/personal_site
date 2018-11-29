
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
            <img className="headshot" src={headshot} alt="portrait" />
          <div className="about-text">
            <div className="typer">
              <h1>Hey there, I'm Brian.</h1>
              <p>And I'm a full-stack developer.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
