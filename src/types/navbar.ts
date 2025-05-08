export type NavItem = {
  title: string;
  link: string;
  submenu?: NavItem[];
};

export type NavbarProps = {
  navItems: NavItem[];
};
