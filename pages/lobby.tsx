import {
    HomeIcon,
    MagnifyingGlassIcon,
    ArrowPathIcon,
} from "@heroicons/react/24/solid";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useAccount } from "wagmi";
import FadingList from "../components/FadingList";
import { abi } from "../constants/angleABI";

const contractAddress = "0xD2236B144FfE781f38dD83653C284d88078A06C8";

const createRoom = async () => {
    const resp: any = await fetch(
        "https://iriko.testing.huddle01.com/api/v1/create-iframe-room",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY || "",
            },
            body: JSON.stringify({
                title: "Huddle-01-Room",
                roomLocked: false,
            }),
        }
    );
    const result = await resp.json();
    return result.data.roomId;
};

const Lobby = () => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const { address } = useAccount();
    const { authenticate, enableWeb3, isWeb3Enabled } = useMoralis();
    // enableWeb3({ provider: "metamask" });
    // enableWeb3({ provider: "walletconnect" });
    // authenticate({ provider: "walletconnect" });
    const { runContractFunction: mapInterests } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "mapInterests",
        params: {
            _address: address,
            _interests: "swifties",
        },
    });
    const { runContractFunction: theMeetWork } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "theMeetWork",
        params: {
            _address: address,
        },
    });
    const { runContractFunction: addMeetId } = useWeb3Contract({});
    // console.log("####", await createRoom());

    useEffect(() => {
        // wait for 5
        // anonymous async function
        if (isWeb3Enabled) {
            (async () => {
                setLoading(true);

                let [retInter, result] = await Promise.all([
                    await mapInterests(),
                    (await theMeetWork()) as any,
                ]);
                console.log("mapInterests:", retInter);

                const events = (await result.wait()).events;
                console.log("result from theMeetWork: ", events);

                if (events.length == 0) {
                    return;
                }

                const meetId = events[0].args.meetId;
                console.log(meetId, parseInt(meetId) === 0);

                if (parseInt(meetId) == 0) {
                    // create room
                    const meetId = await createRoom();
                    // add meet id
                    console.log(
                        "meetId",
                        await addMeetId({
                            params: {
                                abi: abi,
                                contractAddress: contractAddress,
                                functionName: "addMeetId",
                                params: {
                                    _address: address,
                                    _meetId: meetId,
                                },
                            },
                        })
                    );

                    setLoading(false);
                    // redirect to meet

                    console.log("New Meet Id:", meetId);
                    router.push(`/meet?room=${meetId}`);
                } else {
                    console.log("Else Block: ", meetId);
                    // const meetId = await createRoom();
                    router.push(`/meet?room=${meetId}`);
                }
            })();
        }
    }, [
        mapInterests,
        theMeetWork,
        address,
        router,
        addMeetId,
        enableWeb3,
        authenticate,
        isWeb3Enabled,
        setLoading,
    ]);

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
                    <button
                        className="flex flex-row justify-center bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-5 mt-4 hover:bg-blue-500 transition"
                        onClick={async () => {
                            await enableWeb3({ provider: "metamask" });
                        }}
                    >
                        {isLoading ? (
                            <>
                                <ArrowPathIcon className="h-6 w-6 mr-1 rotate" />
                                Finding someone...
                            </>
                        ) : (
                            <>
                                <MagnifyingGlassIcon className="h-6 w-6 mr-1" />
                                Start finding someone
                            </>
                        )}
                    </button>
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
