import type { Metadata } from "next";
import Sidebar from "../components/Sidebar/Sidebar";
import FollowBar from "../components/FollowBar/FollowBar";

export const metadata: Metadata = {
  title: "Project X",
  description: "Social Media Services",
};

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-gray-950">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 h-full">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="col-span-3 md:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>

          {/* Follow Bar (hidden on small screens) */}
          <FollowBar />
        </div>
      </div>
    </div>
  );
}
