import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const styles = ({ typography }) => ({
  hero: {
    '& h1': {
      ...typography.h1,
      margin: 0,
      marginBottom: 45,
      padding: 0,
    },
    '& h1, & h2': {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '& h2': {
      ...typography.h2,
      margin: 0,
      padding: 0,
    },
    alignItems: 'center',
    background: 'url(https://via.placeholder.com/1800x515) 50% 50%',
    display: 'flex',
    height: 515,
    justifyContent: 'center',
    marginBottom: 48,
    width: '100%',
  },
  overview: {
    '& p': typography.p,
    '@media (max-width: 950px)': {
      maxWidth: '100%',
      padding: [0, 10],
    },
    maxWidth: '85%',
    paddingLeft: '5%',
  },
  root: {
    '& h3': typography.h3,
    '> section': {
      marginBottom: 50,
      padding: [20, 0],
    },
  },
});

const Index = ({ classes }) => {
  return (
    <div className={classes.root}>
      <section className={classes.hero}>
        <div>
          <h1>NolaJS</h1>
          <h2>Simple, flexible website and app development</h2>
        </div>
      </section>
      <section className={classes.overview}>
        <h3>About Us</h3>
        <p>
          Based in New Orleans, LA, NolaJS is focused on providing all of your website and app
          needs. Our services include custom websites, web apps, e-commerce sites, and mobile apps.
          We typically use Word Press for most basic websites, React for web apps, and Shopify for
          e-commerce but we can also use other technology if it better suits your needs. We also
          provide training so that you can make small changes to your website on your own, or if you
          prefer we can also provide continued support. Our services also include photography, SEO,
          social media, & content strategies. All websites are created, designed, and coded in the
          U.S., and we never outsource our work.
        </p>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <AboutUs />
      </section>
    </div>
  );
};

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Index);
