
import { useState } from 'react';
import { Star, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import type { Product } from '../types';

const allProducts: Product[] = [
  { id: 1, name: "Echo Wireless Headphones", price: 4999, rating: 4.9, image: "https://picsum.photos/id/20/400/400", category: "Electronics" },
  { id: 2, name: "Urban Sneakers", price: 2299, rating: 4.8, image: "https://picsum.photos/id/21/400/400", category: "Fashion" },
  { id: 3, name: "Smart Fitness Watch", price: 7499, rating: 4.7, image: "https://picsum.photos/id/60/400/400", category: "Electronics" },
  { id: 4, name: "Minimal Desk Lamp", price: 1299, rating: 4.6, image: "https://picsum.photos/id/106/400/400", category: "Home & Living" },
  { id: 5, name: "Denim Jacket", price: 3499, rating: 4.5, image: "https://picsum.photos/id/64/400/400", category: "Fashion" },
  { id: 6, name: "Wireless Earbuds", price: 2799, rating: 4.8, image: "https://picsum.photos/id/201/400/400", category: "Electronics" },
  { id: 7, name: "Ceramic Mug Set", price: 899, rating: 4.4, image: "https://picsum.photos/id/133/400/400", category: "Home & Living" },
  { id: 8, name: "Leather Backpack", price: 4199, rating: 4.7, image: "https://picsum.photos/id/180/400/400", category: "Fashion" },
];

const Shop = () => {
  const [products] = useState<Product[]>(allProducts);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([500, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-low' | 'price-high' | 'newest'>('popularity');

  const categoriesList = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Accessories"];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = products
    .filter(product => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(product.category || '');
      return matchesPrice && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id - a.id;
      return 0; 
    });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Shop</h1>
          <p className="text-zinc-600 mt-1">Showing {filteredProducts.length} results</p>
        </div>

        <div className="flex items-center gap-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-zinc-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#00D4C8]"
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>

          <div className="flex border border-zinc-200 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-3 ${viewMode === 'grid' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100'}`}
            >
              <Grid3X3 size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-3 ${viewMode === 'list' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Sidebar Filters */}
        <div className="w-72 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <SlidersHorizontal size={20} />
                Filters
              </h3>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([500, 50000]);
                }}
                className="text-sm text-zinc-500 hover:text-zinc-900"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-10">
              <h4 className="font-medium mb-4">Price Range</h4>
              <div className="px-2">
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#00D4C8]"
                />
                <div className="flex justify-between text-sm text-zinc-500 mt-2">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-10">
              <h4 className="font-medium mb-4">Categories</h4>
              <div className="space-y-3">
                {categoriesList.map((category) => (
                  <label key={category} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-5 h-5 accent-[#00D4C8] rounded border-zinc-300"
                    />
                    <span className="text-zinc-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h4 className="font-medium mb-4">Rating</h4>
              <div className="space-y-3">
                {[4, 3, 2].map((minRating) => (
                  <div key={minRating} className="flex items-center gap-2 text-sm">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < minRating ? "fill-amber-400 text-amber-400" : "text-zinc-200"} 
                        />
                      ))}
                    </div>
                    <span className="text-zinc-500">&amp; above</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-zinc-100 rounded-3xl overflow-hidden group hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg leading-tight mb-3 line-clamp-2">{product.name}</h3>
                    
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
                      <span className="text-2xl font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
                      <button className="bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
             
              <p className="text-center text-zinc-500 py-20">List view coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;