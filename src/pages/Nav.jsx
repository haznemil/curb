import React from 'react'
import logo from '../images/logo-green.png'
import profile from '../images/profile.png'

export default function Nav() {
  return (
    <>
     <div className="navbar">
      <div className="logo">
        <img className="netflix-logo" src={logo} alt="Netflix Logo" />
      </div>
      <div className="links">
        <a href="#">Art</a>
        <a href="#">Tech</a>
        <a href="#">Media</a>
        <a href="#">Music</a>
        <a href="#">Fashion</a>
        <a href="#">X-treme Sports</a>
      </div>
      <div className="user">
        <img src={profile} alt="User Profile" />    
      </div>
    </div>
    </>
  )
}
