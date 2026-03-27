import {

     Calendar,
      ChevronDown 
    } 

    from "lucide-react"

const Overview = () => {

    return(

        <section className=" border border-[#e6e6e7] rounded-[20px] ">

           <div className=" flex flex-col p-5 gap-4">

              {/* upper division */}

              <div className="flex items-center justify-start  gap-2">

                {/* 1st division  */}

              <div className="text-[#bebebe]">

                <p>Overview for:</p>

              </div>

              {/* 2nd division */}

              <div className="flex items-center gap-1 text-[#ff8a63] ">

               <Calendar />
                
               <p>Sep 01 - Apr 01</p>
               
               <ChevronDown />

              </div>

              </div>

              {/* Lower division - Changed from flex to grid-cols-5 for perfect alignment! */}
              <div className="grid grid-cols-5 w-full">

                {/* total request */}
                <div className="border-r border-[#e6e6e7] pr-2">
                    <p className="text-[#bebebe] text-sm">Total Request</p>
                    <span className="text-xl font-bold text-[#333333]">120</span>
                </div>

                {/* inprogress */}
                <div className="border-r border-[#e6e6e7] px-5">
                    <p className="text-[#bebebe] text-sm">In Progress</p>
                    <span className="text-xl font-bold text-[#333333]">120</span>
                </div>

                {/* pending */}
                <div className="border-r border-[#e6e6e7] px-5">
                    <p className="text-[#bebebe] text-sm">Pending</p>
                    <span className="text-xl font-bold text-[#333333]">120</span>
                </div>

                {/* completed */}
                <div className="border-r border-[#e6e6e7] px-5">
                    <p className="text-[#bebebe] text-sm">Completed</p>
                    <span className="text-xl font-bold text-[#333333]">120</span>
                </div>

                {/* flagged */}
                <div className="px-5">
                    <p className="text-[#bebebe] text-sm">Failed/flagged</p>
                    <span className="text-xl font-bold text-[#333333]">120</span>
                </div>

              </div>

            
           </div>


        </section>
    )

}

export default Overview