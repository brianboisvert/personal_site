import React from 'react';

class Timeline extends React.Component {


  render() {

    function revealContent(number) {
      let hidden_class = 'hide-description ' + number;
      let shown_class = 'show-description ' + number;
      let hidden_element = document.getElementsByClassName(hidden_class)[0];
      let shown_element = document.getElementsByClassName(shown_class)[0];

      if (hidden_element) {
        hidden_element.classList.remove('hide-description');
        hidden_element.classList.add('show-description');
      } else {
        shown_element.classList.remove('show-description');
        shown_element.classList.add('hide-description');
      }
      //   element.classList.remove('hide-description');
      //   element.classList.add('show-description')
      // element.classList.add('show-description');

      // element.classList.toggle("show-description");

    }

    return(
      <div class="timeline-container">
        <div class="timeline">
          <div class="container left" onClick={() => revealContent(1)}>
            <div class="content">
              <h2 class="event">UMass Amherst</h2>
              <h3>Graduated, Business Management</h3>
              <div class="hide-description 1">TEST TEST TEST </div>
            </div>
          </div>
          <div class="container right" onClick={() => revealContent(2)}>
            <div class="content">
              <h2 class="event">Yelp</h2>
              <h3>Account Executive</h3>
              <div class="hide-description 2">TEST TEST TEST </div>
            </div>
          </div>
          <div class="container left" onClick={() => revealContent(3)}>
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
              <h3>Full-Stack Coding Bootcamp</h3>
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
}

export default Timeline;
