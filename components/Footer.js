import Image from "next/image";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="pt-[60px] pb-[60px] pl-8 pr-8 flex sm:flex-row flex-col justify-between items-center bg-white w-full">
      <div>
        <p className="cursor-pointer font-mono font-bold text-2xl text-teal-600">
          smart[target]
          {/* <span className="text-[#27875C]">.ai</span> */}
        </p>

        <div className="mt-8 flex space-x-10">
          <Image src={facebook} alt="facebook" className="w-[32px] h-[32px]" />
          <Image src={twitter} alt="facebook" className="w-[32px] h-[32px]" />
          <Image src={instagram} alt="facebook" className="w-[32px] h-[32px]" />
          <Image src={linkedin} alt="facebook" className="w-[32px] h-[32px]" />
        </div>
      </div>
      <p></p>
      <div className="sm:w-1/4 w-full">
        <p className="text-teal-600 text-sm mt-[80px] sm:text-left text-center">
          © 2023 Transawave Solutions Ltd (Company No.7167089). All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
