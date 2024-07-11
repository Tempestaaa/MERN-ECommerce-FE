import new_collections from "../assets/Frontend_Assets/new_collections";
import Product from "./Product";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-2 container mx-auto px-4 py-12 pb-28">
      <h1 className="text-5xl font-semibold uppercase">New collections</h1>
      <hr className="w-52 h-[6px] rounded-xl bg-neutral" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-12 w-full">
        {new_collections.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
