
import { useState } from 'react';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  LogOut, 
  Edit3 
} from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'addresses' | 'payments'>('profile');

  const sidebarItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
  ];

  // Mock data
  const recentOrders = [
    {
      id: "NS-784392",
      date: "March 28, 2026",
      status: "Delivered",
      total: 18423,
      items: 3
    },
    {
      id: "NS-784291",
      date: "March 15, 2026",
      status: "In Transit",
      total: 7499,
      items: 1
    },
    {
      id: "NS-784105",
      date: "March 2, 2026",
      status: "Delivered",
      total: 2299,
      items: 2
    }
  ];

  const wishlistItems = [
    { id: 101, name: "Minimal Desk Lamp", price: 1299, image: "https://picsum.photos/id/106/300/300" },
    { id: 102, name: "Leather Backpack", price: 4199, image: "https://picsum.photos/id/180/300/300" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">My Account</h1>
          <p className="text-zinc-600 mt-2">Welcome back, Jebin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-zinc-100 rounded-3xl p-6 sticky top-28">
            <div className="flex items-center gap-4 mb-10 px-3">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center">
                <User size={32} className="text-zinc-600" />
              </div>
              <div>
                <div className="font-semibold text-xl">Jebin</div>
                <div className="text-sm text-zinc-500">jebin@example.com</div>
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all ${
                      activeTab === item.id 
                        ? 'bg-[#00D4C8] text-white' 
                        : 'hover:bg-zinc-100 text-zinc-700'
                    }`}
                  >
                    <Icon size={22} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}

              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left text-red-600 hover:bg-red-50 mt-6">
                <LogOut size={22} />
                <span className="font-medium">Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9">
          <div className="bg-white border border-zinc-100 rounded-3xl p-10">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h2 className="text-3xl font-semibold">Profile Information</h2>
                    <p className="text-zinc-600 mt-2">Manage your personal details</p>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-2xl hover:bg-zinc-50">
                    <Edit3 size={20} />
                    Edit Profile
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Full Name</label>
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-lg">Jebin Joseph</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Email Address</label>
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-lg">jebin@example.com</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Phone Number</label>
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-lg">+91 98765 43210</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Member Since</label>
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-lg">March 2026</div>
                  </div>
                </div>
              </div>
            )}

            {/* My Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-3xl font-semibold mb-10">My Orders</h2>
                <div className="space-y-6">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-zinc-100 rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-8">
                      <div className="flex-1">
                        <div className="font-mono text-sm text-zinc-500">Order #{order.id}</div>
                        <div className="font-medium mt-1">{order.date}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-zinc-500">Items</div>
                        <div className="font-medium">{order.items} products</div>
                      </div>
                      <div className="flex-1">
                        <div className={`inline-flex px-5 py-2 rounded-full text-sm font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {order.status}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zinc-500">Total</div>
                        <div className="font-semibold text-2xl">₹{order.total.toLocaleString('en-IN')}</div>
                      </div>
                      <button className="px-8 py-4 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-50 whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div>
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-3xl font-semibold">Wishlist ({wishlistItems.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border border-zinc-100 rounded-3xl overflow-hidden flex">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-40 h-40 object-cover"
                      />
                      <div className="p-8 flex-1">
                        <h3 className="font-medium text-xl">{item.name}</h3>
                        <div className="text-2xl font-semibold mt-4">₹{item.price}</div>
                        <button className="mt-8 bg-zinc-900 text-white px-8 py-3 rounded-2xl text-sm font-medium hover:bg-black">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses & Payment Tabs */}
            {(activeTab === 'addresses' || activeTab === 'payments') && (
              <div className="text-center py-32">
                <div className="mx-auto w-20 h-20 bg-zinc-100 rounded-3xl flex items-center justify-center mb-6">
                  {activeTab === 'addresses' ? <MapPin size={40} /> : <CreditCard size={40} />}
                </div>
                <h3 className="text-2xl font-medium text-zinc-900">Coming Soon</h3>
                <p className="text-zinc-600 mt-3 max-w-xs mx-auto">
                  {activeTab === 'addresses' 
                    ? "Address management feature will be available in the next update." 
                    : "Payment methods management coming soon."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;