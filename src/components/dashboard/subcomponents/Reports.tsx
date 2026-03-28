import { useState } from "react";
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReportDetails from "./ReportDetails";
import ProfileReportPanel from "./ProfileReportPanel";

const Reports = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"Overview" | "Profiles">("Overview");
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [activeReport, setActiveReport] = useState<any>(null);
    const [activeProfile, setActiveProfile] = useState<any>(null);

    const reportsData = [
        { id: 1, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Verified" },
        { id: 2, date: "25-08-2025", batchId: "REQ-2025-0346", candidate: "Fela Anikulapo", type: "Guarantor", status: "Not verified" },
        { id: 3, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Verified" },
        { id: 4, date: "25-08-2025", batchId: "REQ-2025-0346", candidate: "Fela Anikulapo", type: "Guarantor", status: "Verified" },
        { id: 5, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Verified" },
    ];

    const profiles = [
        { name: "Elouise Bridgerton", checks: 5 },
        { name: "Tade Williams", checks: 10 },
        { name: "Jeremiah Obi", checks: 5 },
        { name: "Elouise Bridgerton", checks: 5 },
        { name: "Tade Williams", checks: 10 },
        { name: "Jeremiah Obi", checks: 5 },
        { name: "Elouise Bridgerton", checks: 5 },
        { name: "Tade Williams", checks: 10 },
        { name: "Jeremiah Obi", checks: 5 },
    ];

    const toggleRow = (id: number) => {
        setSelectedRows((prev: number[]) => prev.includes(id) ? prev.filter((r: number) => r !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        setSelectedRows((prev: number[]) => prev.length === reportsData.length ? [] : reportsData.map(r => r.id));
    };

    const openReportPanel = (item: any) => {
        setActiveReport({
            candidateName: item.candidate,
            dateSubmitted: "June 3, 2025, 9:30 AM",
            requestId: item.batchId,
            status: item.status,
            verificationType: item.type,
            comment: item.status === "Verified" 
                ? "Address verified. Physical visit confirmed residence at 12, Adeola St., Lagos."
                : "Address not verified. The provided location does not exist / no occupant matched the candidate's details."
        });
    };

    return (
        <section className="flex flex-col gap-6 w-full relative h-full mb-10">
            <h1 className="text-3xl font-bold text-[#333333]">Reports</h1>

            {/* Header: Search & Tab switcher */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bebebe]" size={18} />
                        <input 
                            type="text" 
                            placeholder="Name, ID, or Reference number"
                            className="w-full bg-[#f2f2f3] border-none rounded-[12px] h-12 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#ff8a63] transition-all text-sm placeholder:text-[#bebebe]"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-[#e6e6e7] rounded-[12px] h-12 px-5 text-sm font-semibold text-[#666666] hover:bg-gray-50 transition-colors cursor-pointer">
                        <SlidersHorizontal size={18} />
                        Filter Reports
                    </button>
                </div>

                <div className="flex items-center gap-2 bg-[#f2f2f3] p-1.5 rounded-[12px] w-fit">
                    <button 
                        onClick={() => setActiveTab("Overview")}
                        className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all ${activeTab === "Overview" ? "bg-[#ff8a63] text-white shadow-md" : "text-[#888888] hover:text-[#333333]"}`}
                    >
                        Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab("Profiles")}
                        className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all ${activeTab === "Profiles" ? "bg-[#ff8a63] text-white shadow-md" : "text-[#888888] hover:text-[#333333]"}`}
                    >
                        Profiles
                    </button>
                </div>
            </div>

            {/* View Switching Logic */}
            {activeTab === "Overview" ? (
                <div className="bg-white border border-[#e6e6e7] rounded-[24px] overflow-hidden shadow-sm flex-1 mb-20 animate-in fade-in duration-300">
                    <table className="w-full text-left border-collapse font-Outfit">
                        <thead>
                            <tr className="bg-[#f9fafb] border-b border-[#e6e6e7]">
                                <th className="py-4 px-6 w-10">
                                    <div 
                                        onClick={toggleAll}
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedRows.length === reportsData.length ? "bg-[#ff8a63] border-[#ff8a63]" : "bg-white border-[#e6e6e7]"}`}
                                    >
                                        {selectedRows.length === reportsData.length && <Check size={14} className="text-white" />}
                                    </div>
                                </th>
                                <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Date Completed</th>
                                <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Batch ID</th>
                                <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Candidate Name</th>
                                <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Verification Type</th>
                                <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e6e6e7]">
                            {[
                                { id: 1, date: "25-08-2025", batchId: "SV-2025-001", candidate: "Fela Anikulapo", type: "Address, Guarantors", status: "In Progress" },
                                { id: 2, date: "25-08-2025", batchId: "BV-2025-045", candidate: "50 Candidates", type: "Address, Guarantors", status: "In Progress" },
                                { id: 3, date: "25-08-2025", batchId: "SV-2025-001", candidate: "Amos Jeremiah", type: "Address, Guarantors", status: "In Progress" },
                                { id: 4, date: "25-08-2025", batchId: "BV-2025-045", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed" },
                                { id: 5, date: "25-08-2025", batchId: "SV-2025-001", candidate: "Promise Thompson", type: "Address, Guarantors", status: "Completed" },
                                { id: 6, date: "25-08-2025", batchId: "BV-2025-045", candidate: "50 Candidates", type: "Guarantor", status: "In Progress" },
                                { id: 7, date: "25-08-2025", batchId: "SV-2025-001", candidate: "Obi Okonkwuo", type: "Address, Guarantors", status: "Completed" },
                                { id: 8, date: "25-08-2025", batchId: "BV-2025-045", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed" },
                            ].map((item) => (
                                <tr 
                                    key={item.id} 
                                    className={`hover:bg-gray-50 transition-colors group cursor-pointer ${selectedRows.includes(item.id) ? "bg-[#fffafa]" : ""}`}
                                    onClick={() => {
                                        if (item.batchId.startsWith("BV")) {
                                            navigate(`/dashboard/reports/batch/${item.batchId}`);
                                        } else {
                                            navigate(`/dashboard/reports/single/${item.batchId}`);
                                        }
                                    }}
                                >
                                    <td className="py-4 px-6 w-10" onClick={(e) => e.stopPropagation()}>
                                        <div 
                                            onClick={() => toggleRow(item.id)}
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedRows.includes(item.id) ? "bg-[#ff8a63] border-[#ff8a63]" : "bg-white border-[#e6e6e7]"}`}
                                        >
                                            {selectedRows.includes(item.id) && <Check size={14} className="text-white" />}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-[#666666]">{item.date}</td>
                                    <td className="py-4 px-4 text-sm text-[#888888] font-medium italic group-hover:text-[#ff8a63] transition-colors">
                                        {item.batchId}
                                    </td>
                                    <td className="py-4 px-4 text-sm font-semibold text-[#333333]">{item.candidate}</td>
                                    <td className="py-4 px-4 text-sm text-[#666666]">{item.type}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-4 py-1.5 rounded-lg text-[11px] font-bold ${
                                            item.status === 'Completed' 
                                                ? 'bg-[#ecfdf5] text-[#10b981]' 
                                                : 'bg-[#f5f3ff] text-[#a855f7]'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-[#bebebe] hover:text-[#333333] transition-colors p-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <Download size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-in slide-in-from-bottom-5 duration-300">
                    {profiles.map((profile, index) => (
                        <div 
                            key={index} 
                            onClick={() => setActiveProfile(profile)}
                            className="bg-white border border-[#e6e6e7] rounded-[24px] p-6 shadow-sm hover:border-[#ff8a63] transition-all cursor-pointer group flex flex-col gap-1"
                        >
                            <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#ff8a63] transition-colors">{profile.name}</h3>
                            <p className="text-sm text-[#888888] font-medium">{profile.checks} verification checks done</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Selection Bar */}
            {selectedRows.length > 0 && activeTab === "Overview" && (
                <div className="fixed bottom-20 left-[20%] right-[3%] h-16 bg-[#000000] rounded-[24px] shadow-2xl flex items-center justify-between px-10 animate-in slide-in-from-bottom-10 z-30">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#ff8a63] text-white font-bold text-xs px-3 py-1 rounded-[6px]">
                            {selectedRows.length}
                        </div>
                        <span className="text-white font-bold tracking-wide">Selected</span>
                    </div>
                    <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-2.5 rounded-[12px] font-bold text-sm hover:bg-white/20 transition-all border border-white/20">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            )}

            {/* Pagination */}
            <div className="fixed bottom-0 left-[18%] right-0 px-10 py-4 bg-white/80 backdrop-blur-md flex items-center justify-between border-t border-[#e6e6e7] z-20">
                <div className="flex items-center gap-2 text-xs text-[#888888]">
                    <span>Rows per page:</span>
                    <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-[#333333]">
                        <option>10</option>
                    </select>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-xs text-[#888888] font-medium font-bold">1-5 of 13</span>
                    <div className="flex items-center gap-3">
                        <button className="p-1 text-[#bebebe] cursor-not-allowed disabled:opacity-50" disabled><ChevronLeft size={20} /></button>
                        <button className="p-1 text-[#888888] hover:text-[#333333] transition-colors cursor-pointer"><ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>

            <ReportDetails 
                isOpen={activeReport !== null} 
                onClose={() => setActiveReport(null)} 
                data={activeReport} 
            />

            <ProfileReportPanel 
                isOpen={activeProfile !== null}
                onClose={() => setActiveProfile(null)}
                profile={activeProfile}
            />

        </section>
    );
};

export default Reports;
