import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Info, FileText, Download, UploadCloud, PlusCircle } from "lucide-react";
import ShareCard from "./ShareCard";
import SuccessModal from "../../shared/SuccessModal";

const VerifyGuarantor = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section className="flex flex-col gap-6 relative">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-[#888888]">
                <span>Dashboard</span>
                <ChevronRight size={14} />
                <span>New Verification</span>
                <ChevronRight size={14} />
                <span className="text-[#ff8a63] font-medium">Verify Guarantors</span>
            </div>

            {/* Header Area */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-[#333333]">Verify Guarantors</h1>
                <p className="text-[#666666] text-sm max-w-[500px] leading-relaxed">
                    Validate guarantor details and references to confirm reliability and support informed hiring decisions.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex gap-6 items-start w-full">
                
                {/* Left Side: The Form Card */}
                <div className="w-[596px] bg-white border border-[#e6e6e7] rounded-[24px] p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        {/* Candidate Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#333333] font-bold text-sm">Candidate's Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Full Name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Guarantor Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#333333] font-bold text-sm">Guarantor's Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Full Name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Row: Phone & Relationship */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#333333] font-bold text-sm">Guarantor's Phone Number</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bebebe] text-sm">+234 |</span>
                                    <input 
                                        type="text" 
                                        className="w-full border border-[#e6e6e7] rounded-[12px] h-12 pl-16 pr-4 focus:outline-none focus:border-[#ff8a63] transition-colors text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[#333333] font-bold text-sm">Relationship to candidate</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g Mentor" 
                                    className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                                />
                            </div>
                        </div>

                        {/* Agreement Document Section */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <label className="text-[#333333] font-bold text-sm">Guarantor's Agreement Document</label>
                                <Info size={16} className="text-[#888888]" />
                            </div>
                            
                            {/* Download Template Row */}
                            <div className="flex items-center justify-between p-4 border border-[#e6e6e7] rounded-[12px] bg-[#fcfcfc]">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <FileText size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-[#333333]">Guarantor's form</span>
                                </div>
                                <button type="button" className="flex items-center gap-1.5 text-xs text-[#666666] hover:text-[#333333] transition-colors font-semibold">
                                    <Download size={14} />
                                    Download
                                </button>
                            </div>

                            {/* Dropzone Area */}
                            <div className="border-2 border-dashed border-[#e6e6e7] rounded-[16px] p-8 flex flex-col items-center justify-center gap-3 bg-[#fcfcfc] hover:border-[#ff8a63] transition-colors group cursor-pointer">
                                <div className="bg-[#f2f2f3] p-3 rounded-full text-[#888888] group-hover:text-[#ff8a63] transition-colors">
                                    <UploadCloud size={24} />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-semibold text-[#333333]">
                                        <span className="text-[#ff8a63] underline">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-[#bebebe] mt-1 font-medium">
                                        (PDF, JPG, PNG, tiff or HEIC maximum 10mb)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Add more input */}
                        <button type="button" className="flex items-center gap-2 text-[#ff8a63] font-bold text-sm hover:text-[#de582c] transition-colors w-fit mt-2">
                            <PlusCircle size={20} />
                            Add more input
                        </button>

                        {/* Submit */}
                        <button 
                            type="submit"
                            className="w-full bg-[#ff8a63] text-white font-bold h-14 rounded-[16px] hover:bg-[#de582c] transition-all shadow-md mt-4 cursor-pointer"
                        >
                            Submit
                        </button>

                    </form>
                </div>

                {/* Right Side: Reusable ShareCard */}
                <ShareCard />

            </div>

            {/* Success Modal */}
            <SuccessModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Request Submitted"
                message="Your guarantor verification request has been submitted successfully. You can track its progress anytime in the Requests menu."
                buttonText="Go to Requests"
                onButtonClick={() => navigate("/dashboard/preview-request")}
            />

        </section>
    );
};

export default VerifyGuarantor;
