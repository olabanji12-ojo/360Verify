import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Download, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const BatchReportView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [expandedCandidate, setExpandedCandidate] = useState<string | null>("Elouise Bridgerton");
    const [activeTab, setActiveTab] = useState<"Overview" | "Tracking">("Overview");

    const stats = [
        { label: "Total Requests", value: "400" },
        { label: "Completed", value: "300" },
        { label: "Ongoing", value: "26" },
        { label: "Pending", value: "50" },
        { label: "Flagged", value: "24", color: "text-[#ef4444]" }
    ];

    const candidates = [
        { name: "Elouise Bridgerton", alias: "Elly", phone: "09057608507", checks: [
            { type: "Address verification", status: "In Progress", details: "No report yet. Reports will appear here" },
            { type: "Guarantor's Verification", status: "Completed", data: {
                firstName: "Alabi", lastName: "Samuel", phone: "09057608507", relationship: "Mentor", file: "Guarantor_agreement"
            }},
            { type: "Education and Transcript Verification", status: "In Progress", details: "No report yet. Reports will appear here" }
        ]},
        { name: "Tade Williams", checks: [] },
        { name: "Jeremiah Obi", checks: [] },
        { name: "Obi Okonkwuo", checks: [] }
    ];

    const trackingLogs = [
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Request submitted" },
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Assigned to Field Officer" },
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Verification in Progress" }
    ];

    return (
        <section className="flex flex-col gap-8 w-full font-Outfit mb-20 animate-in fade-in duration-500">
            {/* Header Area */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-[#333333]">{id || "BV-2025-045"}</h1>
                    <div className="flex items-center gap-3 text-xs font-bold text-[#bebebe]">
                        <span>Date Submitted: <span className="text-[#888888]">28-08-2025</span></span>
                        <div className="w-1 h-1 bg-[#bebebe] rounded-full" />
                        <span>Total Candidates: <span className="text-[#888888]">50</span></span>
                    </div>
                </div>
                <button className="bg-[#111111] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-all">
                    Download Report
                </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-5 bg-white border border-[#e6e6e7] rounded-[24px] p-6 shadow-sm">
                {stats.map((stat, index) => (
                    <div key={index} className={`flex flex-col gap-2 px-6 ${index !== stats.length - 1 ? "border-r border-[#f2f2f3]" : ""}`}>
                        <span className="text-[13px] font-medium text-[#888888]">{stat.label}</span>
                        <span className={`text-2xl font-bold ${stat.color || "text-[#333333]"}`}>{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Search & Actions */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bebebe]" size={18} />
                        <input 
                            type="text" 
                            placeholder="Name, ID, or Reference number"
                            className="w-full bg-[#f2f2f3] border-none rounded-[12px] h-12 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#ff8a63] transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 border border-[#e6e6e7] rounded-[12px] h-12 px-5 text-sm font-semibold text-[#666666] hover:bg-gray-50 transition-colors">
                            <SlidersHorizontal size={18} />
                            Filter Requests
                        </button>
                        <button className="flex items-center gap-2 border border-[#e6e6e7] rounded-[12px] h-12 px-5 text-sm font-semibold text-[#666666] hover:bg-gray-50 transition-colors">
                            {expandedCandidate ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            {expandedCandidate ? "Collapse all" : "Expand all"}
                        </button>
                    </div>
                </div>

                {/* Main Tab Switcher */}
                <div className="flex items-center gap-2 bg-[#f2f2f3] p-1 rounded-xl w-fit">
                    <button 
                        onClick={() => setActiveTab("Overview")}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "Overview" ? "bg-[#ff895d] text-white" : "text-[#888888]"}`}
                    >
                        Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab("Tracking")}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "Tracking" ? "bg-[#ff895d] text-white" : "text-[#888888]"}`}
                    >
                        Tracking
                    </button>
                </div>
            </div>

            {/* Candidate Accordion List */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] overflow-hidden shadow-sm">
                {candidates.map((candidate, idx) => (
                    <div key={idx} className={`border-b border-[#f2f2f3] last:border-none ${expandedCandidate === candidate.name ? "bg-[#fafafa]" : ""}`}>
                        {/* Accordion Header */}
                        <div 
                            onClick={() => setExpandedCandidate(expandedCandidate === candidate.name ? null : candidate.name)}
                            className="flex items-center justify-between p-7 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xl font-bold text-[#333333]">{candidate.name}</span>
                            <div className="flex items-center gap-4">
                                {expandedCandidate === candidate.name ? <ChevronUp size={20} className="text-[#888888]" /> : <ChevronDown size={20} className="text-[#888888]" />}
                            </div>
                        </div>

                        {/* Accordion Body */}
                        {expandedCandidate === candidate.name && (
                            <div className="px-10 pb-10 flex flex-col gap-10 animate-in slide-in-from-top-2 duration-300">
                                
                                {activeTab === "Overview" ? (
                                    <>
                                        {/* Candidate-level Info (Screenshot 2) */}
                                        <div className="grid grid-cols-4 gap-12 bg-white/50 p-2 rounded-2xl">
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">First Name</span>
                                                <span className="text-sm font-medium text-[#bebebe]">{candidate.name.split(' ')[0]}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Last Name</span>
                                                <span className="text-sm font-medium text-[#bebebe]">{candidate.name.split(' ')[1]}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Alias</span>
                                                <span className="text-sm font-medium text-[#bebebe]">{candidate.alias || "N/A"}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Phone Number</span>
                                                <span className="text-sm font-medium text-[#bebebe]">{candidate.phone || "N/A"}</span>
                                            </div>
                                        </div>

                                        {/* Verification Checks */}
                                        {candidate.checks.length > 0 ? (
                                            candidate.checks.map((check, cIdx) => (
                                                <div key={cIdx} className="flex flex-col gap-8">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-[17px] font-bold text-[#333333]">{check.type}</h3>
                                                        <span className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                                                            check.status === 'Verified' || check.status === 'Completed' ? 'bg-[#ecfdf5] text-[#10b981]' : 'bg-[#f5f3ff] text-[#a855f7]'
                                                        }`}>
                                                            {check.status}
                                                        </span>
                                                    </div>

                                                    {check.data ? (
                                                        <div className="grid grid-cols-4 gap-12 bg-white border border-[#f2f2f3] rounded-[24px] p-8 shadow-sm">
                                                            <div className="flex flex-col gap-1.5">
                                                                <span className="text-xs font-bold text-[#bebebe]">Guarantor's First Name</span>
                                                                <span className="text-sm font-medium text-[#888888]">{check.data.firstName}</span>
                                                            </div>
                                                            <div className="flex flex-col gap-1.5">
                                                                <span className="text-xs font-bold text-[#bebebe]">Last Name</span>
                                                                <span className="text-sm font-medium text-[#888888]">{check.data.lastName}</span>
                                                            </div>
                                                            <div className="flex flex-col gap-1.5">
                                                                <span className="text-xs font-bold text-[#bebebe]">Phone Number</span>
                                                                <span className="text-sm font-medium text-[#888888]">{check.data.phone}</span>
                                                            </div>
                                                            <div className="flex flex-col gap-1.5">
                                                                <span className="text-xs font-bold text-[#bebebe]">Relationship to candidate</span>
                                                                <span className="text-sm font-medium text-[#888888]">{check.data.relationship}</span>
                                                            </div>
                                                            <div className="col-span-4 mt-2">
                                                                <span className="text-xs font-bold text-[#bebebe] block mb-3">Guarantor Agreement Form</span>
                                                                <div className="flex items-center justify-between bg-[#fcfcfc] border border-[#f2f2f3] rounded-xl px-5 py-4 max-w-sm">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                                                            <Download size={16} />
                                                                        </div>
                                                                        <span className="text-[14px] font-medium text-[#888888]">{check.data.file}</span>
                                                                    </div>
                                                                    <button className="text-[11px] font-bold text-[#bebebe] hover:text-[#ff895d] transition-colors">View File</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center py-8 bg-white border border-dashed border-[#f2f2f3] rounded-[24px] text-center">
                                                            <p className="text-sm font-bold text-[#333333]">No report yet</p>
                                                            <p className="text-xs text-[#bebebe] mt-1">Reports will appear here</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="py-10 text-center text-[#bebebe]">No check data available for this candidate.</div>
                                        )}
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                                        {candidate.checks.map((check, cIdx) => (
                                            <div key={cIdx} className="flex flex-col gap-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-[17px] font-bold text-[#333333]">{check.type}</h3>
                                                    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                                                        check.status === 'Verified' || check.status === 'Completed' ? 'bg-[#ecfdf5] text-[#10b981]' : 'bg-[#f5f3ff] text-[#a855f7]'
                                                    }`}>
                                                        {check.status}
                                                    </span>
                                                </div>
                                                
                                                <div className="bg-white border border-[#f2f2f3] rounded-[24px] overflow-hidden shadow-sm">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead>
                                                            <tr className="bg-[#f9fafb] border-b border-[#f2f2f3]">
                                                                <th className="py-4 px-8 text-xs font-bold text-[#bebebe] uppercase tracking-wider">Date and time</th>
                                                                <th className="py-4 px-8 text-xs font-bold text-[#bebebe] uppercase tracking-wider">Activity</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-[#f2f2f3]">
                                                            {trackingLogs.map((log, lIdx) => (
                                                                <tr key={lIdx}>
                                                                    <td className="py-5 px-8 text-[14px] text-[#888888] font-medium">{log.dateTime}</td>
                                                                    <td className="py-5 px-8 text-[14px] text-[#888888] font-medium">{log.activity}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BatchReportView;
