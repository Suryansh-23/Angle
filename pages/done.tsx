import Feedback from "../components/Feedback";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Done = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen background-gradient">
            <div className="border relative border-gray-700 rounded-2xl py-4 px-4 text-gray-400 text-sm transition duration-300 ease-in-out hover:text-gray-300">
                <Feedback />
            </div>
            <div className="flex flex-row gap-x-4">{/* <Feedback /> */}</div>
            {/* <div
                // className="glass rounded-lg shadow-md p-2"
                className="border relative border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
            ></div> */}
            <div className="glass rounded-lg shadow-md p-6">
                <div className="flex flex-col text-center w-auto">
                    <h1 className="mx-auto max-w-max font-display text-4xl mt-2 font-bold tracking-normal text-gray-200 sm:text-6xl">
                        Chill Out
                    </h1>
                    <h2 className="mx-auto mt-5 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
                        <p className="mx-3 my-2">
                            Thanks bruh for joining the sesh
                            <br /> So wanna catch smth new or just chill?
                            again!!
                        </p>
                    </h2>
                    {/* <div className="">
                        <LoadingDots />
                    </div> */}
                    <div className="flex flex-row gap-x-4 w-auto justify-stretch">
                        <Link
                            className="flex flex-row flex-1 justify-center whitespace-nowrap bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-5 mt-4 hover:bg-blue-500 transition"
                            href="/"
                        >
                            <HomeIcon className="h-6 w-6 mr-1" />
                            Some other time{" "}
                        </Link>
                        <Link
                            className="flex flex-row flex-1 justify-center whitespace-nowrap bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-5 mt-4 hover:bg-blue-500 transition"
                            href="/lobby"
                        >
                            <ArrowUturnLeftIcon className="h-6 w-6 mr-1" />
                            Find smth New{" "}
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div
                // className="glass rounded-lg shadow-md p-2"
                className="border relative border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
            ></div> */}
        </div>
    );
};

export default Done;
