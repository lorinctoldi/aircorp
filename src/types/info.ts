type InfoItem = {
  text: string;
  link: string | null;
};

export type InfoProps = {
  title: string | null;
  items: InfoItem[];
};
