import React, { useState } from "react";
import { Plus, X, ChevronDown, Download, Upload, UserPlus } from "lucide-react";

type VerificationType = "Address Verification" | "Guarantor's Verification" | "Education and Transcript Verification";

interface VerificationEntry {
    id: string;
    type: VerificationType | "";
}

interface CandidateEntry {
    id: string;
    firstName: string;
    lastName: string;
    alias: string;
    phone: string;
    verifications: VerificationEntry[];
}

const BatchVerificationForm = () => {
    const [candidates, setCandidates] = useState<CandidateEntry[]>([
        { 
            id: "1", 
            firstName: "", 
            lastName: "", 
            alias: "", 
            phone: "", 
            verifications: [{ id: "v1", type: "Address Verification" }] 
        }
    ]);

    const addCandidate = () => {
        setCandidates([
            ...candidates,
            { 
                id: Math.random().toString(), 
                firstName: "", 
                lastName: "", 
                alias: "", 
                phone: "", 
                verifications: [{ id: Math.random().toString(), type: "" }] 
            }
        ]);
    };

    const removeCandidate = (id: string) => {
        if (candidates.length > 1) {
            setCandidates(candidates.filter(c => c.id !== id));
        }
    };

    const addVerification = (candidateId: string) => {
        setCandidates(candidates.map(c => {
            if (c.id === candidateId) {
                return {
                    ...c,
                    verifications: [...c.verifications, { id: Math.random().toString(), type: "" }]
                };
            }
            return c;
        }));
    };

    const removeVerification = (candidateId: string, verificationId: string) => {
        setCandidates(candidates.map(c => {
            if (c.id === candidateId) {
                return {
                    ...c,
                    verifications: c.verifications.filter(v => v.id !== verificationId)
                };
            }
            return c;
        }));
    };

    const updateVerificationType = (candidateId: string, verificationId: string, type: VerificationType) => {
        setCandidates(candidates.map(c => {
            if (c.id === candidateId) {
                return {
                    ...c,
                    verifications: c.verifications.map(v => v.id === verificationId ? { ...v, type } : v)
                };
            }
            return c;
        }));
    };

    return (
        <section className="flex flex-col gap-8 w-full font-Outfit mb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-[#333333]">Batch Verification</h1>
                <p className="text-[#888888] text-[15px] font-medium max-w-[800px]">
                    Verify multiple individuals at once by uploading their details, assigning checks, and tracking all results in a single view.
                </p>
            </div>

            {/* Candidate List */}
            <div className="flex flex-col gap-12">
                {candidates.map((candidate, index) => (
                    <div key={candidate.id} className="flex flex-col gap-6 relative animate-in slide-in-from-top-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-[#333333]">Candidate {index + 1}</h2>
                            {index > 0 && (
                                <button 
                                    onClick={() => removeCandidate(candidate.id)}
                                    className="text-red-500 text-sm font-bold hover:underline"
                                >
                                    Remove Candidate
                                </button>
                            )}
                        </div>

                        <div className="bg-white border border-[#e6e6e7] rounded-[32px] p-10 shadow-sm flex flex-col gap-10">
                            {/* Basic Info Grid */}
                            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[15px] font-bold text-[#333333]">First Name</label>
                                    <input type="text" placeholder="Enter First Name" className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[15px] font-bold text-[#333333]">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[15px] font-bold text-[#333333]">Alias</label>
                                    <input type="text" placeholder="Enter Name" className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]" />
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[15px] font-bold text-[#333333]">Phone Number</label>
                                    <input type="text" placeholder="+234 |" className="w-full bg-[#fcfcfc] border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-medium placeholder:text-[#bebebe]" />
                                </div>
                            </div>

                            {/* Verification Types for this Candidate */}
                            <div className="flex flex-col gap-8">
                                {candidate.verifications.map((v, vIdx) => (
                                    <div key={v.id} className="border border-[#f2f2f3] rounded-[24px] p-8 flex flex-col gap-8 relative bg-[#f9fbff]/20">
                                        {vIdx > 0 && (
                                            <button 
                                                onClick={() => removeVerification(candidate.id, v.id)}
                                                className="absolute right-6 top-6 text-[#bebebe] hover:text-red-500 transition-colors"
                                            >
                                                <X size={18} />
                                            </button>
                                        )}

                                        <div className="relative">
                                            <select 
                                                value={v.type}
                                                onChange={(e) => updateVerificationType(candidate.id, v.id, e.target.value as VerificationType)}
                                                className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-14 px-6 appearance-none focus:outline-none focus:ring-2 focus:ring-[#ff895d]/20 transition-all text-[#333333] font-bold cursor-pointer"
                                            >
                                                <option value="" disabled>Select Verification Type</option>
                                                <option value="Address Verification">Address Verification</option>
                                                <option value="Guarantor's Verification">Guarantor's Verification</option>
                                                <option value="Education and Transcript Verification">Education and Transcript Verification</option>
                                            </select>
                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#bebebe] pointer-events-none" size={20} />
                                        </div>

                                        {v.type === "Address Verification" && (
                                            <div className="grid grid-cols-1 gap-6 animate-in slide-in-from-top-2">
                                                <div className="flex flex-col gap-2.5">
                                                    <label className="text-[14px] font-bold text-[#666666]">Address</label>
                                                    <input type="text" placeholder="Enter address" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none" />
                                                </div>
                                                <div className="flex flex-col gap-2.5">
                                                    <label className="text-[14px] font-bold text-[#666666]">Landmark</label>
                                                    <input type="text" placeholder="Enter landmark" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none" />
                                                </div>
                                            </div>
                                        )}

                                        {v.type === "Guarantor's Verification" && (
                                            <div className="grid grid-cols-2 gap-8 animate-in slide-in-from-top-2">
                                                <div className="flex flex-col gap-2.5">
                                                    <label className="text-[14px] font-bold text-[#666666]">Guarantor's First Name</label>
                                                    <input type="text" placeholder="Enter First Name" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none" />
                                                </div>
                                                <div className="flex flex-col gap-2.5">
                                                    <label className="text-[14px] font-bold text-[#666666]">Last Name</label>
                                                    <input type="text" placeholder="Enter Last Name" className="w-full bg-white border border-[#f2f2f3] rounded-2xl h-14 px-6 focus:outline-none" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button 
                                    onClick={() => addVerification(candidate.id)}
                                    className="flex items-center gap-2 text-[#ff895d] font-bold text-sm hover:opacity-80 transition-opacity w-fit"
                                >
                                    <Plus size={16} strokeWidth={3} />
                                    Add verification
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Global Actions */}
            <div className="flex flex-col gap-10">
                <button 
                    onClick={addCandidate}
                    className="flex items-center gap-3 text-[#ff895d] font-bold text-base hover:opacity-80 transition-opacity w-fit ml-auto"
                >
                    <div className="w-6 h-6 rounded-full border-2 border-[#ff895d] flex items-center justify-center">
                        <Plus size={14} strokeWidth={3} />
                    </div>
                    Add a new candidate
                </button>

                <button className="w-full bg-[#ff895d] text-white h-16 rounded-[20px] font-bold text-lg shadow-xl shadow-[#ff895d]/20 hover:bg-[#ff7a45] transition-all active:scale-[0.98]">
                    Submit
                </button>
            </div>
        </section>
    );
};

export default BatchVerificationForm;
