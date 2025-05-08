import {
  BannerProps,
  CarousalProps,
  ShowcaseProps,
  TableProps,
  TextHeroProps,
  SpacerProps,
  VideoProps,
  PartnersProps,
} from 'types';

export const bannerProps: BannerProps = {
  type: 'video',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_640/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_640,q_80/v1744717592/Website/DoD-Hero-Module-Final-Textless-Mobile_nnsops.webp',
  title: 'Transforming Government & Defense With Advanced Fueling Technology',
};

export const textHeroProps1: TextHeroProps = {
  split: false,
  text: [
    'AIRCO has partnered with the U.S. Department of Defense to accelerate the integration of resilient, low-impact fuel solutions into military operations.',
  ],
  title: null,
  full: true,
  center: false,
  darkMode: true,
};

export const textHeroProps2: TextHeroProps = {
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

export const spacerProps1: SpacerProps = {
  title: 'Operational Demonstartions',
  text: '',
  darkMode: true,
};

export const spacerProps2: SpacerProps = {
  title: '',
  text: 'Learn about the importance of our ongoing work with the Defense Innovation Unit (DIU) and the U.S. Department of Defense (DoD) to provide essential energy alternatives.',
  darkMode: true,
};

export const videoProps: VideoProps = {
  image:
    'https://images.ctfassets.net/57fahiw4uj5z/6WdYP9LUErNhWzlIm9XhK0/9e0d0cad0d3d51c6a37fca4a1fdf9ad6/CaseStudyImg.jpg?fm=webp&w=1920&h=1920&q=75',
  source:
    'https://res.cloudinary.com/air-company/video/upload/c_scale,q_auto,w_1280/v1744717891/Website/DoD-Case-Study-Module-Web_c0vxng.mp4',
  poster:
    'https://res.cloudinary.com/air-company/video/upload/so_0/w_1280,q_60/v1744717891/Website/DoD-Case-Study-Module-Web_c0vxng.webp',
};

export const partnersProps1: PartnersProps = {
  title: 'Government & Aviation Partners',
  subtitle: 'Government',
  description:
    'U.S. government partnerships accelerate our R&D while we bring cutting-edge capabilities to support the government’s key objectives',
  images: [
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/4Bb4qdih0YLp0e0MGlQelP/f3cd9d50edc977b6e459fd324ad32abe/DoD.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/47qhpXb1RSZh1CuoybQg8k/fcf99d4c1e3ee9a82cb26fc033457979/DoE.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/3frXKz3fgVR3SRMxvspWC8/9ea04acd7df0a4579556b87fa062fe5e/DIU.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/6bWVINngA0K9k0UhSuml1b/347ab76f308a51b368a749156b5299f0/NASA.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/4TdpdJRWLchybhtweCxtK2/61ec22184802a5d895d3fde6717f9b83/AirForce.png',
      alt: '',
    },
  ],
};

export const partnersProps2: PartnersProps = {
  title: null,
  subtitle: 'Aviation',
  description: 'AIRMADE® SAF customers and corporate funding backers',
  images: [
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/2CFV0H2WGztI1hvP74Cerv/982aa683e6c5abc0b7baa4fc31ac375b/AirCanada.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/5PbypWOYj9yQ9c4txJ8flW/987691c2e9c2d3c761584968e933eb70/jetBlue.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/7lHIm5wO5ZHjt9fdREWXW1/4d8b3f8d61db8e8cdb49e4de9f6be727/VirginAtlantic.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/4z6fLtmgwOvzK3wLAO1T6u/9facb0aa5f605a73fba91e5472fa3967/AirFrance.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/3awl6Radz7eXuROlzlMjYn/a21c8d0db30bdd18c0614a7b83d4c4bc/AlaskaAirlines.png',
      alt: '',
    },
    {
      source:
        'https://images.ctfassets.net/57fahiw4uj5z/4WiP4glI5y7Dtp0H81hTiE/5fe66f4d325aa891558701381d9f28d1/AVFuelCorp.png',
      alt: '',
    },
  ],
};
