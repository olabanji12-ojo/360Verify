
const PromoCard = () => {

    return (

        // PromoCard Section

        <section className="flex flex-col items-center justify-center gap-5 w-[600px] h-full bg-[#bd5532] bg-[url('/glass_effect.png')] bg-cover bg-center bg-blend-multiply rounded-[40px]">

        
        {/* section-cover */}
       
       {/* <div className="absolute inset-0 bg-[#B64F2E]"></div> */}
        
        {/* Top illustration */}
    
        <div className="bg-white/10 rounded-[40px]">

           <img 
            src="/Hiring2.png" 
            alt="left-image" 
            className="w-[400px] h-[400px] object-cover" 
            />


        </div>

        {/* Bottom illustration */}

        <div className="flex flex-col items-center max-w-sm mx-auto">
    
    {/* Notice how the span is INSIDE the h2, and text-3xl makes it big! */}
    {/* leading-snug tightens the vertical space of the big header */}
    <h2 className="text-[#ffffff] text-2xl font-bold text-center leading-snug w-[400px]">
        Hire Right, Build Trust, and 
    </h2>
    <span className="text-[#ff6633] text-2xl font-bold">Stay Ahead.</span>

    {/* leading-relaxed increases the line-height for easier reading on the paragraph */}
    <p className="text-[#ffffff] text-center text-sm font-light leading-relaxed w-[400px]">
        Verify every hire with confidence, protect your business 
        <br />
        from risk,and strengthen your team with trusted talent.
    </p>
    
</div>

        
        </section>

    )
}

export default PromoCard