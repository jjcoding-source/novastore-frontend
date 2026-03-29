
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Plus, Minus, ArrowLeft } from 'lucide-react';
import type { Product } from '../types';

const product: Product & {
  description: string;
  specs: string[];
  reviews: Array<{
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  images: string[];
  colors: string[];
} = {
  id: 1,
  name: "Echo Wireless Headphones",
  price: 4999,
  rating: 4.9,
  image: "https://picsum.photos/id/20/600/600",
  description: "Premium noise-cancelling wireless headphones with 40-hour battery life, exceptional sound clarity, and comfortable over-ear design. Perfect for music lovers and professionals.",
  specs: [
    "Active Noise Cancellation",
    "40 Hours Battery Life",
    "Bluetooth 5.2",
    "Built-in Microphone",
    "Touch Controls",
    "Foldable Design"
  ],
  reviews: [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Sound quality is outstanding. Battery lasts forever. Very comfortable for long use.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Priya Menon",
      rating: 4,
      comment: "Excellent build quality. Noise cancellation works really well in crowded places.",
      date: "1 week ago"
    }
  ],
  images: [
    "https://picsum.photos/id/20/600/600",
    "https://picsum.photos/id/21/600/600",
    "https://picsum.photos/id/22/600/600",
    "https://picsum.photos/id/23/600/600"
  ],
  colors: ["Black", "White", "Blue"]
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const relatedProducts: Product[] = [
    { id: 2, name: "Urban Sneakers", price: 2299, rating: 4.8, image: "https://picsum.photos/id/21/400/400" },
    { id: 3, name: "Smart Fitness Watch", price: 7499, rating: 4.7, image: "https://picsum.photos/id/60/400/400" },
    { id: 6, name: "Wireless Earbuds", price: 2799, rating: 4.8, image: "https://picsum.photos/id/201/400/400" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link to="/" className="hover:text-zinc-900">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-zinc-900">Shop</Link>
        <span>/</span>
        <span className="text-zinc-900">Electronics</span>
        <span>/</span>
        <span className="text-zinc-900">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-[#00D4C8]' : 'border-transparent hover:border-zinc-300'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={22} 
                      className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-200"} 
                    />
                  ))}
                </div>
                <span className="text-zinc-600">{product.rating} • 238 reviews</span>
              </div>
            </div>
            <button className="p-3 hover:bg-zinc-100 rounded-2xl transition-colors">
              <Heart size={26} />
            </button>
          </div>

          <div className="text-4xl font-semibold mb-8">₹{product.price.toLocaleString('en-IN')}</div>

          <div className="mb-8">
            <p className="text-emerald-600 font-medium flex items-center gap-2">
              ✓ In Stock • Ships in 2-3 days
            </p>
          </div>

          {/* Color Options */}
          <div className="mb-8">
            <p className="font-medium mb-3">Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-6 py-3 rounded-2xl border text-sm font-medium transition-all ${
                    selectedColor === color 
                      ? 'border-[#00D4C8] bg-[#00D4C8]/5 text-[#00D4C8]' 
                      : 'border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="font-medium mb-3">Quantity</p>
            <div className="flex items-center border border-zinc-200 rounded-2xl w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-zinc-100 rounded-l-2xl transition-colors"
              >
                <Minus size={20} />
              </button>
              <div className="px-8 font-medium text-lg">{quantity}</div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-zinc-100 rounded-r-2xl transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex-1 bg-[#00D4C8] hover:bg-[#00B3A8] text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors">
              <ShoppingCart size={24} />
              Add to Cart
            </button>
            <button className="flex-1 border border-zinc-900 py-5 rounded-2xl font-semibold text-lg hover:bg-zinc-900 hover:text-white transition-colors">
              Buy Now
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-zinc-200 mb-6">
            <div className="flex gap-8">
              {(['description', 'specs', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium capitalize border-b-2 transition-all ${
                    activeTab === tab 
                      ? 'border-[#00D4C8] text-[#00D4C8]' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            {activeTab === 'description' && (
              <p className="text-zinc-700 leading-relaxed text-lg">{product.description}</p>
            )}

            {activeTab === 'specs' && (
              <ul className="space-y-4">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00D4C8] rounded-full mt-2" />
                    <span className="text-zinc-700">{spec}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-zinc-100 pb-8 last:border-none last:pb-0">
                    <div className="flex justify-between mb-3">
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-zinc-500">{review.date}</p>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold mb-10">Customers also bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <Link 
              key={p.id} 
              to={`/product/${p.id}`}
              className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-square">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-2">{p.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">₹{p.price}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;