import { Info } from "lucide-react";

const Footer = () => {
    const fbPage = "https://www.facebook.com/profile.php?id=61555896277399";
    return (
        <div className="relative flex flex-col justify-between w-full h-auto">
            <div className="flex justify-center items-center text-gray-800 font-light text-xs sm:text-xs md:text-base bg-[#28FF1433] rounded-xl py-4 px-8 my-6 mx-auto border-[#36FF1B] border-1 flex-wrap sm:flex-nowrap">
                <span className="mr-2">
                    <Info />
                </span>
                Don&apos;t forget to visit the
                <span
                    className="font-medium mx-2 cursor-pointer"
                    onClick={() => {
                        window.open(fbPage, "_blank");
                    }}
                >
                    KEC LITE 2081
                </span>
                Facebook page for updates and announcements!
            </div>

            <div className="bg-[#002D71] text-white text-xs sm:text-xs md:text-sm font-light py-2 text-center">
                © 2024 All Rights Reserved | KEC Computer Club
            </div>
        </div>
    );
};

export default Footer;
