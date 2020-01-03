import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/fontawesome-free-brands';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h1 role="logo">
            <span>NO</span>
            <span>J S</span>
          </h1>
        </div>
        <div className="nav-mobile">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <ol className="nav-desktop" role="navigation">
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="body">{children}</div>
      <footer className="footer" role="contentinfo">
        <ol aria-label="Steven Scaffidi social links">
          <li>
            <a href="https://github.com/sscaff1" rel="nofollow" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sscaff1" rel="nofollow" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sscaff1" rel="nofollow" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ol>
        <p>
          Contact: <a href="mailto:steven@nolajs.com">start@nolajs.com</a>
        </p>
      </footer>
      <style jsx>{`
        .header {
          background: #fff;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
        }
        .footer {
          box-shadow: 5px -5px 5px #ccc;
          width: 100%;
          min-height: 150px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        h1,
        p,
        ol,
        span {
          color: #000;
        }
        .logo h1 {
          letter-spacing: 2px;
        }
        .logo h1 span {
          display: block;
          text-align: center;
        }
        h1 {
          font-size: 36px;
          margin: 0;
          padding: 0;
          font-weight: bold;
        }
        span {
        }
        ol {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }
        ol li {
          margin: 0 24px;
        }
        .footer ol {
          margin-bottom: 20px;
        }
        ol li,
        p {
          font-size: 16px;
        }
        p {
          margin: 0;
          padding: 0;
        }
        .header ol li {
          font-size: 36px;
          font-family: 'Josefin Slab', serif;
          font-weight: bold;
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 950px) {
          .nav-mobile {
            display: inline-block;
          }
          .nav-desktop {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
