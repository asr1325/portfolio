import React from "react";

const Boot = ({ onFinish }) => {
  return (
    <div className="boot-screen">
      <video
        className="boot-video"
        autoPlay
        muted
        onEnded={onFinish}
      >
        <source src="/boot.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Boot;