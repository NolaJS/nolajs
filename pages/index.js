import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';

export default () => {
  return (
    <div>
      <section>
        Based in New Orleans, LA, NolaJS is focused on providing all of your
        website needs. We can do a simple app, a web app, or e-commerce site. We
        use Wordpress for more basic websites, ReactJS for your web app needs,
        and Shopify for e-commerce sites. We also provide training so that you
        can make small changes to your website alone, or if you prefer; we can
        provide you continued support. Our services are inclusive of SEO and
        content strategies.
      </section>
      <section>
        <Services />
      </section>
      <section>
        <AboutUs />
      </section>
      <section className="serviceSection"></section>
      <style jsx>{`
        div {
          max-width: 700px;
          margin: 0 auto;
        }
        section {
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
};
