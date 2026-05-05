// Displays a single project (title + description).
export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="card project">
    <div
        className="icon"
        onClick={() => onDelete(project.id)}>
        ✖
    </div>
      <div>
        <h3 className="p-title">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}