
import React from 'react';
import headshot from '../images/headshot.jpg';

class LandingPage extends React.Component {


render() {

  return(
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
              <h1>Hey there, I'm Brian. </h1>
              <span>
                and I'm a [ <span className="spin"></span> ] developer.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    


    </div>
  )
}
}

export default LandingPage;
