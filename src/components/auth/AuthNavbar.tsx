import { Link, useLocation } from "react-router-dom";

const AuthNavbar = () => {
    // 1. We ask React Router what the current URL is!
    const location = useLocation();
    
    // 2. We check if the URL ends with "/login"
    const isLogin = location.pathname.includes("/login");

    return (
        <nav className="flex items-center justify-between pt-12 px-8 py-8 w-full">
            <img src="/360_verify.png" alt="project_logo" />

            {/* 3. The Magic Switch: If isLogin is true, show "Sign up". Else, show "Login". */}
            {isLogin ? (
                <span>
                    Don't have an account?{" "}
                    <Link to="/auth/register" className="text-[#fd7547] font-bold cursor-pointer hover:underline">
                        Sign up
                    </Link>
                </span>
            ) : (
                <span>
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-[#fd7547] font-bold cursor-pointer hover:underline">
                        Login
                    </Link>
                </span>
            )}
        </nav>
    );
};

export default AuthNavbar;