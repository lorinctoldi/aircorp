import { TextHeroProps } from 'types';

export default function TextHero(props: TextHeroProps) {
  return (
    <section
      className={`w-full px-6 mt-24 mb-5 md:px-16 ${props.split ? 'md:grid md:grid-cols-2 flex flex-col gap-y-[4rem]' : ''}`}
    >
      <div className={`${props.split ? 'w-full' : 'md:w-8/10'}`}>
        <p
          className={`inline-block mb-5 text-2xl md:mb-3 ${props.split ? 'font-medium text-2xl md:text-6xl' : 'font-normal md:text-3xl'}`}
        >
          {props?.title}
        </p>
      </div>
      <div className={`${props.split ? 'w-full' : 'md:w-8/10'}`}>
        {props?.text?.map((item, index) => {
          return (
            <p
              key={index}
              className={`inline-block mb-4 font-sans leading-none ${props.split ? 'text-lg md:text-2xl font-medium' : 'text-2xl md:text-5xl'}`}
            >
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
}
