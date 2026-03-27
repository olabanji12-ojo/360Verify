import React from "react";
import { FileText } from "lucide-react";

const RequestOverview = () => {
    
    const candidates = [
        {
            name: "Elouise Bridgerton",
            addressDetails: {
                firstName: "Elouise",
                lastName: "Bridgerton",
                alias: "Elly",
                phone: "09057608507",
                streetNum: "10",
                streetName: "Mobil Estate",
                landmark: "Opposite Shoprite",
                status: "In Progress"
            },
            guarantorDetails: {
                firstName: "Alabi",
                lastName: "Samuel",
                phone: "09057608507",
                relationship: "Mentor",
                status: "Completed"
            }
        },
        {
            name: "Tade Williams",
            addressDetails: {
                firstName: "Tade",
                lastName: "Williams",
                alias: "Wade",
                phone: "09057608507",
                streetNum: "10",
                streetName: "Mobil Estate",
                landmark: "Opposite Shoprite",
                status: "In Progress"
            },
            guarantorDetails: {
                firstName: "Alabi",
                lastName: "Samuel",
                phone: "09057608507",
                relationship: "Mentor",
                status: "Completed"
            }
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            {candidates.map((candidate, index) => (
                <div key={index} className="bg-white border border-[#e6e6e7] rounded-[24px] p-8 shadow-sm flex flex-col gap-10">
                    
                    <h2 className="text-xl font-bold text-[#333333]">{candidate.name}</h2>

                    {/* Address Verification Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-bold text-[#666666]">Address verification</h3>
                            <span className="px-3 py-1 bg-[#f3e8ff] text-[#a855f7] rounded-full text-[10px] font-bold uppercase tracking-wider">
                                {candidate.addressDetails.status}
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-y-8 gap-x-12">
                            <DataField label="First Name" value={candidate.addressDetails.firstName} />
                            <DataField label="Last Name" value={candidate.addressDetails.lastName} />
                            <DataField label="Alias" value={candidate.addressDetails.alias} />
                            <DataField label="Phone Number" value={candidate.addressDetails.phone} />
                            <DataField label="Street Number" value={candidate.addressDetails.streetNum} />
                            <DataField label="Street Name" value={candidate.addressDetails.streetName} />
                            <DataField label="Landmark" value={candidate.addressDetails.landmark} />
                        </div>
                    </div>

                    <div className="h-px bg-[#f2f2f3] w-full" />

                    {/* Guarantor's Verification Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-bold text-[#666666]">Guarantor's Verification</h3>
                            <span className="px-3 py-1 bg-[#ecfdf5] text-[#10b981] rounded-full text-[10px] font-bold uppercase tracking-wider">
                                {candidate.guarantorDetails.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-8 gap-x-12">
                            <DataField label="Guarantor's First Name" value={candidate.guarantorDetails.firstName} />
                            <DataField label="Last Name" value={candidate.guarantorDetails.lastName} />
                            <DataField label="Phone Number" value={candidate.guarantorDetails.phone} />
                            <DataField label="Relationship to candidate" value={candidate.guarantorDetails.relationship} />
                        </div>

                        {/* Agreement Form Link */}
                        <div className="flex flex-col gap-3 mt-2">
                            <label className="text-[11px] font-bold text-[#bebebe] uppercase tracking-wider">Guarantor Agreement Form</label>
                            <div className="flex items-center justify-between p-4 bg-[#fcfcfc] border border-[#f2f2f3] rounded-[12px] w-[350px]">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#f2f2f3] p-1.5 rounded-lg text-[#888888]">
                                        <FileText size={16} />
                                    </div>
                                    <span className="text-sm text-[#888888]">Guarantor_agreement</span>
                                </div>
                                <button className="text-[11px] font-bold text-[#666666] hover:text-[#333333] transition-colors underline">View File</button>
                            </div>
                        </div>
                    </div>

                    <button className="text-sm font-bold text-[#ff8a63] hover:text-[#de582c] transition-colors w-fit underline cursor-pointer">
                        See Report
                    </button>

                </div>
            ))}
        </div>
    );
};

const DataField = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-[#bebebe] uppercase tracking-wider">{label}</label>
        <span className="text-sm font-medium text-[#666666]">{value}</span>
    </div>
);

export default RequestOverview;
