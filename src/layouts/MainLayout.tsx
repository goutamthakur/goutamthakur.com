import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-y-auto md:overflow-hidden">
      <Sidebar />
      <main className="flex-1 md:overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
