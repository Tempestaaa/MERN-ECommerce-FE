import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="h-[60svh] container mx-auto px-36 py-12 flex bg-gradient-to-b from-purple-200">
      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center font-semibold gap-4 tracking-tighter">
        <h1 className="text-6xl">Exclusive</h1>
        <h1 className="capitalize text-6xl ">Offers for you</h1>
        <p className="uppercase text-lg">only on best seller</p>
        <button className="btn btn-error text-white font- self-start px-12">
          Check now
        </button>
      </div>
      {/* RIGHT */}
      <div className="flex-1 flex items-center justify-end pt-12">
        <img src={exclusive_image} alt="Exclusive Image" className="h-full" />
      </div>
    </div>
  );
};

export default Offers;
