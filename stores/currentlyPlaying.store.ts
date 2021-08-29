import create from 'zustand';

type CurrentlyPlayingStore = {
  id: string;
  url: string;
  setCurrentlyPlaying: (id: string, url: string) => void;
};

export const useCurrentlyPlaying = create<CurrentlyPlayingStore>((set) => ({
  id: ``,
  url: ``,

  setCurrentlyPlaying: (id: string, url: string) =>
    set((state) => ({
      ...state,
      id,
      url,
    })),
}));
