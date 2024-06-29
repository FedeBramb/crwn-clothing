import { createContext, useEffect, useState } from 'react';

// Controlla che l'articolo da aggiungere al carello ci sia o meno
// nel carrello, se già presente aumenta la quantità altrimenti lo aggiunge 
// con quantità 1. Restituisce un array dove ogni oggetto ha il nome prodotto
// e quantità.
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
    }
    
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

// Rimuove l'articolo dal carrello.
const clearItemCart = (cartItems, productToDeleteId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== productToDeleteId);
    return updatedCartItems;
}

// Decrementa la quantità
const decreaseQuantity = (cartItems, productId) => {
    const updatedCartItems = cartItems.map((cartItem) => 
        cartItem.id === productId
        ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0 }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0);

    return updatedCartItems;
};



// Crea context con boolean se il dropdown è visibile e il suo setter.
// Array che rappresenta il carrello con i suoi articoli
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    clearItem: () => {},
    removeItem: () => {},
    total: 0,
    setTotal: () => {},
});


// Provider carrello con stessi States di Context.
// Metodo per aggiungere aricolo a carrello con callBack addCartItem.
// inizializziamo la Value da passare ai compenenti figli con boolean e setter.
export const CartOpenProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    // Ogni volta che cartItems cambia aggiorniamo la quantità
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0); // 0 è il valore iniziale per la somma
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const totalPrice = cartItems.reduce((acc, { quantity, price }) => {
            return acc + (quantity * price);
        }, 0)
        setTotal(totalPrice);        
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItem = (productId) => {
        setCartItems(decreaseQuantity(cartItems, productId));
    }

    const clearItem = (productToDelete) => {
        setCartItems(clearItemCart(cartItems, productToDelete));
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        clearItem, 
        removeItem,
        total
    };

    return ( 
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}