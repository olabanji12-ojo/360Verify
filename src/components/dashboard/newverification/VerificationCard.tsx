import React from "react";


interface VerificationCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick?: () => void;
}

const VerificationCard: React.FC<VerificationCardProps> = ({ icon, title, description, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="w-full bg-[#f89d7b] hover:bg-[#ff8a63] transition-all cursor-pointer rounded-[20px] p-8 flex flex-col gap-4 group shadow-sm hover:shadow-md h-[220px] items-start justify-center"
        >
            {/* Icon Container */}
            <div className="bg-white/20 p-4 rounded-full text-white group-hover:scale-110 transition-transform ">
                {icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-xl">Verify {title}</h3>
                <p className="text-white/90 text-[13px] leading-relaxed max-w-[280px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default VerificationCard;
