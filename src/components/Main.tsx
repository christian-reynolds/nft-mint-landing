import { useAsync } from 'react-async-hook';
import { useWeb3React } from "@web3-react/core";
import { providers } from "ethers";
import { useEffect, useState } from "react";
import Modal from "./common/Modal";
import { getChainId } from '../utils/web3';

function Main() {
    const { account, library } = useWeb3React<providers.Web3Provider>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useAsync(async () => {
        const chainId = await getChainId(library);
        (chainId === 4 ? setIsOpen(false) : setIsOpen(true));
    }, [library]);

    return (
        <>
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        {/* <p className="uppercase tracking-loose w-full">"Wen Moon?" you ask?</p> */}
                        {/* <h1 className="my-4 text-5xl font-bold leading-tight text-center">
                            
                        </h1> */}
                        <p className="leading-normal text-2xl mb-8 text-center">
                            <span className="text-yellow-300">"Wen Moon?"</span> you ask?<br />
                            You have landed at the right place fren!<br />
                            Welcome to the <span className="text-yellow-300">LFG Galactic Travel Agency</span><br />
                            We're here to help you travel to the edge of your imagination...<br />
                            Before departing, make sure your passport is valid, then LFG!!!!<br />
                            We only have room for 2300 travelers this season.<br />
                            <a href="https://opensea.io/collection/lfggta" target="_blank">https://opensea.io/collection/lfggta</a>
                        </p>
                        {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Subscribe
                        </button> */}
                    </div>
                    {/* Right Col */}
                    <div className="w-full md:w-3/5 py-6 justify-center flex">
                        <img className="w-full md:w-4/5" src="/img/circle.png" />
                    </div>
                </div>
            </div>
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Title
                    </h1>
                    <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                            xGETTING STARTED
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                            xGETTING STARTED
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                            xGETTING STARTED
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-end">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <p className="text-lg text-black">
                    Please connect your wallet!
                </p>
            </Modal>
        </>
    );
}

export default Main;
