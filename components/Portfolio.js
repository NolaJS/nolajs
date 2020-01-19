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

const projects = [
  {
    description:
      'Nashville Bar Bike is a WordPress website with scheduling and e-commerce features.',
    img: '/projects/nashville.png',
    job: 'Developer',
    skills: 'Development',
    subtitle: 'Scheduling/E-Commerce',
    title: 'Nashville Bar Bike',
  },
  {
    description: 'Steven worked at Lamps Plus as a senior developer and team lead.',
    img: '/projects/lp.png',
    job: 'Developer',
    skills: 'JavaScript, Website Development',
    subtitle: 'E-Commerce',
    title: 'Lamps Plus',
  },
  {
    description:
      'Originally a site created in MeteorJS framework that allow potential clients to request custom services. Calculations were complex and dependent on overtime calculations, locations and dates.',
    img: '/projects/century.png',
    job: 'Developer',
    skills: 'JavaScript, Website Development',
    subtitle: 'Custom Website',
    title: 'Century Trade Show',
  },
  {
    description:
      'District Sports Consulting provides an e-commerce platform so that they can sell custom trainings and consultations directly through the website.',
    img: '/projects/dsc.png',
    job: 'Developer',
    skills: 'Website Development',
    subtitle: 'WordPress/E-Commerce',
    title: 'District Sports Consulting',
  },
  {
    description:
      'Lecture Source was developed while Steven was working with Capitol Tech Solutions. The project is a totally custom web application that has elements of e-commerce and social applications. It allows users to create custom content that can then be sold to other customers.',
    img: '/projects/ls.png',
    job: 'Developer',
    skills: 'Website Development',
    subtitle: 'Custom Web App',
    title: 'Lecture Source',
  },
];

const Projects = ({ classes }) => (
  <div className={classes.root}>
    <h3>Portfolio</h3>
    <div className={classes.projects}>
      {projects.map(p => (
        <ProjectCard
          key={`${p.title} project`}
          title={p.title}
          job={p.job}
          skills={p.skills}
          img={p.img}
          subtitle={p.subtitle}
          description={p.description}
        />
      ))}
    </div>
  </div>
);

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Projects);
