import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex h-full">
        {showSidebar && <Sidebar />}

        <div className="flex-1 flex flex-col h-full">
          <Navbar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
