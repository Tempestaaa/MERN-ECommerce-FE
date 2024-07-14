import Input from "../commons/Input";

const CartItems = () => {
  return (
    <div className="w-full px-2 h-[calc(100svh-68px)] container mx-auto flex gap-4">
      {/* <table className="table shadow-md h-fit">
        <thead className="bg-neutral text-neutral-content">
          <tr className="text-center">
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody className="font-medium">
          {shopContext?.all_product.map((item) => {
            if (shopContext.cartItems[Number(item._id)] > 0) {
              return (
                <tr key={item._id} className="hover text-center">
                  <th>
                    <div className="w-20 aspect-square">
                      <img src={item.image as string} alt="Product Image" />
                    </div>
                  </th>
                  <td>{item.name}</td>
                  <td>${item.newPrice}</td>
                  <td>
                    <button className="btn border-neutral bg-transparent">
                      {shopContext.cartItems[Number(item._id)]}
                    </button>
                  </td>
                  <td>
                    ${item.newPrice * shopContext.cartItems[Number(item._id)]}
                  </td>
                  <th>
                    <button
                      onClick={() =>
                        shopContext.removeFromCart(Number(item._id))
                      }
                    >
                      <X className="text-red-500" />
                    </button>
                  </th>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table> */}

      <div className="w-1/3 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1>Cart Total</h1>
          <div>
            <div className="flex flex-col gap-2">
              <p>Subtotal</p>
              <p>$0</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h3>Total</h3>
              <h3>$0</h3>
            </div>
          </div>
          <button className="btn btn-error text-white mt-4">
            Proceed to Checkout
          </button>
        </div>

        <div className="">
          <p>If you have promo code. Enter it here</p>
          <div className="flex items-end gap-2">
            <Input />
            <button className="btn btn-neutral">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
