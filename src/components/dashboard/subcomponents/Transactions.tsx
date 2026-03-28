import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Check } from "lucide-react";

const Transactions = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const stats = [
        { label: "Balance Due", value: "₦150,000", action: "Pay now" },
        { label: "Upfront Payment (%)", value: "70" },
        { label: "Pending Transactions", value: "3" },
        { label: "Completed Transactions", value: "50" }
    ];

    const transactionData = [
        { id: 1, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "SV-2025-001", amount: "₦25,000", status: "Pending", balanceDue: "₦25,000" },
        { id: 2, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "BV-2025-045", amount: "₦25,000", status: "Completed", balanceDue: "-" },
        { id: 3, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "SV-2025-001", amount: "₦25,000", status: "Pending", balanceDue: "₦25,000" },
        { id: 4, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "BV-2025-045", amount: "₦25,000", status: "Completed", balanceDue: "-" },
        { id: 5, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "SV-2025-001", amount: "₦25,000", status: "Completed", balanceDue: "-" },
        { id: 6, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "BV-2025-045", amount: "₦25,000", status: "Pending", balanceDue: "₦25,000" },
        { id: 7, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "SV-2025-001", amount: "₦25,000", status: "Completed", balanceDue: "-" },
        { id: 8, date: "25-08-2025", transactionId: "TID-2025-0345", batchId: "BV-2025-045", amount: "₦25,000", status: "Completed", balanceDue: "-" },
    ];

    const toggleRow = (id: number) => {
        setSelectedRows(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        setSelectedRows(prev => prev.length === transactionData.length ? [] : transactionData.map(r => r.id));
    };

    return (
        <section className="flex flex-col gap-8 w-full relative mb-20 font-Outfit">
            <h1 className="text-3xl font-bold text-[#333333]">Transactions</h1>

            {/* Summary Stats Cards */}
            <div className="grid grid-cols-4 bg-white border border-[#e6e6e7] rounded-[24px] p-6 shadow-sm">
                {stats.map((stat, index) => (
                    <div key={index} className={`flex flex-col gap-2 px-6 ${index !== stats.length - 1 ? "border-r border-[#f2f2f3]" : ""}`}>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] font-medium text-[#888888]">{stat.label}</span>
                            {stat.action && (
                                <button className="bg-[#333333] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-black transition-colors">
                                    {stat.action}
                                </button>
                            )}
                        </div>
                        <span className="text-2xl font-bold text-[#333333]">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Search and Filter */}
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
                    Filter
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f9fafb] border-b border-[#e6e6e7]">
                            <th className="py-4 px-6 w-10">
                                <div 
                                    onClick={toggleAll}
                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedRows.length === transactionData.length ? "bg-[#ff8a63] border-[#ff8a63]" : "bg-white border-[#e6e6e7]"}`}
                                >
                                    {selectedRows.length === transactionData.length && <Check size={14} className="text-white" />}
                                </div>
                            </th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Date</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Transaction ID</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Batch ID</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Amount</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Status</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Balance Due</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e6e6e7]">
                        {transactionData.map((item) => (
                            <tr key={item.id} className={`hover:bg-gray-50 transition-colors group ${selectedRows.includes(item.id) ? "bg-[#fffafa]" : ""}`}>
                                <td className="py-4 px-6 w-10">
                                    <div 
                                        onClick={() => toggleRow(item.id)}
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedRows.includes(item.id) ? "bg-[#ff8a63] border-[#ff8a63]" : "bg-white border-[#e6e6e7]"}`}
                                    >
                                        {selectedRows.includes(item.id) && <Check size={14} className="text-white" />}
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-sm text-[#666666]">{item.date}</td>
                                <td className="py-4 px-4 text-sm font-medium text-[#333333]">{item.transactionId}</td>
                                <td className="py-4 px-4 text-sm text-[#888888] font-medium italic">{item.batchId}</td>
                                <td className="py-4 px-4 text-sm font-semibold text-[#333333]">{item.amount}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                        item.status === "Completed" ? "bg-[#ecfdf5] text-[#10b981]" : "bg-[#fff7ed] text-[#fb923c]"
                                    }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-[#888888]">{item.balanceDue}</td>
                                <td className="py-4 px-4">
                                    {item.status === "Pending" ? (
                                        <button className="bg-[#333333] text-white text-[11px] font-bold px-6 py-2 rounded-lg hover:bg-black transition-all">
                                            Pay now
                                        </button>
                                    ) : (
                                        <button className="bg-[#f2f2f3] text-[#bebebe] text-[11px] font-bold px-8 py-2 rounded-lg cursor-not-allowed">
                                            Paid
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="fixed bottom-0 left-[18%] right-[0%] px-10 py-6 bg-white/80 backdrop-blur-md flex items-center justify-between border-t border-[#e6e6e7] z-20">
                <div className="flex items-center gap-2 text-xs text-[#888888]">
                    <span>Rows per page:</span>
                    <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-[#333333]">
                        <option>10</option>
                    </select>
                </div>
                <div className="flex items-center gap-6 mr-10">
                    <span className="text-xs text-[#888888] font-medium">1-8 of 13</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1 text-[#bebebe] hover:text-[#333333] transition-colors"><ChevronLeft size={20} /></button>
                        <button className="p-1 text-[#888888] hover:text-[#333333] transition-colors"><ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transactions;
