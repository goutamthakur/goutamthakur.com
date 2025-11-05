import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
