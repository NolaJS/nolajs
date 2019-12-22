export default () => {
  return (
    <div className="root">
      <h2>Services</h2>
      <div>
        <div className="card">
          <img src="" alt="Christie profile picture" />
          <p>Websites</p>
        </div>
        <div className="card">
          <img src="" alt="Steven profile picture" />
          <p>E-Commerce</p>
        </div>
        <div className="card">
          <img src="" alt="Maje profile picture" />
          <p>Web Apps</p>
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
