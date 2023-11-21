import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full p-5 h-[60px] flex justify-between items-center">
      <p className="cursor-pointer font-mono font-bold text-2xl">
        smart[target]
        {/* <span className="text-[#27875C]">.ai</span> */}
      </p>
      <div className="hidden sm:flex space-x-14 text-sm">
        <p className="cursor-pointer font-mono hover:text-teal-600">
          Target Audience
        </p>

        <p className="cursor-pointer font-mono hover:text-teal-600">
          Business Ideas
        </p>

        <p className="cursor-pointer font-mono hover:text-teal-600">
          Marketing Plan
        </p>
        <Link
          href="/pricing"
          className="cursor-pointer font-mono hover:text-teal-600"
        >
          Pricing
        </Link>
      </div>

      <div className="hidden sm:flex space-x-5 text-sm">
        <Link
          href="/signin"
          className="cursor-pointer p-1 rounded-md hover:border border-teal-600 font-mono"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="cursor-pointer p-1 rounded-md hover:border border-teal-600 font-mono"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
