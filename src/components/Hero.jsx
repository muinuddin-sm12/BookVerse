import { Link } from "react-router-dom";
import hero_image from "../assets/images/Hero_image.png";
const Hero = () => {
  return (
    <div className="max-w-[1440px] flex justify-between items-center mx-auto px-4 md:px-[135px] rounded-3xl md:mb-10">
      <div className="bg-base-200 w-full flex flex-col-reverse md:flex-row gap-4 md:gap-0 py-6 md:py-0 items-center min-h-[554px] px-6 md:px-28 rounded-3xl">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedbooks" className="bg-[#23BE0A] px-5 py-2 text-lg font-semibold hover:bg-white hover:text-[#23BE0A] transition duration-300 border-[1px] hover:border-[#23BE0A] text-white rounded-md">
            View The List
          </Link>
        </div>
        <div>
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
