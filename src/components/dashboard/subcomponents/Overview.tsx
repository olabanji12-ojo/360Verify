import { Calendar, ChevronDown, Activity, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const Overview = () => {
    const stats = [
        { label: "Total Request", value: "1,240", icon: <Activity className="text-blue-500" size={18} /> },
        { label: "In Progress", value: "342", icon: <Clock className="text-purple-500" size={18} /> },
        { label: "Pending", value: "156", icon: <Clock className="text-amber-500" size={18} /> },
        { label: "Completed", value: "718", icon: <CheckCircle2 className="text-emerald-500" size={18} /> },
        { label: "Failed/flagged", value: "24", icon: <AlertCircle className="text-rose-500" size={18} />, color: "text-rose-500" }
    ];

    return (
        <section className="bg-white border border-[#e6e6e7] rounded-[32px] p-8 shadow-sm font-Outfit animate-in fade-in duration-500">
            <div className="flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[15px]">
                        <span className="text-[#bebebe] font-bold tracking-tight">Overview for:</span>
                        <div className="flex items-center gap-2 bg-[#fff2ed] text-[#ff8a63] px-3.5 py-1.5 rounded-full font-bold cursor-pointer hover:bg-[#ffdfd4] transition-all hover:scale-[1.02] active:scale-[0.98]">
                            <Calendar size={16} />
                            <span>Sep 01 - Apr 01</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`flex flex-col gap-3 ${idx !== stats.length - 1 ? "lg:border-r lg:border-[#f2f2f3] lg:pr-6" : ""}`}>
                            <div className="flex items-center gap-2.5">
                                {stat.icon}
                                <span className="text-[#bebebe] text-[10px] font-bold uppercase tracking-[1.5px]">{stat.label}</span>
                            </div>
                            <span className={`text-[28px] lg:text-[32px] font-extrabold ${stat.color || "text-[#333333]"} leading-none tracking-tight`}>{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Overview;