import { Outlet } from "react-router-dom";
import MasterHeader from "../MasterHeader/MasterHeader";
import MasterFooter from "../MasterFooter/MasterFooter";

const Layout = () => {
  return (
    <div>
      {/* Header Always Visible */}
      <MasterHeader />
      
      {/* Dynamic Content (Changes Based on Route) */}
      <main>
        <Outlet />
      </main>
      
      
      <MasterFooter />
    </div>
  );
};

export default Layout;
