import React, { useState } from "react";
import { Download, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { useParams } from "react-router-dom";

const SingleReportView = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState<"Overview" | "Tracking">("Overview");

    const resultData = [
        { type: "Address verification", status: "In Progress", details: "No report yet. Reports will appear here" },
        { type: "Guarantor's Verification", status: "Flagged", data: {
            firstName: "Alabi", lastName: "Samuel", phone: "09057608507", relationship: "Mentor", file: "Guarantor_agreement",
            comment: "Submitted number incomplete: missing last digit."
        }},
        { type: "Education and Transcript Verification", status: "In Progress", details: "No report yet. Reports will appear here" }
    ];

    const trackingLogs = [
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Request submitted" },
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Assigned to Field Officer" },
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Verification in Progress" },
        { dateTime: "Monday, July 10, 2025. 19:38PM", activity: "Verification complete" }
    ];

    return (
        <section className="flex flex-col gap-8 w-full font-Outfit mb-20 animate-in fade-in duration-500">
            {/* Header Area */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-[#333333]">{id || "SV-2025-001"}</h1>
                    <div className="flex items-center gap-3 text-xs font-bold text-[#bebebe]">
                        <span>Date Submitted: <span className="text-[#888888]">28-08-2025</span></span>
                        <div className="w-1 h-1 bg-[#bebebe] rounded-full" />
                        <span>Candidate: <span className="text-[#888888]">Elouise Bridgerton</span></span>
                    </div>
                </div>
                <button className="bg-[#111111] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-all">
                    Download Report
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-2 bg-[#f2f2f3] p-1 rounded-xl w-fit mb-2">
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

            {/* Content Wrapper */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-10 shadow-sm min-h-[500px]">
                {activeTab === "Overview" ? (
                    <div className="flex flex-col gap-12 animate-in slide-in-from-top-2 duration-300">
                        {resultData.map((check, idx) => (
                            <div key={idx} className="flex flex-col gap-8 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[#666666]">{check.type}</h3>
                                    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                                        check.status === 'Verified' ? 'bg-[#ecfdf5] text-[#10b981]' : 
                                        check.status === 'Flagged' ? 'bg-[#fef2f2] text-[#ef4444]' : 'bg-[#f5f3ff] text-[#a855f7]'
                                    }`}>
                                        {check.status}
                                    </span>
                                </div>

                                {check.data ? (
                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="grid grid-cols-4 gap-12 bg-white border border-[#f2f2f3] rounded-[24px] p-8 shadow-sm">
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Guarantor's First Name</span>
                                                <span className="text-[15px] font-medium text-[#888888]">{check.data.firstName}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Last Name</span>
                                                <span className="text-[15px] font-medium text-[#888888]">{check.data.lastName}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Phone Number</span>
                                                <span className="text-[15px] font-medium text-[#888888]">{check.data.phone}</span>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-bold text-[#bebebe]">Relationship to candidate</span>
                                                <span className="text-[15px] font-medium text-[#888888]">{check.data.relationship}</span>
                                            </div>

                                            <div className="col-span-2 mt-4">
                                                <span className="text-xs font-bold text-[#bebebe] block mb-3">Guarantor Agreement Form</span>
                                                <div className="flex items-center justify-between bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl px-5 py-4 w-full">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                                                            <Download size={20} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-[#888888]">{check.data.file}</span>
                                                    </div>
                                                    <button className="text-xs font-bold text-[#bebebe] hover:text-[#ff895d] transition-colors">View File</button>
                                                </div>
                                            </div>

                                            {check.data.comment && (
                                                <div className="col-span-2 mt-4">
                                                    <span className="text-xs font-bold text-[#bebebe] block mb-3">Comments</span>
                                                    <p className="text-[14px] text-[#333333] font-medium leading-relaxed">
                                                        {check.data.comment}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 bg-[#fafafa] rounded-[24px] border border-dashed border-[#e6e6e7] text-center">
                                        <p className="text-lg font-bold text-[#333333]">No report yet</p>
                                        <p className="text-sm text-[#bebebe] mt-1">Reports will appear here</p>
                                    </div>
                                )}
                                {idx !== resultData.length - 1 && <div className="w-full h-px bg-[#f2f2f3] mt-4" />}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-10 animate-in fade-in duration-300">
                        {resultData.map((check, idx) => (
                            <div key={idx} className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[#666666]">{check.type}</h3>
                                    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                                        check.status === 'Verified' ? 'bg-[#ecfdf5] text-[#10b981]' : 
                                        check.status === 'Flagged' ? 'bg-[#fef2f2] text-[#ef4444]' : 'bg-[#f5f3ff] text-[#a855f7]'
                                    }`}>
                                        {check.status}
                                    </span>
                                </div>
                                <div className="bg-white border border-[#f2f2f3] rounded-[24px] overflow-hidden shadow-sm">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[#f9fafb] border-b border-[#f2f2f3]">
                                                <th className="py-5 px-10 text-xs font-bold text-[#bebebe] uppercase tracking-wider">Date and time</th>
                                                <th className="py-5 px-10 text-xs font-bold text-[#bebebe] uppercase tracking-wider">Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#f2f2f3]">
                                            {trackingLogs.map((log, lIdx) => (
                                                <tr key={lIdx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-6 px-10 text-[15px] text-[#888888] font-medium">{log.dateTime}</td>
                                                    <td className="py-6 px-10 text-[15px] text-[#888888] font-medium">{log.activity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {idx !== resultData.length - 1 && <div className="w-full h-px bg-[#f2f2f3] mt-6" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SingleReportView;
