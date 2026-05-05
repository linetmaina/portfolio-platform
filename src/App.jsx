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
    { id: 1, title: "Wordly Dictionary Application", description: "Wordly is a Single Page Application (SPA) that allows users to search for any English word and get real time definitions, pronunciation and related information using an external Dictionary API." },
    { id: 2, title: "Flatiron Bookstore Website", description: "This website allows Flatbooks to advertise their books by updating existing title on the page & adding a new batch in their catalog" },
    { id: 3, title: "Personal Website", description: "This is my personal website that highlights my skills & projects as a junior software developer" }
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

  //function to delete project
    function deleteProject(id) {
    setProjects((prev) =>
      prev.filter((proj) => proj.id !== id)
    );
  }

  return (
    <div className="container">
      <Header />
      <ProjectForm addProject={addProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList 
        projects={filteredProjects} 
        onDelete={deleteProject} 
      />
    </div>
  );
}

export default App
