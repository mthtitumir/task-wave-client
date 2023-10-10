import Button from "../Button/Button";
import "./HomeBanner.css";
import { GiStarShuriken, GiRoundStar } from "react-icons/gi";
const HomeBanner = () => {
  return (
    <div className="h-fit py-10  ">
      <div className="flex items-center flex-col space-y-10 relative ">
        <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute top-8 left-96" />
        <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute top-12 right-96" />
        <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute bottom-28 left-[500px]" />
        <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute bottom-36 right-[500px]" />
        <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute bottom-96 right-[500px]" />
        <div className="glow-bg-2"></div>
        <span className="text-4xl  text-center space-y-2 bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#f9ff40] leading-10">
          <p>Simplified Productivity App</p> <p>To Track All Your Tasks</p>
        </span>
        <p className="text-center text-white">
          Task-Wave Is Hub For Managing Productivity Tasks <br /> Professionally
          And Efficiently
        </p>

        <div className="space-y-2">
          <Button>Get Started</Button>
          <p>
            <span className="text-white">Already Using Task-Wave?</span>{" "}
            <span className="text-[#ff2d60] cursor-pointer">Sign In</span>
          </p>
        </div>
        <div className="flex flex-col w-full lg:flex-row justify-center">
          <div className="flex gap-5 border border-t-0 border-l-0 border-b-0 border-r-2 border-gray-400 px-5 mr-5">
            <div className="flex items-start">
              <img
                src="https://i.ibb.co/WgXHXF7/paul.jpg"
                className="w-12 h-12 rounded-full relative left-10 z-10"
                alt=""
              />
              <img
                src="https://i.ibb.co/PDQcrJJ/sam.jpg"
                className="w-12 h-12 rounded-full relative left-5"
                alt=""
              />
              <img
                src="https://i.ibb.co/7Vfv2XQ/saif.jpg"
                className="w-12 h-12 rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-bold">2,221</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <p className="text-white text-3xl font-bold">4.8/5</p>
            <p className=" flex gap-2">
              <div className="flex items-center">
                <GiRoundStar className="text-white text-lg" />
                <GiRoundStar className="text-white text-lg" />
                <GiRoundStar className="text-white text-lg" />
                <GiRoundStar className="text-white text-lg" />
                <GiRoundStar className="text-gray-500 text-lg" />
              </div>
              <p className="text-gray-400">Rating</p>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-white">Trusted By 20000+ Clients</p>
          <div className="flex items-center">
            <GiRoundStar className="text-pink-500 text-lg" />
            <GiRoundStar className="text-pink-500 text-lg" />
            <GiRoundStar className="text-pink-500 text-lg" />
            <GiRoundStar className="text-pink-500 text-lg" />
            <GiRoundStar className="text-gray-500 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;