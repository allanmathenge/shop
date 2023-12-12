import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cartItems: [],
  count: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.count = 0;
      state.amount = 0;
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((p) => p.id === product.id);
      if (!item) {
        state.cartItems.push({
          ...product,
          count: 1,
        });
      } else {
        item.quantity++;
      }
      state.count++;
      state.total += item.price;
    },

    removeItem: (state, action) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== product);
      const countRemovedProducts = product.quantity;
      state.count -= countRemovedProducts;
      state.total -= countRemovedProducts * product.price;
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.rating.count = cartItem.rating.count + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.rating.count = cartItem.rating.count - 1;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, addToCart, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
