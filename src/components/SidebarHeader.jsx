import { GiHamburgerMenu } from "react-icons/gi";

function SidebarHeader({ setCollapse }) {
  return (
    <div>
      <div className="flex gap-7 items-center  ">
        <div>
          <GiHamburgerMenu
            size={35}
            className="cursor-pointer hover:text-blue-400 transition-all duration-300 md:pointer-events-none ml-2 "
            onClick={() => {
              setCollapse((s) => !s);
              console.log("click");
            }}
          />
        </div>
        <h1 className="text-3xl font-bold">Freelance</h1>
      </div>
    </div>
  );
}

export default SidebarHeader;
