
import { ShoppingCart, Heart, User, Search, LogOut, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isLoggedIn] = useState(true); 
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#00D4C8] rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl tracking-tighter">N</span>
            </div>
            <span className="font-bold text-3xl tracking-tight text-gray-900">NovaStore</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link 
              to="/" 
              className={`hover:text-[#00D4C8] transition-colors ${isActive('/') ? 'text-[#00D4C8]' : 'text-zinc-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`hover:text-[#00D4C8] transition-colors ${isActive('/shop') ? 'text-[#00D4C8]' : 'text-zinc-700'}`}
            >
              Shop
            </Link>
            <Link to="#" className="hover:text-[#00D4C8] transition-colors">Categories</Link>
            <Link to="#" className="hover:text-[#00D4C8] transition-colors">Deals</Link>
            <Link to="#" className="hover:text-[#00D4C8] transition-colors">Blog</Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block w-80">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-zinc-100 border border-zinc-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#00D4C8] text-sm"
              />
              <Search className="absolute left-4 top-3.5 text-zinc-400" size={20} />
            </div>

            <Link to="#" className="p-3 hover:bg-zinc-100 rounded-2xl transition-colors">
              <Heart size={22} />
            </Link>

            <Link 
              to="/cart" 
              className="relative p-3 hover:bg-zinc-100 rounded-2xl transition-colors"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-[#00D4C8] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                3
              </span>
            </Link>

            {/* Account / User Menu */}
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 hover:bg-zinc-100 px-4 py-2 rounded-2xl transition-colors"
                >
                  <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    J
                  </div>
                  <span className="hidden md:block text-sm font-medium">Jebin</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-zinc-100 rounded-3xl shadow-xl py-3 z-50">
                    <Link 
                      to="/account" 
                      className="flex items-center gap-3 px-6 py-3 hover:bg-zinc-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User size={20} />
                      My Account
                    </Link>
                    <Link 
                      to="/account" 
                      className="flex items-center gap-3 px-6 py-3 hover:bg-zinc-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Package size={20} /> 
                      My Orders
                    </Link>
                    <div className="h-px bg-zinc-100 my-2 mx-4" />
                    <button 
                      className="flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50 w-full text-left"
                      onClick={() => {
                        setShowUserMenu(false);
                        
                      }}
                    >
                      <LogOut size={20} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center gap-2 hover:bg-zinc-100 px-5 py-2 rounded-2xl transition-colors"
              >
                <User size={22} />
                <span className="hidden md:block text-sm font-medium">Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;