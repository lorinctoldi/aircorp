import {
  Layout,
  Banner,
  Hero,
  Showcase,
  TextHero,
  Spacer,
  Video,
} from 'components';
import {
  bannerProps,
  showcaseProps,
  textHeroProps1,
  textHeroProps2,
  spacerProps1,
  spacerProps2,
  videoProps,
} from 'data/pages/defense';

function Home() {
  return (
    <Layout>
      <section className=" bg-darker-gray">
        <Banner {...bannerProps} />
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
