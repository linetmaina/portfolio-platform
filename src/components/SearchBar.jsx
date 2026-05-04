// Handles user input for searching/filtering projects.
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="search"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}