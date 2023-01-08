import React from "react";
// import "../styles/App.css";

// import video from "../assets/video.mp4";

export function Video() {
  return (
    <div className="videoContainer">
      <div className="video">
        <video controls autoPlay>
          <source src="src/assets/video.mp4" type="video/mp4" />
          this browser does not display the video tag
        </video>
      </div>
    </div>
  );
}
