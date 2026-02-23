import React, {useState} from 'react'
import Start from './Start';
import TimeDate from './TimeDate';

import home from '../assets/home.png'
import cortana from '../assets/cortana.png'
import explorer from '../assets/explorer.png'
import edge from '../assets/edge.png'
import mail from '../assets/mail.png'
import wifi from '../assets/wifi.png'
import vol from '../assets/vol.png'

const Homebar = () => {

    const [isVisible, setVisible] = useState(false);
    const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div className='homebar'>
        <div><img src={home} alt="Home" className='logo1' onClick={handleClick}/></div>
        <div><input type="text" placeholder='Type here to search'/></div>
        <div><img src={cortana} alt="Cortana" className='logo'/></div>
        <div><img src={explorer} alt="Explorer" className='logo'/></div>
        <div><img src={edge} alt="Edge" className='logo'/></div>
        <div><img src={mail} alt="Mail" className='logo'/></div>

    <div className="widgets">
        <div>
            <img src={wifi} alt="wifi" />
        </div>
        <br />
        <div>
            <img src={vol} alt="volume" />
        </div>
        <div>
            <TimeDate />
        </div>
    </div>    
        {isVisible && <Start />}
</div>

    
  )
}

export default Homebar