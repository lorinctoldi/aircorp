import { NavbarProps } from 'types';

export const navbarProps: NavbarProps = {
  navItems: [
    { title: 'Technology', link: '/technology' },
    { title: 'AIRMADE® SAF', link: '/' },
    { title: 'Defense', link: '/defense' },
    {
      title: 'Company',
      submenu: [
        { title: 'About', link: '/company' },
        { title: 'Careers', link: '/' },
        { title: 'Press', link: '/press' },
        { title: 'AIR.Index', link: '/' },
        { title: 'FUEL STORE', link: '/' },
      ],
      link: '/company',
    },
  ],
};
