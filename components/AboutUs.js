import AboutCard from "./AboutCard";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white pb-[60px] pt-[60px] w-full">
      <div className="flex w-full p-5 justify-center items-center">
        <p className="text-teal-600">Our strategy</p>
      </div>
      <div className="flex w-full p-5 justify-center items-center mt-[20px]">
        <p className="text-teal-600 text-4xl sm:w-1/2 w-full text-center">
          Recognise your target client, specify your value offer, and receive
          <span className="underline ml-1 decoration-teal-600">
            customised
          </span>{" "}
          marketing suggestions.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col w-full p-5 justify-center items-center mt-[20px] sm:space-x-4">
        <AboutCard
          imgOne={one}
          titleOne={"Content Marketing"}
          contentOne={
            "We use analytics tools to track the performance of your marketing efforts. This includes website analytics, social media insights, and other key performance indicators (KPIs)."
          }
        />
        <AboutCard
          imgOne={two}
          titleOne={"Budgeting"}
          contentOne={
            "Our ai tool helps to detect how much to allocate budget for your marketing activities. Consider both online and offline channels, and ensure that your budget aligns with your overall business goals."
          }
        />
        <AboutCard
          imgOne={three}
          titleOne={"Adapt and Iterate"}
          contentOne={
            "With our ai tool you can review and adapt your marketing strategy based on changes in the market, customer feedback, and the performance of your campaigns."
          }
        />
      </div>
    </div>
  );
};

export default AboutUs;
