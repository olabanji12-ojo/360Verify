import { X, Download } from "lucide-react";

interface Activity {
    time: string;
    activity: string;
    link?: string;
}

interface RequestDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        candidateName: string;
        dateSubmitted: string;
        requestId: string;
        status: string;
        verificationType: string;
        transactionId: string;
        amount: string;
        activities: Activity[];
        comment?: string;
    } | null;
}

const RequestDetails = ({ isOpen, onClose, data }: RequestDetailsProps) => {
    if (!data) return null;

    // Status color mapping (same as Request.tsx for consistency)
    const statusStyles: Record<string, string> = {
        "In Progress": "text-[#a855f7]",
        "Completed": "text-[#10b981]",
        "Pending": "text-[#f97316]",
        "Flagged": "text-[#ef4444]"
    };

    return (
        <>
            {/* Backdrop Overlay */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Side Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#e6e6e7] sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-[#333333]">Request Details</h2>
                    <div className="flex items-center gap-4">
                        <button onClick={onClose} className="flex items-center gap-1.5 text-sm text-[#888888] hover:text-[#333333] transition-colors font-semibold cursor-pointer">
                            <X size={18} />
                            Cancel
                        </button>
                        <button className="flex items-center gap-2 bg-[#000000] text-white px-5 py-2.5 rounded-[12px] text-sm font-bold hover:bg-[#333333] transition-all">
                            <Download size={16} />
                            Export
                        </button>
                    </div>
                </div>

                <div className="p-8 flex flex-col gap-10">
                    
                    {/* Details Grid */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-bold text-[#333333]">Details</h3>
                        <div className="flex flex-col gap-5">
                            <DetailRow label="Candidate Name" value={data.candidateName} />
                            <DetailRow label="Date Submitted" value={data.dateSubmitted} />
                            <DetailRow label="Request ID" value={data.requestId} />
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#888888] font-medium">Status</span>
                                <span className={`font-bold ${statusStyles[data.status]}`}>{data.status}</span>
                            </div>
                            <DetailRow label="Verification Type" value={data.verificationType} />
                            <DetailRow label="Transaction ID" value={data.transactionId} />
                            <DetailRow label="Amount" value={data.amount} />
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-bold text-[#333333]">Activity Log</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[#bebebe] text-[11px] font-bold uppercase tracking-wider border-b border-[#f2f2f3]">
                                    <th className="pb-3 w-1/3">Time</th>
                                    <th className="pb-3">Activity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f2f2f3]">
                                {data.activities.map((act, i) => (
                                    <tr key={i} className="text-sm">
                                        <td className="py-4 text-[#888888]">{act.time}</td>
                                        <td className="py-4 text-[#333333] font-medium">
                                            {act.activity}
                                            {act.link && (
                                                <button className="text-[#ff8a63] hover:underline ml-1 font-bold inline-flex items-center gap-0.5">
                                                    {act.link}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Comments (Only if flagged) */}
                    {data.status === "Flagged" && data.comment && (
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold text-[#333333]">Comments</h3>
                            <div className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[16px] p-5">
                                <p className="text-sm text-[#666666] leading-relaxed italic">
                                    "{data.comment}"
                                </p>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-[#888888] font-medium">{label}</span>
        <span className="text-[#333333] font-bold">{value}</span>
    </div>
);

export default RequestDetails;
