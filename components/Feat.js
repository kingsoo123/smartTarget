import FeatCard from "./FeatCard";

const Feat = () => {
  return (
    <div className="pt-[60px] pb-[60px]">
      <div className="flex w-full p-5 justify-center items-center">
        <p className="text-teal-600">Our feat</p>
      </div>
      <div className="flex w-full p-5 justify-center items-center space-x-11">
        <FeatCard total={"24k"} text={"Number of Users"} />
        <FeatCard total={"80%"} text={"Accuracy with our calculations"} />
        <FeatCard total={"9/10"} text={"Success rate so far"} />
      </div>
    </div>
  );
};

export default Feat;
