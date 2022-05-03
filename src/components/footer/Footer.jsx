import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">Yingshi Feng</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#portfolio">portfolio</a></li>
    </ul>

    <div className="footer__copyright">
      <small>&copy;Yingshi Feng. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer