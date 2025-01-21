
import { CartItem } from "../types";

interface CartProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
              <p className="text-gray-600">Price: ${item.price}</p>
              <div className="mt-2">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border rounded"
                  min="1"
                />
              </div>
            </div>
          ))}
          <div className="mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;