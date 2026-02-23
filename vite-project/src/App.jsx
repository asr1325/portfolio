import React, { useState } from "react";
import Boot from "./Components/Boot"; 
import Homebar from "./Components/Homebar";
import Wallpaper from "./Components/Wallpaper";
import Icons from "./Components/Icons";
import About from "./Components/About";

const App = () => {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting ? (
        <Boot onFinish={() => setBooting(false)} />
      ) : (
        <div>
          <Wallpaper image="src/assets/wallpaper.jpg" />
          <Icons />
          <Homebar />
          
        </div>
      )}
    </>
  );
};

export default App;
