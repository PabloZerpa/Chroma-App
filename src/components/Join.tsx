
import Image from 'next/image';

import image1 from '../../public/img-join.jpg';
import googlePlay from '../../public/google-play.png';
import chromeStore from '../../public/chrome-store.png';

function Join() {

    return (

        <div className="flex w-full">

            <div className="flex justify-center items-center gap-2 md:gap-8 rounded-lg w-full h-[70vh] mx-8 px-4 bg-zinc-900">
                
                <Image className="w-64 md:w-80 rounded-lg"  src={image1} alt="img" />

                <div className="flex flex-col items-center gap-4 text-center w-1/2">

                    <h1 className="text-xl md:text-3xl text-zinc-200 font-bold">Download the App</h1>
                    <span className="text-base md:text-lg text-zinc-300">The App provides an awesome browsing and discovery experience</span>

                    <div className="flex flex-col md:flex-row gap-4">

                        <div className="flex justify-center items-center gap-2 w-40 h-14 bg-zinc-700 hover:bg-zinc-600 bg-zinc-600 text-zinc-200 rounded cursor-pointer">
                            <Image className="w-8" src={googlePlay} alt="img" />
                            <div className="flex flex-col">
                                <span className="text-xs">Download on the</span>
                                <span className="text-base font-bold">Google Play</span>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 w-40 h-14 bg-zinc-700 hover:bg-zinc-600 bg-zinc-600 text-zinc-200 rounded cursor-pointer">
                            <i className="fab fa-apple text-white text-4xl"></i>
                            <div className="flex flex-col">
                                <span className="text-xs">Download on the</span>
                                <span className="text-base font-bold">App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 w-48 md:w-64 h-14 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded cursor-pointer">
                        <Image className="w-8" src={chromeStore} alt="img" />
                        <div className="flex flex-col">
                            <span className="text-xs">Download on the</span>
                            <span className="text-base font-bold">Chrome Web Store</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join