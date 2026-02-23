import React from 'react'

import power from '../assets/power.png'
import edge from '../assets/edge.png'
import explorer from '../assets/explorer.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.svg.png'

function redirectTo(url) 
{
    window.open(url, '_blank');
}

const Start = () => {
  return (
    <div className="menu">
  <div className="zero">
    <img src={power} alt="Shutdown" className="logo" />
  </div>


  <div className="one">
    <div className="start-menu-list">
      
      <div className="start-menu-item">
        <img src={edge} alt="Browser" className="start-menu-icon" />
        <span className="start-menu-label">Edge</span>
      </div>
        <br />
        <div className="start-menu-item">
        <img src={explorer} alt="Explorer" className="start-menu-icon" />
        <span className="start-menu-label">Explorer</span>
      </div>

    </div>
  </div>

  <div className="two">
    <p style={{ marginBottom: '10px', color: 'lightgray', fontSize: '14px' }}>Explore</p>

    <div
      className="menu-icons"
      onClick={() => redirectTo('https://www.linkedin.com/in/adityasrawat')}>
      <img src={linkedin} alt="LinkedIn" />
      <p>LinkedIn</p>
    </div>
    <br /><br />
    <div
      className="menu-icons"
      onClick={() => redirectTo('https://www.github.com/asr1325')} >
      <img src={github} alt="GitHub" />
      <p>GitHub</p>
    </div>
  </div>
</div>
  )
}

export default Start