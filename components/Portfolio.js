import ProjectCard from './ProjectCard';

export default () => (
  <div>
    <h2>Portfolio</h2>
    <div className="projects">
      <ProjectCard />
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
    </div>
    <style jsx>{`
      h2 {
        text-align: center;
      }
    `}</style>
  </div>
);
