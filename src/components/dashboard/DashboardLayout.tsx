
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader"
import MiddleLayout from "./MiddleLayout";

const DashboardLayout = () => {

    return (
        <div className="flex w-full h-screen bg-[#F8F9FA] overflow-hidden">

            {/* The persistent Sidebar panel */}
            <Sidebar />

            {/* The flexible main content window */}
            <div className="flex flex-col w-full h-full">
                
                <TopHeader />
               

                <MiddleLayout />


            </div>

        </div>
    );

};

export default DashboardLayout;
