import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Outlet></Outlet>
    </div>
  );
};
export default Layout;
