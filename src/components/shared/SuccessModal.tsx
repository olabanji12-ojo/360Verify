import React from "react";
import { Send, X } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
    isOpen, 
    onClose, 
    title, 
    message, 
    buttonText, 
    onButtonClick 
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            
            <div className="bg-white w-full max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl relative flex flex-col items-center p-10 gap-6 animate-in fade-in zoom-in duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute right-6 top-6 text-[#999999] hover:text-[#333333] transition-colors cursor-pointer"
                >
                    <X size={24} />
                </button>

                {/* Status Icon */}
                <div className="bg-[#fff7ed] w-20 h-20 rounded-full flex items-center justify-center text-[#ff8a63] -mt-2">
                    <Send size={40} className="ml-1" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 text-center">
                    <h2 className="text-2xl font-black text-[#333333]">{title}</h2>
                    <p className="text-[#666666] text-sm leading-relaxed px-4">
                        {message}
                    </p>
                </div>

                {/* Action Button */}
                <button 
                    onClick={onButtonClick}
                    className="w-full bg-[#ff8a63] text-white font-bold h-14 rounded-[16px] hover:bg-[#de582c] transition-all shadow-md mt-2"
                >
                    {buttonText}
                </button>

            </div>

        </div>
    );
};

export default SuccessModal;