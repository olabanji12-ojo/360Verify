import { ChevronDown } from "lucide-react";

const CompletedVerification = () => {
    // Circumference = 2 * PI * R (R=80 -> ~502)
    const circumference = 502;
    
    // Data percentages
    const addressPercent = 65;
    const guarantorPercent = 35;

    // Offsets
    // Orange starts at top (0 offset)
    const orangeOffset = circumference - (addressPercent / 100) * circumference;
    
    // Black starts after Orange
    // To position it correctly, we rotate the whole SVG or individual circles.
    // Rotating individual circles is easier to reason about.
    const blackDashArray = `${(guarantorPercent / 100) * circumference} ${circumference}`;
    // We want the black piece to start where orange ends. 
    // Orange occupies 65% (from 0 to 234 degrees roughly).
    const blackRotation = (addressPercent / 100) * 360;

    return (
        <section className="border border-[#e6e6e7] rounded-[20px] bg-white h-full w-full p-6 flex flex-col relative overflow-hidden">
            
            {/* Header: Title and Dropdown */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <h2 className="text-[#333333] font-bold text-lg">Completed Verification</h2>
                    <ChevronDown className="w-5 h-5 text-[#666666] group-hover:text-[#ff8a63] transition-colors" />
                </div>
            </div>

            {/* Top-Left Labels (New in Data Version) */}
            <div className="flex flex-col gap-1 mb-2">
                <div className="flex flex-col">
                    <span className="text-[10px] text-[#ff8a63] font-medium border-b border-[#ff8a63]/20 w-fit">Address Verification : 65%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-[#333333] font-medium border-b border-[#333333]/20 w-fit">Guarantor's Verification : 35%</span>
                </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 flex items-center justify-center relative">
                
                {/* SVG Donut Chart */}
                <div className="relative w-[200px] h-[200px]">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Background Circle */}
                        <circle cx="100" cy="100" r="80" stroke="#f3f3f3" strokeWidth="25" fill="transparent" />
                        
                        {/* Orange Segment (Address) */}
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="#ff8a63"
                            strokeWidth="25"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={orangeOffset}
                            strokeLinecap="butt"
                        />

                        {/* Black Segment (Guarantor) */}
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="#000000"
                            strokeWidth="25"
                            fill="transparent"
                            strokeDasharray={blackDashArray}
                            strokeDashoffset={0}
                            style={{ transform: `rotate(${blackRotation}deg)`, transformOrigin: 'center' }}
                            strokeLinecap="butt"
                        />
                    </svg>
                    
                    {/* Inner hole */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[110px] h-[110px] bg-white rounded-full shadow-inner"></div>
                    </div>
                </div>

                {/* Right Side Detailed Legend */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 pr-2">
                    <div className="flex items-start gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff8a63] mt-1"></div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-[#333333]">Address:</span>
                            <span className="text-[10px] text-[#666666]">50 out of 80 requests</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333333] mt-1"></div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-[#333333]">Guarantor:</span>
                            <span className="text-[10px] text-[#666666]">30 out of 40 requests</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default CompletedVerification;