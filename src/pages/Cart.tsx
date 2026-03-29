
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Echo Wireless Headphones",
    price: 4999,
    quantity: 1,
    image: "https://picsum.photos/id/20/400/400",
    color: "Black"
  },
  {
    id: 2,
    name: "Urban Sneakers",
    price: 2299,
    quantity: 2,
    image: "https://picsum.photos/id/21/400/400",
    color: "Navy"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 7499,
    quantity: 1,
    image: "https://picsum.photos/id/60/400/400",
    color: "Orange"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 299;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Your Cart</h1>
          <p className="text-zinc-600 mt-1">({cartItems.length} items)</p>
        </div>
        <Link 
          to="/shop" 
          className="text-[#00D4C8] hover:underline flex items-center gap-2 font-medium"
        >
          Continue Shopping
          <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-7">
          {cartItems.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-zinc-200 rounded-3xl">
              <ShoppingBag size={64} className="mx-auto text-zinc-300 mb-6" />
              <h3 className="text-2xl font-medium text-zinc-900 mb-3">Your cart is empty</h3>
              <p className="text-zinc-600 mb-8">Looks like you haven't added anything yet.</p>
              <Link 
                to="/shop"
                className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium inline-flex items-center gap-3"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-8 bg-white border border-zinc-100 rounded-3xl p-8"
                >
                  <div className="w-36 h-36 flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-xl leading-tight">{item.name}</h3>
                        {item.color && (
                          <p className="text-zinc-500 mt-1 text-sm">Color: {item.color}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 p-2 -mr-2 -mt-2"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center border border-zinc-200 rounded-2xl">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-5 py-3 hover:bg-zinc-100 rounded-l-2xl transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <div className="px-8 font-medium text-lg min-w-[40px] text-center">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-5 py-3 hover:bg-zinc-100 rounded-r-2xl transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-zinc-500">Unit Price</div>
                        <div className="font-semibold text-xl">₹{item.price}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-zinc-500">Subtotal</div>
                        <div className="font-semibold text-2xl">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-zinc-100 rounded-3xl p-10 sticky top-28">
            <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>

            <div className="space-y-5 mb-10">
              <div className="flex justify-between text-lg">
                <span className="text-zinc-600">Subtotal</span>
                <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-zinc-600">Shipping</span>
                <span className="font-medium">₹{shipping}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-zinc-600">Tax (12%)</span>
                <span className="font-medium">₹{tax}</span>
              </div>
              
              <div className="h-px bg-zinc-100 my-6" />
              
              <div className="flex justify-between text-2xl font-semibold">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code"
                  className="flex-1 border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8] text-sm"
                />
                <button 
                  className="bg-zinc-900 text-white px-10 rounded-2xl font-medium hover:bg-black transition-colors"
                  onClick={() => alert("Promo code applied (demo)")}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Button */}
            <Link 
              to="/checkout"
              className="block w-full bg-[#00D4C8] hover:bg-[#00B3A8] text-white text-center py-5 rounded-2xl font-semibold text-xl transition-colors mb-6"
            >
              Proceed to Checkout
            </Link>

            <div className="flex items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-px bg-zinc-300" />
                Secure checkout
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-px bg-zinc-300" />
                30-day returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;