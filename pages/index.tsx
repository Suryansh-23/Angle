import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SquigglyLines from "@/components/SquigglyLines";
import { Testimonials } from "@/components/Testimonials";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>Angle.</title>
            </Head>

            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
                <a
                    rel="noopener"
                    href="https://github.com/Suryansh-23/angle"
                    target="_blank"
                    className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
                >
                    Talk is Cheap. Show me the{" "}
                    <span className="text-blue-600">Code</span>
                </a>
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
                    Bringing Fun to <br />
                    <span className="relative whitespace-nowrap text-blue-600">
                        <SquigglyLines />
                        <span className="relative">Web3</span>
                    </span>{" "}
                    for everyone
                </h1>
                <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
                    Just hop in for a ride of fun. Meet new people and make new
                    friends. All on web3.
                </h2>
                <Link
                    className="flex flex-row bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                    href="/lobby"
                >
                    Start something fun{" "}
                    <ArrowUpRightIcon className="h-6 w-6 ml-1" />
                </Link>
                <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
                    <div className="flex flex-col space-y-10 mt-4 mb-16">
                        <div className="flex sm:space-x-8 sm:flex-row flex-col">
                            <div>
                                <Image
                                    alt="Original photo of a room with roomGPT.io"
                                    src="/1.webp"
                                    className="w-full object-cover h-96 rounded-2xl"
                                    width={400}
                                    height={400}
                                />
                                <h3 className="mt-2 font-medium text-lg">
                                    Huddle01
                                </h3>
                            </div>
                            <div className="sm:mt-0 mt-8">
                                <Image
                                    alt="Generated photo of a room with roomGPT.io"
                                    width={400}
                                    height={400}
                                    src="/fevm.png"
                                    className="w-full bg-gray-400 object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                                />
                                <h3 className="mt-2 font-medium text-lg">
                                    FEVM
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Testimonials /> */}
            <Footer />
        </div>
    );
};

export default Home;

