import { Send } from "lucide-react"

const LoginButton = () => {

    return(

        <section className="flex flex-col items-center justify-center">

            <div className="bg-[#ffffff] w-[508px] h-[244px] rounded-[20px] flex flex-col items-center justify-center gap-3">

                <div className=" w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <Send className="w-10 h-10 text-[#ff6633]" />
                </div>

                <h2 className="text-base font-bold text-center leading-snug w-[400px]">
                    You have successfylly reset your password
                </h2>
                
                <button className="w-[80%] bg-[#0f0f0f] hover:bg-[#e06639] transition-colors h-[52px] rounded-xl text-white font-medium text-[15px] shadow-sm cursor-pointer">
                        Login
                    </button>


            </div>

        </section>

    )

}

export default LoginButton