import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Check } from "lucide-react";
import RequestDetails from "./RequestDetails";

const Request = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [activeRequest, setActiveRequest] = useState<any>(null);
    
    // Status color mapping
    const statusStyles: Record<string, string> = {
        "In Progress": "bg-[#f3e8ff] text-[#a855f7]",
        "Completed": "bg-[#ecfdf5] text-[#10b981]",
        "Pending": "bg-[#fff7ed] text-[#f97316]",
        "Flagged": "bg-[#fef2f2] text-[#ef4444]"
    };

    const requestsData = [
        { id: 1, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "In Progress", amount: "₦25,000" },
        { id: 2, date: "25-08-2025", batchId: "REQ-2025-0346", candidate: "Fela Anikulapo", type: "Guarantor", status: "In Progress", amount: "₦25,000" },
        { id: 3, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed", amount: "₦25,000" },
        { id: 4, date: "25-08-2025", batchId: "REQ-2025-0346", candidate: "Fela Anikulapo", type: "Guarantor", status: "Pending", amount: "₦25,000" },
        { id: 5, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed", amount: "₦25,000" },
        { id: 6, date: "25-08-2025", batchId: "REQ-2025-0346", candidate: "Fela Anikulapo", type: "Guarantor", status: "Flagged", amount: "₦25,000" },
        { id: 7, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed", amount: "₦25,000" },
        { id: 8, date: "25-08-2025", batchId: "BATCH-2025-0345", candidate: "50 Candidates", type: "Address, Guarantors", status: "Completed", amount: "₦25,000" },
    ];

    const toggleRow = (id: number) => {
        setSelectedRows(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        setSelectedRows(prev => prev.length === requestsData.length ? [] : requestsData.map(r => r.id));
    };

    const openDetails = (item: any) => {
        // Build the expanded detail object for the panel
        setActiveRequest({
            candidateName: item.candidate,
            dateSubmitted: "June 3, 2025, 9:30 AM",
            requestId: item.batchId,
            status: item.status,
            verificationType: item.type,
            transactionId: "TID-20250603",
            amount: item.amount,
            activities: [
                { time: "July 10, 2025", activity: "Request submitted" },
                { time: "July 11, 2025", activity: "Assigned to Field Officer" },
                { time: "July 12, 2025", activity: item.status === "Flagged" ? "Request Flagged!" : "Verification in Progress", link: item.status === "Flagged" ? "View Request" : undefined },
                { time: "July 13, 2025", activity: "Report Completed.", link: "View" },
            ],
            comment: item.status === "Flagged" ? "Submitted number incomplete; missing last digit." : undefined
        });
    };

    return (
        <section className="flex flex-col gap-6 w-full relative h-full">
            
            <h1 className="text-3xl font-bold text-[#333333]">Requests</h1>

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

            {/* Table */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] overflow-hidden shadow-sm flex-1 mb-20">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f9fafb] border-b border-[#e6e6e7]">
                            <th className="py-4 px-6 w-10">
                                <div 
                                    onClick={toggleAll}
                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedRows.length === requestsData.length ? "bg-[#ff8a63] border-[#ff8a63]" : "bg-white border-[#e6e6e7]"}`}
                                >
                                    {selectedRows.length === requestsData.length && <Check size={14} className="text-white" />}
                                </div>
                            </th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Date Submitted</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Ref/Batch ID</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Candidate Name</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Verification Type</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Status</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Amount</th>
                            <th className="py-4 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e6e6e7]">
                        {requestsData.map((item, index) => (
                            <tr 
                                key={item.id} 
                                className={`hover:bg-gray-50 transition-colors group cursor-pointer ${selectedRows.includes(item.id) ? "bg-[#fffafa]" : ""}`}
                                onClick={() => openDetails(item)}
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
                                <td 
                                    className="py-4 px-4 text-sm text-[#888888] hover:text-[#ff8a63] hover:underline transition-all font-medium"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/dashboard/requests/${item.batchId}`);
                                    }}
                                >
                                    {item.batchId}
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-[#333333]">{item.candidate}</td>
                                <td className="py-4 px-4 text-sm text-[#666666]">{item.type}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-[#333333]">{item.amount}</td>
                                <td className="py-4 px-6 text-right">
                                    <button className="text-[#888888] hover:text-[#333333] transition-colors cursor-pointer p-1 rounded-md hover:bg-gray-100">
                                        <Download size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bulk Selection Bar */}
            {selectedRows.length > 0 && (
                <div className="fixed bottom-10 left-[20%] right-[3%] h-20 bg-[#000000] rounded-[24px] shadow-2xl flex items-center justify-between px-10 animate-in slide-in-from-bottom-5 duration-300 z-30">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#ff8a63] text-white font-bold text-sm px-4 py-1.5 rounded-[8px]">
                            {selectedRows.length}
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">Selected</span>
                    </div>
                    <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-[12px] font-bold text-sm hover:bg-white/20 transition-all border border-white/20">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            )}

            {/* Pagination Footer (Moved into table area for clean layout) */}
            <div className="fixed bottom-0 left-[20%] right-[2%] px-8 py-4 bg-white/80 backdrop-blur-md flex items-center justify-between border-t border-[#e6e6e7] z-20">
                <div className="flex items-center gap-2 text-xs text-[#888888]">
                    <span>Rows per page:</span>
                    <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-[#333333]">
                        <option>10</option>
                        <option>20</option>
                    </select>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-xs text-[#888888] font-medium">1-8 of 13</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1 text-[#bebebe] hover:text-[#333333] transition-colors"><ChevronLeft size={20} /></button>
                        <button className="p-1 text-[#888888] hover:text-[#333333] transition-colors"><ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>

            <RequestDetails 
                isOpen={activeRequest !== null} 
                onClose={() => setActiveRequest(null)} 
                data={activeRequest} 
            />

        </section>
    );
};

export default Request;