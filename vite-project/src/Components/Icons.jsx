import React, {useState} from 'react'
import About from './About';


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
            <img src="src/assets/bin.webp" alt="bin"/>
            <p>Recycle Bin</p>
        </div>
        <div className="i1" >
            <img src="src/assets/user.png" alt="user" onClick={handleClick}/>
            <p>About Me</p>
            {isVisible && <About />}
        </div>
    <div className='i1'>
        <a href="/AdityaResume.pdf"><img src="src/assets/pdf.png" alt="pdf"/></a><br />
       <a href="/AdityaResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
    <div className='i1'>
        <img src="src/assets/github.svg.png" alt="pdf"  onClick={()=> redirectTo('https://www.github.com/asr1325')}/>
        <p>GitHub</p>
    </div>
    <div className="i1">
        <img src="src/assets/linkedin.png" alt="linkedin"  onClick={()=> redirectTo('https://www.linkedin.com/in/adityasrawat')}/>
        <p>LinkedIn</p>
    </div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Icons