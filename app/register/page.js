import Image from "next/image";
import hide from "../../assets/hide.png";
import show from "../../assets/visible.png";
const Register = () => {
  return (
    <div className="w-full flex">
      <div className="sm:w-[50%] w-full bg-white h-screen flex justify-center items-center">
        <div className="w-[80%] h-[70%]">
          <p className="cursor-pointer font-mono font-bold text-2xl text-black">
            smart[target]
            {/* <span className="text-[#27875C]">.ai</span> */}
          </p>
          <p className="text-black mt-8 font-mono font-bold">
            Create an Account with us!
          </p>
          <div className="w-full bg-teal-600 h-1"></div>
          <div className="w-full flex sm:flex-row flex-col justify-between items-center mt-8 sm:space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="border border-teal-600 rounded-lg p-2 sm:w-1/2 w-full h-[50px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-teal-600 rounded-lg p-2 sm:w-1/2 w-full h-[50px] sm:mt-0 mt-4"
            />
          </div>
          <div className="w-full flex  justify-between items-center sm:mt-8 mt-4 space-x-2">
            <input
              type="text"
              placeholder="Business Name"
              className="border border-teal-600 rounded-lg p-2 w-full h-[50px]"
            />
          </div>
          <div className="w-full flex sm:flex-row flex-col justify-between items-center sm:mt-8 mt-4 sm:space-x-2">
            <input
              type="text"
              placeholder="Email"
              className="border border-teal-600 rounded-lg p-2 sm:w-1/2 w-full h-[50px]"
            />
            <div className="flex justify-between items-center border border-teal-600 rounded-lg sm:w-1/2 w-full h-[50px] sm:mt-0 mt-4 pr-4 pl-2">
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
          <p className="text-black mt-8 font-mono font-thin text-sm">
            I have read and agree to Valley Pay’s Terms of Service and Privacy
            Policy.
          </p>
          <button className="w-[100%] bg-teal-600 rounded-md p-2 cursor-pointer mt-8 h-[50px] text-white font-bold">
            Sign Up
          </button>
        </div>
      </div>
      <div className="hidden w-[50%] h-screen sm:flex justify-center items-center">
        <div className="w-[60%] h-[50%] bg-teal-600 flex justify-center items-center rounded-md">
          <ul class="list-disc leading-10">
            <li>Atleast one uppercase</li>
            <li>Atleast one lowercase</li>
            <li>Atleast one number</li>
            <li>Atleast one special characters</li>
            <li>Atleast 8 characters long</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
