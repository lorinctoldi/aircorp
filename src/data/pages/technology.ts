import {
  BannerProps,
  TextHeroProps,
  SpacerProps,
  VideoProps,
  ActionBarProps,
  PartnersProps,
} from 'types';

export const bannerProps: BannerProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_1440/v1738966999/Website/AIRCO-Website-Tech-Hero-Updated_ntdaer.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_1440,q_60/v1738966999/Website/AIRCO-Website-Tech-Hero-Updated_ntdaer.webp',
  title: 'AIRMADE™ Technology',
  linkTitle: '',
  link: '',
};

export const textHeroProps: TextHeroProps = {
  split: false,
  text: [
    'AIRCO’s proprietary AIRMADE™ Technology is an adaptable carbon conversion platform designed to enable industries to efficiently produce high-demand, fully-formulated synthetic fuels from carbon dioxide (CO₂) and hydrogen (H₂) where they are needed.',
    'Currently focused on fuel applications, AIRCO aims to deploy the most cost-effective and scalable fuel production technology available.',
  ],
  title: 'An Advanced Carbon Technology Platform',
  full: false,
  center: false,
  darkMode: false,
};

export const actionBarProps: ActionBarProps = {
  title: 'Learn how you can partner with AIRCO',
  linkTitle: 'Contact Us',
  link: '',
};

export const spacerProps: SpacerProps = {
  title: 'Streamlined Process',
  text: 'We design our proprietary catalysts and reactors in-house, merging unit operations into a single streamlined process. This approach significantly boosts efficiency and allows us to tailor and scale our products to meet each customer’s unique needs.',
  darkMode: false,
};

export const videoProps: VideoProps = {
  image:
    'https://images.ctfassets.net/57fahiw4uj5z/6HYHg7NRv35v8ccIAHVXuD/8ba1b3b4e8d2302641ab578cb5c9bcda/AIRCO-Website-Tech-Dolly_Cover_2x.jpeg?fm=webp&w=1920&h=1920&q=75',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_1440/v1726974474/Website/tech-dolly-module_vk7gf2.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_1440,q_60/v1726974474/Website/tech-dolly-module_vk7gf2.webp',
};

export const partnersProps: PartnersProps = {
  title: 'Government & Aviation Partners',
  subtitle: 'Aviation',
  description:
    'U.S. government support helps to drive R&D and future commercial opportunities',
  images: [
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/6tbawpgfVvvJi4RGusw546/efd5e1a53342bb86a8d5bb7da20d14e1/AirCanada.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/SEPelA0zYXJbWaAp3OFdb/9beff6acc2f0e71296154eb5e307393f/jetBlue.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/6En5UzWw5Y2LLXZNSqO0R8/2aa8099b180cbd5dd75138ef4f2a38ea/VirginAtlantic.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/pnxHGFkA67GbXPFfmCFpM/ae458dd3dc7f28caca3176dc32685293/AirFrance.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/3IVJsm8aTGqpihT5qxep38/442d775ab1b5517846c684a352556c04/AlaskaAirlines.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/440BC93FAuX1R7oUKsmN6s/717caa4e283781b063a53b68fc4a6385/AVFuel.png',
      alt: '',
    },
  ],
  darkMode: false,
};
