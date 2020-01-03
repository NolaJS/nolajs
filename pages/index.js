import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default () => {
  return (
    <div>
      <section className="hero">
        <div>
          <h2>NolaJS</h2>
          <h3>Simple, flexible website and app development</h3>
        </div>
      </section>
      <section className="overview">
        <h2>About Us</h2>
        <p>
          Based in New Orleans, LA, NolaJS is focused on providing all of your
          website and app needs. Our services include custom websites, web apps,
          e-commerce sites, and mobile apps. We typically use Word Press for
          most basic websites, React for web apps, and Shopify for e-commerce
          but we can also use other technology if it better suits your needs. We
          also provide training so that you can make small changes to your
          website on your own, or if you prefer we can also provide continued
          support. Our services also include photography, SEO, social media, &
          content strategies. All websites are created, designed, and coded in
          the U.S., and we never outsource our work.
        </p>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section>
        <h3>
          Get your web presence started today by getting in touch at{' '}
          <a href="mailto:start@nolajs.com">start@nola.js.com</a>
        </h3>
      </section>
      <style jsx>{`
        .overview {
          padding-left: 5%;
          max-width: 85%;
        }
        .overview p {
          font-size: 24px;
          line-height: 34px;
        }
        .overview h2 {
          text-align: left;
        }
        section {
          margin-bottom: 50px;
        }
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 515px;
          width: 100%;
          background: url(https://via.placeholder.com/1800x515) 50% 50%;
          margin-bottom: 48px;
        }
        h2 {
          font-size: 64px;
          margin: 0;
          margin-bottom: 45px;
          padding: 0;
        }
        h3 {
          font-size: 48px;
          margin: 0;
          padding: 0;
        }
        h2,
        h3 {
          font-weight: bold;
          text-align: center;
        }
        a {
          color: dodgerblue;
        }
        section {
          padding: 20px 0;
        }
        @media (max-width: 950px) {
          .overview {
            max-width: 100%;
            padding-left: 10px;
          }
        }
      `}</style>
    </div>
  );
};
