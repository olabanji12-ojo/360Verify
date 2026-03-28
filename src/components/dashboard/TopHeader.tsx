import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, CircleUserRound, BellDot, LogOut, Settings as SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
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
        <section className="h-[10%] bg-white border-b border-[#f2f2f3] w-full flex items-center justify-end px-16 gap-10 font-Outfit relative z-50">
            
            {/* Notification Section */}
            <div className="relative group cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
                <BellDot className="text-[#333333]" size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
            </div>

            {/* Profile Section */}
            <div className="relative" ref={dropdownRef}>
                <div 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-2xl transition-all group border border-transparent hover:border-[#f2f2f3]"
                >
                    <div className="w-10 h-10 bg-[#f9faff] rounded-xl flex items-center justify-center text-[#ff8a63] border border-[#ff8a63]/10">
                        <CircleUserRound size={24} />
                    </div>
                    
                    <div className="flex flex-col items-start leading-none">
                        <p className="font-extrabold text-[#333333] tracking-tight">John Doe</p>
                        <span className="text-[10px] text-[#bebebe] font-bold uppercase tracking-wider mt-0.5">Admin Account</span>
                    </div>

                    <ChevronDown 
                        size={18} 
                        className={`text-[#bebebe] group-hover:text-[#333333] transition-transform duration-300 ${isMenuOpen ? "rotate-180 text-[#ff8a63]" : ""}`} 
                    />
                </div>

                {/* Profile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-[calc(100%+12px)] right-0 w-[220px] bg-white border border-[#f2f2f3] rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] py-3 px-2 z-[100] animate-in slide-in-from-top-4 duration-300">
                        <div className="px-5 py-3 border-b border-[#f2f2f3] mb-2">
                            <p className="text-[11px] font-bold text-[#bebebe] uppercase tracking-wider">Account Settings</p>
                        </div>
                        
                        <button 
                            onClick={handleSettings}
                            className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[#fff2ed] hover:text-[#ff8a63] rounded-2xl transition-all text-[#666666] font-bold text-[14px]"
                        >
                            <SettingsIcon size={18} />
                            Manage Profile
                        </button>
                        
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all text-[#666666] font-bold text-[14px]"
                        >
                            <LogOut size={18} />
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TopHeader;