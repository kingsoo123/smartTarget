import Image from "next/image";
import hide from "../../assets/hide.png";
import show from "../../assets/visible.png";
import login from "../../assets/login.jpg";
const SignIn = () => {
  return (
    <div className="w-full flex">
      <div className="sm:w-[50%] w-full bg-white h-screen flex justify-center items-center">
        <div className="sm:w-[80%] w-[90%] h-[70%]">
          <p className="cursor-pointer font-mono font-bold text-2xl text-black">
            smart[target]
            {/* <span className="text-[#27875C]">.ai</span> */}
          </p>
          <p className="text-black mt-8 font-mono font-bold">
            Sign into your Account!
          </p>
          <div className="w-full bg-teal-600 h-1"></div>

          <div className="w-full flex sm:flex-row flex-col justify-between items-center mt-8 sm:space-x-2">
            <input
              type="text"
              placeholder="Email"
              className="border border-teal-600 rounded-lg p-2 sm:w-1/2 w-full h-[50px]"
            />
            <div className="flex justify-between items-center border border-teal-600 rounded-lg sm:w-1/2 w-full h-[50px] pr-4 pl-2 sm:mt-0 mt-2">
              <input
                type="text"
                placeholder="Password"
                className="p-2 h-[45px]"
              />
              <Image
                src={hide}
                alt="eyeIcon"
                width={20}
                className="cursor-pointer"
              />
            </div>
          </div>

          <button className="w-[100%] bg-teal-600 rounded-md p-2 cursor-pointer mt-8 h-[50px] text-white font-bold">
            Sign In
          </button>
        </div>
      </div>
      <div className="hidden w-[50%] h-screen sm:flex justify-center items-center">
        <div className="w-[80%] h-[50%] bg-teal-600 rounded-md">
          <Image src={login} alt="login" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
