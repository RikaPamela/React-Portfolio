// Footer.js (Create a new component for the footer)

import React from 'react';
import './footer.css'; // Create a CSS file for styling the footer

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>Phone: 064 769 9548</p>
        </div>
        <div className="social-media">
          <h3>Connect with Me</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            {/* Add more social media links/icons as needed */}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Pamela. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
