import Image from "next/image";

const AboutCard = ({ imgOne, contentOne, titleOne }) => {
  return (
    <div className="w-[25%] h-[450px] bg-teal-600 rounded-xl">
      <div className="w-full h-1/2 flex justify-center items-center">
        <Image src={imgOne} alt="one" className="w-3/4 h-3/4 rounded-xl" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/4 h-1 bg-white" />
      </div>
      <div className="w-full flex justify-center items-center mt-[30px]">
        <p className="text-3xl">{titleOne}</p>
      </div>
      <div className="w-full flex justify-center items-center mt-[30px]">
        <p className="text-center text-sm">{contentOne}</p>
      </div>
    </div>
  );
};

export default AboutCard;
