const ShareCard = () => {
    return (
        <div 
            className="w-[384px] h-[303px] rounded-[24px] relative overflow-hidden p-7 flex flex-col items-center justify-center text-center shadow-lg shrink-0"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/glass_effect.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col gap-3">
                <h3 className="text-white font-bold text-xl relative">
                    Share instead?
                    {/* Decorative Arrow */}
                    <span className="absolute -right-5 top-0 text-[#ff8a63] opacity-60">↗</span>
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                    Don't have the address details? You can copy and share this verification form with the individual to complete.
                </p>
                <button type="button" className="flex items-center gap-2 text-[#ff8a63] hover:text-[#de582c] font-bold text-xs mt-3 justify-center cursor-pointer group">
                     <span className="text-base">🔗</span>
                     <span className="underline">Copy Form Link</span>
                </button>
            </div>
        </div>
    );
};

export default ShareCard;
