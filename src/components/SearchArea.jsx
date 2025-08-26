import { Filter, Search } from "lucide-react";

function SearchArea({ filter, setFilter, searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-6 flex gap-4 max-xs:w-full ">
      <div className="relative group flex-1">
        <Search className="absolute z-3 top-2 left-3 w-6 h-6 text-stone-500  " />
        <input
          type="text"
          placeholder="Search projects, tasks ..."
          className="bg-stone-100 px-4 pl-12 py-2 rounded-lg focus:outline-none transition-all duration-300 shadow-sm w-full lg:max-w-xl "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-2 items-center text-gray-600">
        <Filter size={20} />
        <select
          className="bg-stone-100 px-4 py-2 rounded-lg focus:outline-none transition-all duration-300 shadow-sm  group-focus-within:scale-103 w-35 lg:max-w-xl text-gray-600 max-xs:w-22 "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="on-hold">On Hold</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
}

export default SearchArea;
