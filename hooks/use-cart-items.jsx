import { create } from 'zustand';

const useCartItems = create((set) => ({
  items: JSON.parse(localStorage.getItem('cart')) || [],
  addItem: (item) =>
    set((state) =>
      localStorage.setItem('cart', JSON.stringify([...state.items, item]))
    ),
  removeItem: (id) =>
    set(
      (state) => (
        localStorage.setItem(
          'cart',
          JSON.stringify(state.items.filter((item) => item.id !== id))
        ),
        s
      )
    ),
  clearItems: () => set(() => localStorage.setItem('cart', [])),
}));

export default useCartItems;
