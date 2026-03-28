import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Search, Send, File, Banknote, Settings, X } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const location = useLocation();

    // Helper to check if a route is active
    const isActive = (path: string) => location.pathname === path;

    // Base classes for a sidebar link
    const linkBaseClass = "w-full flex items-center gap-3 cursor-pointer border-l-4 pl-9 py-3 transition-all group";
    const activeClass = "border-[#de582c] text-[#de582c] bg-[#de582c]/5";
    const inactiveClass = "border-transparent text-white hover:text-[#de582c] hover:border-[#de582c] hover:bg-white/5";

    const sidebarLinks = [
        { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { path: "/dashboard/new-verification", icon: Search, label: "New Verification" },
        { path: "/dashboard/requests", icon: Send, label: "Requests" },
        { path: "/dashboard/reports", icon: File, label: "Reports" },
        { path: "/dashboard/transactions", icon: Banknote, label: "Transactions" },
        { path: "/dashboard/settings", icon: Settings, label: "Settings" }
    ];

    return (
        <section className={`
            fixed inset-y-0 left-0 z-50 w-[280px] bg-[#000000] h-screen flex flex-col items-start pt-10 gap-16 transition-transform duration-300 lg:static lg:w-[18%] lg:translate-x-0
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
            
            {/* Logo Section */}
            <div className="flex items-center justify-between w-full px-10">
                <img src="/360Dashboard.png" alt="project_logo" />
                <button 
                    onClick={onClose}
                    className="lg:hidden text-white hover:text-[#de582c] transition-colors"
                >
                    <X size={24} />
                </button>
            </div> 

            {/* Links section */}
            <div className="flex flex-col gap-2 w-full">
                {sidebarLinks.map((link) => (
                    <Link 
                        key={link.path}
                        to={link.path} 
                        onClick={() => onClose()}
                        className={`${linkBaseClass} ${isActive(link.path) ? activeClass : inactiveClass}`}
                    >
                        <link.icon className={`${isActive(link.path) ? "text-[#de582c]" : "text-white group-hover:text-[#de582c]"} transition-colors`} size={22} />
                        <span className="text-[15px] font-bold cursor-pointer transition-colors tracking-tight">{link.label}</span>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default Sidebar;