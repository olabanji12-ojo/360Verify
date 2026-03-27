import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Search, Send, File, Banknote, Settings } from "lucide-react";

const Sidebar = () => {
    const location = useLocation();

    // Helper to check if a route is active
    const isActive = (path: string) => location.pathname === path;

    // Base classes for a sidebar link
    const linkBaseClass = "w-full flex items-center gap-3 cursor-pointer border-l-4 pl-9 py-3 transition-all group";
    const activeClass = "border-[#de582c] text-[#de582c]";
    const inactiveClass = "border-transparent text-white hover:text-[#de582c] hover:border-[#de582c]";

    return (
        <section className="w-[18%] bg-[#000000] h-screen flex flex-col items-start pt-10 gap-16">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2 pl-10">
                <img src="/360Dashboard.png" alt="project_logo" />
            </div> 

            {/* Links section */}
            <div className="flex flex-col gap-4 w-full">

                {/* Dashboard */}
                <Link to="/dashboard" className={`${linkBaseClass} ${isActive("/dashboard") ? activeClass : inactiveClass}`}>
                    <LayoutDashboard className={`${isActive("/dashboard") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">Dashboard</span>
                </Link>

                {/* New Verification */}
                <Link to="/dashboard/new-verification" className={`${linkBaseClass} ${isActive("/dashboard/new-verification") ? activeClass : inactiveClass}`}>
                    <Search className={`${isActive("/dashboard/new-verification") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">New Verification</span>
                </Link>

                {/* Requests */}
                <Link to="/dashboard/requests" className={`${linkBaseClass} ${isActive("/dashboard/requests") ? activeClass : inactiveClass}`}>
                    <Send className={`${isActive("/dashboard/requests") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">Requests</span>
                </Link>

                {/* Reports */}
                <Link to="/dashboard/reports" className={`${linkBaseClass} ${isActive("/dashboard/reports") ? activeClass : inactiveClass}`}>
                    <File className={`${isActive("/dashboard/reports") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">Reports</span>
                </Link>

                {/* Transactions */}
                <Link to="/dashboard/transactions" className={`${linkBaseClass} ${isActive("/dashboard/transactions") ? activeClass : inactiveClass}`}>
                    <Banknote className={`${isActive("/dashboard/transactions") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">Transactions</span>
                </Link>

                {/* Settings */}
                <Link to="/dashboard/settings" className={`${linkBaseClass} ${isActive("/dashboard/settings") ? activeClass : inactiveClass}`}>
                    <Settings className={`${isActive("/dashboard/settings") ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} />
                    <span className="text-base font-bold cursor-pointer transition-colors">Settings</span>
                </Link>

            </div>

        </section>
    );
};

export default Sidebar;