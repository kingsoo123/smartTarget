import Image from "next/image";
import hero from "../assets/hero2.jpg";
const Hero = () => {
  return (
    <div className="flex w-full p-5 justify-between items-center mt-[100px]">
      <div className="sm:w-1/2 w-full sm:h-[600px] flex justify-center sm:items-center sm:pl-[100px]">
        <div className="mt-[100px]">
          <p className="text-teal-600 text-4xl font-bolder font-mono tracking-widest leading-[60px]">
            AI POWERED <br />
            DIGITAL MARKETING <br /> FORECASTER...
          </p>
          <p className="sm:w-3/4 tracking-widest text-sm font-thin">
            Leveraging the power of AI to boost your digital margketing
            presence. All fashioned to meet your specific niche.
          </p>
          <div className="mt-4 space-x-6">
            <button className="border border-teal-600 rounded-md p-2 cursor-pointer">
              Try now
            </button>
            <button className="border border-teal-600 rounded-md p-2 cursor-pointer">
              See pricing
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 sm:h-[500px] sm:flex justify-center items-center">
        <Image
          src={hero}
          alt="hero"
          className="w-[90%] h-[100%] rounded-[10%]"
        />
      </div>
    </div>
  );
};

export default Hero;
