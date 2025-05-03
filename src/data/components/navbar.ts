import { NavbarProps } from 'types';

export const navbarProps: NavbarProps = {
  navItems: [
    { title: 'technology' },
    { title: 'AIRMADE® SAF' },
    { title: 'defense' },
    {
      title: 'company',
      submenu: [
        { title: 'about' },
        { title: 'careers' },
        { title: 'press' },
        { title: 'AIR.Index' },
        { title: 'FUEL STORE' },
      ],
    },
  ],
};
