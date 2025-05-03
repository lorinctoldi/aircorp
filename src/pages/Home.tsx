import { Layout, Banner, Hero } from 'components';
import { bannerProps, heroProps, heroProps2 } from 'data/pages/home';

function Home() {
  return (
    <Layout>
      <Banner {...bannerProps} />
      <Hero {...heroProps} />
      <Hero {...heroProps2} />
    </Layout>
  );
}

export default Home;
