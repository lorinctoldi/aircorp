import {
  Layout,
  Banner,
  TextHero,
  Spacer,
  Video,
  ActionBar,
  Partners,
} from 'components';
import {
  bannerProps,
  textHeroProps,
  actionBarProps,
  spacerProps,
  videoProps,
  partnersProps,
} from 'data/pages/technology';

export default function Technology() {
  return (
    <Layout>
      <Banner {...bannerProps} />
      <TextHero {...textHeroProps} />
      <ActionBar {...actionBarProps} />
      <Spacer {...spacerProps} />
      <Video {...videoProps} />
      <Partners {...partnersProps} />
    </Layout>
  );
}
