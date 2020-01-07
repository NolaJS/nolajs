import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = ({ shadow, typography }) => ({
  card: {
    '& h4': {
      ...typography.h4,
      marginBottom: 30,
      marginTop: 35,
    },
    '& img': {
      height: 200,
      width: 200,
    },
    '& p': {
      fontSize: 18,
    },
    boxShadow: shadow.primary,
    marginBottom: 20,
    padding: [10, 20],
    textAlign: 'center',
    width: 300,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: [0, '5%'],
  },
  root: {
    '& h3': {
      ...typography.h3,
      textAlign: 'center',
    },
  },
  summary: {
    ...typography.p,
    '@media (max-width: 950px)': {
      maxWidth: '100%',
      padding: [0, 10],
    },
    maxWidth: '85%',
    paddingLeft: '5%',
  },
});

const Services = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h3>Services</h3>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img src="/strategy.png" alt="great strategies" />
          <h4>Strategy</h4>
          <p>Meeting, proposal, research</p>
        </div>
        <div className={classes.card}>
          <img src="/design.png" alt="fresh designs" />
          <h4>Design</h4>
          <p>Logo & identity, website design</p>
        </div>
        <div className={classes.card}>
          <img src="/development.png" alt="expert development" />
          <h4>Development</h4>
          <p>
            Responsive, customized websites, web apps, mobile apps, e-commerce websites, SEO,
            testing/proof
          </p>
        </div>
        <div className={classes.card}>
          <img src="/marketing.png" alt="new orleans marketing service" />
          <h4>Marketing</h4>
          <p>SEO, digital marketiing, social media integration</p>
        </div>
      </div>
      <p className={classes.summary}>
        We work with everyone, large or small, across all industries. More and more people are using
        the web, and even if you’re a completely local small business, service, contractor or
        consultant, odds are people have used search engines to look for your web site or app. We
        love working with people to grow their business by building sites and mobile apps from start
        to finish. Our skills are broad and include UX/UI, and front end and back end development.
      </p>
    </div>
  );
};

Services.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Services);
