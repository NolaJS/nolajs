export default () => {
  return (
    <div className="root">
      <h2>Services</h2>
      <div className="card-container">
        <div className="card">
          <img src="/strategy.png" alt="great strategies" />
          <h3>Strategy</h3>
          <p>Meeting, proposal, research</p>
        </div>
        <div className="card">
          <img src="/design.png" alt="fresh designs" />
          <h3>Design</h3>
          <p>Logo & identity, website design</p>
        </div>
        <div className="card">
          <img src="/development.png" alt="expert development" />
          <h3>Development</h3>
          <p>
            Responsive, customized websites, web apps, mobile apps, e-commerce
            websites, SEO, testing/proof
          </p>
        </div>
        <div className="card">
          <img src="/marketing.png" alt="new orleans marketing service" />
          <h3>Marketing</h3>
          <p>SEO, digital marketiing, social media integration</p>
        </div>
      </div>
      <p className="summary">
        We work with everyone, large or small, across all industries. More and
        more people are using the web, and even if you’re a completely local
        small business, service, contractor or consultant, odds are people have
        used search engines to look for your web site or app. We love working
        with people to grow their business by building sites and mobile apps
        from start to finish. Our skills are broad and include UX/UI, and front
        end and back end development.
      </p>
      <style jsx>{`
        .root {
          margin: 0 auto;
          padding: 0 5%;
        }
        h2 {
          text-align: center;
        }
        .card {
          text-align: center;
          margin-bottom: 20px;
          padding: 10px 20px;
          box-shadow: 5px 5px 10px #ccc;
          max-width: 300px;
        }
        .card-container {
          display: flex;
          justify-content: space-between;
        }
        .card img {
          width: 200px;
          height: 200px;
        }
        .card h3 {
          font-size: 36px;
          margin-top: 35px;
          margin-bottom: 30px;
        }
        .card p {
          font-size: 18px;
        }
        .summary {
          font-size: 36px;
        }
        @media (max-width: 950px) {
          .root {
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
};
