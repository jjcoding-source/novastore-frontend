
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import Toast from '../components/ui/Toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  addToWishlist: (product: any) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('novastore-cart');
    const savedWishlist = localStorage.getItem('novastore-wishlist');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('novastore-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('novastore-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product: any, quantity = 1) => {
    setCart(prev => {
      const existing = prev.findIndex(item => item.id === product.id);
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing].quantity += quantity;
        return updated;
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
    showToast(`${product.name} added to cart`);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart');
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const addToWishlist = (product: any) => {
    if (wishlist.some(item => item.id === product.id)) {
      showToast('Already in wishlist', 'error');
      return;
    }
    
    setWishlist(prev => [...prev, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }]);
    showToast('Added to wishlist');
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
    showToast('Removed from wishlist');
  };

  const isInWishlist = (id: number) => wishlist.some(item => item.id === id);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearCart
    }}>
      {children}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};