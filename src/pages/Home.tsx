import { Layout, Banner, Hero, TextHero } from 'components';
import {
  bannerProps,
  heroProps,
  heroProps2,
  textHeroDefaultProps,
  textHeroSplitProps,
} from 'data/pages/home';

function Home() {
  return (
    <Layout>
      <Banner {...bannerProps} />
      <Hero {...heroProps} />
      <Hero {...heroProps2} />
      <TextHero {...textHeroDefaultProps} />
      <TextHero {...textHeroSplitProps} />
    </Layout>
  );
}

export default Home;
