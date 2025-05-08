import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/svg/logo.svg';

import { FooterProps } from 'types';

export default function Footer({ nav, socials, labels }: FooterProps) {
  const [email, setEmail] = useState('');

  return (
    <footer className="flex flex-col w-full px-8 pt-16 pb-4 leading-normal bg-white gap-y-8 md:col-span-2 md:grid md:grid-cols-3 md:gap-y-0 lg:px-16 md:pb-4">
      <nav className="flex flex-col col-span-2 gap-y-8 md:grid md:grid-cols-3 md:gap-8">
        {nav.length &&
          nav.map((items, index) => {
            return (
              <div key={index} className="flex flex-col gap-0 flex-start">
                {items.map((item, subIndex) => {
                  return (
                    <Link
                      key={subIndex}
                      to=""
                      className="inline-block py-1 text-base transition-all duration-300 hover:text-light-gray"
                    >
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
      </nav>
      <nav className="flex flex-col w-full gap-y-16 md:grid md:grid-cols-2 md:gap-y-0">
        <div className="flex flex-col flex-start">
          <div className="inline-block py-1 pb-2 mb-2 text-sm capitalize border-b cursor-auto border-light-gray text-light-gray opacity-60 md:mb-4 md:border-none md:pb-0 md:text-lg">
            <span>{labels.connect}</span>
          </div>
          {socials.length &&
            socials.map((item, index) => {
              return (
                <Link
                  key={index}
                  to=""
                  className="inline-block py-1 text-lg capitalize transition-allduration-300hover:text-light-gray"
                >
                  <span>{item.title}</span>
                </Link>
              );
            })}
        </div>
        <div className="flex flex-col flex-start">
          <div className="py-1 mb-4 text-sm capitalize cursor-auto nline-block text-light-gray opacity-60 md:text-lg">
            <span>{labels.newsletter}</span>
          </div>
          <input
            className="w-full px-8 py-3 mb-2 text-sm transition-all duration-300 ease-out outline-none text-dark-grey rounded-3xl bg-light-gray bg-opacity-10 placeholder:text-sm placeholder:text-dark-gray focus:outline focus:outline-2 focus:outline-black"
            placeholder={labels.placeholder}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full px-8 py-3 text-sm text-left text-white rounded-3xl bg-dark-gray"
            style={{ cursor: email ? 'pointer' : 'not-allowed' }}
            disabled={!email}
          >
            {labels.signup}
          </button>
        </div>
      </nav>
      <div className="col-[1/span_3] mt-24 flex w-full justify-between md:mt-40">
        <div className="md:flex-[1]" />
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="block w-auto h-3 md:h-5" />
        </div>
        <div className="flex flex-[1] justify-end">
          <Link
            to=""
            className="inline-block py-1 text-sm capitalize transition-all duration-300 hover:text-light-gray"
          >
            <span>© AIRCORP INC, 2025</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
