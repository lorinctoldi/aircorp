import { Table, Carousal } from 'components/showcase/';
import { ShowcaseProps } from 'types';

export default function Showcase({
  tableItems,
  carousalItems,
  darkmode,
}: ShowcaseProps) {
  return (
    <section className={` ${darkmode ? 'bg-darker-gray' : 'bg-white'}`}>
      <Table {...tableItems} />
      <Carousal {...carousalItems} />
    </section>
  );
}
