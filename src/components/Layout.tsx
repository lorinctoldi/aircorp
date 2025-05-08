import { ReactNode } from 'react';
import { navbarProps, footerProps } from 'data';

import { Navbar, Footer } from 'components';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar {...navbarProps} />
      <main className="w-full text-dark-gray">
        {children}
        <Footer {...footerProps} />
      </main>
    </>
  );
}
