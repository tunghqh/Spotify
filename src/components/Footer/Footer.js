import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="logo">
          <i className="fa fa-spotify"></i>
          <span>Spotify</span>
        </div>
        <div className="footer-menu">
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
          <ul>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="footer-media">
          <i class="fa fa-instagram media-social"></i>
          <i class="fa fa-twitter media-social"></i>
          <i class="fa fa-facebook media-social"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
