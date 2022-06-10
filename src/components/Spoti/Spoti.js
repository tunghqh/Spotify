import React from 'react'
import {Routes,Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Spotify from '../Spotify/Spotify'
import './Spoti.css'

function Spoti() {
  return (
    <div>
        <nav className="menu-navbar">
            <div className="logo">
              <i className="fa fa-spotify"></i>
              <span>Spotify</span>
            </div>
          <ul className="menu">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/music">
                Music
              </Link>
            </li>
          </ul>
        </nav>
 
        <Routes>
        <Route path="/" element={<Spotify />} />
        <Route path="/music" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Spoti