import { useState } from "react";
import { Plus } from "lucide-react";
import ProjectsHeader from "../components/ProjectsHeader";
import SearchArea from "../components/SearchArea";
import ProjectCard from "../components/ProjectCard";
function Projects() {
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
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  let filteredProjects;

  //Filtler Functionallity
  filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((obj) => obj.status === filter);

  //Search Functionallity
  filteredProjects = filteredProjects.filter((obj) =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-5 flex flex-col gap-8 max-sm:px-2 max-xs:items-center justify-center max-xs:relative ">
      <ProjectsHeader
        heading={"Projects"}
        subHeading={"Manage your client projects and track progress"}
        buttonText={"New Project"}
        icon={Plus}
      />
      <div className="max-xs:mr-auto max-xs:pl-2">
        <SearchArea
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="flex flex-col gap-4 max-xs:items-center justify-center ">
        {filteredProjects.map((obj) => (
          <ProjectCard obj={obj} key={obj.id} />
        ))}

        {filteredProjects.length === 0 && (
          <p className="text-center text-2xl mt-5 text-gray-600">
            No projects found
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;
