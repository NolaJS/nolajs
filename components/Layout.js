import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h1 role="logo">NolaJS</h1>
          <span>New Orleans JavaScript Tutoring</span>
        </div>
        <ol role="navigation">
          <li>About</li>
          <li>Services</li>
          <li>Schedule a Session</li>
        </ol>
      </div>
      <div className="body">{children}</div>
      <footer className="footer" role="contentinfo">
        <ol aria-label="Steven Scaffidi social links">
          <li>
            <i className="fab fa-linkedin fa-2x"></i>
          </li>
          <li>
            <i className="fab fa-medium fa-2x"></i>
          </li>
          <li>
            <i className="fab fa-twitter fa-2x"></i>
          </li>
        </ol>
        <p>
          Contact: <a href="mailto:steven@nolajs.com">steven@nolajs.com</a>
        </p>
      </footer>
      <style jsx>{`
        .header,
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
        .logo {
          margin-bottom: 10px;
          text-align: center;
        }
        .logo span {
          font-size: 14px;
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
          justify-content: space-between;
          width: 90%;
          max-width: 400px;
          padding: 0;
          margin: 0;
        }
        ol li {
          width: 300px;
          text-align: center;
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
