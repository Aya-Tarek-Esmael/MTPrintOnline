import { createSlice } from "@reduxjs/toolkit";

// Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
};

// Function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: loadCartFromLocalStorage(),
        loading: true,
        err: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex === -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
                console.log("Item already exists in the cart");
                state.cart[cartItemIndex].quantity++;
            }
            saveCartToLocalStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            const cartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex !== -1) {
                if (state.cart[cartItemIndex].quantity > 1) {
                    state.cart[cartItemIndex].quantity--;
                } else {
                    state.cart.splice(cartItemIndex, 1);
                }
                saveCartToLocalStorage(state.cart);
            }
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
