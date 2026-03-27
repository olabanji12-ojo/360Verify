import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const PreviewRequest = () => {
    
    // Simulating the high-fidelity data from the screenshot
    const requests = [
        { name: "Adeyemi Quadri", phone: "08031112222", alias: "Ade", address: "12, Adeola Street, near Market Square", type: "Address", status: "Completed", amount: "₦25,000" },
        { name: "Fela Anikulapo", phone: "08031112222", alias: "Laan", address: "12, Adeola Street, near Market Square", type: "Guarantor", status: "In Progress", amount: "₦25,000" },
        { name: "Fela Anikulapo", phone: "08031112222", alias: "Laan", address: "12, Adeola Street, near Market Square", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { name: "Fela Anikulapo", phone: "08031112222", alias: "Laan", address: "12, Adeola Street, near Market Square", type: "Guarantor", status: "Pending", amount: "₦25,000" },
        { name: "Fela Anikulapo", phone: "08031112222", alias: "Laan", address: "12, Adeola Street, near Market Square", type: "Guarantor", status: "Completed", amount: "₦25,000" },
        { name: "Fela Anikulapo", phone: "08031112222", alias: "Laan", address: "12, Adeola Street, near Market Square", type: "Guarantor", status: "Flagged", amount: "₦25,000" },
    ];

    // Status styling object - Clean and Scalable
    const statusStyles: { [key: string]: string } = {
        "Completed": "bg-[#e7f9f0] text-[#42c68e] border-[#42c68e]/10",
        "In Progress": "bg-[#f4ebff] text-[#9b51e0] border-[#9b51e0]/10",
        "Pending": "bg-[#fff7ed] text-[#f97316] border-[#f97316]/10",
        "Flagged": "bg-[#fef2f2] text-[#ef4444] border-[#ef4444]/10"
    };

    return (
        <section className="flex flex-col gap-6">
            
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#333333]">Preview Request</h1>
            </div>

            {/* Main Table Container */}
            <div className="bg-white border border-[#e6e6e7] rounded-[20px] overflow-hidden shadow-sm flex flex-col">
                
                {/* Table Area */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead className="bg-[#fcfcfc] border-b border-[#e6e6e7]">
                            <tr>
                                <th className="px-6 py-4 w-10">
                                    <input type="checkbox" className="w-4 h-4 accent-[#ff8a63] cursor-pointer" />
                                </th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Candidate Name</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Phone Number</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Alias</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Address</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Verification Type</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap uppercase tracking-wider text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {requests.map((req, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <input type="checkbox" className="w-4 h-4 accent-[#ff8a63] cursor-pointer" />
                                    </td>
                                    <td className="px-6 py-5 text-[#333333] text-sm font-medium">{req.name}</td>
                                    <td className="px-6 py-5 text-[#666666] text-sm">{req.phone}</td>
                                    <td className="px-6 py-5 text-[#666666] text-sm">{req.alias}</td>
                                    <td className="px-6 py-5 text-[#666666] text-sm truncate max-w-[200px]" title={req.address}>{req.address}</td>
                                    <td className="px-6 py-5 text-[#666666] text-sm">{req.type}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border ${statusStyles[req.status]}`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-[#333333] text-sm font-bold text-right">{req.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer / Pagination */}
                <div className="px-6 py-4 border-t border-[#e6e6e7] flex items-center justify-end gap-10">
                    <div className="flex items-center gap-3 text-sm text-[#666666]">
                        <span>Rows per page:</span>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333] transition-colors">
                            <span className="font-bold">10</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    <div className="text-sm text-[#666666]">
                        <span className="font-bold text-[#333333]">1-5</span> of <span className="font-bold text-[#333333]">13</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[#cccccc] hover:text-[#333333] transition-colors cursor-pointer">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="text-[#333333] hover:text-[#ff8a63] transition-colors cursor-pointer">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default PreviewRequest;