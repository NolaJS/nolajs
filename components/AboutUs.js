export default () => {
  return (
    <div className="root">
      <h2>Who We Are</h2>
      <div>
        <div className="card">
          <img src="" alt="Christie profile picture" />
          <p>About Christie</p>
        </div>
        <div className="card">
          <img src="" alt="Steven profile picture" />
          <p>
            My name is Steven Scaffidi. I'm a full-time UI developer for a
            financial tech company. I have a degree in Mathematics from
            Louisiana State University, and a Masters in Business Adminstration
            from Tulane University. I didn't start programming until my mid 20s;
            however, I quickly fell in love with JavaScript. JavaScript is the
            most popular programming language today, and the growth in job
            opportunities is a reflection of the tremendous investments made
            yearly by various fortune 500 companies. If your dream is to learn
            the language, get a job, or master a framework, I can help!
          </p>
        </div>
        <div className="card">
          <img src="" alt="Maje profile picture" />
          <p>About Maje</p>
        </div>
      </div>
      <style jsx>{`
        .root {
          margin: 0 auto;
        }
        .card {
          display: flex;
          align-items: center;
          border: 1px solid #000;
          margin-bottom: 20px;
          padding: 10px 20px;
          box-shadow: 5px 5px 10px #ccc;
        }
        .card img {
          min-width: 20%;
          max-width: 20%;
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
};
