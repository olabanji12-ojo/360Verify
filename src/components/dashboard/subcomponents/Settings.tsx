import React, { useState } from "react";
import { User, Bell, Shield, Eye, EyeOff, Upload, Plus, Pencil, Trash2 } from "lucide-react";

const Settings = () => {
    const [activeTab, setActiveTab] = useState<"Business Profile" | "Notification" | "Security">("Business Profile");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [profilePic, setProfilePic] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="flex flex-col gap-8 w-full relative h-full mb-10">
            <h1 className="text-3xl font-bold text-[#333333]">Settings</h1>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 bg-[#f2f2f3] p-1.5 rounded-[12px] w-fit font-Outfit">
                {["Business Profile", "Notification", "Security"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all ${
                            activeTab === tab ? "bg-[#ff895d] text-white shadow-md" : "text-[#888888] hover:text-[#333333]"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Business Profile Tab Content */}
            {activeTab === "Business Profile" && (
                <div className="flex flex-col gap-8 animate-in fade-in duration-300">
                    <div className="flex gap-8 items-start">
                        {/* Left Card: Form info */}
                        <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-8 shadow-sm flex-1 flex flex-col gap-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#333333]">First Name</label>
                                    <input type="text" placeholder="John" className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#333333]">Last Name</label>
                                    <input type="text" placeholder="Doe" className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333]" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#333333]">Business Name</label>
                                <input type="text" placeholder="Grupp Co." className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333]" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#333333]">Email Address</label>
                                <input type="email" placeholder="johndoe@example.com" className="bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333]" />
                            </div>
                        </div>

                        {/* Right Card: Upload Photo */}
                        <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-8 shadow-sm w-[400px] flex flex-col gap-6 items-center justify-center min-h-[350px]">
                            <p className="w-full text-left text-sm font-bold text-[#333333] -mt-10 self-start">Upload Profile Picture</p>
                            
                            {!profilePic ? (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-32 h-32 bg-[#f2f2f3] rounded-full flex items-center justify-center border-2 border-dashed border-[#e6e6e7]">
                                        <div className="bg-[#e6e6e7] p-4 rounded-[20px]">
                                            <Upload className="text-[#888888]" size={32} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <label className="text-sm font-bold text-[#333333] cursor-pointer hover:underline">
                                            Click to upload
                                            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                                        </label>
                                        <span className="text-sm text-[#888888] ml-1">or drag and drop</span>
                                        <p className="text-[11px] text-[#bebebe] mt-1">(PDF, JPG, PNG, tiff or HEIC maximum 10mb)</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-6">
                                    <div className="relative">
                                        <img src={profilePic} alt="profile" className="w-32 h-32 rounded-full object-cover border-4 border-[#fff2ec]" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => setProfilePic(null)}
                                            className="flex items-center gap-2 border border-[#fde8e8] text-[#ef4444] px-4 py-2 rounded-[10px] text-xs font-bold hover:bg-[#fef2f2] transition-colors"
                                        >
                                            <Trash2 size={14} />
                                            Delete Account
                                        </button>
                                        <label className="flex items-center gap-2 bg-[#ff895d] text-white px-4 py-2 rounded-[10px] text-xs font-bold cursor-pointer hover:bg-[#e67a50] transition-colors">
                                            <Pencil size={14} />
                                            Edit Picture
                                            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex justify-center mt-6">
                        <button className="bg-[#ff895d] text-white px-32 py-4 rounded-[16px] font-bold shadow-lg shadow-[#ff895d]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>
            )}

            {/* Notification Tab Content */}
            {activeTab === "Notification" && (
                <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-10 shadow-sm animate-in slide-in-from-bottom-5 duration-300 max-w-[800px] mx-auto flex flex-col gap-10">
                    
                    {/* Verification Report Update Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-[#333333]">Verification Report Update</h3>
                            <p className="text-[13px] text-[#666666]">Manage alerts related to individual verification checks and overall batch completion</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded-full border-2 border-[#ff895d] flex items-center justify-center p-0.5">
                                    <div className="w-full h-full bg-[#ff895d] rounded-full"></div>
                                </div>
                                <span className="text-[13px] font-medium text-[#888888] group-hover:text-[#333333] transition-colors">Notify only when all checks in a batch are completed.</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded-full border border-[#e6e6e7] flex items-center justify-center p-0.5"></div>
                                <span className="text-[13px] text-[#888888] group-hover:text-[#333333] transition-colors">Notify when an individual verification (e.g., address, guarantor) is completed</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full h-px bg-[#f2f2f3]" />

                    {/* Flag Requests Section */}
                    <div className="flex justify-between items-start gap-10">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-bold text-[#333333]">Flag Requests</h3>
                            <p className="text-[13px] text-[#bebebe]">Receive alerts when action is needed on a flagged request.</p>
                        </div>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-[#bebebe] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff895d]"></div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-[#f2f2f3]" />

                    {/* Delivery Channels */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-sm font-bold text-[#333333]">Delivery Channels</h3>
                        
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <p className="text-[13px] font-bold text-[#333333]">Enable Email Notifications</p>
                                <p className="text-xs text-[#bebebe] font-medium italic">johndoe@example.com (Default Recipient)</p>
                                <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#ff895d] mt-2 hover:underline">
                                    <div className="border-2 border-[#ff895d] rounded-full p-0.5">
                                        <Plus size={10} strokeWidth={4} />
                                    </div>
                                    Add Additional Recipient
                                </button>
                            </div>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-[#bebebe] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff895d]"></div>
                            </div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <p className="text-[13px] font-bold text-[#333333]">Enable In-App Notifications</p>
                                <p className="text-xs text-[#bebebe] font-medium">Receive alerts directly within your web application</p>
                            </div>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-[#bebebe] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff895d]"></div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#ff895d] text-white w-full py-4 rounded-[16px] font-bold mt-4 shadow-lg shadow-[#ff895d]/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
                        Save Changes
                    </button>
                </div>
            )}

            {/* Security Tab Content */}
            {activeTab === "Security" && (
                <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-10 shadow-sm animate-in slide-in-from-bottom-5 duration-300 max-w-[650px] mx-auto flex flex-col gap-8">
                    <h3 className="text-sm font-bold text-[#333333] -mt-2">Change Password</h3>
                    
                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-[#333333]">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter password" 
                                    className="w-full bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333] placeholder:text-[#bebebe]" 
                                />
                                <button 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bebebe] hover:text-[#888888] cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-[#333333]">Confirm Password</label>
                            <div className="relative">
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder="Enter password" 
                                    className="w-full bg-[#fcfcfc] border border-[#e6e6e7] rounded-[12px] h-12 px-4 focus:outline-none focus:ring-1 focus:ring-[#ff895d] text-sm text-[#333333] placeholder:text-[#bebebe]" 
                                />
                                <button 
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bebebe] hover:text-[#888888] cursor-pointer"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button className="bg-[#ff895d] text-white w-full py-4 rounded-[16px] font-bold mt-4 shadow-lg shadow-[#ff895d]/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
                            Change Password
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Settings;
