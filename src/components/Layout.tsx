import { ReactNode } from 'react';
import { navbarProps, footerProps } from 'data';

import { Navbar, Footer } from 'components';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar {...navbarProps} />
      <main className="h-[300vh] w-full bg-red-500 text-dark-gray 2xl:flex 2xl:justify-center">
        {children}
        <Footer {...footerProps} />
      </main>
    </>
  );
}

export default Layout;
