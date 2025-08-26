import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Bell, MessageCircle, Settings } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";

function Navbar({ setCollapse }) {
  const projects = [
    {
      id: 1,
      name: "E-commerce Website Redesign",
      client: "TechStart Inc.",
      status: "completed",
      deadline: "2024-01-15",
      budget: "$4,500",
      progress: 100,
      description: "Complete redesign of the company's e-commerce platform",
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "FitnessPro",
      status: "in-progress",
      deadline: "2024-02-28",
      budget: "$8,200",
      progress: 75,
      description: "iOS and Android app for fitness tracking",
    },
    {
      id: 3,
      name: "Brand Identity Design",
      client: "Local Restaurant",
      status: "in-progress",
      deadline: "2024-02-10",
      budget: "$2,100",
      progress: 60,
      description:
        "Complete brand identity package including logo and guidelines",
    },
    {
      id: 4,
      name: "Website Maintenance",
      client: "RetailCorp",
      status: "on-hold",
      deadline: "2024-01-30",
      budget: "$1,500",
      progress: 30,
      description: "Monthly website maintenance and updates",
    },
    {
      id: 5,
      name: "Social Media Graphics",
      client: "Marketing Agency",
      status: "in-progress",
      deadline: "2024-01-25",
      budget: "$950",
      progress: 85,
      description: "Monthly social media graphics package",
    },
  ];
  const [query, setQuery] = useState("");
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const heading = segments[segments.length - 1];

  const results = projects.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex justify-between items-center px-5 py-5 w-full bg-white border-b border-gray-300 gap-10 max-xs:gap-3 max-xs:px-3   ">
      <div className="flex gap-4 items-center justify-center flex-1   ">
        <GiHamburgerMenu
          size={35}
          className="cursor-pointer hover:text-blue-400 transition-all duration-300 md:hidden "
          onClick={() => {
            setCollapse((s) => !s);
            console.log("click");
          }}
        />
        <h1 className="font-semibold text-gray-800 text-2xl capitalize max-sm:hidden">
          {heading}
        </h1>
        <SearchBar query={query} setQuery={setQuery} results={results} />
      </div>
      <div className="flex gap-3 text-gray-600 items-center max-xs:gap-0">
        <div className="hover:bg-stone-100 transition-all duration-300 rounded-lg p-2 relative">
          <div className="absolute top-1 right-[-3px] w-3 h-3 bg-green-600 rounded-full"></div>
          <MessageCircle
            size={26}
            className="cursor-pointer  transition-all duration-300  "
          />
        </div>
        <div className="hover:bg-stone-100 transition-all duration-300 rounded-lg p-2 relative">
          <div className="absolute top-1 right-[-3px] w-3 h-3  bg-orange-300 rounded-full"></div>
          <Bell
            size={26}
            className="cursor-pointer  transition-all duration-300  "
          />
        </div>
        <div className="hover:bg-stone-100 transition-all duration-300 rounded-lg p-2">
          <Settings
            size={26}
            className="cursor-pointer  transition-all duration-300  "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
