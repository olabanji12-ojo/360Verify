import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ShareCard from "./ShareCard";
import SuccessModal from "../../shared/SuccessModal";

const VerifyAddress = () => {
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
                <span className="text-[#ff8a63] font-medium">Verify Address</span>
            </div>

            {/* Header Area */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-[#333333]">Verify Address</h1>
                <p className="text-[#666666] text-sm max-w-[500px] leading-relaxed">
                    Confirm residential address through physical verification to ensure accuracy and authenticity.
                </p>
            </div>

            {/* Main Content: Form + Side Card */}
            <div className="flex gap-6 items-start w-full">
                
                {/* Left Side: The Form Card */}
                <div className="w-[596px] h-[616px] bg-white border border-[#e6e6e7] rounded-[24px] p-7 shadow-sm">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4">
                        
                        {/* Row 1 */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#333333] font-bold text-sm">First Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter First Name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#333333] font-bold text-sm">Last Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Last Name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#333333] font-bold text-sm">Alias</label>
                            <input 
                                type="text" 
                                placeholder="Enter Name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 relative">
                            <label className="text-[#333333] font-bold text-sm">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bebebe] text-sm font-medium">+234 |</span>
                                <input 
                                    type="text" 
                                    className="w-full border border-[#e6e6e7] rounded-[12px] h-12 pl-16 pr-4 focus:outline-none focus:border-[#ff8a63] transition-colors text-sm"
                                />
                            </div>
                        </div>

                        {/* Row 3 - Full Width */}
                        <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-[#333333] font-bold text-sm">Flat/House Number</label>
                            <input 
                                type="text" 
                                placeholder="Enter flat/house number" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Row 4 - Full Width */}
                        <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-[#333333] font-bold text-sm">Street Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter street name" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Row 5 - Full Width */}
                        <div className="flex flex-col gap-1.5 col-span-2">
                            <label className="text-[#333333] font-bold text-sm">Landmark</label>
                            <input 
                                type="text" 
                                placeholder="Enter landmark" 
                                className="w-full border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#ff8a63] transition-colors placeholder:text-[#bebebe] text-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 mt-2">
                            <button 
                                type="submit"
                                className="w-full bg-[#ff8a63] text-white font-bold h-14 rounded-[16px] hover:bg-[#de582c] transition-colors shadow-sm text-base cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>

                {/* Right Side: Reusable ShareCard */}
                <ShareCard />

            </div>

            {/* Success Modal Overlay */}
            <SuccessModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Request Submitted"
                message="Your address verification request has been submitted successfully, and your payment was confirmed. You can track its progress anytime in the Requests menu."
                buttonText="Go to Requests"
                onButtonClick={() => navigate("/dashboard/preview-request")}
            />

        </section>
    );
};

export default VerifyAddress;