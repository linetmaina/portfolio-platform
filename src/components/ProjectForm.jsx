// Handles adding new projects using controlled inputs.
import { useState } from "react";

export default function ProjectForm({ addProject }) {
  // Local state for form inputs
  const [formData, setFormData] = useState({ title: "", description: "" });

  // Updates state when user types in inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!formData.title) return; // Prevent empty submissions
    addProject(formData); // Send data to parent

    // Reset form after submission
    setFormData({ title: "", description: "" });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}