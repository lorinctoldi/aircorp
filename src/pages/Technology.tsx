import { Layout, Banner, TextHero, Spacer, Video } from 'components';
import {
  bannerProps,
  textHeroProps,
  spacerProps,
  videoProps,
} from 'data/pages/technology';

export default function Technology() {
  return (
    <Layout>
      <Banner {...bannerProps} />
      <TextHero {...textHeroProps} />
      <Spacer {...spacerProps} />
      <Video {...videoProps} />
    </Layout>
  );
}
