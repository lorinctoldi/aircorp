import { Layout, Info } from 'components';
import { infoProps } from 'data/pages/terms';

export default function Terms() {
  return (
    <Layout>
      <Info {...infoProps} />
    </Layout>
  );
}
