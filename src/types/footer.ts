export type FooterItem = {
  title: string;
};

export type FooterProps = {
  nav: FooterItem[][];
  socials: FooterItem[];
  labels: {
    connect: string;
    newsletter: string;
    signup: string;
    placeholder: string;
  };
};
