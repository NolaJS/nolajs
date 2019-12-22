import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/b6f1b990eb.js"></script>
      </Head>
      <div className="header">
        <div className="logo">
          <h1 role="logo">NolaJS</h1>
          <span>Simple, Flexible Website Design</span>
        </div>
        <ol role="navigation">
          <li>About</li>
          <li>Services</li>
          <li>Who We Are</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="body">{children}</div>
      <footer className="footer" role="contentinfo">
        <ol aria-label="Steven Scaffidi social links">
          <li>
            <i className="fab fa-linkedin fa-2x"></i>
          </li>
          <li>
            <i className="fab fa-twitter fa-2x"></i>
          </li>
        </ol>
        <p>
          Contact: <a href="mailto:steven@nolajs.com">start@nolajs.com</a>
        </p>
      </footer>
      <style jsx>{`
        .header {
          background: #282c34;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          box-shadow: 5px 5px 5px #ccc;
          margin-bottom: 20px;
        }
        .footer {
          background: #282c34;
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
          color: #bbbbbb;
        }
        .logo h1 {
          font-family: 'Josefin Slab', serif;
          letter-spacing: 2px;
        }
        .logo span {
          font-size: 16px;
          font-style: italic;
        }
        h1 {
          font-size: 48px;
          margin: 0;
          padding: 0;
          font-variant: small-caps;
        }
        span {
        }
        ol {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 400px;
          padding: 0;
          margin: 0;
        }
        ol li {
          margin: 0 15px;
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
      `}</style>
    </div>
  );
};

export default Layout;
