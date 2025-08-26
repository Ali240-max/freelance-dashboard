import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  const [collapse, setCollapse] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`bg-stone-100 h-screen overflow-hidden flex ${
        darkMode ? "invert hue-rotate-180" : ""
      } `}
    >
      <Sidebar
        collapse={collapse}
        setCollapse={setCollapse}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      <div className="flex-1 flex flex-col">
        <Navbar setCollapse={setCollapse} />
        <main className="px-4 py-4 flex-1 overflow-y-auto max-xs:px-1 max-xs:py-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
