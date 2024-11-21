// Import Product type if it's defined in a separate file
import { Product } from './type';

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';

// Define RootState with the imported Product type
export interface RootState {
  products: Product[];
}

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
