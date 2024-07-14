import { ShoppingCart, Star } from "lucide-react";
import { Product } from "../../types/product.type";

type Props = {
  product: Product | undefined;
};

const sizes = ["S", "M", "L", "X", "XL", "XXL"];

function ProductDisplay({ product }: Props) {
  return (
    <div className="flex gap-8">
      {/* LEFT */}
      {/* <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img
            src={product?.image as string}
            alt="Image"
            className="h-36 max-h-36 aspect-square"
          />
          <img
            src={product?.image as string}
            alt="Image"
            className="h-36 max-h-36 aspect-square"
          />
          <img
            src={product?.image as string}
            alt="Image"
            className="h-36 max-h-36 aspect-square"
          />
          <img
            src={product?.image as string}
            alt="Image"
            className="h-36 max-h-36 aspect-square"
          />
        </div>
        <div className="">
          <img
            src={product?.image as string}
            alt="Image"
            className="w-[500px] h-[624px]"
          />
        </div>
      </div> */}

      {/* RIGHT */}
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">{product?.name}</h1>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="#eab308"
              className="text-yellow-500"
              size={32}
            />
          ))}
          <p>( 122 )</p>
        </div>

        <div className="flex gap-8 font-bold text-2xl">
          <div className="line-through text-neutral-content">
            ${product?.oldPrice}
          </div>
          <div className="text-error">${product?.newPrice}</div>
        </div>

        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate
          eligendi repellendus quo magni cumque consequuntur possimus qui
          expedita molestiae harum hic aperiam similique, voluptate fugit
          necessitatibus suscipit eius ab.
        </p>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tighter">
            Select Size
          </h1>
          <div className="flex items-center gap-2">
            {sizes.map((size) => (
              <label key={size} className="flex items-center gap-1">
                <input type="radio" className="peer sr-only" name="size" />
                <span className="border rounded-md px-3 py-1 peer-checked:border-neutral peer-checked:font-bold cursor-pointer">
                  {size}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn btn-error text-white self-start px-16">
          <ShoppingCart />
          <span className="capitalize">Add to cart</span>
        </button>
        <div className="text-sm">
          <p>
            <span className="font-bold">Category:</span> Women, T-Shirt, Croptop
          </p>
          <p>
            <span className="font-bold">Tags: </span>Modern, Lastest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
