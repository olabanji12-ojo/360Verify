import { Download, Upload } from "lucide-react"

const MultipleCandidate = () => {

    return (
        <div className="bg-[#ffffff] w-[550px] h-fit rounded-[24px] p-8 flex flex-col border border-[#e6e6e7] gap-8 shadow-sm">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="font-bold text-2xl text-[#333333]">Verify Multiple Candidates</h2>
                <p className="text-[#666666] text-sm">Upload your candidate list to verify multiple candidates at once.</p>
            </div>

            <form className="flex flex-col gap-6">

                {/* CSV Template / Download Bar */}
                <div className="flex items-center justify-between border border-[#e6e6e7] rounded-[16px] h-16 px-6 bg-white hover:border-[#ff8a63]/30 transition-colors">
                    <div className="flex items-center gap-3">
                        {/* Word/CSV Icon - Using an img if you have one, or a stylized div */}
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img src="/microsoft-word logo.png" alt="csv icon" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[#333333] font-medium text-base">CSV Template</span>
                    </div>

                    <button type="button" className="flex items-center gap-2 text-[#666666] hover:text-[#ff8a63] cursor-pointer transition-colors group">
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                        <span className="font-medium text-base">Download</span>
                    </button>
                </div>

                {/* Upload Zone */}
                <div className="flex flex-col items-center justify-center border border-[#e6e6e7] rounded-[20px] py-12 px-6 gap-4 bg-[#fcfcfc] border-dashed hover:bg-[#fff9f7] hover:border-[#ff8a63]/20 transition-all cursor-pointer">
                    
                    {/* Circle Icon Container */}
                    <div className="bg-[#f3f3f3] p-3 rounded-full text-[#666666]">
                        <Upload size={24} />
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-1">
                            <span className="text-[#333333] font-bold underline cursor-pointer">Click to upload</span>
                            <span className="text-[#666666]">or drag and drop</span>
                        </div>
                        <p className="text-[#999999] text-xs mt-1">
                            (PDF, JPG, PNG, tiff or HEIC maximum 10mb)
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 mt-4">
                    <button className="font-bold text-sm cursor-pointer border border-[#cccccc] text-[#333333] w-[110px] h-[48px] rounded-[12px] hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>

                    <button className="text-[#ffffff] bg-[#000000] font-bold text-sm cursor-pointer w-[130px] h-[48px] rounded-[12px] hover:bg-[#222222] transition-colors shadow-sm">
                        Confirm
                    </button>
                </div>

            </form>

        </div>
    )

}

export default MultipleCandidate;