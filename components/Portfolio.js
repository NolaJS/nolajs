import ProjectCard from './ProjectCard';

export default () => (
  <div>
    <h2>Portfolio</h2>
    <div className="projects">
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
    <style jsx>{`
      h2 {
        text-align: center;
      }
      .projects {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);
