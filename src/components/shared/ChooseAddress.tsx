const ChooseAddress = () => {

    return (
        <div className="bg-[#ffffff] w-[460px] h-fit rounded-[24px] p-8 flex flex-col border border-[#e6e6e7] gap-8 shadow-sm">

            {/* Header Section */}
            <div>
                <h2 className="font-bold text-2xl text-[#333333]">Select how to verify your address</h2>
            </div>

            <form className="flex flex-col gap-10">

                {/* Radio Options Group */}
                <div className="flex items-center justify-start gap-16 px-2">

                    {/* Physical Option */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="addressType" 
                            className="w-5 h-5 accent-[#ff8a63] cursor-pointer" 
                        />
                        <span className="text-[#333333] font-medium text-lg group-hover:text-[#ff8a63] transition-colors">Physical</span>
                    </label>

                    {/* Virtual Option */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="addressType" 
                            className="w-5 h-5 accent-[#ff8a63] cursor-pointer" 
                        />
                        <span className="text-[#333333] font-medium text-lg group-hover:text-[#ff8a63] transition-colors">Virtual</span>
                    </label>
                
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4">
                    <button type="button" className="font-bold text-sm cursor-pointer border border-[#cccccc] text-[#333333] w-[110px] h-[48px] rounded-[12px] hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>

                    <button type="submit" className="text-[#ffffff] bg-[#000000] font-bold text-sm cursor-pointer w-[130px] h-[48px] rounded-[12px] hover:bg-[#222222] transition-colors shadow-sm">
                        Confirm
                    </button>
                </div>

            </form>

        </div>
    )

}

export default ChooseAddress;