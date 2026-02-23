import React from 'react';
import bg from '../assets/wallpaper.jpg';

function Wallpaper() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    }} />
  );
}

export default Wallpaper;