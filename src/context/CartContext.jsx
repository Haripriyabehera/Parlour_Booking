import { createContext, useState, useContext } from "react";

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (service) => {
       setCart((prevCart) => {
        const existingSevice = prevCart.find((item) => item.id === service.id)
        if(existingSevice) {
            return prevCart.map((item) => 
                item.id === service.id ? {...item, quantity: item.quantity +1 } : item
            )
           }
           return [...prevCart, {...service, quantity: 1}]
       })
    }

    const removeFromCart = (serviceId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== serviceId))
    }

    const increaseQuantity = (id) => {
        setCart((prevCart) => {
          const itemExists = prevCart.find((item) => item.id === id);
          if (itemExists) {
            return prevCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { id, quantity: 1 }];
          }
        });
      };
      
      const decreaseQuantity = (id) => {
        setCart((prevCart) => {
          return prevCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0); 
        });
      };
      
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}