import { Outlet } from "react-router-dom";
import Header from "./Header";

const FullLayout = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Content Area */}
        <div className="flex-1">
          {/* Middle Content */}
          <div className="w-full p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
