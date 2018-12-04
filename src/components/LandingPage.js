
import React from 'react';
import About from './About';
import Timeline from './Timeline';

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
      <About />
      <Timeline />
    </div>
  )
}
}

export default LandingPage;
