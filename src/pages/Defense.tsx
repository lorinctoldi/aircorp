import { Layout, Banner, Hero, Showcase, TextHero } from 'components';
import {
  defenseBannerProps,
  showcaseProps,
  defenseTextHeroProps1,
  defenseTextHeroProps2,
} from 'data';

function Home() {
  return (
    <Layout>
      <div className="pt-24 md:px-12 lg:px-20 bg-darker-gray">
        <Banner {...defenseBannerProps} />
        <TextHero {...defenseTextHeroProps1} />
        <TextHero {...defenseTextHeroProps2} />
        <Showcase {...showcaseProps} />
      </div>
    </Layout>
  );
}

export default Home;
