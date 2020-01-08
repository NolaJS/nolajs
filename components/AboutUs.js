import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = ({ shadow, typography }) => ({
  about: {
    '& h3': typography.h3,
    '& p': typography.p,
    maxWidth: '85%',
    paddingLeft: '5%',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '@media (max-width: 950px)': {
      maxWidth: '100%',
      padding: [0, 10],
    },
  },
  profile: {
    '& img': {
      borderRadius: 125,
      boxShadow: shadow.primary,
      display: 'block',
      height: 250,
      marginBottom: 40,
      objectFit: 'cover',
      width: 250,
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: [50, '10%'],
  },
});

const About = ({ classes }) => {
  return (
    <div>
      <div className={classes.about}>
        <h3>Who We Are</h3>
        <p>
          Steven, Christie, (& their dog Maje) are co-owners & founders of NolaJS. Steven & Christie
          met in New Orleans and got married in Antigua, Guatemala. Steven is an entrepreneur by
          nature and has started many successful small businesses. He specializes in creative tech
          solutions and is an avid reader of all things related to coding. He prefers to leave the
          design decisions to Christie. Steven graduated from LSU with a BS in math and holds an MBA
          from Tulane. Christie graduated from Loyola University with a BA in psychology. She also
          holds an MPH from Tulane and a BSN from LSU. With her diverse background, she found that a
          commonality of many of her interests was design. This passion for design complements
          Steven’s passion for coding, so they decided to work together to form a website
          development team. Maje, a rescue pit mix, is the heart of their home. Found in a NOLA
          construction yard when he was a puppy, he now spends his time wearing bow ties, pajamas,
          and giving Christie heart attacks by attempting to chase cars and bite at the waves on the
          lake.
        </p>
      </div>
      <div className={classes.profile}>
        <img src="/christie.jpg" alt="Christie Profile" />
        <img src="/maje.jpg" alt="Maje Profile" />
        <img src="/steven.jpg" alt="Steven Profile" />
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(About);
