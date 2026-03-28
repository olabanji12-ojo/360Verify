import React, { useState } from "react";
import { User, Users, X, Upload, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewVerification = () => {
    const navigate = useNavigate();
    const [showBatchModal, setShowBatchModal] = useState(false);
    const [batchStep, setBatchStep] = useState<"select" | "upload">("select");
    const [batchMode, setBatchMode] = useState<"manual" | "csv">("manual");

    const handleSingleVerification = () => {
        navigate("/dashboard/single-verification");
    };

    const openBatchModal = () => {
        setBatchStep("select");
        setBatchMode("manual");
        setShowBatchModal(true);
    };

    const handleBatchConfirm = () => {
        if (batchStep === "select") {
            if (batchMode === "manual") {
                navigate("/dashboard/batch-verification");
                setShowBatchModal(false);
            } else {
                setBatchStep("upload");
            }
        } else {
            // Upload logic would go here
            setShowBatchModal(false);
        }
    };

    return (
        <section className="flex flex-col gap-12 font-Outfit relative h-full mb-20 animate-in fade-in duration-500">
            {/* Header Text */}
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-extrabold text-[#333333]">Select your verification type.</h1>
                <p className="text-[#888888] text-base font-medium max-w-[600px] leading-relaxed">
                    Choose the verification type that best fits your needs to confirm identities and get started.
                </p>
            </div>

            {/* Verification Cards Grid */}
            <div className="grid grid-cols-2 gap-10 w-full max-w-[1240px] mt-4">
                {/* Single Verification Card */}
                <div 
                    onClick={handleSingleVerification}
                    className="bg-[#ff895d] rounded-[48px] p-16 flex flex-col items-center justify-center text-center gap-8 cursor-pointer hover:shadow-2xl hover:shadow-[#ff895d]/30 hover:-translate-y-2 transition-all group min-h-[500px] border-4 border-transparent hover:border-white/20"
                >
                    <div className="bg-white/20 p-8 rounded-[32px] group-hover:scale-110 transition-transform duration-500">
                        <User size={80} className="text-white" strokeWidth={1.2} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-extrabold text-white">Single Verification</h2>
                        <p className="text-white/90 text-[15px] font-medium max-w-[360px] leading-relaxed">
                            Verify one individual at a time by selecting one or more checks (e.g., address, guarantor) and tracking their results.
                        </p>
                    </div>
                </div>

                {/* Batch Verification Card */}
                <div 
                    onClick={openBatchModal}
                    className="bg-[#ff895d] rounded-[48px] p-16 flex flex-col items-center justify-center text-center gap-8 cursor-pointer hover:shadow-2xl hover:shadow-[#ff895d]/30 hover:-translate-y-2 transition-all group min-h-[500px] border-4 border-transparent hover:border-white/20"
                >
                    <div className="bg-white/20 p-8 rounded-[32px] group-hover:scale-110 transition-transform duration-500">
                        <Users size={80} className="text-white" strokeWidth={1.2} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-extrabold text-white">Batch Verification</h2>
                        <p className="text-white/90 text-[15px] font-medium max-w-[360px] leading-relaxed">
                            Verify multiple individuals at once by uploading their details, assigning checks, and tracking all results in a single view.
                        </p>
                    </div>
                </div>
            </div>

            {/* Batch Verification Modal */}
            {showBatchModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center animate-in fade-in duration-300">
                    <div className="bg-white rounded-[40px] w-full max-w-[550px] p-12 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-in zoom-in-95 duration-300">
                        <button 
                            onClick={() => setShowBatchModal(false)}
                            className="absolute right-10 top-10 text-[#bebebe] hover:text-[#333333] transition-colors p-2 rounded-full hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>

                        {batchStep === "select" ? (
                            <div className="flex flex-col gap-12 mt-4">
                                <h3 className="text-2xl font-extrabold text-[#333333]">Batch Verification</h3>
                                <div className="flex flex-col gap-8">
                                    <label className="flex items-center gap-5 cursor-pointer group" onClick={() => setBatchMode("manual")}>
                                        <div className={`w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center ${batchMode === "manual" ? "border-[#ff895d]" : "border-[#e6e6e7] group-hover:border-[#ff895d]"}`}>
                                            {batchMode === "manual" && <div className="w-3 h-3 bg-[#ff895d] rounded-full" />}
                                        </div>
                                        <span className={`text-[17px] font-bold transition-colors ${batchMode === "manual" ? "text-[#333333]" : "text-[#bebebe] group-hover:text-[#333333]"}`}>Input Manually</span>
                                    </label>
                                    <label className="flex items-center gap-5 cursor-pointer group" onClick={() => setBatchMode("csv")}>
                                        <div className={`w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center ${batchMode === "csv" ? "border-[#ff895d]" : "border-[#e6e6e7] group-hover:border-[#ff895d]"}`}>
                                            {batchMode === "csv" && <div className="w-3 h-3 bg-[#ff895d] rounded-full" />}
                                        </div>
                                        <span className={`text-[17px] font-bold transition-colors ${batchMode === "csv" ? "text-[#333333]" : "text-[#bebebe] group-hover:text-[#333333]"}`}>Use <span className="underline decoration-[#ff895d] underline-offset-4 font-extrabold text-[#333333]">CSV Template</span></span>
                                    </label>
                                </div>
                                <div className="flex gap-5 mt-4">
                                    <button onClick={() => setShowBatchModal(false)} className="flex-1 border-2 border-[#f2f2f3] py-5 rounded-[20px] font-bold text-[#888888] hover:bg-gray-50 transition-all text-[15px]">Cancel</button>
                                    <button onClick={handleBatchConfirm} className="flex-1 bg-[#111111] text-white py-5 rounded-[20px] font-bold hover:bg-black transition-all shadow-lg text-[15px]">Confirm</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-12 mt-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-extrabold text-[#333333]">Verify Multiple Candidates</h3>
                                    <p className="text-[15px] font-medium text-[#888888]">Upload your candidate list to verify multiple candidates at once.</p>
                                </div>
                                
                                <div className="flex flex-col gap-8">
                                    <div className="flex items-center justify-between bg-[#fcfcfc] border border-[#f2f2f3] rounded-[24px] p-6">
                                        <div className="flex items-center gap-5">
                                            <div className="bg-[#e6f0ff] p-3 rounded-2xl">
                                                <Upload className="text-[#3b82f6]" size={24} />
                                            </div>
                                            <span className="text-[15px] font-bold text-[#333333]">CSV Template</span>
                                        </div>
                                        <button className="flex items-center gap-2 text-[#888888] text-sm font-bold hover:text-[#333333] hover:underline transition-all">
                                            <Download size={16} />
                                            Download
                                        </button>
                                    </div>

                                    <div className="border-3 border-dashed border-[#f2f2f3] rounded-[40px] p-16 flex flex-col items-center justify-center gap-6 bg-[#fafafa] hover:border-[#ff895d] hover:bg-[#fffafa] transition-all cursor-pointer group">
                                        <div className="bg-white p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                            <Upload className="text-[#bebebe] group-hover:text-[#ff895d]" size={40} strokeWidth={1.5} />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[15px] font-bold text-[#333333]">Click to upload <span className="text-[#888888] font-medium">or drag and drop</span></p>
                                            <p className="text-xs text-[#bebebe] mt-2 font-medium">(PDF, JPG, PNG, tiff or HEIC maximum 10mb)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-5 mt-4">
                                    <button onClick={() => setBatchStep("select")} className="flex-1 border-2 border-[#f2f2f3] py-5 rounded-[20px] font-bold text-[#888888] hover:bg-gray-50 transition-all text-[15px]">Cancel</button>
                                    <button onClick={() => setShowBatchModal(false)} className="flex-1 bg-[#111111] text-white py-5 rounded-[20px] font-bold hover:bg-black transition-all shadow-lg text-[15px]">Confirm</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default NewVerification;
