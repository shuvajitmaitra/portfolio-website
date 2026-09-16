import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
