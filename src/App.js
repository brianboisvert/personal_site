import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact pathLandingPage />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
