import React from "react";
import "./Spotify.css";
function Spotify() {
  return (
    <div className="spotify">
      <div className="spotify-container">
        <div className="be-happy">
          <h1 className="spotify-h1">Go Premium. Be happy.</h1>
          <button className="btn-free">START FREE TRIAL</button>
          <p className="spotify-p">
            * Terms and conditions apply. Open only to users who haven't already
            tried Premium.
          </p>
        </div>
        <div className="lokking">
          <div className="lokking-text">
            <h1>Looking for music?</h1>
            <p>
            Start listening to the best new releases.
            </p>
            <button>OPEN WEB PLAYER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotify;
