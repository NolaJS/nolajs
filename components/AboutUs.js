export default () => {
  return (
    <div>
      <div className="root">
        <h2>Who We Are</h2>
        <p>
          Steven, Christie, (& their dog Maje) are co-owners & founders of
          NolaJS. Steven & Christie met in New Orleans and got married in
          Antigua, Guatemala. Steven is an entrepreneur by nature and has
          started many successful small businesses. He specializes in creative
          tech solutions and is an avid reader of all things related to coding.
          He prefers to leave the design decisions to Christie. Steven graduated
          from LSU with a BS in math and holds an MBA from Tulane. Christie
          graduated from Loyola University with a BA in psychology. She also
          holds an MPH from Tulane and a BSN from LSU. With her diverse
          background, she found that a commonality of many of her interests was
          design. This passion for design complements Steven’s passion for
          coding, so they decided to work together to form a website development
          team. Maje, a rescue pit mix, is the heart of their home. Found in a
          NOLA construction yard when he was a puppy, he now spends his time
          wearing bow ties, pajamas, and giving Christie heart attacks by
          attempting to chase cars and bite at the waves on the lake.
        </p>
      </div>
      <div className="profile">
        <img src="/christie.jpg" alt="Christie Picture" />
        <img src="/maje.jpg" alt="Maje Picture" />
        <img src="/steven.jpg" alt="Steven Picture" />
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 50px 10%;
        }
        .root {
          padding-left: 5%;
          max-width: 85%;
        }
        .root p {
          font-size: 24px;
          line-height: 34px;
        }
        img {
          height: 250px;
          width: 250px;
          object-fit: cover;
          border-radius: 125px;
          display: block;
          box-shadow: 5px 5px 10px #ccc;
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
