import Overview from "./Overview";
import MiddleSection from "./MiddleSection";
import RecentReport from "./RecentReport";

const DashboardHome = () => {
    return (
        <div className="flex flex-col gap-8">
            <Overview />
            <MiddleSection />
            <RecentReport />
        </div>
    );
};

export default DashboardHome;
