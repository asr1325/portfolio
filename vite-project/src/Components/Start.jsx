import React from 'react'

function redirectTo(url) 
{
    window.open(url, '_blank');
}


const Start = () => {
  return (
    <div className="menu">
  <div className="zero">
    <img src="src/assets/power.png" alt="Shutdown" className="logo" />
  </div>


  <div className="one">
    <div className="start-menu-list">
      
      <div className="start-menu-item">
        <img src="src/assets/edge.png" alt="Browser" className="start-menu-icon" />
        <span className="start-menu-label">Edge</span>
      </div>
        <br />
        <div className="start-menu-item">
        <img src="src/assets/explorer.png" alt="Explorer" className="start-menu-icon" />
        <span className="start-menu-label">Explorer</span>
      </div>

    </div>
  </div>

  <div className="two">
    <p style={{ marginBottom: '10px', color: 'lightgray', fontSize: '14px' }}>Explore</p>

    <div
      className="menu-icons"
      onClick={() => redirectTo('https://www.linkedin.com/in/adityasrawat')}>
      <img src="src/assets/linkedin.png" alt="LinkedIn" />
      <p>LinkedIn</p>
    </div>
    <br /><br />
    <div
      className="menu-icons"
      onClick={() => redirectTo('https://www.github.com/asr1325')} >
      <img src="src/assets/github.svg.png" alt="GitHub" />
      <p>GitHub</p>
    </div>
  </div>
</div>
  )
}

export default Start