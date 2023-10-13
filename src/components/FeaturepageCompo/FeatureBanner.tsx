import { useTypewriter, Cursor } from "react-simple-typewriter"

const FeatureBanner = () => {


    const [text] = useTypewriter({
        words: ["Productibity With Powerful Work Management"],
        loop: 0,
        typeSpeed: 180,
        deleteSpeed: 50
    })

    return (


        <div className="mx-auto">

            {/* feature banner */}
            <div className="flex gap-4 bg-black  items-center py-20 px-20">
                <div className="w-[50%]">
                    <div>
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r text-transparent bg-clip-text from-[#f46b30] to-[#3977f3]  font-primary pb-6">Faster {text} <span className="text-pink-800">
                            <Cursor cursorStyle="|"></Cursor>
                        </span></h1>

                        <p className="mb-8 text-2xl text-orange-600">With a Universal Work managment proccess that covers <br />everythings wall to wall. Wrike lightspeed has all the feature as you need</p>
                    </div>
                    <div className="flex items-center gap-4">

                        <button className="bg-gradient-to-r text-transparent bg-clip-text from-[#c23e05fd] to-[#f33949ef]  font-primary px-6 py-4 border border-orange-700 rounded-md shadow-md hover:scale-105 duration-500">Book My Demo</button>

                       
                        <h1 className=" text-pink-700">See wrike Lightspeed Action</h1>
                    </div>

                </div>
                <div className="w-[50%] shadow-slate-100 p-24">
                    <img className="border rounded-2xl shadow-md hover:scale-105 duration-500 " src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80/tp/storage/uploads/d20022b0-6511-4f2e-91dd-c20fb3ff3cbc/video-preview-features-demo.png" alt="" />

                </div>
            </div>



        </div>
    );
};

export default FeatureBanner;