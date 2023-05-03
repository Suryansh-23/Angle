import { HomeIcon } from "@heroicons/react/24/solid";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FadingList from "../components/FadingList";

const Lobby = () => {
    const router = useRouter();
    useEffect(() => {
        // wait for 5
        setTimeout(() => {
            router.push("/meet?room=ahh-prqd-ioc");
        }, 5000);
    }, [router]);

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen background-gradient">
            <div className="flex flex-row gap-x-4">
                <Web3Button
                    label={undefined}
                    avatar={undefined}
                    balance={undefined}
                    icon={undefined}
                />
                <Web3NetworkSwitch />
            </div>
            {/* <div
                // className="glass rounded-lg shadow-md p-2"
                className="border relative border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
            ></div> */}
            <div className="glass rounded-lg shadow-md p-6">
                <div className="flex flex-col text-center w-80">
                    <h1 className="mx-auto max-w-5xl font-display text-4xl font-bold tracking-normal text-gray-200 sm:text-7xl">
                        Lobby
                    </h1>
                    <h2 className="mx-auto mt-5 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
                        Finding something fun for ya <br />
                        Stay tuned!
                    </h2>
                    {/* <div className="">
                        <LoadingDots />
                    </div> */}
                    <Link
                        className="flex flex-row justify-center bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-5 mt-4 hover:bg-blue-500 transition"
                        href="/"
                    >
                        <HomeIcon className="h-6 w-6 mr-1" />
                        Some other time
                    </Link>
                </div>
            </div>
            <div
                // className="glass rounded-lg shadow-md p-2"
                className="border relative border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
            >
                <FadingList items={["Sheldon", "Leonard", "Penny"]} />
            </div>
        </div>
        // <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen"></div>
    );
};

export default Lobby;
