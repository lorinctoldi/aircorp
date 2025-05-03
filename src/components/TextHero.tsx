import { TextHeroProps } from 'types';

export default function TextHero({
  split,
  title,
  text,
  full,
  center,
  darkMode,
}: TextHeroProps) {
  return (
    <section
      className={`w-full px-6 pt-8 mb-5 md:px-16 ${split ? 'md:grid md:grid-cols-2 flex flex-col gap-y-[4rem]' : ''} ${darkMode ? 'text-white' : 'text-dark-gray'} ${center ? 'text-center' : 'text-left'}`}
    >
      {title && (
        <div className={`${split ? 'w-full' : full ? 'w-full' : 'md:w-8/10'}`}>
          <p
            className={`inline-block mb-5 text-2xl md:mb-3 ${split ? 'font-medium text-2xl md:text-6xl' : 'font-normal md:text-3xl'}`}
          >
            {title}
          </p>
        </div>
      )}
      <div className={`${split ? 'w-full' : full ? 'w-full' : 'md:w-8/10'}`}>
        {text?.map((item, index) => {
          return (
            <p
              key={index}
              className={`inline-block mb-4 font-sans leading-none ${split ? 'text-lg md:text-2xl font-medium' : 'text-2xl md:text-5xl'}`}
            >
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
}
