import { Outlet } from "react-router-dom";
import PromoCard from "./authsub/PromoCard";
import AuthNavbar from "./AuthNavbar";

const AuthPage = () => {
    return (
        <div className="h-screen w-full bg-[#F6E6E1] flex justify-center items-center overflow-hidden">
            {/* The 1440px constraint is securely locked to the Auth Flow only! */}
            <div className="flex flex-col w-full max-w-[1440px] h-full">
                
                {/* The Navbar now ONLY shows up securely inside the Authentication Pages! */}
                <AuthNavbar />

                <section className="grid grid-cols-2 flex-1">
                    <PromoCard />

                    {/* The Centering Wrapper for React Router's INJECTED Forms */}
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        
                        {/* 🪄 The Magic Placeholder: React Router drops the correct form here! */}
                        <Outlet />

                    </div>
                </section>

            </div>
        </div>
    );
}

export default AuthPage;