import create from 'zustand';
import { User } from '../types/generated.types';

type UserStore = {
  user: Partial<User> | null;
  setUser: (newUser: Partial<User> | null) => void;
};

export const useUser = create<UserStore>((set) => ({
  user: null,

  setUser: (newUser) =>
    set((state) => ({
      ...state,
      user: newUser,
    })),
}));
