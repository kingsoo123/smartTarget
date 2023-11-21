import Image from "next/image";
import hero from "../assets/hero2.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex w-full p-5 justify-between items-center mt-[100px]">
      <div className="sm:w-1/2 w-full sm:h-[600px] flex justify-center sm:items-center sm:pl-[100px]">
        <div className="mt-[100px]">
          <p className="text-teal-600 text-4xl font-bolder font-mono tracking-widest leading-[60px] sm:text-left text-center">
            AI POWERED <br />
            DIGITAL MARKETING <br /> FORECASTER...
          </p>
          <p className="sm:w-3/4 tracking-widest text-sm font-thin sm:text-left text-center mt-8">
            Leveraging the power of AI to boost your digital margketing
            presence. All fashioned to meet your specific niche.
          </p>
          <div className="w-full mt-8 space-x-6 flex sm:justify-start justify-center items-center">
            <button className="border border-teal-600 rounded-md p-2 cursor-pointer">
              <Link href="/signin"> Try now</Link>
            </button>
            <button className="border border-teal-600 rounded-md p-2 cursor-pointer">
              <Link href="/pricing">See pricing</Link>
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
