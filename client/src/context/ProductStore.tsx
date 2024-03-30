import { create } from "zustand";
import { Product } from "../utils/types";

interface productStore {
  products: Product[];
  fetchPoducts: () => Promise<void>;
}
const useProductStore = create<productStore>((set) => ({
  products: [],
  fetchPoducts: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      set({ products: data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductStore;
