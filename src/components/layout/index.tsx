import { ReactNode } from 'react';

import Footer from '../footer';
import Header from '../header';

interface Props {
  children: ReactNode;
  nav: ReactNode;
}

const Layout = ({ children, nav }: Props) => {
  return (
    <div>
      <Header>{nav}</Header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
