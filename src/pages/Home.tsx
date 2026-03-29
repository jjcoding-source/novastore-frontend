
import { 
  ShoppingBag, 
  Star, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Electronics", icon: ShoppingBag },
  { name: "Fashion", icon: ShoppingBag },
  { name: "Home & Living", icon: ShoppingBag },
  { name: "Sports", icon: ShoppingBag },
  { name: "Beauty", icon: ShoppingBag },
  { name: "Accessories", icon: ShoppingBag },
];

const trendingProducts = [
  {
    id: 1,
    name: "Echo Wireless Headphones",
    price: 4999,
    rating: 4.9,
    image: "https://picsum.photos/id/20/400/400",
  },
  {
    id: 2,
    name: "Urban Sneakers",
    price: 2299,
    rating: 4.8,
    image: "https://picsum.photos/id/21/400/400",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 7499,
    rating: 4.7,
    image: "https://picsum.photos/id/60/400/400",
  },
  {
    id: 4,
    name: "Minimal Desk Lamp",
    price: 1299,
    rating: 4.6,
    image: "https://picsum.photos/id/106/400/400",
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative h-screen bg-zinc-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold text-white leading-tight mb-6 tracking-tighter">
              Discover Premium<br />Products That Inspire
            </h1>
            <p className="text-xl text-zinc-300 mb-10">
              Shop the latest in tech, fashion &amp; home with exceptional quality and design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop"
                className="bg-[#00D4C8] hover:bg-[#00B3A8] text-white px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all text-lg"
              >
                Shop Now
                <ArrowRight size={24} />
              </Link>
              
              <button className="border border-white/70 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-medium text-lg transition-all">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 mt-16 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-white/50" />
                <span className="text-sm tracking-widest">VISA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-white/50" />
                <span className="text-sm tracking-widest">MASTERCARD</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-white/50" />
                <span className="text-sm tracking-widest">PAYPAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">Featured Categories</h2>
              <p className="text-zinc-600 mt-2">Explore our best collections</p>
            </div>
            <Link to="/shop" className="text-[#00D4C8] hover:underline flex items-center gap-2 font-medium">
              View All
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-zinc-100 rounded-3xl p-8 hover:border-[#00D4C8]/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-zinc-100 group-hover:bg-[#00D4C8]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                    <IconComponent size={40} className="text-zinc-400 group-hover:text-[#00D4C8]" />
                  </div>
                  <h3 className="font-semibold text-xl text-zinc-900">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">Trending Products</h2>
              <p className="text-zinc-600 mt-2">Most popular this week</p>
            </div>
            <Link to="/shop" className="text-[#00D4C8] hover:underline flex items-center gap-2 font-medium">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-medium text-lg leading-tight mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-200"} 
                      />
                    ))}
                    <span className="text-sm text-zinc-500 ml-2">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button className="bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-3xl p-16 text-white flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-2 mb-8">
                <Clock size={20} />
                <span className="font-medium tracking-widest text-sm">DEALS END IN 48 HOURS</span>
              </div>
              
              <h2 className="text-5xl font-semibold tracking-tighter leading-none mb-6">
                Deals of the Week
              </h2>
              <p className="text-zinc-400 text-xl">
                Limited time offers on premium products. Save up to 40%.
              </p>
            </div>

            <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white/10 rounded-3xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-sm tracking-widest mb-6">OFF</div>
                <div className="h-px bg-white/20 mb-6" />
                <p className="font-medium">On Selected Headphones</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;