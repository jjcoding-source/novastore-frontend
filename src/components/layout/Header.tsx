import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <span className="font-bold text-3xl tracking-tight text-gray-900">NovaStore</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="#" className="hover:text-primary transition-colors">Categories</Link>
            <Link to="#" className="hover:text-primary transition-colors">Deals</Link>
            <Link to="#" className="hover:text-primary transition-colors">Blog</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-80">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary text-sm"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>

            <button className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
              <Heart size={22} />
            </button>

            <Link to="/cart" className="relative p-3 hover:bg-gray-100 rounded-2xl transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                3
              </span>
            </Link>

            <Link to="/login" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-2xl transition-colors">
              <User size={22} />
              <span className="hidden md:block text-sm font-medium">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;