import React from "react";
import { X, FileText, Download } from "lucide-react";

interface ProfileReportPanelProps {
    isOpen: boolean;
    onClose: () => void;
    profile: {
        name: string;
        checks: number;
    } | null;
}

const ProfileReportPanel: React.FC<ProfileReportPanelProps> = ({ isOpen, onClose, profile }) => {
    if (!profile) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto flex flex-col`}>
                
                {/* Close Button Top Left (Floating or Header) */}
                <div className="absolute top-6 left-6 z-10">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <X size={20} className="text-[#888888]" />
                    </button>
                </div>

                <div className="p-10 flex flex-col gap-8 flex-1">
                    
                    {/* Header Section */}
                    <div className="flex flex-col gap-1 mt-6">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-[#333333]">{profile.name}</h2>
                            <span className="text-[11px] font-medium text-[#888888] mt-2 italic">Last verified date: 12 August 2025</span>
                        </div>
                        <p className="text-[13px] font-bold text-[#888888]">{profile.checks} Verifications: 1 Address, 5 Guarantors</p>
                    </div>

                    {/* Address Verification Card */}
                    <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-6 flex flex-col gap-6 shadow-sm">
                        <h3 className="text-sm font-bold text-[#333333]">Address Verification</h3>
                        
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-start gap-4">
                                <span className="text-[13px] text-[#888888] font-medium leading-relaxed">Address Submitted</span>
                                <span className="text-[13px] text-[#333333] font-bold text-right max-w-[200px]">10, Chevron road, near market square.</span>
                            </div>

                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Status</span>
                                <span className="px-3 py-1 bg-[#ecfdf5] text-[#10b981] rounded-full text-[10px] font-bold tracking-wide uppercase">Verified</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-[13px] text-[#888888] font-medium">Comments</span>
                                <p className="text-[13px] text-[#333333] font-bold leading-relaxed">
                                    Address verified. Physical visit confirmed residence at 10, Chevron road, near market square.
                                </p>
                            </div>

                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Proof</span>
                                <div className="flex items-center gap-3 bg-[#fcfcfc] border border-[#f2f2f3] px-3 py-2 rounded-lg min-w-[140px]">
                                    <FileText size={14} className="text-[#bebebe]" />
                                    <span className="text-xs text-[#888888] font-bold flex-1">Jpeg_2025</span>
                                    <button className="text-[10px] font-bold text-[#666666] underline hover:text-[#333333]">View File</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guarantor Verification Card */}
                    <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-6 flex flex-col gap-6 shadow-sm">
                        <h3 className="text-sm font-bold text-[#333333]">Guarantor Verification</h3>

                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Guarantor's Name</span>
                                <span className="text-[#333333] font-bold">Promise Thompson</span>
                            </div>

                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Guarantor's Phone number</span>
                                <span className="text-[#333333] font-bold tracking-tight">09057608507</span>
                            </div>

                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Status</span>
                                <span className="px-3 py-1 bg-[#ecfdf5] text-[#10b981] rounded-full text-[10px] font-bold tracking-wide uppercase">Verified</span>
                            </div>

                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#888888] font-medium">Guarantor's Agreement Document</span>
                                <div className="flex items-center gap-3 bg-[#fcfcfc] border border-[#f2f2f3] px-3 py-2 rounded-lg min-w-[140px]">
                                    <FileText size={14} className="text-[#bebebe]" />
                                    <span className="text-xs text-[#888888] font-bold flex-1">Jpeg_2025</span>
                                    <button className="text-[10px] font-bold text-[#666666] underline hover:text-[#333333]">View File</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer with Download Button */}
                <div className="p-6 border-t border-[#e6e6e7] bg-white sticky bottom-0 flex justify-end">
                    <button className="bg-black text-white px-8 py-3 rounded-[12px] font-bold flex items-center gap-2 hover:bg-[#333333] transition-all text-sm tracking-wide">
                        Download Report
                    </button>
                </div>

            </div>
        </>
    );
};

export default ProfileReportPanel;
