import { useState } from 'react';
import Modal from 'react-modal';
import { animated, useSpring } from 'react-spring';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    position: 'absolute',
    top: '10%',
    left: '15%',
    right: '15%',
    bottom: '15%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

const ProjectCard = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useSpring(() => ({
    opacity: 0,
    h3: -100,
    other: 100,
    pointerEvents: 'none',
  }));
  return (
    <div
      className="wrap"
      onMouseEnter={() =>
        setText({ h3: 0, other: 0, opacity: 1, pointerEvents: 'all' })
      }
      onMouseLeave={() =>
        setText({ h3: -100, other: 100, opacity: 0, pointerEvents: 'none' })
      }
    >
      <div className="root">
        <img src="https://via.placeholder.com/300x225" alt="" />
        <animated.div
          style={{ opacity: text.opacity, pointerEvents: text.pointerEvents }}
        >
          <div className="learn">
            <animated.div
              style={{
                transform: text.h3.interpolate(y => `translateY(${y}px)`),
              }}
            >
              <h3>Lamps Plus</h3>
              <p>Developer</p>
              <p className="skill">JavaScript</p>
            </animated.div>
            <animated.div
              style={{
                transform: text.other.interpolate(y => `translateY(${y}px)`),
              }}
            >
              <button onClick={() => setOpen(true)} type="button">
                Learn More
              </button>
            </animated.div>
          </div>
        </animated.div>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        closeTimeoutMS={500}
        style={customStyles}
      >
        <h1>Hello</h1>
      </Modal>
      <style jsx>{`
        .wrap {
          height: 225px;
          width: 300px;
        }
        .root {
          position: relative;
          display: inline-block;
          height: 225px;
          width: 300px;
          text-align: center;
        }
        .learn {
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .learn h3 {
          text-transform: uppercase;
          font-size: 36px;
          margin: 0;
        }
        .learn p {
          font-size: 24px;
          margin: 0;
        }
        .skill {
          color: #1a5387;
        }
        .learn button {
          width: 222px;
          height: 66px;
          padding: 0;
          margin: 0;
          border: 1px solid #1a5387;
          font-size: 24px;
          text-transform: uppercase;
          margin-top: 33px;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .learn button:hover {
          background: #1a5387;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
