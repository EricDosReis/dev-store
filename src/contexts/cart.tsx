'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: CartItem['productId']) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: CartItem['productId']) {
    setCartItems((state) => {
      const isProductInCart = state.some((cartItem) => cartItem.productId === productId);

      if (isProductInCart) {
        return state.map((cartItem) => {
          if (cartItem.productId === productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          }

          return cartItem;
        })
      }

      return [
        ...state, { productId, quantity: 1 },
      ];
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);