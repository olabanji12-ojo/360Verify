import { Link } from "react-router-dom";

const ForgotPassword = () => {

    return(

        <section className="flex flex-col gap-8 w-full max-w-[480px]">
        
          {/* Header Division */}
            <div className="flex flex-col gap-2">
                <h1 className="text-[32px] font-semibold text-[#333333] leading-tight">
                    Forgot Password
                </h1>
                <p className="text-sm font-normal text-[#666666]">
                    Kindly fill the details below to reset your password
                </p>
            </div>


            {/* Form Division */}
            <form className="flex flex-col gap-5 w-full" onSubmit={(e) => e.preventDefault()}>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#4A4A4A]">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        className="bg-white w-full h-[52px] px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fc7e54]/30 focus:border-[#fc7e54] transition-all placeholder:text-gray-400" 
                    />
                </div>


                {/* Submit Area */}
                <div className="pt-4 flex flex-col gap-4">
                    <button type="submit" className="w-full bg-[#fa7848] hover:bg-[#e06639] transition-colors h-[52px] rounded-xl text-white font-medium text-[15px] shadow-sm cursor-pointer">
                        Get Reset Link
                    </button>

                    <div className="flex flex-col items-center gap-3 mt-4">
                        <Link to="/auth/login" className="text-[14px] font-medium text-[#666666] hover:text-[#fc7e54] hover:underline cursor-pointer">
                            Back to Login
                        </Link>
                        
                       
                    </div>

                </div>

            </form>

        </section>

    )

}   

export default ForgotPassword;