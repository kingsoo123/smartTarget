const BuyCard = ({ premiumType, yearly }) => {
  console.log(yearly);
  return (
    <>
      <div className="border border-gray-400 w-[25%] h-[400px] rounded-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <p className="font-bold font-mono text-2xl">{premiumType}</p>
            <p className="text-[12px] text-gray-400">Only 1 user</p>
          </div>
          <div>
            <span className="flex items-center">
              <p className="font-bold font-mono text-2xl">$24</p>
              <span>/{yearly ? "yr" : "mon"}</span>
            </span>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-400"></div>
        <div className="w-full p-8">
          <ul className="list-disc">
            <li>Now</li>
            <li>Now</li>
            <li>Now</li>
            <li>Now</li>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="w-[80%] p-2 cursor-pointer hover:bg-teal-600">
            Start Free Trial
          </button>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <button className="w-[80%] border border-teal-600 rounded-md p-2 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyCard;
