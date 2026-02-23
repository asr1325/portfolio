import React, {useState} from 'react'
import Start from './Start';
import TimeDate from './TimeDate';


const Homebar = () => {

    const [isVisible, setVisible] = useState(false);
    const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div className='homebar'>
        <div><img src="src/assets/home.png" alt="Home" className='logo1' onClick={handleClick}/></div>
        <div><input type="text" placeholder='Type here to search'/></div>
        <div><img src="src/assets/cortana.png" alt="Cortana" className='logo'/></div>
        <div><img src="src/assets/explorer.png" alt="Explorer" className='logo'/></div>
        <div><img src="src/assets/edge.png" alt="Edge" className='logo'/></div>
        <div><img src="src/assets/mail.png" alt="Mail" className='logo'/></div>

    <div className="widgets">
        <div>
            <img src="src/assets/wifi.png" alt="wifi" />
        </div>
        <br />
        <div>
            <img src="src/assets/vol.png" alt="volume" />
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