import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const styles = ({ palette, typography }) => ({
  nav: {
    '@media (max-width: 950px)': {
      display: 'none',
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
    display: 'none',
  },
  root: {
    '& li': {
      ...typography.p,
      margin: [0, 24],
    },
    alignItems: 'center',
    background: palette.background,
    display: 'flex',
    justifyContent: 'space-between',
    padding: [20, 40],
  },
});

const Header = ({ classes }) => (
  <header className={classes.root}>
    <div className="logo">
      <img src="/logo.svg" alt="NolaJS logo" />
    </div>
    <nav>
      <div className={classes.navToggle}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <ol className={classes.nav} role="navigation">
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ol>
    </nav>
  </header>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Header);
