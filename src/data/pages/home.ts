import { BannerProps, CarousalProps, HeroProps, TextHeroProps } from 'types';

export const bannerProps: BannerProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_960/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_960,q_60/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.webp',
  title: 'Advancing the Future of Fuel',
  linkTitle: 'Technology for Government & Defense',
  link: '/technology',
};

export const heroProps: HeroProps = {
  type: 'image',
  source:
    'https://images.ctfassets.net/57fahiw4uj5z/4WJgmYzBixPmwbAIoCT4lz/19670af8aa60aefb94ca011909fed358/Homepage_Module_2x.png?fm=webp&w=1920&h=1920&q=75',
  title: 'AIRMADE™ Spirits',
  description:
    'The world’s first carbon-negative vodka made from captured CO₂.',
  link: '/',
  linkTitle: 'Learn More',
};

export const heroProps2: HeroProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_1440/v1738966999/Website/AIRCO-Website-Tech-Hero-Updated_ntdaer.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_640,q_80/v1738966999/Website/AIRCO-Website-Tech-Hero-Updated_ntdaer.webp',
  title: 'AIRMADE™ Technology',
  description: 'An Advanced Carbon Conversion Technology Platform',
  link: '/',
  linkTitle: 'Learn More',
};

export const heroProps3: HeroProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_640/v1738961567/Website/AIRCO-Website-SAF-Module_cbsfmj.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_640,q_80/v1738961567/Website/AIRCO-Website-SAF-Module_cbsfmj.webp',
  title: 'AIRMADE® SAF',
  description: 'Fully-Formulated Jet Fuel Made from CO2',
  link: '/',
  linkTitle: 'Learn More',
};

export const carousalProps: CarousalProps = {
  items: [
    {
      type: 'video',
      source:
        'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_1440/v1744698612/Website/DoD-Air-Module-Carousel-Frame-1_l6xoiy.mp4',
      poster:
        'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_640/v1744698612/Website/DoD-Air-Module-Carousel-Frame-1_l6xoiy.mp4',
    },
    {
      type: 'image',
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/N0cG9hdg33KXn0tDlLj14/882e73048b22fa69da379698ceb294d0/DoD-Air-Module-Carousel-Frame-2_2x.jpeg?fm=webp&w=1920&h=1920&q=75',
    },
    {
      type: 'image',
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/31iBw3CwMMcaxgVTroMSiF/fd0b11f4299f88f0bd738163b59bb37c/DoD-Air-Module-Carousel-Frame-3_2x.jpeg?fm=webp&w=1920&h=1920&q=75',
    },
    {
      type: 'image',
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/4KGDHnq5RZt54X9R0NGTkv/eded480bbc1d0a74593d98113233654d/DoD-Air-Module-Carousel-Frame-4_2x.jpeg?fm=webp&w=1920&h=1920&q=75',
    },
  ],
};
