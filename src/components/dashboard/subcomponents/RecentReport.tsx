import React from "react";
import { Download, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecentReport = () => {
    const navigate = useNavigate();
    
    const reports = [
        {
            date: "25-08-2025",
            id: "REQ-2025-0345",
            candidate: "Adeyemi Quadri",
            type: "Address Verification",
            status: "Completed"
        },
        {
            date: "25-08-2025",
            id: "REQ-2025-0346",
            candidate: "Fela Anikulapo",
            type: "Guarantor's Verification",
            status: "Completed"
        },
        {
            date: "24-08-2025",
            id: "REQ-2025-0347",
            candidate: "Tiwa Savage",
            type: "Education Verification",
            status: "In Progress"
        }
    ];

    return (
        <section className="bg-white border border-[#e6e6e7] rounded-[32px] overflow-hidden shadow-sm font-Outfit animate-in fade-in duration-700">
            
            {/* Table Header Area */}
            <div className="px-8 py-6 flex items-center justify-between border-b border-[#f2f2f3]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#f9faff] rounded-xl flex items-center justify-center text-[#ff8a63]">
                        <FileText size={20} />
                    </div>
                    <h2 className="text-[#333333] font-extrabold text-xl tracking-tight">Recent Reports</h2>
                </div>
                <button 
                    onClick={() => navigate("/dashboard/reports")}
                    className="flex items-center gap-2 text-[#ff8a63] text-sm font-bold hover:gap-3 transition-all cursor-pointer group"
                >
                    View all reports
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Table Content Area */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#fcfcfc] border-b border-[#f2f2f3]">
                        <tr>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Date Submitted</th>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Request ID</th>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Candidate Name</th>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Verification Type</th>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Status</th>
                            <th className="px-8 py-5 text-[#bebebe] font-bold text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f2f2f3]">
                        {reports.map((report, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                                <td className="px-8 py-6 text-[#888888] text-[14px] font-medium">{report.date}</td>
                                <td className="px-8 py-6 text-[#333333] text-[14px] font-bold tabular-nums tracking-tight">{report.id}</td>
                                <td className="px-8 py-6 text-[#333333] text-[14px] font-bold">{report.candidate}</td>
                                <td className="px-8 py-6 text-[#888888] text-[14px] font-medium">{report.type}</td>
                                <td className="px-8 py-6">
                                    <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider ${
                                        report.status === 'Completed' 
                                        ? 'bg-[#ecfdf5] text-[#10b981]' 
                                        : 'bg-[#f5f3ff] text-[#a855f7]'
                                    }`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <button className="p-2.5 hover:bg-[#ff8a63]/10 rounded-xl transition-all text-[#bebebe] hover:text-[#ff8a63]">
                                        <Download size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default RecentReport;