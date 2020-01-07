import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import ProjectCard from './ProjectCard';

const styles = ({ typography }) => ({
  projects: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  root: {
    '& h3': {
      ...typography.h3,
      textAlign: 'center',
    },
  },
});

const Projects = ({ classes }) => (
  <div className={classes.root}>
    <h3>Portfolio</h3>
    <div className={classes.projects}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
);

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Projects);
