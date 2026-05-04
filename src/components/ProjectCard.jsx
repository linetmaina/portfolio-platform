// Displays a single project (title + description).
export default function ProjectCard({ project }) {
  return (
    <div className="card project">
      <div className="icon">✖</div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}