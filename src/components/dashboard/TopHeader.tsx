import { useState, useRef, useEffect } from "react";
import { ChevronDown, CircleUserRound, BellDot, LogOut, Settings as SettingsIcon, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopHeaderProps {
    onMenuClick: () => void;
}

const TopHeader = ({ onMenuClick }: TopHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        // Simple prototype logout to login page
        navigate("/auth/login");
    };

    const handleSettings = () => {
        navigate("/dashboard/settings");
        setIsMenuOpen(false);
    };

    return (
        <section className="h-[10%] bg-white border-b border-[#f2f2f3] w-full flex items-center justify-between lg:justify-end px-6 lg:px-16 gap-4 lg:gap-10 font-Outfit relative z-50">
            
            {/* Mobile Menu Button */}
            <button 
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors text-[#333333]"
            >
                <Menu size={24} />
            </button>

            <div className="flex items-center gap-4 lg:gap-10 ml-auto lg:ml-0">
                {/* Notification Section */}
                <div className="relative group cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
                    <BellDot className="text-[#333333]" size={22} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
                </div>

                {/* Profile Section */}
                <div className="relative" ref={dropdownRef}>
                    <div 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 lg:gap-3 cursor-pointer hover:bg-gray-50 p-1.5 lg:p-2 rounded-2xl transition-all group border border-transparent hover:border-[#f2f2f3]"
                    >
                        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#f9faff] rounded-xl flex items-center justify-center text-[#ff8a63] border border-[#ff8a63]/10">
                            <CircleUserRound size={22} className="lg:hidden" />
                            <CircleUserRound size={24} className="hidden lg:block" />
                        </div>
                        
                        <div className="flex flex-col items-start leading-none hidden sm:flex">
                            <p className="font-extrabold text-[#333333] tracking-tight text-sm lg:text-base">John Doe</p>
                            <span className="text-[10px] text-[#bebebe] font-bold uppercase tracking-wider mt-0.5">Admin Account</span>
                        </div>

                        <ChevronDown 
                            size={16} 
                            className={`text-[#bebebe] group-hover:text-[#333333] transition-transform duration-300 ${isMenuOpen ? "rotate-180 text-[#ff8a63]" : ""}`} 
                        />
                    </div>

                    {/* Profile Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-[calc(100%+8px)] right-0 w-[200px] lg:w-[220px] bg-white border border-[#f2f2f3] rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] py-2 px-2 z-[100] animate-in slide-in-from-top-4 duration-300">
                            <div className="px-5 py-3 border-b border-[#f2f2f3] mb-1">
                                <p className="text-[10px] lg:text-[11px] font-bold text-[#bebebe] uppercase tracking-wider">Account Settings</p>
                            </div>
                            
                            <button 
                                onClick={handleSettings}
                                className="w-full flex items-center gap-3 lg:gap-4 px-4 lg:px-5 py-3 hover:bg-[#fff2ed] hover:text-[#ff8a63] rounded-2xl transition-all text-[#666666] font-bold text-[13px] lg:text-[14px]"
                            >
                                <SettingsIcon size={18} />
                                Manage Profile
                            </button>
                            
                            <button 
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 lg:gap-4 px-4 lg:px-5 py-3 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all text-[#666666] font-bold text-[13px] lg:text-[14px]"
                            >
                                <LogOut size={18} />
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopHeader;