// Receives filtered projects and renders a list of ProjectCard components.
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDelete }) {
  return (
    <div className="list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete}/>
      ))}
    </div>
  );
}
