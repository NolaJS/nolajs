import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const styles = ({ palette, shadow, typography }) => ({
  footer: {
    '& .left': {
      '& a': {
        '@media (max-width: 950px)': {
          fontSize: 36,
        },
        fontSize: 48,
        textTransform: 'uppercase',
      },
      '& p, & a': {
        margin: 0,
      },
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      '& p': {
        ...typography.p,
        '@media (max-width: 950px)': {
          marginBottom: 10,
        },
        marginBottom: 40,
      },
      '@media (max-width: 950px)': {
        marginBottom: 60,
      },
      color: palette.text.footer,
    },
    '& .right': {
      '& ol': {
        '& li': {
          margin: [0, 18],
        },
        '@media (max-width: 950px)': {
          fontSize: 20,
        },
        alignItems: 'center',
        display: 'flex',
        fontSize: 24,
        justifyContent: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      '& p': {
        margin: 0,
        marginBottom: 28,
      },
      '@media (max-width: 950px)': {
        fontSize: 36,
      },
      color: palette.text.footer,
      fontSize: 48,
      textTransform: 'uppercase',
    },
    alignItems: 'center',
    background: palette.footerBackground,
    boxShadow: shadow.primary,

    minHeight: 150,
    padding: [80, 10],
    textAlign: 'center',
  },
  wrap: {
    '@media (max-width: 950px)': {
      flexDirection: 'column',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: [0, 'auto'],
    maxWidth: 1000,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.footer} role="contentinfo">
    <div className={classes.wrap}>
      <div className="left">
        <p>Want to discuss an idea or project?</p>
        <Link href="/contact">
          <a>
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Link>
      </div>
      <div className="right">
        <p>Follow Us</p>
        <ol aria-label="NolaJS social links">
          <li>
            <a href="https://github.com/sscaff1" target="_blank" rel="noopener noreferrer nofollow">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sscaff1" rel="noopener noreferrer nofollow" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sscaff1" rel="noopener noreferrer nofollow" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sscaff1" rel="noopener noreferrer nofollow" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </ol>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Footer);
