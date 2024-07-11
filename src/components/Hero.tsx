import hand_icon from "../assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../assets/Frontend_Assets/arrow.png";
import hero_image from "../assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b from-pink-200">
      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center gap-5 lg:pl-24 leading-tight items-center lg:items-start">
        <h2 className="text-2xl font-semibold">New arrivals only</h2>
        <div className="">
          <div className="flex items-center gap-5">
            <p className="text-7xl font-bold">New</p>
            <img src={hand_icon} alt="Hand icon" className="w-24" />
          </div>
          <p className="text-7xl font-bold">collections</p>
          <p className="text-7xl font-bold">for everyone</p>
        </div>

        <button className="flex items-center justify-center gap-4 rounded-3xl text-xl font-medium bg-error lg:self-start btn px-10">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_image} alt="Hero image" className="w-[60%]" />
      </div>
    </div>
  );
};

export default Hero;
