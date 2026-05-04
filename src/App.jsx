// This is the main parent component.
// It stores global state (projects + search) and passes data to children via props.

import { useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  // State to store all projects
const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" }
  ]);
  
  // State to store search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new project
  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  // Filter projects based on search input
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <ProjectForm addProject={addProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App
