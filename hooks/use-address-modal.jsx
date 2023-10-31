import { create } from 'zustand';

const useAddressModal = create((set) => ({
  isOpen: false,
  initialData: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, initialData: null }),
  onOpenWithData: (data) => set({ isOpen: true, initialData: data }),
}));

export default useAddressModal;
