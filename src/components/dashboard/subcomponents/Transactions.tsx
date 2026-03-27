import React, { useState } from "react";
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Check } from "lucide-react";

const Transactions = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const transactionData = [
        { id: 1, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0345", type: "Address", status: "Completed", amount: "₦25,000" },
        { id: 2, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 3, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 4, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 5, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 6, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 7, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { id: 8, date: "25-08-2025", transactionId: "TID-2025-0345", referenceId: "REQ-2025-0346", type: "Guarantor", status: "Completed", amount: "₦25,000" },
    ];

    const toggleRow = (id: number) => {
        setSelectedRows(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        setSelectedRows(prev => prev.length === transactionData.length ? [] : transactionData.map(r => r.id));
    };

    return (
        <section className="flex flex-col gap-6 w-full relative">
            <h1 className="text-3xl font-bold text-[#333333]">Transactions</h1>

            {/* Filters */}
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

            {/* Table */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] overflow-hidden shadow-sm mb-20">
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
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Reference ID</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Verification Type</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Status</th>
                            <th className="py-4 px-4 text-xs font-bold text-[#888888] uppercase tracking-wider">Amount</th>
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
                                <td className="py-4 px-4 text-sm text-[#888888]">{item.referenceId}</td>
                                <td className="py-4 px-4 text-sm text-[#666666]">{item.type}</td>
                                <td className="py-4 px-4">
                                    <span className="px-3 py-1 bg-[#ecfdf5] text-[#10b981] rounded-full text-[11px] font-bold">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-[#333333]">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="fixed bottom-0 left-[20%] right-[2%] px-8 py-4 bg-white/80 backdrop-blur-md flex items-center justify-between border-t border-[#e6e6e7] z-20">
                <div className="flex items-center gap-2 text-xs text-[#888888]">
                    <span>Rows per page:</span>
                    <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-[#333333]">
                        <option>10</option>
                    </select>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-xs text-[#888888] font-medium">1-8 of 13</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1 text-[#bebebe]"><ChevronLeft size={20} /></button>
                        <button className="p-1 text-[#888888]"><ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Transactions;
