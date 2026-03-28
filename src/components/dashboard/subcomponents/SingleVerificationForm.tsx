import { useState } from "react";
import { Plus, ChevronDown, Download, X, Upload } from "lucide-react";

type VerificationType = "Address Verification" | "Guarantor's Verification" | "Education and Transcript Verification";

interface VerificationSection {
    id: string;
    type: VerificationType | "";
}

const SingleVerificationForm = () => {
    const [sections, setSections] = useState<VerificationSection[]>([{ id: "1", type: "Address Verification" }]);

    const addSection = () => {
        setSections([...sections, { id: Math.random().toString(), type: "" }]);
    };

    const removeSection = (id: string) => {
        setSections(sections.filter(s => s.id !== id));
    };

    const updateSectionType = (id: string, type: VerificationType) => {
        setSections(sections.map(s => s.id === id ? { ...s, type } : s));
    };

    return (
        <section className="flex flex-col gap-8 w-full font-Outfit mb-20 animate-in fade-in duration-500 px-4 lg:px-0">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-[#333333]">Single Verification</h1>
                <p className="text-[#888888] text-[14px] lg:text-[15px] font-medium max-w-[800px]">
                    Verify one individual at a time by selecting one or more checks (e.g., address, guarantor) and tracking their results.
                </p>
            </div>

            {/* Main Form Card */}
            <div className="bg-white border border-[#e6e6e7] rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 shadow-sm flex flex-col gap-8 lg:gap-10">
                {/* Basic Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-8">
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[14px] lg:text-[15px] font-bold text-[#333333]">First Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter First Name"
                            className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[14px] lg:text-[15px] font-bold text-[#333333]">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Last Name"
                            className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[14px] lg:text-[15px] font-bold text-[#333333]">Alias</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name"
                            className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[14px] lg:text-[15px] font-bold text-[#333333]">Phone Number</label>
                        <input 
                            type="text" 
                            placeholder="+234 |"
                            className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]"
                        />
                    </div>
                </div>

                {/* Dynamic Sections */}
                {sections.map((section, index) => (
                    <div key={section.id} className="border border-[#e6f0ff] bg-[#f9fbff]/30 rounded-[20px] lg:rounded-[24px] p-5 lg:p-8 flex flex-col gap-6 lg:gap-8 relative group">
                        {index > 0 && (
                            <button 
                                onClick={() => removeSection(section.id)}
                                className="absolute right-4 top-4 lg:right-6 lg:top-6 text-[#bebebe] hover:text-red-500 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        )}

                        {/* Type Selector */}
                        <div className="relative">
                            <select 
                                value={section.type}
                                onChange={(e) => updateSectionType(section.id, e.target.value as VerificationType)}
                                className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 appearance-none focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-bold cursor-pointer pr-12"
                            >
                                <option value="" disabled>Select Verification Type</option>
                                <option value="Address Verification">Address Verification</option>
                                <option value="Guarantor's Verification">Guarantor's Verification</option>
                                <option value="Education and Transcript Verification">Education and Transcript Verification</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#bebebe] pointer-events-none" size={18} />
                        </div>

                        {/* Conditional Fields: Address */}
                        {section.type === "Address Verification" && (
                            <div className="grid grid-cols-1 gap-5 lg:gap-6 animate-in slide-in-from-top-2 duration-300">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter address"
                                        className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium"
                                    />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Landmark</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter landmark"
                                        className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 lg:px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Conditional Fields: Guarantor */}
                        {section.type === "Guarantor's Verification" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-8 animate-in slide-in-from-top-2 duration-300">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Guarantor's First Name</label>
                                    <input type="text" placeholder="Enter First Name" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 focus:outline-none" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 focus:outline-none" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Guarantor's Phone Number</label>
                                    <input type="text" placeholder="+234 |" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 focus:outline-none" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[14px] font-bold text-[#666666]">Relationship with Candidate</label>
                                    <input type="text" placeholder="Enter relationship" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-12 lg:h-14 px-5 focus:outline-none" />
                                </div>
                                <div className="lg:col-span-2">
                                    <label className="text-[14px] font-bold text-[#666666] flex items-center gap-1.5 mb-3 lg:mb-4">
                                        Guarantor's Agreement Document
                                        <div className="w-4 h-4 rounded-full border border-[#bebebe] flex items-center justify-center text-[10px] text-[#bebebe]">i</div>
                                    </label>
                                    
                                    <div className="flex flex-col gap-5 lg:gap-6">
                                        <div className="flex items-center justify-between bg-white border border-[#f2f2f3] rounded-xl lg:rounded-2xl p-4 lg:p-5 w-full">
                                            <div className="flex items-center gap-3 lg:gap-4">
                                                <div className="bg-[#e6f0ff] p-2 lg:p-2.5 rounded-lg lg:rounded-xl">
                                                    <Download className="text-[#3b82f6]" size={16} />
                                                </div>
                                                <span className="text-[13px] lg:text-[14px] font-bold text-[#333333]">Guarantor's form</span>
                                            </div>
                                            <button className="flex items-center gap-1.5 text-[#888888] text-[11px] lg:text-xs font-bold hover:text-[#333333]">
                                                <Download size={14} />
                                                Download
                                            </button>
                                        </div>

                                        <div className="border-2 border-dashed border-[#f2f2f3] rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 flex flex-col items-center justify-center gap-4 bg-[#fafafa] hover:border-[#ff895d] transition-all cursor-pointer group/upload">
                                            <div className="bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-sm group-hover/upload:scale-110 transition-transform">
                                                <Upload className="text-[#bebebe] group-hover/upload:text-[#ff895d] lg:hidden" size={24} />
                                                <Upload className="text-[#bebebe] group-hover/upload:text-[#ff895d] hidden lg:block" size={32} />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xs lg:text-sm font-bold text-[#333333]">Click to upload <span className="text-[#888888] font-medium">or drag and drop</span></p>
                                                <p className="text-[10px] lg:text-[11px] text-[#bebebe] mt-1">(PDF, JPG, PNG maximum 10mb)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 text-[#ff895d] text-sm font-bold mt-5 lg:mt-6 hover:underline">
                                        <Plus size={16} />
                                        Add more input
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Footer Buttons */}
                <div className="flex flex-col gap-6 lg:gap-8 mt-4">
                    <button 
                        onClick={addSection}
                        className="flex items-center gap-3 text-[#ff895d] font-bold text-[15px] lg:text-base hover:opacity-80 transition-opacity w-full lg:w-fit justify-center lg:justify-start"
                    >
                        <div className="w-6 h-6 rounded-full border-2 border-[#ff895d] flex items-center justify-center">
                            <Plus size={14} strokeWidth={3} />
                        </div>
                        Add verification
                    </button>

                    <button className="w-full bg-[#ff895d] text-white h-14 lg:h-16 rounded-[20px] font-bold text-base lg:text-lg shadow-xl shadow-[#ff895d]/20 hover:bg-[#ff7a45] transition-all active:scale-[0.98]">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SingleVerificationForm;
