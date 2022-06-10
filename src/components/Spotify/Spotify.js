import React from "react";
import "./Spotify.css";
function Spotify() {
  return (
    <div className="spotify">
      <div className="spotify-container">
        <h1 className="spotify-h1">Go Premium. Be happy.</h1>
        <button className="btn-free">START FREE TRIAL</button>
        <p className="spotify-p">
          * Terms and conditions apply. Open only to users who haven't already
          tried Premium.
        </p>
      </div>
    </div>
  );
}

export default Spotify;
