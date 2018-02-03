import React from 'react';

const NavBar = (props) => {

  return(
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}} className="navbar">
      <div style={{display: 'grid', gridTemplateColumns: '42px auto'}}>
        <div>
          <img style={{"width": "30px", "padding-top": "7px"}} src="https://78.media.tumblr.com/8d40dfdb6a3d262971ab419651870ca7/tumblr_p3g67sGWk81u86ylfo1_1280.png" alt="portrait" />
        </div>
        <div>
          <div className="mainheader">
            Brian Boisvert
          </div>
          <div className="subheader">
            Web Developer
          </div>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="header-right">
        <a style={{"padding-top": "7%"}} href="/">Home</a>
        <a style={{"padding-top": "7%"}} href="/about">About</a>
        <a style={{"padding-top": "7%"}} href="/resume">Resume</a>
      </div>
    </div>
  )
}

export default NavBar;
