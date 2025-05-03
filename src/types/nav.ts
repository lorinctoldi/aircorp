export type NavItem = {
  title: string;
  submenu?: NavItem[];
};

export type NavbarProps = {
  navItems: NavItem[];
};
