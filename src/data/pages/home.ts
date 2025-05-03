import { BannerProps, HeroProps, TextHeroProps } from 'types';

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

export const textHeroSplitProps: TextHeroProps = {
  split: true,
  title: 'The Future of Clean Energy',
  text: [
    'Founded in 2017 by Gregory Constantine and Dr. Stafford Sheehan, the AIRCO team has a core foundation in energy, tech, and defense. Our dynamic team of industry veterans brings deep expertise across all business areas. From R&D and engineering to operations, logistics, and policy, we leverage years of experience to develop scalable fuel innovation solutions.',
    'AIRMADE™ fuels are built for a net-zero future.',
  ],
};

export const textHeroDefaultProps: TextHeroProps = {
  split: false,
  title: 'Sustainable Innovation',
  text: [
    'From CO₂ to high-value products. From CO₂ to high-value products.We turn emissions into solutions.',
    'We turn emissions into solutions.',
  ],
};
