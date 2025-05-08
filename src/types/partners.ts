export type PartnerItem = {
  alt: string;
  source: string;
};

export type PartnersProps = {
  title: string | null;
  subtitle: string;
  description: string;
  images: PartnerItem[];
  darkMode: boolean;
};
