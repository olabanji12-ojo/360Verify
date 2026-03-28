import React from "react";
import { X, Download, FileText } from "lucide-react";

interface ReportDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        candidateName: string;
        dateSubmitted: string;
        requestId: string;
        status: string;
        verificationType: string;
        comment: string;
    } | null;
}

const ReportDetails: React.FC<ReportDetailsProps> = ({ isOpen, onClose, data }) => {
    if (!data) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
                
                <div className="flex items-center justify-between p-6 border-b border-[#e6e6e7] sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-[#333333]">Report Details</h2>
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
                    
                    {/* Details Container */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-bold text-[#333333]">Details</h3>
                        <div className="flex flex-col gap-5">
                            <DetailRow label="Candidate Name" value={data.candidateName} />
                            <DetailRow label="Date Submitted" value={data.dateSubmitted} />
                            <DetailRow label="Request ID" value={data.requestId} />
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#888888] font-medium">Status</span>
                                <span className={`font-bold px-3 py-1 rounded-full text-[10px] uppercase ${data.status === 'Verified' ? 'bg-[#ecfdf5] text-[#10b981]' : 'bg-[#f3f4f6] text-[#6b7280]'}`}>
                                    {data.status}
                                </span>
                            </div>
                            <DetailRow label="Verification Type" value={data.verificationType} />
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-[#333333]">Comments</h3>
                        <div className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[16px] p-5">
                            <p className="text-sm text-[#666666] leading-relaxed">
                                {data.comment}
                            </p>
                        </div>
                    </div>

                    {/* Proof (Only if verified) */}
                    {data.status === "Verified" && (
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold text-[#333333]">Proof</h3>
                            <div className="flex items-center justify-between p-4 bg-[#fcfcfc] border border-[#f2f2f3] rounded-[12px]">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#f2f2f3] p-1.5 rounded-lg text-[#bebebe]">
                                        <FileText size={18} />
                                    </div>
                                    <span className="text-sm text-[#888888]">Guarantor_agreement</span>
                                </div>
                                <button className="text-[11px] font-bold text-[#666666] hover:text-[#333333] transition-colors underline">View File</button>
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

export default ReportDetails;
