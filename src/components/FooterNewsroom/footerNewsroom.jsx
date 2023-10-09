import React from 'react'
import { StyledContainer } from './footerNewsroom.styles'

function footerNewsroom() {
  return (
    <StyledContainer>
      <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">THE NEWSROOM</div>
      <div className="footer-links">
        <a>Home</a>
        <a>News</a>
        <a>Categories</a>
        <a>About Us</a>
        <a>Contact</a>
      </div>
    </div>
    <p className="footer-text">© {new Date().getFullYear()} THE NEWSROOM All rights reserved.</p>
  </footer>
    </StyledContainer>
  )
}

export default footerNewsroom
