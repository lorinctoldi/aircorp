import {
  BannerProps,
  CarousalProps,
  HeroProps,
  ShowcaseProps,
  TableProps,
  TextHeroProps,
} from 'types';

export const defenseBannerProps: BannerProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_640/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_640,q_80/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.webp',
  title: 'Transforming Government & Defense With Advanced Fueling Technology',
};

export const defenseTextHeroProps1: TextHeroProps = {
  split: false,
  text: [
    'AIRCO has partnered with the U.S. Department of Defense to accelerate the integration of resilient, low-impact fuel solutions into military operations.',
  ],
  title: null,
  full: true,
  center: false,
  darkMode: true,
};
export const defenseTextHeroProps2: TextHeroProps = {
  split: false,
  text: [
    'As one of the first companies to prove that its CO₂-derived synthetic fuels can power vehicles across air, land, and sea, AIRCO has demonstrated the power, versatility, and real-world potential of its cutting-edge AIRMADE™ Technology.',
  ],
  title: null,
  full: true,
  center: false,
  darkMode: true,
};

const tableProps: TableProps = {
  items: [
    {
      key: 'Air',
      value:
        'In partnership with the Air Force’s Project FIERCE, AIRCO achieved the first-ever unmanned flight powered by 100% synthetic jet fuel derived from CO₂. This noteworthy flight, utilizing AIRMADE',
    },
    { key: 'DEMO', value: 'Project Fierce' },
    { key: 'FUEL TYPE', value: 'AIRMADE® SAF' },
    { key: 'DATE', value: '07/2022' },
    { key: 'VEHICLE', value: 'Remote Aerial Drone' },
    { key: 'ENGINE', value: 'Turbine' },
    { key: 'LOCATION', value: 'Laurel Hill, FL' },
  ],
  darkMode: true,
};

const carousalProps: CarousalProps = {
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
  darkMode: true,
};

export const showcaseProps: ShowcaseProps = {
  tableItems: tableProps,
  carousalItems: carousalProps,
  darkmode: true,
};
