import { useEffect } from "react";

function Main() {
    useEffect(() => {
        const onScroll: EventListener = (event: Event) => {
            console.log('event: ', window.scrollY);

            let scrollpos = window.scrollY;            
            var header = document.getElementById("header");
            var navcontent = document.getElementById("nav-content");
            var navaction = document.getElementById("navAction");
            var toToggle = document.querySelectorAll(".toggleColour");
        
            if (scrollpos > 10) {
                header!.classList.add("bg-white");
                navaction!.classList.remove("bg-white");
                navaction!.classList.add("gradient");
                navaction!.classList.remove("text-gray-800");
                navaction!.classList.add("text-white");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }
                header!.classList.add("shadow");
                navcontent!.classList.remove("bg-gray-100");
                navcontent!.classList.add("bg-white");
            } else {
                header!.classList.remove("bg-white");
                navaction!.classList.remove("gradient");
                navaction!.classList.add("bg-white");
                navaction!.classList.remove("text-white");
                navaction!.classList.add("text-gray-800");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                header!.classList.remove("shadow");
                navcontent!.classList.remove("bg-white");
                navcontent!.classList.add("bg-gray-100");
            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

    return (
        <>
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p className="uppercase tracking-loose w-full">What business are you?</p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                            Main Hero Message to sell yourself!
                        </h1>
                        <p className="leading-normal text-2xl mb-8">
                            Sub-hero message, not too long and not too short. Make it just right!
                        </p>
                        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Subscribe
                        </button>
                    </div>
                    {/* Right Col */}
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img className="w-full md:w-4/5 z-50" src="/img/hero.png" />
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
        </>
    );
}

export default Main;
