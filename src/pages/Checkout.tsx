
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building, Truck } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Echo Wireless Headphones", price: 4999, quantity: 1, image: "https://picsum.photos/id/20/120/120" },
  { id: 2, name: "Urban Sneakers", price: 2299, quantity: 2, image: "https://picsum.photos/id/21/120/120" },
  { id: 3, name: "Smart Fitness Watch", price: 7499, quantity: 1, image: "https://picsum.photos/id/60/120/120" },
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking' | 'cod'>('card');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 299;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + tax;

  const [formData, setFormData] = useState({
    fullName: "Jebin",
    phone: "+91 98765 43210",
    address: "123 MG Road, Panampilly Nagar",
    city: "Kochi",
    state: "Kerala",
    pincode: "682036",
    country: "India"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-10">
        <Link to="/cart" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900">
          <ArrowLeft size={20} />
          Back to Cart
        </Link>
        <span className="text-zinc-300">•</span>
        <span className="font-medium">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Shipping & Payment Form */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-semibold tracking-tight mb-10">Checkout</h1>

          {/* Shipping Information */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Truck size={26} />
              Shipping Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-zinc-600 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00D4C8]"
                />
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">Delivery Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[#00D4C8] rounded-3xl p-8 cursor-pointer">
                <div className="font-medium text-lg mb-1">Standard Delivery</div>
                <div className="text-emerald-600 text-sm">2-5 business days • Free for orders above ₹2000</div>
                <div className="text-2xl font-semibold mt-6">₹299</div>
              </div>
              <div className="border border-zinc-200 rounded-3xl p-8 cursor-pointer hover:border-zinc-300">
                <div className="font-medium text-lg mb-1">Express Delivery</div>
                <div className="text-emerald-600 text-sm">Next day delivery</div>
                <div className="text-2xl font-semibold mt-6">₹799</div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Payment Method</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-3 transition-all ${paymentMethod === 'card' ? 'border-[#00D4C8] bg-[#00D4C8]/5' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <CreditCard size={32} className={paymentMethod === 'card' ? 'text-[#00D4C8]' : 'text-zinc-400'} />
                <span className="font-medium">Card</span>
              </button>

              <button 
                onClick={() => setPaymentMethod('upi')}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-3 transition-all ${paymentMethod === 'upi' ? 'border-[#00D4C8] bg-[#00D4C8]/5' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <Smartphone size={32} className={paymentMethod === 'upi' ? 'text-[#00D4C8]' : 'text-zinc-400'} />
                <span className="font-medium">UPI</span>
              </button>

              <button 
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-3 transition-all ${paymentMethod === 'netbanking' ? 'border-[#00D4C8] bg-[#00D4C8]/5' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <Building size={32} className={paymentMethod === 'netbanking' ? 'text-[#00D4C8]' : 'text-zinc-400'} />
                <span className="font-medium">Net Banking</span>
              </button>

              <button 
                onClick={() => setPaymentMethod('cod')}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-3 transition-all ${paymentMethod === 'cod' ? 'border-[#00D4C8] bg-[#00D4C8]/5' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <Truck size={32} className={paymentMethod === 'cod' ? 'text-[#00D4C8]' : 'text-zinc-400'} />
                <span className="font-medium">Cash on Delivery</span>
              </button>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === 'card' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-2">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full border border-zinc-200 rounded-2xl px-6 py-4" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Expiry Date</label>
                    <input type="text" placeholder="MM / YY" className="w-full border border-zinc-200 rounded-2xl px-6 py-4" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">CVV</label>
                    <input type="text" placeholder="123" className="w-full border border-zinc-200 rounded-2xl px-6 py-4" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-12 text-center">
                <div className="mx-auto w-40 h-40 bg-white rounded-2xl flex items-center justify-center border mb-6">
                  <span className="text-6xl">📱</span> {/* Placeholder - can replace with real QR later */}
                </div>
                <p className="font-medium">Scan QR code with any UPI app</p>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-zinc-100 rounded-3xl p-10 sticky top-28">
            <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>

            <div className="space-y-6 mb-10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-2xl"
                  />
                  <div className="flex-1">
                    <p className="font-medium leading-tight">{item.name}</p>
                    <p className="text-sm text-zinc-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-right">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-lg">
              <div className="flex justify-between">
                <span className="text-zinc-600">Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">Tax (12%)</span>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="h-px bg-zinc-100 my-8" />

            <div className="flex justify-between text-2xl font-semibold mb-10">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button 
              onClick={() => alert("Order placed successfully! (Demo)")}
              className="w-full bg-[#00D4C8] hover:bg-[#00B3A8] text-white py-5 rounded-2xl font-semibold text-xl transition-colors"
            >
              Place Order • ₹{total.toLocaleString('en-IN')}
            </button>

            <p className="text-center text-xs text-zinc-500 mt-8">
              Your data is protected. Secure checkout powered by NovaStore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;