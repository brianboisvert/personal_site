import React from 'react';

const Timeline = (props) => {

  return(
    <div class="timeline-container">
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2 class="event">UMass Amherst</h2>
            <h3>Graduated, BBA Business Management</h3>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2 class="event">Yelp</h2>
            <h3>Account Executive</h3>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2 class="event">Tory Burch</h2>
            <h3>Assistant Merchant, Shoes</h3>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2 class="event">French Ministry of Education</h2>
            <h3>English Language Assistent</h3>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2 class="event">Flatiron School</h2>
            <h3>Full-Stack Coding Immersive Bootcamp</h3>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2 class="event">Big Think</h2>
            <h3>Developer</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
