import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

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
      state.count = 0;
      state.total = 0;
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

        //Adding offer expiry date
        let min = 600;
        const loadedCart = action.payload.map((product) => {
          product.date = sub(new Date(), { minutes: min-- }).toISOString();

          return product;
        });

        //Concatenating fetched products to the array
        state.product = state.cartItems.concat(loadedCart);
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectItemById = (state, id) =>
  state.cart.cartItems.find((item) => item.id === id);

export const { clearCart, addToCart, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
