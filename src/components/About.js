import React from 'react';
import headshot from '../images/headshot.jpg';

const About = (props) => {

  return(
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
  )
}

export default About;
