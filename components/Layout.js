import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/fontawesome-free-brands';
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="/logo.svg" alt="NolaJS logo" role="logo" />
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
        <div className="left">
          <p>Want to discuss an idea or project?</p>
          <p>
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
        <div className="right">
          <p>Follow Us</p>
          <ol aria-label="Steven Scaffidi social links">
            <li>
              <a
                href="https://github.com/sscaff1"
                rel="nofollow"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sscaff1"
                rel="nofollow"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sscaff1"
                rel="nofollow"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
          </ol>
        </div>
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
          justify-content: space-between;
          background: #042658;
          text-align: center;
          max-height: 360px;
          padding: 80px 5%;
        }
        .footer .left p:first-child {
          font-size: 36px;
          margin-bottom: 30px;
          color: #fff;
        }
        .footer .left p:last-child {
          font-size: 48px;
          text-transform: uppercase;
        }
        .footer .left p,
        .footer .right p {
          color: #fff;
        }
        .footer .right p,
        .footer .right ol {
          font-size: 48px;
          text-transform: uppercase;
          color: #fff;
          margin: 0;
        }
        .footer .right > p {
          margin-bottom: 28px;
        }
        .footer .right ol li {
          font-size: 24px;
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
