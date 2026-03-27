import {
   ChevronDown,
   CircleUserRound,
   BellDot
} 

from "lucide-react"

const TopHeader = () => {

    return(

        <section className="h-[10%] bg-[#f9fafb] border-b border-[#e6e6e7] w-full flex items-center justify-end px-20 gap-8">
          
           {/* bell section */}

           <div>

            <BellDot className="text-[#000000]" />
 
           </div>

            {/* Username and navigation */}

                <div className="flex items-center gap-1">

                    <CircleUserRound />

                    <p className="font-bold text-[#333333]">John Doe</p>

                    <ChevronDown />

                </div>
                
         </section>
    )

}
export default TopHeader