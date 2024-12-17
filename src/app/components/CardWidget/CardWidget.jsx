import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CircleUserRound, Crown, Dot, Quote, ThumbsUp } from "lucide-react";
import CardStats from "../CardStats/CardStats";

const CardWidget = (props) => {
    // colors for the crown
    const crownColors = {
        1: "#FFD700",
        2: "#cccaca",
        // 3: "#C88E53",
    };

    return (
        <div
            className="relative w-full sm:w-[300px] md:w-[330px] lg:w-[400px] h-auto shadow-md rounded-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out m-6"
            onClick={() => {
                window.open(props.PostLink, "_blank");
            }}
        >
            {/* Crown Icon */}
            {props.rank <= 2 && (
                <div
                    className="absolute -top-4 -right-4 p-2 rounded-full shadow-lg z-10"
                    style={{ backgroundColor: crownColors[props.rank] }}
                >
                    <Crown className="h-7 w-7 text-white" />
                </div>
            )}

            {/* Card */}
            <Card className="w-full h-full rounded-lg overflow-hidden">
                {/* Card Header */}
                <CardHeader className="pb-0 pt-4 px-6 flex-col items-start">
                    {/* Author */}
                    <div className="text-sm uppercase text-gray-500 flex items-center mb-2">
                        <CircleUserRound className="mr-2" />{" "}
                        <span className="font-semibold font-khand">
                            {/* Added margin to space out the logo */}
                            {props.Author}
                        </span>
                    </div>

                    {/* Caption */}
                    <h4 className="font-khand font-bold text-xl flex items-start gap-2 line-clamp-2 max-h-[3.5em] overflow-hidden">
                        <Quote className="self-start h-6 shrink-0 text-gray-400 transform scale-x-[-1]" />
                        <span className="line-clamp-2">{props.Text}</span>
                    </h4>
                </CardHeader>

                {/* Card Body with image */}
                <CardBody className="flex justify-center">
                    <div className="w-full aspect-square overflow-hidden rounded-md">
                        <Image
                            alt="Card background"
                            className="object-fit w-full h-full"
                            src={props.Image}
                        />
                    </div>
                </CardBody>

                {/* Card Footer with stats */}
                <div className="px-6 pb-4 flex flex-wrap justify-around items-center text-gray-600">
                    <CardStats
                        icon={<ThumbsUp />}
                        count={props.NumberOfReactions}
                        color={"#1881aa"}
                    />
                    <CardStats
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="#29a06e"
                                viewBox="0 0 256 256"
                            >
                                <path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z"></path>
                            </svg>
                        }
                        count={props.NumberOfShares}
                        color={"#29a06e"}
                    />
                    <div className="flex justify-center items-center gap-1 text-[#EB5353]">
                        <CardStats
                            icon={<Dot />}
                            count={props.Points}
                            color={"#EB5353"}
                        />{" "}
                        Points
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CardWidget;
