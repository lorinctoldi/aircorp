import {
  Layout,
  Banner,
  Showcase,
  TextHero,
  Spacer,
  Video,
  Partners,
  Trigallery,
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
  trigalleryProps,
} from 'data/pages/defense';

function Home() {
  return (
    <Layout>
      <section className="bg-darker-gray">
        <Banner {...bannerProps} />
        <TextHero {...textHeroProps1} />
        <TextHero {...textHeroProps2} />
        <Spacer {...spacerProps1} />
        <Showcase {...showcaseProps} />
        <Spacer {...spacerProps2} />
        <Video {...videoProps} />
        <Partners {...partnersProps1} />
        <Partners {...partnersProps2} />
        <Trigallery {...trigalleryProps} />
      </section>
    </Layout>
  );
}

export default Home;
