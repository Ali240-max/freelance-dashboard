import { Search } from "lucide-react";
import { Link } from "react-router";

function SearchBar({ query, results, setQuery }) {
  return (
    <div className="relative group flex-1">
      <Search className="absolute z-3 top-2 left-3 w-6 h-6 text-stone-500  group-focus-within:scale-103" />
      <input
        type="text"
        placeholder="Search projects, tasks ..."
        className="bg-stone-100 px-4 pl-12 py-2 rounded-lg focus:outline-none transition-all duration-300 shadow-sm  group-focus-within:scale-103 w-full lg:max-w-xl "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Dropdown results */}
      {query && results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50 max-h-60 overflow-y-auto ">
          {results.map((project) => (
            <Link to={`/projects/${project.id}`}>
              <div
                key={project.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer transition"
                onClick={() => {
                  console.log("Selected:", project.name);
                  setQuery(project.name); // optional
                }}
              >
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No results state */}
      {query && results.length === 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50 px-3 py-2 text-gray-500">
          No matching projects
        </div>
      )}
    </div>
  );
}

export default SearchBar;
