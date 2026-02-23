import React, {useState} from 'react'
import About from './About';

import bin from '../assets/bin.webp'
import user from '../assets/user.png'
import pdf from '../assets/pdf.png'
import github from '../assets/github.svg.png'
import linkedin from '../assets/linkedin.png'

function redirectTo(url) 
{
    window.open(url, '_blank');
}

const Icons = () => {

    
    const [isVisible, setVisible] = useState(false);
        const handleClick = () => {
        setVisible(!isVisible);
      };


  return (
    <div className='icons'>
        <div className="i1">
            <img src={bin} alt="bin"/>
            <p>Recycle Bin</p>
        </div>
        <div className="i1" >
            <img src={user} alt="user" onClick={handleClick}/>
            <p>About Me</p>
            {isVisible && <About />}
        </div>
    <div className='i1'>
        <a href="/AdityaResume.pdf"><img src={pdf} alt="pdf"/></a><br />
       <a href="/AdityaResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
    <div className='i1'>
        <img src={github} alt="pdf"  onClick={()=> redirectTo('https://www.github.com/asr1325')}/>
        <p>GitHub</p>
    </div>
    <div className="i1">
        <img src={linkedin} alt="linkedin"  onClick={()=> redirectTo('https://www.linkedin.com/in/adityasrawat')}/>
        <p>LinkedIn</p>
    </div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Icons