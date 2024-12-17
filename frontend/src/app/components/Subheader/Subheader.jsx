const Subheader = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center my-4">
            {/* title */}
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold">
                AI PHOTOGRAPHY CHALLENGE LEADERBOARD
            </h1>

            {/* subtitle */}
            <p className="w-[93%] sm:w-[95%] md:w-[60%] lg:w-[60%] text-gray-700 font-light text-xs sm:text-xs md:text-base">
                A space where artificial intelligence and Nepali culture come
                together! The AI Photography Challenge Leaderboard celebrates
                the most creative takes on Imagine{" "}
                <span className="font-medium">उखान टुक्का</span>, blending
                tradition with the magic of technology.
            </p>

            {/* Yellow card thingy */}
            <div className="w-[93%] sm:w-[95%] md:w-auto lg:w-auto text-gray-700 font-light text-xs sm:text-xs md:text-base m-4 py-4 px-10 bg-[#FFD70033] rounded-xl t">
                Support your favorite entry by liking and sharing before the
                deadline on{" "}
                <span className="font-medium">Tuesday, Poush 2, 2081 BS</span>!
            </div>

            {/* Divider */}
            <div className="w-[93%] sm:w-[95%] md:w-[60%] lg:w-[60%] flex flex-col border-opacity-50">
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-700 font-semibold text-xs sm:text-xs md:text-base">
                            🏆 Top Posts at a Glance 🏆
                        </span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subheader;
