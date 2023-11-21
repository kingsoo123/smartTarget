const Subscribe = () => {
  return (
    <div className="pt-[60px] pb-[60px] w-full">
      <div className="flex w-full p-5 justify-center items-center">
        <p className=" text-teal-600">Our Newsletter</p>
      </div>
      <div className="flex w-full p-5 justify-center items-center">
        <p className="text-2xl text-white text-center">
          Get limited edition of our amazing insight for your business growth
        </p>
      </div>
      <div className="flex w-full p-5 sm:justify-center justify-between items-center">
        <div className="sm:w-3/4 w-full flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Email"
            className="p-2 h-[50px] w-3/4 rounded-md border border-teal-600"
          />
          <button className="bg-teal-600 rounded-md p-2 cursor-pointer h-[50px] text-white font-bold ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
