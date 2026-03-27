import { Outlet } from "react-router-dom";

const MiddleLayout = () => {

    return(
        <section className="bg-white w-full h-full overflow-y-auto">
            
            {/* 🎯 Centered Container - Swaps based on Route! */}
            <div className="max-w-[1240px] mx-auto px-10 py-10 flex flex-col gap-8">
                <Outlet />
            </div>
                    
        </section>
    )

}

export default MiddleLayout