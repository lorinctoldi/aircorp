export type TrigalleryItem = {
  alt: string;
  source: string;
  title: string;
  link: string;
};

export type TrigalleryProps = {
  items: TrigalleryItem[];
  darkMode: boolean;
};
