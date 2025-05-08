import {
  Layout,
  Banner,
  Showcase,
  TextHero,
  Spacer,
  Video,
  Partners,
} from 'components';
import {
  bannerProps,
  showcaseProps,
  textHeroProps1,
  textHeroProps2,
  spacerProps1,
  spacerProps2,
  videoProps,
  partnersProps1,
  partnersProps2,
} from 'data/pages/defense';

function Home() {
  return (
    <Layout>
      <section className="bg-darker-gray">
        <Banner {...bannerProps} />
        <Partners {...partnersProps1} />
        <Partners {...partnersProps2} />
        <TextHero {...textHeroProps1} />
        <TextHero {...textHeroProps2} />
        <Spacer {...spacerProps1} />
        <Showcase {...showcaseProps} />
        <Spacer {...spacerProps2} />
        <Video {...videoProps} />
      </section>
    </Layout>
  );
}

export default Home;
