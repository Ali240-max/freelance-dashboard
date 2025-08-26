import { Plus } from "lucide-react";

function ProjectsHeader({ heading, subHeading, buttonText, icon }) {
  const Icon = icon;
  return (
    <div className="flex justify-between items-center max-xs:flex-col  max-xs:gap-5 max-xs:items-baseline max-xs:mr-auto max-xs:pl-2 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className="text-lg text-gray-600 max-xs:w-70   ">{subHeading}</p>
      </div>
      <button className="bg-[#4338ca] text-white cursor-pointer px-4 font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-103 flex items-center gap-2  whitespace-nowrap  ">
        <Icon size={17} />
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default ProjectsHeader;
