import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const styles = ({ palette, shadow, typography }) => ({
  footer: {
    '& .left': {
      '& p': {
        margin: 0,
      },
      '& p:first-child': {
        ...typography.p,
        marginBottom: 30,
      },
      '& p:last-child': {
        fontSize: 48,
        textTransform: 'uppercase',
      },
      color: palette.text.footer,
    },
    '& .right': {
      '& ol': {
        '& li': {
          margin: [0, 24],
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
      color: palette.text.footer,
      fontSize: 48,
      textTransform: 'uppercase',
    },
    alignItems: 'center',
    background: palette.footerBackground,
    boxShadow: shadow.primary,
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: 360,
    minHeight: 150,
    padding: [80, '20%'],
    textAlign: 'center',
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.footer} role="contentinfo">
    <div className="left">
      <p>Want to discuss an idea or project?</p>
      <p>
        Contact Us <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
    <div className="right">
      <p>Follow Us</p>
      <ol aria-label="Steven Scaffidi social links">
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
      </ol>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Footer);
