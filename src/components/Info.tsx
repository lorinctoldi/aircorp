import { InfoProps } from '@/types';
import { Link } from 'react-router-dom';

export default function Info({ title, items }: InfoProps) {
  return (
    <section className="w-full px-6 pt-8 mt-16 mb-5 md:px-16">
      <div className="border-t border-light-gray flex justify-between flex-col gap-y-[4rem] md:flex-row gap-x-8 pt-4">
        {title && (
          <div className="w-full md:mt-16 md:w-[25%]">
            <p className="inline-block mb-5 text-[45px] font-medium lg:mb-6 md:mb-3 md:text-7xl">
              {title}
            </p>
          </div>
        )}
        <div className="w-full md:w-[58%]">
          {items?.map((item, index) => {
            return item.link ? (
              <Link
                key={index}
                to={item.link}
                className="inline-block w-full font-sans text-lg font-medium leading-tight underline transition-all duration-300 decoration-black underline-offset-2 hover:decoration-transparent md:text-2xl"
              >
                {item.text}
              </Link>
            ) : (
              <p
                key={index}
                className={`inline-block w-full font-sans text-lg font-medium leading-none whitespace-pre-line md:text-2xl ${items[index + 1].link ? 'mb-0' : 'mb-4 lg:mb-6'}`}
              >
                {item.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
