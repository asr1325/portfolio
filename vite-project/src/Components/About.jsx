import React, {useState} from 'react'

const About = () => {
  return (
    <div className='window'>
        <div className="min">
            <div className="btn">--</div>
            <div className="btn">[ ]</div>
            <div className="btn" >X
            </div>
        </div>
        <div className="profile">
            <br />
            <img src="src/assets/profile.png" alt="Profile_img" />
            <br />
            <center>Aditya Singh Rawat</center>
            <br />
            <p>
                Hi, I’m Aditya Singh Rawat, an MCA student with a strong interest in software development and problem-solving. 
                I enjoy exploring how technology works and how it can be used to make everyday life easier.
                My techincal skills include - <b>React.js, Express.js, MongoDB, Node.js, HTML5/CSS, JS, C/C++, JAVA, PYTHON.</b>
            </p>    
            <p>
                Outside studies and coding, 
                I spend time in the gym, read books that make me think, 
                and often tinker with electronics just for fun.
            </p>
        </div>
    </div>
  )
}

export default About