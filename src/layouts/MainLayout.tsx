import Sidebar from "../components/Sidebar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-y-auto md:overflow-hidden">
      <Sidebar />
      <main className="flex-1 md:overflow-y-auto pb-20 md:pb-4">
        <Outlet />
      </main>
      <ThemeToggle />
    </div>
  );
};

export default MainLayout;
