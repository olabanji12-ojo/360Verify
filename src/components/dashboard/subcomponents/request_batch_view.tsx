import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import RequestOverview from "./request_overview";
import RequestTracking from "./request_tracking";

const RequestBatchView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"Overview" | "Tracking">("Overview");

    const stats = [
        { label: "Total Requests", value: "400" },
        { label: "Completed", value: "300" },
        { label: "Ongoing", value: "26" },
        { label: "Pending", value: "50" },
        { label: "Flagged", value: "24" },
    ];

    return (
        <section className="flex flex-col gap-6 w-full">
            
            {/* Header: Batch ID */}
            <h1 className="text-3xl font-bold text-[#333333]">{id || "BATCH-2025-0345"}</h1>

            {/* Search and Filters */}
            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bebebe]" size={18} />
                    <input 
                        type="text" 
                        placeholder="Name, ID, or Reference number"
                        className="w-full bg-[#f2f2f3] border-none rounded-[12px] h-12 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#ff8a63] transition-all placeholder:text-[#bebebe] text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 border border-[#e6e6e7] rounded-[12px] h-12 px-5 text-sm font-semibold text-[#666666] hover:bg-gray-50 transition-colors cursor-pointer">
                    <SlidersHorizontal size={18} />
                    Filter Requests
                </button>
            </div>

            {/* Stats Cards Row */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-6 shadow-sm flex items-center divide-x divide-[#e6e6e7]">
                {stats.map((stat, index) => (
                    <div key={index} className="flex-1 px-8 flex flex-col gap-1 first:pl-0 last:pr-0">
                        <span className="text-xs text-[#bebebe] font-bold uppercase tracking-wider">{stat.label}</span>
                        <span className="text-2xl font-bold text-[#333333]">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-2 bg-[#f2f2f3] p-1.5 rounded-[12px] w-fit">
                <button 
                    onClick={() => setActiveTab("Overview")}
                    className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all ${activeTab === "Overview" ? "bg-[#ff8a63] text-white shadow-md" : "text-[#888888] hover:text-[#333333]"}`}
                >
                    Overview
                </button>
                <button 
                    onClick={() => setActiveTab("Tracking")}
                    className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all ${activeTab === "Tracking" ? "bg-[#ff8a63] text-white shadow-md" : "text-[#888888] hover:text-[#333333]"}`}
                >
                    Tracking
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-2">
                {activeTab === "Overview" ? <RequestOverview /> : <RequestTracking />}
            </div>

        </section>
    );
};

export default RequestBatchView;
