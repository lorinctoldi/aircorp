type MediaType = 'image' | 'video';

export type MediaItem = {
  type: MediaType;
  source: string;
  poster?: string;
};

export type CarousalProps = {
  items: MediaItem[];
  darkMode: boolean;
};
