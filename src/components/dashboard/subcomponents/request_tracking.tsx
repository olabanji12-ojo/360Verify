import React from "react";

const RequestTracking = () => {
    
    const activities = [
        { time: "July 10, 2025", activity: "Request submitted" },
        { time: "July 11, 2025", activity: "Assigned to Field Officer" },
        { time: "July 12, 2025", activity: "Verification in Progress" },
    ];

    return (
        <div className="bg-white border border-[#e6e6e7] rounded-[24px] p-8 shadow-sm">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-[#bebebe] text-xs font-bold uppercase tracking-wider border-b border-[#f2f2f3]">
                        <th className="pb-4 w-1/4">Date and Time</th>
                        <th className="pb-4">Activity</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f2f3]">
                    {activities.map((act, i) => (
                        <tr key={i} className="text-sm text-[#333333]">
                            <td className="py-5 font-medium">{act.time}</td>
                            <td className="py-5 font-semibold">{act.activity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestTracking;
