import { Layout, Banner, Hero, Carousal } from 'components';
import {
  bannerProps,
  carousalProps,
  heroProps,
  heroProps2,
  heroProps3,
} from 'data/pages/home';

function Home() {
  return (
    <Layout>
      <Banner {...bannerProps} />
      <Carousal {...carousalProps} />
      <Hero {...heroProps} />
      <Hero {...heroProps2} />
      <Hero {...heroProps3} />
    </Layout>
  );
}

export default Home;
