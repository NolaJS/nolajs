import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { useState } from 'react';
import Modal from 'react-modal';
import { animated, useSpring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  modal: {
    '@media (max-width: 950px)': {
      border: 'none',
      height: '100vh',
      left: 0,
      right: 0,
      top: 0,
      width: '100vw',
    },
    WebkitOverflowScrolling: 'touch',
    background: palette.background,
    border: `1px solid ${palette.border}`,
    borderRadius: 4,
    bottom: '15%',
    left: '25%',
    outline: 'none',
    overflow: 'auto',
    padding: 20,
    paddingTop: 70,
    position: 'absolute',
    right: '25%',
    top: '10%',
  },
  modalClose: {
    background: 'none',
    border: 'none',
    cursor: 'close',
    fontSize: 36,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  modalHeader: {
    borderBottom: `4px solid ${palette.text.primary}`,
    marginBottom: 5,
    paddingBottom: 10,
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
  modalRoot: {
    '& h2': {
      fontSize: 48,
      margin: 0,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    '& h3': {
      fontSize: 36,
      margin: 0,
      textAlign: 'center',
    },
    '& p': {
      '@media (max-width: 950px)': {
        padding: [50, 20, 0],
      },
      borderTop: `2px solid ${palette.accent}`,
      fontSize: 24,
      margin: 0,
      padding: [50, 80, 0],
      textAlign: 'center',
    },
    fontFamily: typography.fontFamily,
  },
  root: {
    '& img': {
      maxHeight: '100%',
      maxWidth: '100%',
    },
    alignItems: 'center',
    display: 'flex',
    height: 225,
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    width: 300,
  },
  wrap: {
    height: 225,
    width: 300,
  },
});

const ProjectCard = ({ classes, description, img, job, skills, subtitle, title }) => {
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
        <img src={img} alt={`${title} logo`} />
        <animated.div style={{ opacity: text.opacity, pointerEvents: text.pointerEvents }}>
          <div className={classes.learn}>
            <animated.div
              style={{
                transform: text.h3.interpolate(y => `translateY(${y}px)`),
              }}
            >
              <h4>{title}</h4>
              <p>{job}</p>
              <p className="skill">{skills}</p>
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
        className={classes.modal}
        ariaHideApp={false}
        overlayClassName={classes.modalOverlay}
      >
        <div className={classes.modalRoot}>
          <div className={classes.modalHeader}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <p>{description}</p>
        </div>
        <button type="button" className={classes.modalClose} onClick={() => setOpen(false)}>
          <FontAwesomeIcon title="Close" icon={faTimes} />
        </button>
      </Modal>
    </div>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCard);
