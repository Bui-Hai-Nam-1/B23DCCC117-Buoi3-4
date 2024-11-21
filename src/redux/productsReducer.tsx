import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
}

const loadProductsFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

const saveProductsToLocalStorage = (products: Product[]): void => {
  localStorage.setItem("products", JSON.stringify(products));
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProductsFromLocalStorage(), // Khởi tạo từ localStorage
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const updatedState = [...state, action.payload];
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    updateProduct: (
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>
    ) => {
      const { id, name, price } = action.payload;
      const updatedState = state.map((product) =>
        product.id === id ? { ...product, name, price } : product
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
