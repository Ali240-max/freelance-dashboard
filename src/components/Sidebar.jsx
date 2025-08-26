import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { Moon, MoonIcon, PersonStanding, Sun } from "lucide-react";

function Sidebar({ collapse, setCollapse, setDarkMode, darkMode }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  function handleCollapse() {
    if (!collapse && isMobile) {
      setCollapse(true);
    }
  }

  useEffect(() => {
    if (isMobile) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [isMobile, setCollapse]);

  return (
    <div
      className={`md:static inset-0 overflow-hidden transition-all duration-300 max-md:backdrop-blur-xs absolute z-30 ${
        collapse ? "w-0 px-0 py-0" : "w-full md:w-fit"
      }`}
      onClick={handleCollapse}
    >
      <div
        className={` h-[100dvh] overflow-hidden w-70 max-sm:w-70 md:static absolute px-5 py-5 bg-white border-r border-gray-300`}
      >
        <div className="flex flex-col justify-between gap-36 w-65">
          <div className="flex flex-col gap-20">
            <SidebarHeader setCollapse={setCollapse} />
            <div className="flex flex-col gap-3 ">
              <SidebarItem
                iconName={"IoHomeOutline"}
                to={"dashboard"}
                setCollapse={setCollapse}
              >
                Dashboard
              </SidebarItem>
              <SidebarItem iconName={"MdOutlineDashboard"} to={"projects"}>
                Projects
              </SidebarItem>

              <SidebarItem
                setCollapse={setCollapse}
                iconName={"FaRegHeart"}
                to={"profile"}
              >
                Profile
              </SidebarItem>
              <SidebarItem setCollapse={setCollapse} iconName={"GrAnalytics"}>
                Analytics
              </SidebarItem>
              <SidebarItem setCollapse={setCollapse} iconName={"LuWallet"}>
                Tasks
              </SidebarItem>
              <SidebarItem
                setCollapse={setCollapse}
                iconName={"FiMessageSquare"}
              >
                Messages
              </SidebarItem>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <div
              className={`flex gap-8 items-center cursor-pointer transition-all duration-300 rounded-lg p-2 px-4 w-60 hover:bg-gray-100 `}
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {!darkMode ? <Moon size={35} /> : <Sun size={35} />}
              <h2 className="text-xl transition-all duration-300">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </h2>
            </div>
            <SidebarItem iconName={"MdOutlineSettings"}>Settings</SidebarItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
