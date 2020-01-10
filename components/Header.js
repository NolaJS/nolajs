import PropTypes from 'prop-types';
import Link from 'next/link';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';

const styles = ({ palette, typography }) => ({
  close: {
    '& button': {
      background: 'none',
      border: 'none',
      fontSize: 40,
      margin: 0,
      padding: 0,
    },
    '@media (max-width: 950px)': {
      display: 'block',
      position: 'fixed',
      right: 10,
      top: 30,
    },
    display: 'none',
  },
  nav: {
    '@media (max-width: 950px)': {
      background: 'red',
      flexDirection: 'column',
      height: '100vh',
      left: 0,
      position: 'fixed',
      top: '-100%',
      width: '100vw',
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navToggle: {
    '@media (max-width: 950px)': {
      display: 'inline-block',
    },
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
    fontSize: 18,
    padding: 0,
  },
  root: {
    '& li': {
      ...typography.p,
      '@media (max-width: 950px)': {
        fontSize: 30,
        marginBottom: 40,
      },
      margin: [0, 24],
    },
    alignItems: 'center',
    background: palette.background,
    display: 'flex',
    justifyContent: 'space-between',
    padding: [20, 40],
  },
});

const Header = ({ classes }) => {
  const [navStyle, setNavStyle] = useSpring(() => ({
    y: 0,
  }));
  const reset = () => setNavStyle({ y: 0 });
  return (
    <header className={classes.root}>
      <div className="logo">
        <img src="/logo.svg" alt="NolaJS logo" />
      </div>
      <nav>
        <button className={classes.navToggle} type="button" onClick={() => setNavStyle({ y: 100 })}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <animated.ol
          className={classes.nav}
          role="navigation"
          style={{ transform: navStyle.y.interpolate(navY => `translateY(${navY}vh)`) }}
        >
          <li className={classes.close}>
            <button type="button" onClick={reset}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
          <li>
            <Link href="/#portfolio">
              <a onClick={reset}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a onClick={reset}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#services">
              <a onClick={reset}>Services</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/blog">
              <a onClick={reset}>Blog</a>
            </Link>
          </li> */}
          <li>Contact</li>
        </animated.ol>
      </nav>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Header);