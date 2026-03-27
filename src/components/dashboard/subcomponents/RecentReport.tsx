import { Download } from "lucide-react";

const RecentReport = () => {
    
    // Simulating the data from the screenshot
    const reports = [
        {
            date: "25-08-2025",
            id: "REQ-2025-0345",
            candidate: "Adeyemi Quadri",
            type: "Address",
            status: "Completed"
        },
        {
            date: "25-08-2025",
            id: "REQ-2025-0346",
            candidate: "Fela Anikulapo",
            type: "Guarantor",
            status: "Completed"
        }
    ];

    return (
        <section className="bg-white border border-[#e6e6e7] rounded-[20px] overflow-hidden shadow-sm">
            
            {/* Table Header Area */}
            <div className="px-6 py-5 flex items-center justify-between border-b border-[#e6e6e7]">
                <h2 className="text-[#333333] font-bold text-lg">Recent Reports</h2>
                <button className="text-[#ff8a63] text-sm font-medium hover:underline cursor-pointer">
                    View all reports
                </button>
            </div>

            {/* Table Content Area */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#fcfcfc] border-b border-[#e6e6e7]">
                        <tr>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap">Date Submitted</th>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap">Request ID</th>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap">Candidate Name</th>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap">Verification Type</th>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap">Status</th>
                            <th className="px-6 py-4 text-[#888888] font-medium text-xs whitespace-nowrap"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {reports.map((report, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-5 text-[#666666] text-sm">{report.date}</td>
                                <td className="px-6 py-5 text-[#666666] text-sm font-medium">{report.id}</td>
                                <td className="px-6 py-5 text-[#333333] text-sm font-medium">{report.candidate}</td>
                                <td className="px-6 py-5 text-[#666666] text-sm">{report.type}</td>
                                <td className="px-6 py-5">
                                    <span className="bg-[#e7f9f0] text-[#42c68e] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#42c68e]/10">
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <button className="p-2 hover:bg-[#ff8a63]/10 rounded-lg transition-colors cursor-pointer group-hover:block">
                                        <Download className="w-4 h-4 text-[#666666] group-hover:text-[#ff8a63]" />
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