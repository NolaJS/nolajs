import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { useState } from 'react';
import Modal from 'react-modal';
import { animated, useSpring } from 'react-spring';

const customStyles = {
  content: {
    WebkitOverflowScrolling: 'touch',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    bottom: '15%',
    left: '15%',
    outline: 'none',
    overflow: 'auto',
    padding: '20px',
    position: 'absolute',
    right: '15%',
    top: '10%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
};

const styles = ({ palette, typography }) => ({
  learn: {
    '& .skill': {
      color: palette.accent,
    },
    '& button': {
      '&:hover': {
        background: palette.accent,
        color: palette.background,
      },
      border: `1px solid ${palette.accent}`,
      cursor: 'pointer',
      fontSize: 24,
      height: 66,
      margin: 0,
      marginTop: 33,
      padding: 0,
      textTransform: 'uppercase',
      transition: 'all 0.4s ease',
      width: 222,
    },
    '& h4': {
      ...typography.h4,
      margin: 0,
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: 24,
      margin: 0,
    },
    background: palette.background,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  root: {
    display: 'inline-block',
    height: 225,
    position: 'relative',
    textAlign: 'center',
    width: 300,
  },
  wrap: {
    height: 225,
    width: 300,
  },
});

const ProjectCard = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useSpring(() => ({
    h3: -100,
    opacity: 0,
    other: 100,
    pointerEvents: 'none',
  }));
  return (
    <div
      className={classes.wrap}
      onMouseEnter={() => setText({ h3: 0, opacity: 1, other: 0, pointerEvents: 'all' })}
      onMouseLeave={() => setText({ h3: -100, opacity: 0, other: 100, pointerEvents: 'none' })}
    >
      <div className={classes.root}>
        <img src="https://via.placeholder.com/300x225" alt="" />
        <animated.div style={{ opacity: text.opacity, pointerEvents: text.pointerEvents }}>
          <div className={classes.learn}>
            <animated.div
              style={{
                transform: text.h3.interpolate(y => `translateY(${y}px)`),
              }}
            >
              <h4>Lamps Plus</h4>
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
    </div>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ProjectCard);
