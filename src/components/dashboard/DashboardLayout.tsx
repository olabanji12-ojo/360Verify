import { useState } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader"
import MiddleLayout from "./MiddleLayout";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex w-full h-screen bg-[#F8F9FA] overflow-hidden relative">

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-300" 
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* The persistent Sidebar panel */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* The flexible main content window */}
            <div className="flex flex-col w-full h-full overflow-hidden">
                
                <TopHeader onMenuClick={() => setIsSidebarOpen(true)} />
                
                <main className="flex-1 w-full overflow-y-auto lg:overflow-hidden bg-[#F8F9FA]">
                    <MiddleLayout />
                </main>

            </div>

        </div>
    );

};

export default DashboardLayout;
