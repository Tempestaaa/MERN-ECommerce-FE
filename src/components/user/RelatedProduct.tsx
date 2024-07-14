const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-10">
      <h1 className="font-semibold text-3xl">Related Products</h1>
      <hr className="w-52 h-[6px] rounded-xl bg-neutral" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-12 w-full">
        {/* {data_product.map((item) => (
          <Product key={item._id} item={item} />
        ))} */}
      </div>
    </div>
  );
};

export default RelatedProduct;
