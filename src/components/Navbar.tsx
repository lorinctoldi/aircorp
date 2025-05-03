import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/svg/logo.svg';

import { NavItem, NavbarProps } from 'types';
import { Submenu, NavbarIcon } from 'components/navbar/';

import { useScroll, useLockBodyScroll } from 'hooks';

export default function Navbar({ navItems }: NavbarProps) {
  const [items] = useState<NavItem[]>(navItems);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScrollingUp = useScroll();

  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleSubmenu = (index: number) =>
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

  useLockBodyScroll(isOpen);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full font-sans transition-transform duration-300 bg-white"
      style={{ transform: `translateY(${isScrollingUp ? '0%' : '-100%'})` }}
    >
      <div className="relative flex items-center justify-center w-full px-6 py-6 md:px-8 md:py-8 lg:justify-normal lg:px-16 lg:py-5">
        <div
          className="absolute top-0 left-0 px-6 py-5 md:px-8 md:py-7 lg:hidden"
          onClick={() => toggleOpen()}
        >
          <NavbarIcon isOpen={isOpen} />
        </div>
        <nav className="hidden w-4/10 gap-7 lg:flex">
          {items &&
            navItems.map((item, index) => {
              return (
                <div key={index} className="group">
                  <Link
                    to=""
                    className="inline-block text-sm underline transition-all duration-300 group decoration-transparent hover:text-light-gray hover:decoration-light-gray"
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <nav className="absolute left-0 top-full max-h-0 w-full overflow-hidden bg-white transition-all delay-200 duration-700 ease-[cubic-bezier(.6,.01,.37,.98)] group-hover:max-h-screen">
                      <div className="flex flex-col w-full px-16 pt-5 pb-24">
                        {item.submenu.map((subItem, subIndex) => {
                          return (
                            <div key={subIndex} className="w-4/10">
                              <Link
                                to=""
                                className="text-3xl transition-colors duration-300 text-light-gray hover:text-dark-gray"
                              >
                                {subItem.title}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </nav>
                  )}
                </div>
              );
            })}
        </nav>
        <div className="flex justify-center lg:w-2/10">
          <Link to="/" className="inline-block h-3 lg:h-4">
            <img src={logo} alt="Logo" className="block h-full" />
          </Link>
        </div>
      </div>

      <nav
        className={`h-screen w-full overflow-hidden bg-white transition-all delay-200 duration-700 ease-[cubic-bezier(.6,.01,.37,.98)] lg:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-4 md:px-8">
          {navItems &&
            navItems.map((item, index) => {
              return (
                <div
                  className="relative border-t border-light-gray"
                  key={index}
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  <Link
                    to=""
                    className="inline-block py-1 text-2xl transition-all duration-300"
                  >
                    <span>{item.title}</span>
                  </Link>
                  {item.submenu && (
                    <Submenu
                      items={item.submenu}
                      isOpen={openSubmenus[index]}
                    />
                  )}
                </div>
              );
            })}
          <span className="border-b border-light-gray" />
        </div>
      </nav>
    </header>
  );
}
