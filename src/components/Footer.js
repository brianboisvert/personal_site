import React from 'react';

const Footer = (props) => {

  return(
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="footer">
      <a href="https://www.linkedin.com/in/brian-boisvert-64073055" target="_blank">LinkedIn</a>
      <a href="https://github.com/brianboisvert" target="_blank">Github</a>
      <a href="https://www.instagram.com/brianboisvert/" target="_blank">Instagram</a>
    </div>
  )
}

export default Footer;
