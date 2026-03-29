const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white mb-6">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <span className="font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-2xl">NovaStore</span>
          </div>
          <p className="text-sm">Premium products that inspire.</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">All Products</a></li>
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Deals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border border-gray-700 rounded-l-2xl px-4 py-3 text-sm flex-1 focus:outline-none"
            />
            <button className="bg-primary text-white px-6 rounded-r-2xl font-medium hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
        © 2026 NovaStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;