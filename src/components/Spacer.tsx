import { SpacerProps } from 'types';

export default function Spacer({ title, text, darkMode }: SpacerProps) {
  return (
    <section
      className={`w-full pt-20 px-8 lg:px-16 ${darkMode ? 'bg-darker-gray text-light-gray' : 'bg-white text-dark-gray'}`}
    >
      <div className="pt-4 pb-12 border-t md:flex md:pb-24 border-light-gray">
        {title && (
          <div
            className={`pb-12 text-[1.4rem] font-medium md:w-1/2 md:pb-0 leading-none ${darkMode ? 'md:text-3xl' : 'md:text-[2.6rem]'}`}
          >
            <div className="pr-12">{title}</div>
          </div>
        )}
        {text && (
          <div className="pr-2 text-base leading-none md:w-1/2 md:text-xl">
            {text}
          </div>
        )}
      </div>
    </section>
  );
}
