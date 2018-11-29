
import React from 'react';
import headshot from '../images/headshot.jpg';

class LandingPage extends React.Component {

  myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

render() {

  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

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

      <div>

      </div>


    </div>
  )
}
}

export default LandingPage;
