import { Link } from 'react-router-dom';

import { ActionBarProps } from 'types';

export default function ActionBar({ title, linkTitle, link }: ActionBarProps) {
  return (
    <section className="w-full px-6 md:px-4 lg:px-14">
      <div className="relative w-full">
        <div className="flex flex-col justify-start gap-16 px-6 py-8 rounded-md md:px-8 md:py-16 md:gap-0 md:items-center md:justify-between md:flex-row lg:px-20 bg-dark-gray">
          <div className="text-balance lg:max-w-[500px]">
            <p className="text-[22px] leading-none text-white lg:text-3xl">
              {title}
            </p>
          </div>
          <div>
            <Link
              className="inline-flex items-center h-8 px-4 transition-all duration-300 group bg-light-gray rounded-2xl bg-opacity-60 hover:bg-opacity-20"
              to={link}
            >
              <span className="text-lg text-white">{linkTitle}</span>
              <svg
                width="9"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-8 transition-transform duration-300 group-hover:-translate-x-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.58594 0.806641L8.53568 5.98137L8.51939 5.9984L8.53967 6.01959L3.58992 11.1943L2.88281 10.4551L6.65795 6.50834L0 6.50834V5.46289L6.62553 5.46289L2.87883 1.54589L3.58594 0.806641Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
