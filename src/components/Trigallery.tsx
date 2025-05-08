import { TrigalleryProps } from '@/types';
import { Link } from 'react-router-dom';

export default function Trigallery({ items, darkMode }: TrigalleryProps) {
  return (
    <section className="w-full px-6 md:px-4 lg:px-14">
      <div className="pb-48 mt-20">
        <div className="flex flex-col gap-8 md:flex-row">
          {items &&
            items.map((item, index) => {
              return (
                <div className="md:w-[calc(33.33%-1rem)]" key={index}>
                  <div className="relative w-full">
                    <img
                      src={item.source}
                      alt={item.alt}
                      className="object-cover w-full h-full aspect-[0.797753/1]"
                    />
                  </div>
                  <div className="w-full mt-[1rem] md:mt-[1.8rem]">
                    <Link to={item.link}>
                      <p
                        className={`max-w-full text-[18px] ${darkMode ? 'text-white' : 'text-darker-gray'}`}
                      >
                        {item.title}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
