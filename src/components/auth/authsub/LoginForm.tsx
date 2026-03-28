import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (

         <section className="flex flex-col gap-8 w-full max-w-[480px]">

            {/* Header Division */}
            <div className="flex flex-col gap-2">
                <h1 className="text-[32px] font-semibold text-[#333333] leading-tight">
                    Welcome Back
                </h1>
                <p className="text-sm font-normal text-[#666666]">
                    Login to continue using 360Verify
                </p>
            </div>

            {/* Form Division */}
            <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#4A4A4A]">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        className="bg-white w-full h-[52px] px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fc7e54]/30 focus:border-[#fc7e54] transition-all placeholder:text-gray-400" 
                    />
                </div>

                {/* Password Container */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#4A4A4A]">Password</label>
                    <div className="relative">
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="bg-white w-full h-[52px] pl-4 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fc7e54]/30 focus:border-[#fc7e54] transition-all placeholder:text-gray-400" 
                        />
                        {/* Eye icon positioned absolutely inside the input! */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        </div>
                    </div>
                    {/* Forgot Password Link safely BELOW the input on the left! */}
                    <div className="flex justify-start mt-1">
                        <Link to="/auth/forgot-password" className="text-[13px] font-medium text-[#fc7e54] hover:underline cursor-pointer">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                {/* Submit Area */}
                <div className="pt-4 flex flex-col gap-4">
                    <button type="submit" className="w-full bg-[#fa7848] hover:bg-[#e06639] transition-colors h-[52px] rounded-xl text-white font-medium text-[15px] shadow-sm cursor-pointer">
                        Login
                    </button>
                </div>

            </form>

        </section>

    )
}

export default LoginForm;