import CompletedVerification from "./middlecomponents/CompletedVerification"

const MiddleSection = () => {

    return (
        <section className="grid grid-cols-2 gap-5 h-[340px] w-full">
            
            {/* Left: Chart Card */}
            <div className="w-full h-full">
                <CompletedVerification />
            </div>

            {/* Right: Promotion Card */}
            <div className="w-full h-full rounded-[20px] overflow-hidden">
                <img 
                    src="/middle-image.jpg" 
                    alt="Success Stats" 
                    className="w-full h-full object-cover rounded-[20px] shadow-sm" 
                />
            </div>

        </section>
    )

}

export default MiddleSection;